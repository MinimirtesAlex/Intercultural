/* =====================================================================
   STUDY HUB · App Logic
   - Karteikarten (Spaced-Repetition-light, localStorage)
   - Probeklausur (45 Min Timer, 18-20 Random Q, Auto-Submit)
   - Themenübersicht
   ===================================================================== */

// ========== UTILITIES ==========
const $ = (sel, parent = document) => parent.querySelector(sel);
const $$ = (sel, parent = document) => Array.from(parent.querySelectorAll(sel));

const STORAGE_KEY_RATINGS = 'studyHub_cardRatings_v1';
const STORAGE_KEY_HISTORY = 'studyHub_examHistory_v1';

function loadJSON(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (e) { return fallback; }
}
function saveJSON(key, val) {
  try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function clamp(n, lo, hi) { return Math.max(lo, Math.min(hi, n)); }

// ========== MODE SWITCHER ==========
const modeButtons = $$('.mode-btn');
const panels = {
  cards:  $('#panel-cards'),
  exam:   $('#panel-exam'),
  topics: $('#panel-topics'),
};

modeButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const m = btn.dataset.mode;
    modeButtons.forEach(b => {
      b.classList.toggle('active', b === btn);
      b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
    });
    Object.entries(panels).forEach(([k, p]) => p.classList.toggle('active', k === m));
    if (m === 'topics') renderTopics();
  });
});

/* ===========================================================
   KARTEIKARTEN
   =========================================================== */
const cardRatings = loadJSON(STORAGE_KEY_RATINGS, {}); // index -> 'again'|'hard'|'good'
let activeCards = FLASHCARDS.slice();
let cardIdx = 0;
let isFlipped = false;

const elFlashcard = $('#flashcard');
const elCardTag = $('#cardTag');
const elCardTagBack = $('#cardTagBack');
const elCardQ = $('#cardQuestion');
const elCardA = $('#cardAnswer');
const elCurrent = $('#cardCurrent');
const elTotal = $('#cardTotal');
const topicFilter = $('#topicFilter');

const TOPIC_LABEL = {
  leadership: 'Leadership',
  culture:    'Culture · Global Leaders',
  diversity:  'Diverse Teams',
  power:      'Power & Influence',
  motivation: 'Motivation',
};

function setCardSet() {
  const filter = topicFilter.value;
  activeCards = filter === 'all' ? FLASHCARDS.slice() : FLASHCARDS.filter(c => c.topic === filter);
  cardIdx = 0;
  renderCard();
}

function renderCard() {
  elTotal.textContent = activeCards.length;
  if (activeCards.length === 0) {
    elCardQ.textContent = 'Keine Karten in dieser Kategorie.';
    elCardA.innerHTML = '';
    elCurrent.textContent = '0';
    return;
  }
  cardIdx = clamp(cardIdx, 0, activeCards.length - 1);
  const c = activeCards[cardIdx];
  elCurrent.textContent = (cardIdx + 1).toString();
  elCardTag.textContent = TOPIC_LABEL[c.topic] + ' · ' + c.tag;
  elCardTagBack.textContent = 'Antwort';
  elCardQ.innerHTML = c.q;
  elCardA.innerHTML = c.a;
  if (isFlipped) {
    isFlipped = false;
    elFlashcard.classList.remove('flipped');
  }
}

elFlashcard.addEventListener('click', () => {
  isFlipped = !isFlipped;
  elFlashcard.classList.toggle('flipped', isFlipped);
});

$('#prevCard').addEventListener('click', () => {
  cardIdx = (cardIdx - 1 + activeCards.length) % activeCards.length;
  renderCard();
});
$('#nextCard').addEventListener('click', nextCard);
$('#shuffleCards').addEventListener('click', () => {
  activeCards = shuffle(activeCards);
  cardIdx = 0;
  renderCard();
});

function nextCard() {
  if (activeCards.length === 0) return;
  cardIdx = (cardIdx + 1) % activeCards.length;
  renderCard();
}

// SR rating buttons (lightweight: just track and advance)
$$('.sr-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const rating = btn.dataset.rating;
    if (activeCards.length > 0) {
      const c = activeCards[cardIdx];
      const key = c.topic + '::' + c.q.slice(0, 60);
      cardRatings[key] = { r: rating, t: Date.now() };
      saveJSON(STORAGE_KEY_RATINGS, cardRatings);
    }
    nextCard();
  });
});

