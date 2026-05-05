/* =====================================================================
   STUDY HUB DATA
   Flashcards + Mock Exam Questions
   Topics: leadership · culture · diversity · power · motivation
   ===================================================================== */

/* ---------- FLASHCARDS ---------- */
const FLASHCARDS = [
  // ============ LEADERSHIP ============
  {
    topic: "leadership",
    tag: "Definition",
    q: "How do Fischer, Dietz & Antonakis (2017) define leadership?",
    a: "<strong>Leadership = the process of influencing others toward the achievement of a goal.</strong><br><br>Important: the modern view sees leadership as a <strong>reciprocal relationship</strong> between leader and followers (bidirectional), not as a one-way top-down relationship like older models assumed."
  },
  {
    topic: "leadership",
    tag: "Theory Overview",
    q: "What are the five historical phases of leadership research?",
    a: "<ul><li><strong>Post WWI – 1960s:</strong> Trait Approach</li><li><strong>1960s – 70s:</strong> Behavioural & Style</li><li><strong>1970s – 80s:</strong> Contingency</li><li><strong>1980s – 90s:</strong> Transformational / Relational</li><li><strong>Today:</strong> Contemporary (AI, Theory U, diversity)</li></ul>"
  },
  {
    topic: "leadership",
    tag: "Trait Approach",
    q: "What is the core assumption of the Trait Approach?",
    a: "Leadership is a <strong>quality you either have or you don't</strong> – some people are \"born\" leaders.<br><br>Core question: <em>Which stable personality traits predict leadership?</em>"
  },
  {
    topic: "leadership",
    tag: "Big Five (Judge 2002)",
    q: "Which Big Five traits most strongly predict leadership emergence?",
    a: "Meta-analysis by <strong>Judge (2002)</strong>:<ul><li>Conscientiousness: .36</li><li>Extraversion: .30</li><li>Openness: .14</li><li>Agreeableness: −.14</li><li>Emotional Stability: .09</li></ul>Together the Big Five explain <strong>28% of the variance in leadership emergence</strong> and 15% in leadership effectiveness."
  },
  {
    topic: "leadership",
    tag: "Behavioural Approach",
    q: "What is the central shift from the Trait Approach to the Behavioural Approach?",
    a: "Instead of asking <em>\"Who is a leader?\"</em> we ask <strong>\"What do leaders do?\"</strong><br><br>Assumptions:<ul><li>Leadership is created through <strong>action</strong></li><li>Leadership is <strong>learnable</strong></li><li>Focus on observable behaviours and styles</li></ul>"
  },
  {
    topic: "leadership",
    tag: "ILT",
    q: "What are Implicit Leadership Theories (ILTs)?",
    a: "ILTs are <strong>everyday mental images</strong> of how leaders look and behave (Antonakis & Dalgas 2009).<br><br>Striking example: in a study on French elections, both children AND adults picked the eventual winner just from the face — children with 73%, adults with 67% accuracy."
  },
  {
    topic: "leadership",
    tag: "Three Principles",
    q: "What are the three universal principles of modern leadership?",
    a: "<ol><li><strong>Balance between Constraints and Freedom</strong> – directive leadership, goals, rules vs. authenticity, creativity, empowerment</li><li><strong>Create Shared Identity</strong> – a sense of \"we\", a common identity</li><li><strong>Foster Closeness and Openness</strong> – proximity and openness</li></ol>"
  },
  {
    topic: "leadership",
    tag: "Social Identity Theory",
    q: "What does Social Identity Theory say about leadership?",
    a: "<ol><li>We define ourselves through <strong>similarities and differences</strong> to others → our self-worth is tied to the fate of the group (self-enhancement)</li><li>Social identity is the <strong>basis for collective social action</strong></li></ol>Implication: effective leaders strengthen a <strong>shared identity</strong> because it enables coordinated action."
  },

  // ============ CULTURE / GLOBAL LEADERS ============
  {
    topic: "culture",
    tag: "Three Programming Levels",
    q: "What are the three levels of mental programming in Hofstede's model?",
    a: "<ol><li><strong>Human Nature</strong> – inherited, universal across all humans</li><li><strong>Culture</strong> – learned, specific to a group (middle level)</li><li><strong>Personality</strong> – both inherited and learned, unique to each individual</li></ol>"
  },
  {
    topic: "culture",
    tag: "Hofstede Dimensions",
    q: "What are Hofstede's six cultural dimensions?",
    a: "<ol><li><strong>Power Distance</strong> – egalitarian vs. hierarchical</li><li><strong>Individualism vs. Collectivism</strong></li><li><strong>Uncertainty Avoidance</strong> – comfort with uncertainty</li><li><strong>Masculinity vs. Femininity</strong> – power vs. nurture</li><li><strong>Long- vs. Short-Term Orientation</strong></li><li><strong>Indulgence vs. Restraint</strong></li></ol>"
  },
  {
    topic: "culture",
    tag: "Kluckhohn & Strodtbeck",
    q: "What are the five basic orientations distinguished by Kluckhohn & Strodtbeck (1961)?",
    a: "<ol><li><strong>Human Nature</strong>: Evil – Mixed – Good</li><li><strong>Relationship to Nature</strong>: Mastery – Harmony – Submission</li><li><strong>Time</strong>: Past – Present – Future</li><li><strong>Activity</strong>: Being – Becoming – Doing</li><li><strong>Space</strong>: Public – Mixed – Private</li></ol>"
  },
  {
    topic: "culture",
    tag: "International Effectiveness",
    q: "Which three dimensions characterize international effectiveness?",
    a: "<ol><li><strong>Continuous Learning</strong> – exploration, self-awareness</li><li><strong>Interpersonal Engagement</strong> – global mindset, relationship interest</li><li><strong>Hardiness</strong> – positive regard, resilience</li></ol><br>Anyone who scores high on all three is a <strong>\"Globalist\"</strong> (relatively rare)."
  },
  {
    topic: "culture",
    tag: "Cruise Control",
    q: "What is \"Cultural Cruise Control\" and why is it dangerous?",
    a: "<strong>Behaviour driven by built-in cultural assumptions</strong> while ignoring other cultural cues.<br><br>Main mechanism: <strong>stereotypes</strong>. They serve useful functions (fast processing, predictions), but in cruise-control mode you filter out everything that doesn't fit your assumptions → mistakes in cross-cultural leadership."
  },
  {
    topic: "culture",
    tag: "Cultural Metacognition",
    q: "What is Cultural Metacognition and why is it useful?",
    a: "<strong>Awareness of your own stereotypes, thoughts and attitudes</strong> – plus the ability to actively manage them.<br><br>It enables the <strong>adaptive use</strong> of stereotypes in cross-cultural settings (instead of cruise control). Accessed through, among other things, perspective taking."
  },
  {
    topic: "culture",
    tag: "Emotional Intelligence",
    q: "What are the four components of Emotional Intelligence?",
    a: "<ol><li><strong>Understand</strong> your own emotions</li><li><strong>Manage</strong> your own emotions</li><li><strong>Understand</strong> others' emotions</li><li><strong>Manage</strong> others' emotions</li></ol>"
  },
  {
    topic: "culture",
    tag: "EASI Model",
    q: "What does the EASI Model (Van Kleef 2009) say about emotions?",
    a: "<strong>Emotions As Social Information</strong>:<ul><li>Emotional expressions convey information about a person's thoughts, feelings, and intentions</li><li>Emotions evoke <strong>complementary or reciprocal emotions</strong> in others</li><li>→ Emotions are a <strong>source of influence</strong> in groups (e.g. managers faking anger to influence subordinates – Cote & Hideg 2011)</li></ul>"
  },
  {
    topic: "culture",
    tag: "Hofstede Limitations",
    q: "What are the three central limitations of Hofstede's research?",
    a: "<ol><li><strong>Subcultures</strong>: countries have large geographic and group-based subcultures that Hofstede ignores</li><li><strong>Sample issues</strong>: many studies use limited samples with few countries</li><li><strong>Aggregation problem</strong>: country averages mask individual differences – managers must not lose sight of the unique values of individual people</li></ol>"
  },

  // ============ DIVERSE TEAMS ============
  {
    topic: "diversity",
    tag: "Definition",
    q: "How do Van Knippenberg et al. (2004) define diversity?",
    a: "<em>\"A characteristic of a social group reflecting the degree of <strong>objective or subjective differences</strong> among its members.\"</em><br><br>Important: it's not just about visible differences – values, knowledge, and experience also count."
  },
  {
    topic: "diversity",
    tag: "Two Perspectives",
    q: "What do the optimistic and pessimistic perspectives say about diversity?",
    a: "<strong>Optimistic:</strong><ul><li>More knowledge, perspectives, networks</li><li>Better problem-solving, decisions, creativity, innovation</li><li>Diversity → <em>Information Processing</em> → + effectiveness</li></ul><strong>Pessimistic:</strong><ul><li>Social categorization (us vs. them)</li><li>Intergroup bias favoring the in-group</li><li>Diversity → <em>Categorization & Bias</em> → − effectiveness</li></ul>"
  },
  {
    topic: "diversity",
    tag: "CEM Model",
    q: "What is the Categorization-Elaboration Model (CEM)?",
    a: "A contingency model: diversity acts through <strong>two parallel processes</strong>:<ol><li><strong>Social Categorization</strong> → intergroup bias / affective reaction (negative)</li><li><strong>Elaboration of task-relevant information</strong> → performance (positive)</li></ol>Which path dominates depends on <strong>moderators</strong>: saliency, diversity beliefs, task requirements."
  },
  {
    topic: "diversity",
    tag: "CEM Principles",
    q: "What are the three core principles of the CEM?",
    a: "<ol><li>The central mechanism for <strong>positive diversity effects</strong> is the <strong>elaboration of task-relevant information</strong></li><li><strong>Any type of diversity</strong> can trigger BOTH information processing AND categorization</li><li>The effect of diversity depends on <strong>moderators</strong> → diversity is shapeable!</li></ol>"
  },
  {
    topic: "diversity",
    tag: "Faultlines",
    q: "What are faultlines and why are they the real problem?",
    a: "<strong>Faultlines</strong> = hypothetical dividing lines that split a team into subgroups (based on multiple overlapping characteristics).<br><br>Take-away: <strong>All teams are diverse — diversity itself is not the problem.</strong> The problem is <strong>active faultlines</strong> (a missing shared identity)."
  },
  {
    topic: "diversity",
    tag: "Why Teams Fail",
    q: "What are the three main reasons diverse teams often fail?",
    a: "<ol><li><strong>Lack of information elaboration</strong> – no knowledge exchange, superficial sharing, holding back</li><li><strong>No shared understanding of reality</strong> – missing shared mental models, goal misalignment</li><li><strong>No shared identity</strong> – subgroups, mistrust, conflict</li></ol>"
  },
  {
    topic: "diversity",
    tag: "Three Leader Goals",
    q: "What three main goals should team leaders focus on according to diversity research?",
    a: "<ol><li><strong>Increase information elaboration</strong></li><li>Create a <strong>shared understanding of reality</strong></li><li>Build a <strong>shared identity</strong></li></ol>This is how to deliver on the <em>promise of diversity</em> that teams otherwise often miss."
  },
  {
    topic: "diversity",
    tag: "Diversity Beliefs",
    q: "What are diversity beliefs and why do they matter (Homan et al. 2008)?",
    a: "<strong>Diversity Beliefs</strong> = how positively or negatively team members evaluate diversity.<br><br>They are a central <strong>moderator</strong> in the CEM: pro-diversity beliefs shift the path toward elaboration and positive outcomes – even with objectively high diversity."
  },

  // ============ POWER ============
  {
    topic: "power",
    tag: "Definition",
    q: "How is power defined in modern research?",
    a: "<strong>Power = asymmetric control over valuable social resources</strong> (Magee & Galinsky 2008).<br><br>By definition, power gives you <strong>control and independence</strong> – which is the basis for all the downstream effects (action, optimism, less perspective taking)."
  },
  {
    topic: "power",
    tag: "Power → Action",
    q: "What is Pike & Galinsky's central claim about \"power leads to action\"?",
    a: "Power leads to action not because it presses the <strong>gas pedal</strong> – but because it <strong>releases the psychological brakes</strong>.<br><br>Three mechanisms:<ol><li>Power reduces the <strong>anticipated pain of failure</strong></li><li>Power <strong>obscures</strong> the perceived social costs of action</li><li>Power <strong>focuses the mind</strong> on goals</li></ol>"
  },
  {
    topic: "power",
    tag: "Approach-Inhibition",
    q: "What does the Power-Approach Theory (Keltner 2003) say?",
    a: "<strong>High power</strong> activates the <strong>Behavioral Approach System</strong>:<ul><li>Heightened sensitivity to rewards (food, success, sex, social bonds)</li></ul><strong>Low power</strong> activates the <strong>Behavioral Inhibition System</strong>:<ul><li>Anxiety, avoidance, inhibition of responses</li></ul>This yields three predictions: power influences social attention, \"makes\" the person, and \"reveals\" the person."
  },
  {
    topic: "power",
    tag: "Curse of Knowledge",
    q: "What is the \"Curse of Knowledge\" among the powerful?",
    a: "Powerful people are <strong>less able to take others' perspective</strong> and accurately gauge what others know.<br><br>Consequence: they underestimate the <strong>social costs</strong> of their actions – which boosts action but leads to egocentric behaviour."
  },
  {
    topic: "power",
    tag: "Power makes the person",
    q: "What does \"power makes the person\" mean?",
    a: "Power <strong>changes</strong> behaviour and perception:<ul><li>Increases <strong>Illusion of Control</strong> (Fast et al. 2009 – \"dice study\": 100% chose to roll the dice themselves in the power condition)</li><li>Increases <strong>assertive action</strong> (Galinsky 2003 \"fan study\")</li><li>Increases optimism & risk-taking</li><li>More focus on rewards, less on threats</li><li>Increases <strong>abstract thinking</strong> (Smith & Trope 2006)</li></ul>"
  },
  {
    topic: "power",
    tag: "Power → Social Distance",
    q: "How does power change social distance (Lammers et al. 2012)?",
    a: "Power leads to <strong>greater social distance</strong>:<ul><li>Stronger preference to work alone</li><li>Lower willingness to help others</li></ul>Mediator: <strong>self-sufficiency</strong> – the powerful feel autonomous and need others less."
  },
  {
    topic: "power",
    tag: "Curse of Authenticity",
    q: "Why is \"being authentic\" problematic for career and power?",
    a: "In the pursuit of authenticity, people often avoid:<ul><li>Networking</li><li>Flattering the influential</li><li>Presenting themselves powerfully</li><li>Asking for resources</li></ul>Authenticity & vulnerability have benefits (closeness, comfort) – but also drawbacks: <strong>less influence, less likability, lower perceived power</strong>."
  },
  {
    topic: "power",
    tag: "Apology vs. Anger",
    q: "What power effects do anger vs. apology have (Tiedens et al.)?",
    a: "<strong>Anger</strong> – power emotion:<ul><li>Conveys competence</li><li>Leads to more promotions, higher salary</li><li>But seen as less likable / cold</li></ul><strong>Apology</strong> – low-power behaviour:<ul><li>Comes across warm and likable</li><li>But links you to the misdeed</li><li>Lowers influence, status, prestige</li><li>Useful when you can distance yourself from the act</li></ul>"
  },
  {
    topic: "power",
    tag: "Body Language",
    q: "Which body language signals are associated with power across cultures (Carney 2020)?",
    a: "<ul><li>More <strong>gestures</strong>, controlled arm & hand movements</li><li><strong>Open posture</strong></li><li>Smaller interpersonal distance</li><li><strong>Louder voice</strong>, more speaking time, longer gazes</li><li>More successful <strong>interruptions</strong> of others</li><li><strong>Statements</strong> instead of questions</li><li>More disinhibited laughter</li><li>Repetition of ideas</li></ul>"
  },
  {
    topic: "power",
    tag: "Paradox of Likability",
    q: "What is the \"Paradox of Likability\" (Susan Fiske)?",
    a: "People are judged on two dimensions: <strong>warmth</strong> and <strong>competence</strong> – and these are perceived as <strong>negatively correlated</strong>.<br><br>Four quadrants:<ul><li><strong>Admiration:</strong> high warmth + high competence (friends)</li><li><strong>Envy:</strong> low warmth + high competence (rich professionals)</li><li><strong>Pity:</strong> high warmth + low competence</li><li><strong>Contempt:</strong> low warmth + low competence</li></ul>Anyone who tries too hard to be liked comes across as less competent."
  },
  {
    topic: "power",
    tag: "Belmi & Laurin (2016)",
    q: "What two strategies for acquiring power exist – and who uses which?",
    a: "<strong>Pro-Social</strong>: working hard, helping others, contributing to the collective good.<br><strong>Politics</strong>: strategic behaviour, flattery, networking, self-promotion.<br><br>Finding: both classes view politics as equally useful (~6/7) – but <strong>only the upper class is willing to use politics</strong>. The lower class sticks with pro-social → <strong>low power perpetuates itself</strong>."
  },

  // ============ MOTIVATION ============
  {
    topic: "motivation",
    tag: "Definition",
    q: "How is motivation defined?",
    a: "<strong>Motivation = the force that energizes, directs, and sustains behaviour.</strong><br><br>Key outcomes:<ul><li><strong>Engagement</strong> – energy, effort, initiative</li><li><strong>Satisfaction</strong> – expectations met</li><li><strong>Commitment</strong> – citizenship behaviour</li><li><strong>Intention to Quit</strong> – proxy for turnover</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Intrinsic vs. Extrinsic",
    q: "What's the difference between intrinsic and extrinsic motivation?",
    a: "<strong>Intrinsic</strong> = inner influences:<ul><li>Personality, emotions, needs, goals, values</li></ul><strong>Extrinsic</strong> = outer influences:<ul><li>Rewards, punishments, empowerment, recognition</li><li>Job characteristics, goal setting, breaks, openness</li></ul>"
  },
  {
    topic: "motivation",
    tag: "4-Drives Framework",
    q: "What four drives underlie motivation according to Lawrence & Nohria?",
    a: "<ol><li><strong>Drive to Acquire</strong> – scarce goods that boost well-being (relative, insatiable)</li><li><strong>Drive to Bond</strong> – social connection</li><li><strong>Drive to Comprehend</strong> – making sense, learning, being challenged</li><li><strong>Drive to Defend</strong> – protect self and what's yours</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Drive to Acquire",
    q: "Why does a pay raise have only a limited motivational effect?",
    a: "The <strong>Drive to Acquire</strong> is:<ul><li><strong>Relative</strong> – we compare ourselves to others → satisfaction requires <em>more</em> than others</li><li><strong>Insatiable</strong> – we always want more</li></ul>So the boost from a raise quickly fades – it's offset by a new comparison benchmark."
  },
  {
    topic: "motivation",
    tag: "Drive to Comprehend",
    q: "How do you activate the Drive to Comprehend at work?",
    a: "People have a need to <strong>understand</strong> the world:<ul><li><strong>Motivation:</strong> when actions and reactions feel meaningful</li><li>Boosts: <strong>challenging jobs</strong> that enable growth & learning</li><li>Frustrates: monotonous dead-end jobs</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Herzberg",
    q: "What's the difference between Herzberg's hygiene factors and motivators?",
    a: "Herzberg: <em>\"When do you feel positive about your job?\"</em> (203 accountants & engineers)<br><br><strong>Hygiene factors / dissatisfiers</strong> – prevent dissatisfaction but don't motivate:<ul><li>Working conditions, policies, salary, supervision, status, job security, colleagues, personal life</li></ul><strong>Motivators</strong> – generate genuine satisfaction:<ul><li>Recognition, achievement, advancement, growth, responsibility, job challenge</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Expectancy Theory",
    q: "What is the basis of Expectancy Theory (Vroom 1964)?",
    a: "Motivation = <strong>Valence × Instrumentality × Expectancy</strong> (VIE)<ul><li><strong>Expectancy:</strong> \"Does my effort lead to performance?\"</li><li><strong>Instrumentality:</strong> \"Does performance lead to a reward?\"</li><li><strong>Valence:</strong> \"Is the reward valuable to me?\"</li></ul>Implications:<ol><li>Make the effort-performance link visible</li><li>Investigate which rewards are actually wanted</li><li>Clarify and reward expectations</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Goal Setting",
    q: "What does Goal Setting Theory (Latham & Locke 1991) say?",
    a: "<ol><li><strong>Difficult, specific goals</strong> lead to significantly higher performance than easy or abstract goals</li><li>The <strong>higher the goal</strong>, the higher the performance</li><li>Personality & incentives operate <strong>through goal setting & goal commitment</strong></li><li>Goals have <strong>cognitive effects</strong> (direction, effort, persistence, task strategies)</li></ol>"
  },
  {
    topic: "motivation",
    tag: "JCM",
    q: "Which three psychological states underlie the Job Characteristics Model?",
    a: "Intrinsic motivation depends on:<ol><li>How <strong>meaningful</strong> the job is (Meaningfulness)</li><li>How much <strong>responsibility</strong> the person carries</li><li>How clearly the person <strong>sees the results of their work</strong> (Knowledge of Results)</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Pay Levels",
    q: "What are the three levels of performance-based pay?",
    a: "<ol><li><strong>Individual Level</strong> – commissions, bonuses</li><li><strong>Team Level</strong> – tied to team performance</li><li><strong>Organizational Level</strong> – profit sharing, stock options</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Pay-for-Motivation Tips",
    q: "How do you make \"pay for motivation\" effective?",
    a: "<ol><li><strong>Define performance clearly</strong></li><li>Adapt pay systems to <strong>employees' values</strong></li><li><strong>Don't rely solely</strong> on financial motivators</li><li>Recognize: pay has a <strong>limited effect</strong></li></ol>"
  },
  {
    topic: "motivation",
    tag: "Empowerment",
    q: "What does successful empowerment require?",
    a: "Examples: participative management, representative participation. Mixed results, because:<ul><li>Leadership often <strong>doesn't grant real autonomy</strong></li><li>Requires deep <strong>culture change</strong></li><li>Employees need <strong>knowledge & competence</strong></li><li>Culture must allow low <strong>power distance</strong></li></ul>"
  },
  {
    topic: "motivation",
    tag: "Conclusions",
    q: "What are the central practical conclusions from motivation theories?",
    a: "<ul><li>Not all employees are motivated the same way – personality/values/attitudes matter</li><li>Satisfy basic needs (hygiene factors!)</li><li>Make the effort-performance link visible</li><li>Find out which rewards are truly valued</li><li>Be <strong>clear and challenging</strong></li><li>Let employees <strong>participate</strong></li><li>Design work <strong>well</strong></li><li>Give <strong>feedback</strong> and recognize success</li></ul>"
  },
];

/* ---------- MOCK EXAM QUESTIONS ---------- */
/* correct = index of the right answer (0-4)                              */
const QUESTION_BANK = [
  // -------- LEADERSHIP --------
  {
    topic: "Leadership",
    q: "How do Fischer, Dietz & Antonakis (2017) define leadership?",
    options: [
      "A person's ability to control others",
      "The process of influencing others toward the achievement of a goal",
      "Formal authority within an organization",
      "An innate personality trait",
      "A position within a hierarchy"
    ],
    correct: 1,
    explanation: "According to Fischer et al., leadership is the process of influencing others toward goal achievement. The modern view is bidirectional between leader and follower."
  },
  {
    topic: "Leadership",
    q: "Which Big Five trait most strongly predicts leadership emergence according to Judge (2002)?",
    options: [
      "Emotional Stability (.09)",
      "Agreeableness (−.14)",
      "Openness (.14)",
      "Conscientiousness (.36)",
      "Extraversion (.30)"
    ],
    correct: 3,
    explanation: "Conscientiousness has the highest coefficient at .36 for leadership emergence. Extraversion follows at .30."
  },
  {
    topic: "Leadership",
    q: "What is the central question of the Behavioural Approach?",
    options: [
      "What traits do leaders have?",
      "What do leaders do?",
      "Which style works in which context?",
      "How do leaders inspire change?",
      "What is the leader-follower relationship?"
    ],
    correct: 1,
    explanation: "The Behavioural Approach asks: What do leaders do? Assumption: leadership is created through action and is learnable."
  },
  {
    topic: "Leadership",
    q: "Which statement about Implicit Leadership Theories (ILTs) is correct?",
    options: [
      "They are explicitly taught in manager training programs",
      "They are everyday mental images of how leaders are and behave",
      "They describe formal job roles in organizations",
      "They apply only to adults, not children",
      "They were disproven by Antonakis & Dalgas"
    ],
    correct: 1,
    explanation: "ILTs are everyday mental images of leaders. Antonakis & Dalgas (2009) showed even children pick election winners from faces alone with 73% accuracy."
  },
  {
    topic: "Leadership",
    q: "Which three principles are considered the universal pillars of modern leadership?",
    options: [
      "Vision, charisma, control",
      "Trait, behaviour, contingency",
      "Balance Constraints/Freedom, Shared Identity, Closeness/Openness",
      "Power, status, hierarchy",
      "Authenticity, transparency, fairness"
    ],
    correct: 2,
    explanation: "The three universal principles are: balance between Constraints and Freedom, creating shared identity, and fostering closeness and openness."
  },
  {
    topic: "Leadership",
    q: "Which statement about Social Identity Theory is FALSE?",
    options: [
      "We define ourselves through similarities and differences to others",
      "Our self-worth depends on the fate of the group",
      "Social identity is the basis for collective social action",
      "Social identity plays no role in leadership",
      "There is a motivation toward self-enhancement"
    ],
    correct: 3,
    explanation: "Social identity is in fact CENTRAL to leadership – it is one of the three universal pillars."
  },
  {
    topic: "Leadership",
    q: "In which historical phase of leadership research did the Trait Approach dominate?",
    options: [
      "Today (Contemporary)",
      "1980s–90s",
      "1970s–80s",
      "1960s–70s",
      "Post WWI to 1960s"
    ],
    correct: 4,
    explanation: "The Trait Approach dominated from Post WWI into the 1960s."
  },

  // -------- CULTURE / GLOBAL LEADERS --------
  {
    topic: "Culture",
    q: "Which of the following is NOT one of Hofstede's six dimensions?",
    options: [
      "Power Distance",
      "Individualism vs. Collectivism",
      "Tightness vs. Looseness",
      "Uncertainty Avoidance",
      "Long-term vs. Short-term Orientation"
    ],
    correct: 2,
    explanation: "Tightness/Looseness comes from Gelfand, not Hofstede. Hofstede's six dimensions are: Power Distance, Individualism, Masculinity, Uncertainty Avoidance, Long-Term Orientation, Indulgence."
  },
  {
    topic: "Culture",
    q: "What is \"Cultural Cruise Control\"?",
    options: [
      "A diversity training for executives",
      "Behaviour driven by built-in cultural assumptions while ignoring other cultural cues",
      "A method for cultural calibration",
      "The ability to adapt to any culture",
      "A communication style in high-context cultures"
    ],
    correct: 1,
    explanation: "Cultural Cruise Control = behaviour driven by mental cultural programming while ignoring other cues – e.g. blindly applying stereotypes."
  },
  {
    topic: "Culture",
    q: "Which three dimensions characterize international effectiveness?",
    options: [
      "Knowledge, skill, will",
      "Continuous Learning, Interpersonal Engagement, Hardiness",
      "Power, status, prestige",
      "Authenticity, transparency, empathy",
      "Direction, effort, persistence"
    ],
    correct: 1,
    explanation: "Continuous Learning, Interpersonal Engagement, and Hardiness. Anyone high on all three is a \"Globalist\"."
  },
  {
    topic: "Culture",
    q: "What is the central idea of the EASI Model (Van Kleef 2009)?",
    options: [
      "Emotions are universal and culture-independent",
      "Emotions convey information and thereby influence others – they are a source of influence",
      "Emotions should be suppressed at work",
      "Emotions are only leadership-relevant for women",
      "Emotions are entirely determined by culture"
    ],
    correct: 1,
    explanation: "EASI = Emotions As Social Information. Emotional expressions convey information and elicit complementary/reciprocal emotions → emotions are a source of influence."
  },
  {
    topic: "Culture",
    q: "Which statement about Kluckhohn & Strodtbeck's model is CORRECT?",
    options: [
      "It contains only three basic orientations",
      "\"Mode of Activity\" distinguishes Being, Becoming, and Doing",
      "It fully replaces Hofstede's model",
      "It was developed in 1991",
      "It has no time dimension"
    ],
    correct: 1,
    explanation: "Kluckhohn & Strodtbeck (1961) distinguish five basic orientations, including \"Mode of Activity\" with Being, Becoming, and Doing."
  },
  {
    topic: "Culture",
    q: "Which statement about stereotypes matches the lecture?",
    options: [
      "Stereotypes are fundamentally useless",
      "Stereotypes can never be neutral, they are always negative",
      "Stereotypes have functions like fast information processing and predictions, but become problematic in cruise-control mode",
      "Cultural Metacognition reinforces blind trust in stereotypes",
      "Stereotypes are only relevant in homogeneous cultures"
    ],
    correct: 2,
    explanation: "Stereotypes have legitimate functions (fast processing, predictions). They become problematic in cruise-control mode. Cultural Metacognition enables their adaptive use."
  },
  {
    topic: "Culture",
    q: "Which limitation of Hofstede's research is NOT a valid critique?",
    options: [
      "Countries have subcultures that are not accounted for",
      "Managers must not lose sight of individual values",
      "Limited samples with few countries",
      "Hofstede ignores the existence of culture altogether",
      "Country averages mask individual differences"
    ],
    correct: 3,
    explanation: "Hofstede obviously doesn't ignore culture – quite the opposite. The other points are genuine critiques."
  },
  {
    topic: "Culture",
    q: "Where does \"Culture\" sit in the three-level programming model?",
    options: [
      "At the broadest level (universal)",
      "At the narrowest level (individual)",
      "At the middle level between Human Nature and Personality",
      "Culture is not a level in this model",
      "At all levels equally"
    ],
    correct: 2,
    explanation: "Middle level: Human Nature is universal, Personality is individual, and Culture sits in between (group-specific, learned)."
  },

  // -------- DIVERSE TEAMS --------
  {
    topic: "Diverse Teams",
    q: "According to the CEM, which mechanism underlies the POSITIVE effects of diversity?",
    options: [
      "Social categorization",
      "Intergroup bias",
      "Elaboration of task-relevant information",
      "Affective reaction",
      "Faultline activation"
    ],
    correct: 2,
    explanation: "The primary mechanism for positive diversity effects is the elaboration of task-relevant information."
  },
  {
    topic: "Diverse Teams",
    q: "Which statement about faultlines is true?",
    options: [
      "All teams are diversity-free and therefore faultline-free",
      "All teams are diverse; the real problem is active faultlines (missing shared identity)",
      "Faultlines only occur in top management teams",
      "Faultlines reinforce information elaboration",
      "Faultlines are synonymous with diversity"
    ],
    correct: 1,
    explanation: "All teams are diverse. Diversity itself is not the problem – active faultlines (missing shared identity) are."
  },
  {
    topic: "Diverse Teams",
    q: "Which statement is NOT one of the three main reasons diverse teams fail?",
    options: [
      "Lack of information elaboration",
      "No shared understanding of reality",
      "No shared identity",
      "Too little diversity in the team",
      "Subgroup formation with mistrust and conflict"
    ],
    correct: 3,
    explanation: "Too little diversity is not the reason. The three reasons are: missing information elaboration, missing shared reality understanding, missing shared identity."
  },
  {
    topic: "Diverse Teams",
    q: "Which three main goals should team leaders pursue according to CEM research?",
    options: [
      "Reduce diversity, force consensus, increase performance pressure",
      "Increase information elaboration, create shared reality, build shared identity",
      "Strengthen hierarchy, enforce rules, encourage conformity",
      "Promote individualism, foster competition, compare performance",
      "Run trainings, set diversity quotas, produce reports"
    ],
    correct: 1,
    explanation: "The three leader goals are: information elaboration, shared reality understanding, shared identity."
  },
  {
    topic: "Diverse Teams",
    q: "What does the CEM say about whether diversity is good or bad for teams?",
    options: [
      "Diversity is always good for performance",
      "Diversity is always bad for performance",
      "It depends: diversity has two paths (categorization & elaboration), and moderators decide",
      "Diversity has no effect on performance",
      "Only visible diversity counts"
    ],
    correct: 2,
    explanation: "The CEM is explicitly a contingency model: both paths run in parallel, and moderators like diversity beliefs and task requirements decide the outcome."
  },
  {
    topic: "Diverse Teams",
    q: "Which statement about Diversity Beliefs (Homan et al. 2008) is CORRECT?",
    options: [
      "They are irrelevant to team outcomes",
      "Negative diversity beliefs are better for performance",
      "They are an important moderator: pro-diversity beliefs shift the path toward elaboration",
      "They only matter in homogeneous teams",
      "They are the same as faultlines"
    ],
    correct: 2,
    explanation: "Diversity beliefs are a central moderator in the CEM. Pro-diversity beliefs promote information elaboration."
  },

  // -------- POWER --------
  {
    topic: "Power",
    q: "How is power typically defined in modern research?",
    options: [
      "Formal authority in a hierarchy",
      "Asymmetric control over valuable social resources",
      "Personal charisma",
      "The ability to threaten violence",
      "Wealth and status symbols"
    ],
    correct: 1,
    explanation: "Power = asymmetric control over valuable social resources (Magee & Galinsky 2008). From this follow control and independence."
  },
  {
    topic: "Power",
    q: "What is Pike & Galinsky's central claim about the relationship between power and action?",
    options: [
      "Power presses the gas pedal to act",
      "Power releases the psychological brakes on action",
      "Power and action are independent",
      "Only formal power leads to action",
      "Power generally leads to inactivity"
    ],
    correct: 1,
    explanation: "Power presses NOT the gas pedal — it releases the brakes: less anticipated pain, lower social costs, more goal focus."
  },
  {
    topic: "Power",
    q: "Which statement about the Power-Approach Theory (Keltner 2003) is CORRECT?",
    options: [
      "High power activates the Behavioral Inhibition System",
      "Low power activates the Behavioral Approach System",
      "High power triggers the Approach System with heightened sensitivity to rewards",
      "Power has no influence on approach/inhibition",
      "Approach and inhibition are activated simultaneously"
    ],
    correct: 2,
    explanation: "High power → Approach System (rewards). Low power → Inhibition System (anxiety, avoidance)."
  },
  {
    topic: "Power",
    q: "What did the dice study by Fast, Gruenfeld, Sivanathan & Galinsky (2009) show?",
    options: [
      "Power lowers self-confidence",
      "100% of participants in the power condition chose to roll the dice themselves – power increases illusion of control",
      "Power has no effect on illusion of control",
      "Only the control condition rolled the dice",
      "Powerless people have more control"
    ],
    correct: 1,
    explanation: "100% of the power condition rolled themselves (vs. 58% no-power, 69% control) – clear evidence for elevated illusion of control."
  },
  {
    topic: "Power",
    q: "How does power change social distance (Lammers et al. 2012)?",
    options: [
      "Power lowers social distance, the powerful help more",
      "Power has no effect on social distance",
      "Power increases social distance, mediated by self-sufficiency",
      "Power leads to more conformity",
      "Power leads to stronger bonds with subordinates"
    ],
    correct: 2,
    explanation: "Power → more social distance, mediated by self-sufficiency. The powerful prefer working alone and help less."
  },
  {
    topic: "Power",
    q: "What is the \"Curse of Authenticity\" for career and power?",
    options: [
      "Authenticity always damages self-worth",
      "In the pursuit of authenticity, people avoid networking, flattery, and powerful self-presentation – which lowers influence",
      "Authenticity has only benefits",
      "Authenticity is a form of lying",
      "Authenticity is only valuable in egalitarian cultures"
    ],
    correct: 1,
    explanation: "Authenticity brings closeness and comfort, but showing vulnerability lowers influence, likability, and perceived power."
  },
  {
    topic: "Power",
    q: "What does research say about anger vs. apology as power signals (Tiedens et al.)?",
    options: [
      "Both have identical effects on status perception",
      "Anger appears weak, apology strong",
      "Anger signals competence and leads to more promotions; apology is seen as low-power and lowers status",
      "Anger is only viewed positively in men",
      "Apology comes across likable AND raises status"
    ],
    correct: 2,
    explanation: "Anger = power signal: more promotions and higher salary, but less likable. Apology = low-power behaviour: warm, but lowers influence/status."
  },
  {
    topic: "Power",
    q: "Which body language signals are cross-culturally associated with power (Carney 2020)?",
    options: [
      "Closed posture, quiet voice, many questions",
      "More gestures, open posture, louder voice, more speaking time, statements instead of questions",
      "Constant smiling and short speaking pauses",
      "Direct eye contact only in Western cultures",
      "Exclusively verbal signals"
    ],
    correct: 1,
    explanation: "Carney (2020) meta-analysis: more gestures, open posture, smaller distance, louder voice, more speaking time, statements over questions, more disinhibited laughter, longer gazes."
  },
  {
    topic: "Power",
    q: "What is the \"Paradox of Likability\" according to Susan Fiske?",
    options: [
      "Likability and competence are uncorrelated",
      "Likability and competence are perceived as negatively correlated – those who try too hard to be liked appear less competent",
      "Whoever is competent is automatically likable",
      "Likability is irrelevant in professional life",
      "Whoever appears warm always has more power"
    ],
    correct: 1,
    explanation: "Warmth and competence are objectively independent but are perceived as negatively correlated. Four quadrants: Admiration, Envy, Pity, Contempt."
  },
  {
    topic: "Power",
    q: "What did Belmi & Laurin (2016) show about power strategies?",
    options: [
      "Both classes use politics equally often",
      "The lower class uses politics more actively than the upper class",
      "Both classes view politics as similarly useful, but only the upper class is willing to use it – this is how low power perpetuates itself",
      "Pro-social strategies always lead to more power",
      "Class differences have no effect on power strategies"
    ],
    correct: 2,
    explanation: "Both classes view politics as equally useful (~6/7), but only the upper class actually uses it. The lower class sticks with pro-social → low power perpetuates itself."
  },
  {
    topic: "Power",
    q: "What consequence does power have for perspective taking?",
    options: [
      "Power increases perspective taking",
      "Power reduces perspective taking; the powerful more often suffer the curse of knowledge",
      "Power and perspective taking are independent",
      "Only formal power lowers perspective taking",
      "Perspective taking causes power loss"
    ],
    correct: 1,
    explanation: "The powerful take fewer perspectives and more often fall prey to the curse of knowledge → they underestimate the social costs of their actions."
  },
  {
    topic: "Power",
    q: "Which effect of power on cognition has NOT been documented in the literature?",
    options: [
      "Increased goal focus through reduced distraction",
      "Stronger abstract thinking (Smith & Trope 2006)",
      "Reduced salience of goal-blocking information",
      "Drastically elevated IQ scores in tests",
      "Faster recognition of goal-relevant words"
    ],
    correct: 3,
    explanation: "Power doesn't raise IQ. Documented effects are goal focus, abstract thinking, and reduced inhibition – but no higher IQ."
  },

  // -------- MOTIVATION --------
  {
    topic: "Motivation",
    q: "How is motivation defined?",
    options: [
      "The ability to make quick decisions",
      "The force that energizes, directs, and sustains behaviour",
      "The feeling of satisfaction after success",
      "The willingness to follow orders",
      "An innate trait that cannot be changed"
    ],
    correct: 1,
    explanation: "Motivation = the force that energizes (energy), directs (direction), and sustains (persistence) behaviour."
  },
  {
    topic: "Motivation",
    q: "Which of the following is NOT one of the four drives in the 4-Drives Framework?",
    options: [
      "Drive to Acquire",
      "Drive to Bond",
      "Drive to Compete",
      "Drive to Comprehend",
      "Drive to Defend"
    ],
    correct: 2,
    explanation: "The four drives are Acquire, Bond, Comprehend, Defend. \"Compete\" is not a separate drive – it falls under Acquire (relative comparisons)."
  },
  {
    topic: "Motivation",
    q: "Why does a pay raise have only a limited motivational effect?",
    options: [
      "Because money never plays a role",
      "Because the Drive to Acquire is relative and insatiable – we constantly compare ourselves and want more",
      "Because hygiene factors don't matter",
      "Because salaries are tax-neutralized",
      "Because employees fundamentally reject money"
    ],
    correct: 1,
    explanation: "The Drive to Acquire is relative (comparison with others) and insatiable (always more) → the effect of a raise quickly fades."
  },
  {
    topic: "Motivation",
    q: "What distinguishes Herzberg's hygiene factors from motivators?",
    options: [
      "Hygiene factors motivate, motivators reduce dissatisfaction",
      "Hygiene factors prevent dissatisfaction but don't motivate; motivators generate genuine satisfaction",
      "Both have identical effects",
      "Hygiene factors only matter in manufacturing jobs",
      "Motivators are exclusively monetary"
    ],
    correct: 1,
    explanation: "Hygiene factors (salary, conditions, supervision) prevent dissatisfaction. Motivators (recognition, achievement, growth) generate satisfaction."
  },
  {
    topic: "Motivation",
    q: "Which of the following is NOT a Herzberg motivator?",
    options: [
      "Recognition",
      "Achievement",
      "Salary and Benefits",
      "Advancement",
      "Job Challenge"
    ],
    correct: 2,
    explanation: "Salary and benefits are classic HYGIENE FACTORS, not motivators. Motivators: recognition, achievement, advancement, growth, responsibility, job challenge."
  },
  {
    topic: "Motivation",
    q: "What is the basis of Expectancy Theory (Vroom 1964)?",
    options: [
      "A hierarchy of needs",
      "The multiplication Valence × Instrumentality × Expectancy",
      "The separation of hygiene and motivators",
      "The autonomy of goals",
      "A simple stimulus-response logic"
    ],
    correct: 1,
    explanation: "Vroom's VIE model: motivation results from the product of Valence (value), Instrumentality (performance → reward), and Expectancy (effort → performance)."
  },
  {
    topic: "Motivation",
    q: "Which statement about Goal Setting Theory (Latham & Locke 1991) is CORRECT?",
    options: [
      "Easy goals lead to higher performance than difficult ones",
      "Difficult, specific goals lead to significantly higher performance than easy or abstract ones",
      "Personality has no effect on goal commitment",
      "Goals don't affect effort, only direction",
      "Incentives influence behaviour independently of goals"
    ],
    correct: 1,
    explanation: "Latham & Locke: difficult specific goals lead to higher performance. Personality & incentives operate via goal setting & commitment."
  },
  {
    topic: "Motivation",
    q: "Which three critical psychological states underlie the JCM?",
    options: [
      "Energy, effort, initiative",
      "Direction, effort, persistence",
      "Meaningfulness, responsibility, knowledge of results",
      "Power, affiliation, achievement",
      "Autonomy, competence, relatedness"
    ],
    correct: 2,
    explanation: "JCM principles: intrinsic motivation depends on (1) meaningfulness, (2) responsibility, (3) knowledge of results (visibility of one's own work outcomes)."
  },
  {
    topic: "Motivation",
    q: "What does successful empowerment require?",
    options: [
      "High power distance in the culture",
      "Real autonomy, culture change, employee competence",
      "Strict hierarchy and tight control",
      "Exclusively monetary incentives",
      "Reduction of responsibility"
    ],
    correct: 1,
    explanation: "Empowerment needs real autonomy (often missing), deep culture change, employee knowledge/competence, and low power distance."
  },
  {
    topic: "Motivation",
    q: "Which statement about pay-for-performance is FALSE?",
    options: [
      "Performance must be clearly defined",
      "Pay systems should be adapted to employees' values",
      "You shouldn't rely exclusively on financial motivators",
      "Pay has a limited effect on motivation",
      "Pay is always the most important motivator and outweighs all others"
    ],
    correct: 4,
    explanation: "Exactly that is NOT true: pay has a limited effect – other motivators are often more important. The other four are tips for effective pay-for-performance."
  },
  {
    topic: "Motivation",
    q: "Which outcome variable is NOT typically named as central in motivation theories?",
    options: [
      "Engagement (energy, effort, initiative)",
      "Satisfaction",
      "Commitment (citizenship behaviour)",
      "Intention to Quit",
      "Body Mass Index"
    ],
    correct: 4,
    explanation: "BMI is obviously not a motivation-relevant outcome variable. Engagement, satisfaction, commitment, and intention to quit are the central outcomes."
  },
  {
    topic: "Motivation",
    q: "Which statement about the Drive to Comprehend is CORRECT?",
    options: [
      "It is satisfied by monotonous dead-end jobs",
      "It only relates to academic professions",
      "It is activated by challenging jobs that enable growth and learning",
      "It is the same as the Drive to Acquire",
      "It only matters in school"
    ],
    correct: 2,
    explanation: "Drive to Comprehend = need to understand the world. Activated by challenging, learning-conducive jobs. Frustrated by monotony."
  },
  {
    topic: "Motivation",
    q: "Which type of pay typically operates at the TEAM level?",
    options: [
      "Commissions",
      "Individual bonuses",
      "Compensation tied to team performance",
      "Profit sharing",
      "Stock options"
    ],
    correct: 2,
    explanation: "Team level: tied to team performance. Individual: commissions, bonuses. Organizational: profit sharing, stock options."
  },

  // -------- INTEGRATION / TRANSFER --------
  {
    topic: "Integration",
    q: "Which statement best links power and diversity research?",
    options: [
      "Power and diversity have nothing to do with each other",
      "High-power individuals with reduced perspective taking endanger information elaboration in diverse teams",
      "More power automatically leads to better diversity utilization",
      "Diversity neutralizes power effects",
      "Power lowers faultlines"
    ],
    correct: 1,
    explanation: "Powerful individuals take fewer perspectives (curse of knowledge) – which blocks exactly the kind of information elaboration that makes diverse teams productive."
  },
  {
    topic: "Integration",
    q: "What recommendation follows from Goal Setting + diversity research for team leaders?",
    options: [
      "Set vague goals to include everyone",
      "Set clear, challenging goals AND actively foster information elaboration through perspective diversity",
      "Forgo goals and just create a feel-good atmosphere",
      "Exclude diverse team members from goal setting",
      "Only set easy goals"
    ],
    correct: 1,
    explanation: "Goal Setting (clear, difficult goals) + diversity research (elaboration & shared identity) combine to: clear AND inclusive."
  },
  {
    topic: "Integration",
    q: "Which statement about leadership in diverse, international settings is CORRECT?",
    options: [
      "A universal \"one-size-fits-all\" leadership works worldwide",
      "Effective cross-cultural leadership requires Continuous Learning, Interpersonal Engagement, and Hardiness – plus Cultural Metacognition",
      "Stereotypes should be consistently ignored",
      "Power Distance is identical across all cultures",
      "Emotional Intelligence is only relevant in Western cultures"
    ],
    correct: 1,
    explanation: "International effectiveness requires all three dimensions plus Cultural Metacognition (instead of Cruise Control)."
  },
  {
    topic: "Integration",
    q: "Which recommendation best fits \"power makes the person\" + curse of knowledge?",
    options: [
      "Powerful leaders should actively seek feedback and systematically train perspective taking",
      "Powerful leaders should blindly trust their instincts",
      "Power effects automatically cancel each other out",
      "Empathy is irrelevant for leadership",
      "Hierarchies should be flatter, then the problem disappears"
    ],
    correct: 0,
    explanation: "Since power reduces perspective taking, leaders must consciously take counter-measures: actively seeking feedback, structured perspective taking."
  },
];

/* End of data file */