topicFilter.addEventListener('change', setCardSet);

// keyboard nav for flashcards
document.addEventListener('keydown', (e) => {
  if (!panels.cards.classList.contains('active')) return;
  if (e.target.matches('input, select, textarea')) return;
  if (e.key === 'ArrowLeft')  { e.preventDefault(); $('#prevCard').click(); }
  if (e.key === 'ArrowRight') { e.preventDefault(); nextCard(); }
  if (e.key === ' ' || e.key === 'Enter') {
    e.preventDefault();
    elFlashcard.click();
  }
});

// init flashcards
setCardSet();

/* ===========================================================
   PROBEKLAUSUR
   =========================================================== */
const examIntroEl = $('#examIntro');
const examActiveEl = $('#examActive');
const examResultEl = $('#examResult');

const elTimer = $('#timer');
const elQNow = $('#qCurrent');
const elQAll = $('#qTotal');
const elQAnswered = $('#qAnswered');
const elProgress = $('#examProgressFill');
const elQContainer = $('#questionContainer');

const introCount = $('#introCount');
const introTotal = $('#introTotal');

let examQuestions = [];          // selected question objects (with original index)
let examAnswers = [];            // user-selected option index (-1 = none)
let currentQ = 0;
let examTimer = null;
let timeLeft = 45 * 60;          // seconds
let examStartedAt = 0;
let examEndedAt = 0;

// pick how many questions to ask: 18-20
function pickExamCount() {
  return 18 + Math.floor(Math.random() * 3); // 18, 19 or 20
}

// init intro display values dynamically
function refreshIntro() {
  // use a fixed display of 19 / 47.5 - the actual count is randomized at start
  introCount.textContent = '18–20';
  introTotal.textContent = '45–50';
}
refreshIntro();

$('#startExam').addEventListener('click', startExam);

function startExam() {
  const count = pickExamCount();
  examQuestions = shuffle(QUESTION_BANK).slice(0, count).map(q => {
    // also shuffle the answer options BUT remember the new correct index
    const orderedOptions = q.options.map((opt, i) => ({ text: opt, isCorrect: i === q.correct }));
    const shuffledOpts = shuffle(orderedOptions);
    return {
      q: q.q,
      topic: q.topic,
      explanation: q.explanation,
      options: shuffledOpts.map(o => o.text),
      correct: shuffledOpts.findIndex(o => o.isCorrect),
    };
  });
  examAnswers = examQuestions.map(() => -1);
  currentQ = 0;
  timeLeft = 45 * 60;
  examStartedAt = Date.now();

  examIntroEl.style.display = 'none';
  examResultEl.style.display = 'none';
  examActiveEl.style.display = 'block';

  elQAll.textContent = examQuestions.length.toString();

  renderQuestion();
  startTimer();
  // scroll to top of exam panel for clarity
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startTimer() {
  if (examTimer) clearInterval(examTimer);
  updateTimerDisplay();
  examTimer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();
    if (timeLeft <= 0) {
      clearInterval(examTimer);
      examTimer = null;
      submitExam(true);
    }
  }, 1000);
}

function updTimerClass() {
  elTimer.classList.remove('warning', 'danger');
  if (timeLeft <= 60) elTimer.classList.add('danger');
  else if (timeLeft <= 5 * 60) elTimer.classList.add('warning');
}

function updateTimerDisplay() {
  const m = Math.floor(Math.max(0, timeLeft) / 60);
  const s = Math.max(0, timeLeft) % 60;
  elTimer.textContent = `${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
  updTimerClass();
}

function renderQuestion() {
  const q = examQuestions[currentQ];
  const ua = examAnswers[currentQ];
  const letters = ['A', 'B', 'C', 'D', 'E'];

  elQNow.textContent = (currentQ + 1).toString();
  const answered = examAnswers.filter(a => a >= 0).length;
  elQAnswered.textContent = `${answered} beantwortet`;
  elProgress.style.width = `${((currentQ + 1) / examQuestions.length) * 100}%`;

  elQContainer.innerHTML = `
    <div class="question-card">
      <div class="q-num">Frage ${currentQ + 1} · ${q.topic}</div>
      <div class="q-text">${q.q}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label class="option ${ua === i ? 'selected' : ''}">
            <input type="radio" name="q${currentQ}" value="${i}" ${ua === i ? 'checked' : ''}/>
            <span class="option-text"><span class="option-letter">${letters[i]}.</span> ${opt}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;
  // attach listeners
  $$('.option input[type="radio"]', elQContainer).forEach(input => {
    input.addEventListener('change', (e) => {
      examAnswers[currentQ] = parseInt(e.target.value, 10);
      const cnt = examAnswers.filter(a => a >= 0).length;
      elQAnswered.textContent = `${cnt} beantwortet`;
    });
  });

  // show submit on last question
  $('#submitExam').style.display = (currentQ === examQuestions.length - 1) ? 'inline-block' : 'none';
  $('#nextQuestion').style.display = (currentQ === examQuestions.length - 1) ? 'none' : 'inline-block';
  $('#prevQuestion').disabled = currentQ === 0;
}

$('#prevQuestion').addEventListener('click', () => {
  if (currentQ > 0) { currentQ--; renderQuestion(); window.scrollTo({ top: $('.exam-bar').offsetTop - 80, behavior: 'smooth' }); }
});
$('#nextQuestion').addEventListener('click', () => {
  if (currentQ < examQuestions.length - 1) { currentQ++; renderQuestion(); window.scrollTo({ top: $('.exam-bar').offsetTop - 80, behavior: 'smooth' }); }
});
$('#submitExam').addEventListener('click', () => {
  const unanswered = examAnswers.filter(a => a < 0).length;
  if (unanswered > 0) {
    if (!confirm(`Du hast noch ${unanswered} Frage(n) nicht beantwortet. Trotzdem abgeben?`)) return;
  }
  submitExam(false);
});

function submitExam(timeUp = false) {
  if (examTimer) { clearInterval(examTimer); examTimer = null; }
  examEndedAt = Date.now();

  const POINTS_PER_Q = 2.5;
  let right = 0, wrong = 0;
  examQuestions.forEach((q, i) => {
    if (examAnswers[i] === q.correct) right++;
    else wrong++;
  });
  const totalPoints = examQuestions.length * POINTS_PER_Q;
  const earnedPoints = right * POINTS_PER_Q;
  const pct = Math.round((right / examQuestions.length) * 100);

  // German grade based on % (typical bachelor exam scheme)
  let grade, gradeDesc;
  if (pct >= 90)      { grade = '1,0–1,3'; gradeDesc = 'Sehr gut'; }
  else if (pct >= 80) { grade = '1,7–2,0'; gradeDesc = 'Gut'; }
  else if (pct >= 70) { grade = '2,3–2,7'; gradeDesc = 'Befriedigend'; }
  else if (pct >= 60) { grade = '3,0–3,3'; gradeDesc = 'Befriedigend−'; }
  else if (pct >= 50) { grade = '3,7–4,0'; gradeDesc = 'Ausreichend'; }
  else                { grade = '5,0';     gradeDesc = 'Nicht bestanden'; }

  $('#scoreNum').textContent = earnedPoints.toString().replace('.', ',');
  $('#scoreTotal').textContent = '/' + totalPoints.toString().replace('.', ',');
  $('#gradeDisplay').textContent = `${grade} · ${gradeDesc}`;
  $('#rightCount').textContent = right.toString();
  $('#wrongCount').textContent = wrong.toString();
  $('#percentDisplay').textContent = pct + '%';

  let msg = '';
  if (timeUp)               msg = 'Zeit ist abgelaufen – die offenen Fragen wurden als falsch gewertet.';
  else if (pct >= 90)       msg = 'Hervorragend. Das ist Klausurniveau.';
  else if (pct >= 70)       msg = 'Solide Leistung. Schau dir die roten Antworten an, dann sitzt das.';
  else if (pct >= 50)       msg = 'Bestanden – aber da geht noch was. Karteikarten zu den schwachen Themen wiederholen.';
  else                      msg = 'Da liegt noch Arbeit vor dir. Nutze die Karteikarten zu den Themen, die hier rot waren.';
  $('#scoreMessage').textContent = msg;

  // build review section
  const letters = ['A', 'B', 'C', 'D', 'E'];
  const reviewHtml = examQuestions.map((q, i) => {
    const ua = examAnswers[i];
    const isRight = ua === q.correct;
    return `
      <div class="question-card">
        <div class="q-num">Frage ${i + 1} · ${q.topic}</div>
        <div class="q-text">${q.q}</div>
        <div class="options">
          ${q.options.map((opt, k) => {
            let cls = '';
            if (k === q.correct) cls = 'correct';
            else if (k === ua && k !== q.correct) cls = 'wrong';
            return `<div class="option ${cls}"><span class="option-text"><span class="option-letter">${letters[k]}.</span> ${opt}${k === q.correct ? ' ✓' : (k === ua && !isRight ? ' ✗' : '')}</span></div>`;
          }).join('')}
        </div>
        <div class="answer-feedback ${isRight ? 'right' : 'wrong'}">
          <strong>${isRight ? 'Richtig.' : (ua < 0 ? 'Nicht beantwortet.' : 'Falsch.')}</strong> ${q.explanation}
        </div>
      </div>
    `;
  }).join('');
  $('#reviewSection').innerHTML = reviewHtml;
  $('#reviewSection').classList.remove('active');
  $('#reviewToggle').textContent = 'Antworten ansehen';

  // store history
  const hist = loadJSON(STORAGE_KEY_HISTORY, []);
  hist.push({
    when: Date.now(),
    n: examQuestions.length,
    right,
    pct,
    points: earnedPoints,
    total: totalPoints,
    timeUp,
    durationS: Math.round((examEndedAt - examStartedAt) / 1000),
  });
  if (hist.length > 50) hist.splice(0, hist.length - 50);
  saveJSON(STORAGE_KEY_HISTORY, hist);

  examActiveEl.style.display = 'none';
  examResultEl.style.display = 'block';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

$('#reviewToggle').addEventListener('click', () => {
  const sec = $('#reviewSection');
  const open = sec.classList.toggle('active');
  $('#reviewToggle').textContent = open ? 'Antworten ausblenden' : 'Antworten ansehen';
});
$('#restartExam').addEventListener('click', () => {
  examIntroEl.style.display = 'block';
  examResultEl.style.display = 'none';
  examActiveEl.style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Warn before leaving during active exam
window.addEventListener('beforeunload', (e) => {
  if (examTimer && examActiveEl.style.display !== 'none') {
    e.preventDefault();
    e.returnValue = '';
  }
});

/* ===========================================================
   THEMENÜBERSICHT
   =========================================================== */
const TOPICS = [
  {
    n: '01',
    title: 'Leadership Grundlagen',
    items: [
      '<strong>Definition:</strong> Prozess, andere zur Zielerreichung zu beeinflussen (Fischer et al. 2017)',
      '<strong>Historie:</strong> Trait → Behavioural → Contingency → Transformational → Contemporary',
      '<strong>Trait Approach:</strong> Big Five (Judge 2002) – Conscientiousness .36, Extraversion .30',
      '<strong>Implicit Leadership Theories:</strong> Antonakis & Dalgas 2009',
      '<strong>3 universelle Prinzipien:</strong> Constraints/Freedom · Shared Identity · Closeness/Openness',
      '<strong>Social Identity Theory</strong> als Basis für gemeinsames Handeln',
    ],
  },
  {
    n: '02',
    title: 'Culture & Global Leaders',
    items: [
      '<strong>Drei Programmierungs-Ebenen:</strong> Human Nature · Culture · Personality',
      '<strong>Hofstede:</strong> 6 Dimensionen (Power Distance, Individualism, etc.)',
      '<strong>Kluckhohn & Strodtbeck (1961):</strong> 5 Grundorientierungen',
      '<strong>GLOBE-Studie · Trompenaars · Schwartz Values</strong>',
      '<strong>Internationale Effektivität:</strong> Continuous Learning · Interpersonal Engagement · Hardiness',
      '<strong>Globalists:</strong> hoch auf allen drei Dimensionen (selten)',
      '<strong>Hindernisse:</strong> Cultural Cruise Control · EI vs. Power',
      '<strong>EASI-Modell</strong> (Van Kleef 2009) – Emotionen als soziale Information',
    ],
  },
  {
    n: '03',
    title: 'Diverse Teams · CEM',
    items: [
      '<strong>Diversity-Definition</strong> (Van Knippenberg 2004)',
      '<strong>Optimistisch vs. pessimistisch:</strong> Information Processing vs. Categorization & Bias',
      '<strong>CEM Modell:</strong> zwei parallele Pfade, Outcome durch Moderatoren bestimmt',
      '<strong>Moderatoren:</strong> Saliency, Diversity Beliefs, Task Requirements',
      '<strong>3 CEM-Prinzipien:</strong> Elaboration zentral · jeder Diversity-Typ kann beide Pfade auslösen · Moderatoren entscheiden',
      '<strong>Faultlines:</strong> nicht Diversity selbst, sondern aktive Faultlines sind das Problem',
      '<strong>Warum Teams scheitern:</strong> fehlende Elaboration, Shared Reality, Shared Identity',
      '<strong>Diversity Beliefs</strong> (Homan et al. 2008) – wichtiger Moderator',
    ],
  },
  {
    n: '04',
    title: 'Power & Influence',
    items: [
      '<strong>Definition:</strong> Asymmetrische Kontrolle über soziale Ressourcen',
      '<strong>Pike & Galinsky:</strong> Power löst Bremsen (nicht Gas) – 3 Mechanismen',
      '<strong>Power-Approach Theory</strong> (Keltner 2003): Approach vs. Inhibition System',
      '<strong>Power makes the person:</strong> Illusion of Control (Fast 2009), Action (Galinsky 2003), Optimismus, Risk-Taking, abstraktes Denken',
      '<strong>Power → Social Distance</strong> (Lammers 2012)',
      '<strong>Curse of Knowledge & Perspective Taking</strong>',
      '<strong>Curse of Authenticity</strong> – Verletzlichkeit senkt Einfluss',
      '<strong>Apology vs. Anger</strong> (Tiedens) – Wut signalisiert Kompetenz',
      '<strong>Body Language</strong> (Carney 2020) – kulturübergreifende Power-Signale',
      '<strong>Paradox of Likability</strong> (Fiske) – Wärme vs. Kompetenz',
      '<strong>Belmi & Laurin (2016)</strong> – Pro-Social vs. Politics nach Klasse',
    ],
  },
  {
    n: '05',
    title: 'Motivation',
    items: [
      '<strong>Definition:</strong> Energetisiert, lenkt, hält Verhalten aufrecht',
      '<strong>Outcomes:</strong> Engagement · Satisfaction · Commitment · Intention to Quit',
      '<strong>Intrinsisch vs. extrinsisch</strong>',
      '<strong>4-Drives-Framework:</strong> Acquire · Bond · Comprehend · Defend',
      '<strong>Herzberg:</strong> Hygienefaktoren vs. Motivatoren',
      '<strong>Expectancy Theory</strong> (Vroom 1964) – V × I × E',
      '<strong>Goal Setting Theory</strong> (Latham & Locke 1991)',
      '<strong>Job Characteristics Model</strong> – Meaningfulness, Verantwortung, Knowledge of Results',
      '<strong>Pay levels:</strong> Individual · Team · Organizational',
      '<strong>Empowerment</strong> – braucht echte Autonomie und Kulturwandel',
    ],
  },
  {
    n: '06',
    title: 'Case: Mr. Weldon (KFC)',
    items: [
      '<strong>Kontext:</strong> PepsiCo, KFC South Division 1990er, Reorganisation in 5 Divisions',
      '<strong>Weldon:</strong> 30, jüngster GM, einziger ohne Ivy-League-Abschluss',
      '<strong>Erfolg:</strong> Visit aller 1.300 Restaurants, lokale Marketingprogramme, Kulturwandel',
      '<strong>„Game Changer\":</strong> Rotisserie Gold Test-Launch',
      '<strong>Spannungsfeld:</strong> Linientreue vs. Eigenständigkeit · Karrieredruck',
      '<strong>Frage:</strong> Was sollte Weldon im D-Day-Moment tun, als die Mitarbeiter desillusioniert wirken? → Anwendungsfall für Leadership · Motivation · Power · Diverse Teams',
    ],
  },
];

function renderTopics() {
  if ($('#topicsGrid').dataset.rendered) return;
  $('#topicsGrid').innerHTML = TOPICS.map(t => `
    <div class="topic-card">
      <h3><span class="topic-num">${t.n}</span> ${t.title}</h3>
      <ul>${t.items.map(i => `<li>${i}</li>`).join('')}</ul>
    </div>
  `).join('');
  $('#topicsGrid').dataset.rendered = '1';
}
