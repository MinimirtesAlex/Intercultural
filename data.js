/* =====================================================================
   STUDY HUB DATA
   Karteikarten + Probeklausur-Fragen
   Topics: leadership · culture · diversity · power · motivation
   ===================================================================== */

/* ---------- KARTEIKARTEN ---------- */
const FLASHCARDS = [
  // ============ LEADERSHIP ============
  {
    topic: "leadership",
    tag: "Definition",
    q: "Wie definieren Fischer, Dietz & Antonakis (2017) Leadership?",
    a: "<strong>Leadership = der Prozess, andere zur Erreichung eines Ziels zu beeinflussen.</strong><br><br>Wichtig: Modernes Verständnis sieht Leadership als <strong>wechselseitige Beziehung</strong> zwischen Leader und Follower (bidirektional), nicht als einseitige Top-Down-Beziehung wie früher."
  },
  {
    topic: "leadership",
    tag: "Theorie-Überblick",
    q: "Welche fünf historischen Phasen der Leadership-Forschung gibt es?",
    a: "<ul><li><strong>Post WWI – 60er:</strong> Trait Approach</li><li><strong>60er – 70er:</strong> Behavioural & Style</li><li><strong>70er – 80er:</strong> Contingency</li><li><strong>80er – 90er:</strong> Transformational / Relational</li><li><strong>Heute:</strong> Contemporary (KI, Theory U, Diversität)</li></ul>"
  },
  {
    topic: "leadership",
    tag: "Trait Approach",
    q: "Was ist die Kernannahme des Trait Approach?",
    a: "Leadership ist eine <strong>Eigenschaft, die jemand hat oder nicht hat</strong> – manche Menschen sind „geborene\" Führer.<br><br>Kernfrage: <em>Welche stabilen Persönlichkeitsmerkmale sagen Leadership voraus?</em>"
  },
  {
    topic: "leadership",
    tag: "Big Five (Judge 2002)",
    q: "Welche Big-Five-Traits sagen Leadership Emergence am stärksten voraus?",
    a: "Meta-Analyse von <strong>Judge (2002)</strong>:<ul><li>Conscientiousness: .36</li><li>Extraversion: .30</li><li>Openness: .14</li><li>Agreeableness: −.14</li><li>Emotional Stability: .09</li></ul>Insgesamt erklären die Big Five <strong>28% der Varianz in Leadership Emergence</strong> und 15% in Leadership Effectiveness."
  },
  {
    topic: "leadership",
    tag: "Behavioural Approach",
    q: "Was ist der zentrale Wechsel beim Behavioural Approach gegenüber dem Trait Approach?",
    a: "Statt zu fragen <em>„Wer ist ein Leader?\"</em> fragt man <strong>„Was tun Leader?\"</strong><br><br>Annahmen:<ul><li>Leadership wird durch <strong>Handeln</strong> erzeugt</li><li>Leadership ist <strong>erlernbar</strong></li><li>Fokus auf beobachtbare Verhaltensmuster (Behaviours) und Stile (Styles)</li></ul>"
  },
  {
    topic: "leadership",
    tag: "ILT",
    q: "Was sind Implicit Leadership Theories (ILTs)?",
    a: "ILTs sind <strong>alltägliche mentale Bilder</strong> davon, wie Leader aussehen und sich verhalten (Antonakis & Dalgas 2009).<br><br>Krasses Beispiel: Kinder UND Erwachsene wählten in einer Studie zur französischen Wahl jeweils den späteren Wahlsieger nur basierend auf dem Gesicht – Kinder mit 73%, Erwachsene mit 67% Trefferquote."
  },
  {
    topic: "leadership",
    tag: "Drei Prinzipien",
    q: "Was sind die drei universellen Prinzipien moderner Leadership?",
    a: "<ol><li><strong>Balance zwischen Constraints und Freedom</strong> – directive Leadership, Ziele, Regeln vs. Authentizität, Kreativität, Empowerment</li><li><strong>Shared Identity schaffen</strong> – Wir-Gefühl, gemeinsame Identität</li><li><strong>Closeness und Openness fördern</strong> – Nähe und Offenheit</li></ol>"
  },
  {
    topic: "leadership",
    tag: "Social Identity Theory",
    q: "Was sagt die Social Identity Theory über Leadership?",
    a: "<ol><li>Wir definieren uns über <strong>Ähnlichkeiten und Unterschiede</strong> zu anderen → unser Selbstwert hängt am Schicksal der Gruppe (Self-Enhancement)</li><li>Soziale Identität ist die <strong>Basis für gemeinsames soziales Handeln</strong></li></ol>Implikation: Effektive Leader stärken eine <strong>geteilte Identität</strong>, weil sie gemeinsames Handeln ermöglicht."
  },

  // ============ CULTURE / GLOBAL LEADERS ============
  {
    topic: "culture",
    tag: "Drei Programmierungs-Ebenen",
    q: "Welche drei Ebenen mentaler Programmierung gibt es nach Hofstedes Modell?",
    a: "<ol><li><strong>Human Nature</strong> – ererbt, universell für alle Menschen</li><li><strong>Culture</strong> – erlernt, spezifisch für eine Gruppe (mittlere Ebene)</li><li><strong>Personality</strong> – sowohl ererbt als auch gelernt, einzigartig pro Individuum</li></ol>"
  },
  {
    topic: "culture",
    tag: "Hofstede Dimensionen",
    q: "Welche sechs kulturellen Dimensionen unterscheidet Hofstede?",
    a: "<ol><li><strong>Power Distance</strong> – egalitär vs. hierarchisch</li><li><strong>Individualism vs. Collectivism</strong></li><li><strong>Uncertainty Avoidance</strong> – Komfort mit Unsicherheit</li><li><strong>Masculinity vs. Femininity</strong> – Power vs. Nurture</li><li><strong>Long- vs. Short-Term Orientation</strong></li><li><strong>Indulgence vs. Restraint</strong></li></ol>"
  },
  {
    topic: "culture",
    tag: "Kluckhohn & Strodtbeck",
    q: "Welche fünf Grundorientierungen unterscheiden Kluckhohn & Strodtbeck (1961)?",
    a: "<ol><li><strong>Human Nature</strong>: Evil – Mixed – Good</li><li><strong>Relationship to Nature</strong>: Mastery – Harmony – Submission</li><li><strong>Time</strong>: Past – Present – Future</li><li><strong>Activity</strong>: Being – Becoming – Doing</li><li><strong>Space</strong>: Public – Mixed – Private</li></ol>"
  },
  {
    topic: "culture",
    tag: "Internationale Effektivität",
    q: "Welche drei Dimensionen kennzeichnen internationale Effektivität?",
    a: "<ol><li><strong>Continuous Learning</strong> – Exploration, Self-Awareness</li><li><strong>Interpersonal Engagement</strong> – Global Mindset, Relationship Interest</li><li><strong>Hardiness</strong> – Positive Regard, Resilience</li></ol><br>Wer auf allen drei hoch ist = <strong>„Globalist\"</strong> (eher selten)."
  },
  {
    topic: "culture",
    tag: "Cruise Control",
    q: "Was bedeutet „Cultural Cruise Control\" und was ist die Gefahr?",
    a: "<strong>Verhalten auf Basis eingebauter kultureller Annahmen</strong>, während andere kulturelle Signale ignoriert werden.<br><br>Hauptmechanismus: <strong>Stereotype</strong>. Funktionen sind nützlich (schnelle Verarbeitung, Vorhersagen), aber im Cruise-Control-Modus filtert man alles aus, was nicht zu den Annahmen passt → Fehler in interkultureller Führung."
  },
  {
    topic: "culture",
    tag: "Cultural Metacognition",
    q: "Was ist Cultural Metacognition und wozu ist sie nützlich?",
    a: "<strong>Bewusstheit über die eigenen Stereotype, Gedanken und Einstellungen</strong> – plus die Fähigkeit, sie aktiv zu managen.<br><br>Sie ermöglicht den <strong>adaptiven Einsatz</strong> von Stereotypen in interkulturellen Settings (statt Cruise Control). Zugang u.a. über Perspective Taking."
  },
  {
    topic: "culture",
    tag: "Emotionale Intelligenz",
    q: "Aus welchen vier Komponenten besteht Emotionale Intelligenz?",
    a: "<ol><li>Eigene Emotionen <strong>verstehen</strong></li><li>Eigene Emotionen <strong>managen</strong></li><li>Emotionen anderer <strong>verstehen</strong></li><li>Emotionen anderer <strong>managen</strong></li></ol>"
  },
  {
    topic: "culture",
    tag: "EASI Model",
    q: "Was sagt das EASI Model (Van Kleef 2009) über Emotionen?",
    a: "<strong>Emotions As Social Information</strong>:<ul><li>Emotionale Ausdrücke vermitteln Informationen über Gedanken, Gefühle und Absichten einer Person</li><li>Emotionen rufen <strong>komplementäre oder reziproke Emotionen</strong> bei anderen hervor</li><li>→ Emotionen sind eine <strong>Quelle von Einfluss</strong> in Gruppen (z.B. Manager, die fake-Wut zeigen, um Untergebene zu beeinflussen – Cote & Hideg 2011)</li></ul>"
  },
  {
    topic: "culture",
    tag: "Hofstede-Limitationen",
    q: "Welche drei zentralen Limitationen hat die Hofstede-Forschung?",
    a: "<ol><li><strong>Subkulturen</strong>: Länder haben große geografische und gruppenbezogene Subkulturen, die Hofstede ignoriert</li><li><strong>Sample-Probleme</strong>: viele Studien nutzen begrenzte Samples mit wenigen Ländern</li><li><strong>Aggregations-Problem</strong>: Länderdurchschnitte verdecken individuelle Unterschiede – Manager dürfen die einzigartigen Werte einzelner Personen nicht aus dem Blick verlieren</li></ol>"
  },

  // ============ DIVERSE TEAMS ============
  {
    topic: "diversity",
    tag: "Definition",
    q: "Wie definieren Van Knippenberg et al. (2004) Diversity?",
    a: "<em>„Eigenschaft einer sozialen Gruppe, die den Grad der <strong>objektiven oder subjektiven Unterschiede</strong> zwischen den Mitgliedern reflektiert.\"</em><br><br>Wichtig: Es geht nicht nur um sichtbare Unterschiede – auch Werte, Wissen, Erfahrungen zählen."
  },
  {
    topic: "diversity",
    tag: "Zwei Perspektiven",
    q: "Was sagen die optimistische und die pessimistische Perspektive auf Diversity?",
    a: "<strong>Optimistisch:</strong><ul><li>Mehr Wissen, Perspektiven, Netzwerke</li><li>Bessere Problemlösung, Entscheidungen, Kreativität, Innovation</li><li>Diversity → <em>Information Processing</em> → + Effektivität</li></ul><strong>Pessimistisch:</strong><ul><li>Soziale Kategorisierung (Wir-vs.-Sie)</li><li>Intergruppen-Bias zugunsten der Eigengruppe</li><li>Diversity → <em>Categorization & Bias</em> → − Effektivität</li></ul>"
  },
  {
    topic: "diversity",
    tag: "CEM Modell",
    q: "Was ist das Categorization-Elaboration Model (CEM)?",
    a: "Kontingenz-Modell: Diversity wirkt über <strong>zwei parallele Prozesse</strong>:<ol><li><strong>Soziale Kategorisierung</strong> → Intergroup Bias / affektive Reaktion (negativ)</li><li><strong>Elaboration aufgabenbezogener Information</strong> → Performance (positiv)</li></ol>Welcher Pfad dominiert, hängt von <strong>Moderatoren</strong> ab: Saliency, Diversity Beliefs, Task Requirements."
  },
  {
    topic: "diversity",
    tag: "CEM Prinzipien",
    q: "Was sind die drei Kernprinzipien des CEM?",
    a: "<ol><li>Der zentrale Mechanismus <strong>positiver Diversity-Effekte</strong> ist die <strong>Elaboration aufgabenbezogener Information</strong></li><li><strong>Jeder Diversity-Typ</strong> kann sowohl Information Processing ALS AUCH Kategorisierung auslösen</li><li>Der Effekt von Diversity hängt von <strong>Moderatoren</strong> ab → Diversity ist gestaltbar!</li></ol>"
  },
  {
    topic: "diversity",
    tag: "Faultlines",
    q: "Was sind Faultlines und warum sind sie das eigentliche Problem?",
    a: "<strong>Faultlines</strong> = hypothetische Trennlinien, die ein Team in Subgruppen aufspalten (basierend auf mehreren überlappenden Merkmalen).<br><br>Take-away: <strong>Alle Teams sind divers – Diversity an sich ist nicht das Problem.</strong> Das Problem sind <strong>aktive Faultlines</strong> (fehlende geteilte Identität)."
  },
  {
    topic: "diversity",
    tag: "Warum Teams scheitern",
    q: "Aus welchen drei Gründen scheitern diverse Teams häufig?",
    a: "<ol><li><strong>Mangel an Information Elaboration</strong> – kein Wissensaustausch, oberflächliches Teilen, Zurückhaltung</li><li><strong>Kein gemeinsames Realitätsverständnis</strong> – fehlende Shared Mental Models, Ziel-Misalignment</li><li><strong>Keine geteilte Identität</strong> – Subgruppen, Misstrauen, Konflikt</li></ol>"
  },
  {
    topic: "diversity",
    tag: "Drei Leader-Ziele",
    q: "Auf welche drei Hauptziele sollten Team-Leader laut Diversity-Forschung fokussieren?",
    a: "<ol><li><strong>Information Elaboration erhöhen</strong></li><li>Ein <strong>geteiltes Realitätsverständnis</strong> schaffen</li><li>Eine <strong>geteilte Identität</strong> schaffen</li></ol>Damit lässt sich das <em>Promise of Diversity</em> einlösen, das Teams sonst oft verfehlen."
  },
  {
    topic: "diversity",
    tag: "Diversity Beliefs",
    q: "Was sind Diversity Beliefs und warum sind sie wichtig (Homan et al. 2008)?",
    a: "<strong>Diversity Beliefs</strong> = wie positiv/negativ Teammitglieder Diversity bewerten.<br><br>Sie sind ein zentraler <strong>Moderator</strong> im CEM: Pro-Diversity-Beliefs verschieben den Pfad in Richtung Elaboration und positive Outcomes – auch bei objektiv hoher Diversity."
  },

  // ============ POWER ============
  {
    topic: "power",
    tag: "Definition",
    q: "Wie wird Power in der modernen Forschung definiert?",
    a: "<strong>Power = asymmetrische Kontrolle über wertvolle soziale Ressourcen</strong> (Magee & Galinsky 2008).<br><br>Power gibt per Definition <strong>Kontrolle und Unabhängigkeit</strong> – das ist die Basis für sämtliche Effekte (Action, Optimismus, weniger Perspective Taking)."
  },
  {
    topic: "power",
    tag: "Power → Action",
    q: "Was ist die zentrale Aussage von Pike & Galinsky zu „Power leads to action\"?",
    a: "Power führt nicht zu Action, weil sie aufs <strong>Gaspedal</strong> drückt – sondern weil sie die <strong>psychologischen Bremsen löst</strong>.<br><br>Drei Mechanismen:<ol><li>Power reduziert den <strong>antizipierten Schmerz von Misserfolg</strong></li><li>Power <strong>verschleiert</strong> die wahrgenommenen sozialen Kosten von Handeln</li><li>Power <strong>fokussiert den Geist</strong> auf Ziele</li></ol>"
  },
  {
    topic: "power",
    tag: "Approach-Inhibition",
    q: "Was sagt die Power-Approach Theory (Keltner 2003)?",
    a: "<strong>High Power</strong> aktiviert das <strong>Behavioral Approach System</strong>:<ul><li>Erhöhte Sensibilität für Belohnungen (Essen, Erfolg, Sex, soziale Bindung)</li></ul><strong>Low Power</strong> aktiviert das <strong>Behavioral Inhibition System</strong>:<ul><li>Angst, Vermeidung, Hemmung von Reaktionen</li></ul>Daraus folgen drei Vorhersagen: Power beeinflusst soziale Aufmerksamkeit, „macht\" die Person und „enthüllt\" sie."
  },
  {
    topic: "power",
    tag: "Curse of Knowledge",
    q: "Was ist der „Curse of Knowledge\" bei Mächtigen?",
    a: "Mächtige Personen sind <strong>weniger fähig, die Perspektive anderer einzunehmen</strong> und das Wissen anderer korrekt einzuschätzen.<br><br>Folge: Sie unterschätzen die <strong>sozialen Kosten</strong> ihres Handelns – was Action begünstigt, aber zu egozentrischem Verhalten führt."
  },
  {
    topic: "power",
    tag: "Power makes the person",
    q: "Was bedeutet „Power makes the person\"?",
    a: "Macht <strong>verändert</strong> Verhalten und Wahrnehmung:<ul><li>Erhöht <strong>Illusion of Control</strong> (Fast et al. 2009 – „Würfel-Studie\": 100% wählten in Power-Bedingung, selbst zu würfeln)</li><li>Erhöht <strong>assertives Handeln</strong> (Galinsky 2003 „Fan-Studie\")</li><li>Erhöht Optimismus & Risk-Taking</li><li>Fokus auf Belohnungen, weniger auf Bedrohungen</li><li>Erhöht <strong>abstraktes Denken</strong> (Smith & Trope 2006)</li></ul>"
  },
  {
    topic: "power",
    tag: "Power → Social Distance",
    q: "Wie verändert Power soziale Distanz (Lammers et al. 2012)?",
    a: "Power führt zu <strong>größerer sozialer Distanz</strong>:<ul><li>Stärkere Präferenz, allein zu arbeiten</li><li>Geringere Bereitschaft, anderen zu helfen</li></ul>Mediator: <strong>Self-Sufficiency</strong> – Mächtige fühlen sich autark und brauchen andere weniger."
  },
  {
    topic: "power",
    tag: "Curse of Authenticity",
    q: "Warum ist „Authentisch sein\" für Karriere und Power problematisch?",
    a: "Im Streben nach Authentizität vermeiden Menschen oft:<ul><li>Networking</li><li>Einflussreiche schmeicheln</li><li>Sich kraftvoll präsentieren</li><li>Nach Ressourcen fragen</li></ul>Authentizität & Verletzlichkeit haben Vorteile (Closeness, Komfort) – aber auch Nachteile: <strong>weniger Einfluss, weniger Sympathie, weniger Power-Wahrnehmung</strong>."
  },
  {
    topic: "power",
    tag: "Apology vs. Anger",
    q: "Welche Power-Wirkung haben Wut vs. Entschuldigung (Tiedens et al.)?",
    a: "<strong>Wut</strong> – Power-Emotion:<ul><li>Vermittelt Kompetenz</li><li>Führt zu mehr Beförderungen, höherem Gehalt</li><li>Wird aber als weniger sympathisch / kalt wahrgenommen</li></ul><strong>Apology</strong> – Low-Power-Verhalten:<ul><li>Wirkt warm und sympathisch</li><li>Verbindet einen aber mit dem Fehlverhalten</li><li>Senkt Einfluss, Status, Prestige</li><li>Nützlich, wenn man sich von der Tat distanzieren kann</li></ul>"
  },
  {
    topic: "power",
    tag: "Body Language",
    q: "Welche körpersprachlichen Signale sind über Kulturen hinweg mit Power assoziiert (Carney 2020)?",
    a: "<ul><li>Mehr <strong>Gesten</strong>, kontrollierte Arm- & Handbewegungen</li><li><strong>Offene Körperhaltung</strong></li><li>Geringere interpersonale Distanz</li><li><strong>Lautere Stimme</strong>, mehr Sprechzeit, längere Blicke</li><li>Erfolgreichere <strong>Unterbrechungen</strong> anderer</li><li><strong>Aussagen</strong> statt Fragen</li><li>Mehr enthemmtes Lachen</li><li>Wiederholung von Ideen</li></ul>"
  },
  {
    topic: "power",
    tag: "Paradox of Likability",
    q: "Was ist das „Paradox of Likability\" (Susan Fiske)?",
    a: "Menschen werden auf zwei Dimensionen beurteilt: <strong>Wärme</strong> und <strong>Kompetenz</strong> – die als <strong>negativ korreliert</strong> wahrgenommen werden.<br><br>Vier Felder:<ul><li><strong>Admiration:</strong> hohe Wärme + hohe Kompetenz (Freunde)</li><li><strong>Envy:</strong> niedrige Wärme + hohe Kompetenz (reiche Profis)</li><li><strong>Pity:</strong> hohe Wärme + niedrige Kompetenz</li><li><strong>Contempt:</strong> niedrige Wärme + niedrige Kompetenz</li></ul>Wer zu sehr gemocht werden will, wirkt weniger kompetent."
  },
  {
    topic: "power",
    tag: "Belmi & Laurin (2016)",
    q: "Welche zwei Strategien zum Power-Erwerb gibt es – und wer nutzt was?",
    a: "<strong>Pro-Social</strong>: hart arbeiten, anderen helfen, kollektivem Wohl beitragen.<br><strong>Politics</strong>: strategisches Verhalten, Schmeichelei, Networking, Self-Promotion.<br><br>Befund: Beide Klassen halten Politics für gleich nützlich (~6/7) – aber <strong>nur die Oberklasse ist bereit, Politics zu nutzen</strong>. Untere Klasse bleibt bei Pro-Social → <strong>Low Power perpetuates itself</strong>."
  },

  // ============ MOTIVATION ============
  {
    topic: "motivation",
    tag: "Definition",
    q: "Wie wird Motivation definiert?",
    a: "<strong>Motivation = die Kraft, die Verhalten energetisiert, lenkt und aufrechterhält.</strong><br><br>Wichtige Outcomes:<ul><li><strong>Engagement</strong> – Energie, Effort, Initiative</li><li><strong>Satisfaction</strong> – Erwartungen erfüllt</li><li><strong>Commitment</strong> – Citizenship Behavior</li><li><strong>Intention to Quit</strong> – Proxy für Fluktuation</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Intrinsisch vs. Extrinsisch",
    q: "Worin unterscheiden sich intrinsische und extrinsische Motivation?",
    a: "<strong>Intrinsisch</strong> = innere Einflüsse:<ul><li>Persönlichkeit, Emotionen, Bedürfnisse, Ziele, Werte</li></ul><strong>Extrinsisch</strong> = äußere Einflüsse:<ul><li>Belohnungen, Bestrafungen, Empowerment, Anerkennung</li><li>Arbeitscharakteristika, Zielsetzung, Pausen, Offenheit</li></ul>"
  },
  {
    topic: "motivation",
    tag: "4-Drives Framework",
    q: "Welche vier Drives liegen Motivation laut Lawrence & Nohria zugrunde?",
    a: "<ol><li><strong>Drive to Acquire</strong> – knappe Güter, die Wohlbefinden steigern (relativ, unstillbar)</li><li><strong>Drive to Bond</strong> – soziale Bindung</li><li><strong>Drive to Comprehend</strong> – Sinn machen, lernen, herausgefordert sein</li><li><strong>Drive to Defend</strong> – sich und Eigenes schützen</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Drive to Acquire",
    q: "Warum hat Gehaltserhöhung nur begrenzten Motivations-Effekt?",
    a: "Der <strong>Drive to Acquire</strong> ist:<ul><li><strong>Relativ</strong> – wir vergleichen uns mit anderen → Befriedigung erfordert <em>mehr</em> als andere</li><li><strong>Unstillbar</strong> – wir wollen ständig mehr</li></ul>Daher verpufft eine Gehaltserhöhung schnell – kompensiert durch neuen Vergleichsmaßstab."
  },
  {
    topic: "motivation",
    tag: "Drive to Comprehend",
    q: "Wie aktiviert man den Drive to Comprehend bei der Arbeit?",
    a: "Menschen haben das Bedürfnis, die Welt zu <strong>verstehen</strong>:<ul><li><strong>Motivation:</strong> wenn Handlungen und Reaktionen sinnvoll erscheinen</li><li>Fördernd: <strong>herausfordernde Jobs</strong>, die Wachstum & Lernen ermöglichen</li><li>Frustrierend: monotone Sackgassen-Jobs</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Herzberg",
    q: "Was unterscheidet Hygienefaktoren von Motivatoren bei Herzberg?",
    a: "Herzberg: <em>„Wann fühlen Sie sich positiv im Job?\"</em> (203 Buchhalter & Ingenieure)<br><br><strong>Hygienefaktoren / Dissatisfiers</strong> – verhindern Unzufriedenheit, motivieren aber nicht:<ul><li>Arbeitsbedingungen, Policies, Gehalt, Supervision, Status, Job Security, Kollegen, Privatleben</li></ul><strong>Motivatoren</strong> – erzeugen echte Zufriedenheit:<ul><li>Recognition, Achievement, Advancement, Growth, Responsibility, Job Challenge</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Expectancy Theory",
    q: "Worauf basiert die Expectancy Theory (Vroom 1964)?",
    a: "Motivation = <strong>Valence × Instrumentality × Expectancy</strong> (VIE)<ul><li><strong>Expectancy:</strong> „Führt mein Effort zu Performance?\"</li><li><strong>Instrumentality:</strong> „Führt Performance zur Belohnung?\"</li><li><strong>Valence:</strong> „Ist die Belohnung wertvoll für mich?\"</li></ul>Implikationen:<ol><li>Effort-Performance-Link sichtbar machen</li><li>Erforschen, welche Belohnungen tatsächlich gewünscht sind</li><li>Erwartungen klären und belohnen</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Goal Setting",
    q: "Was sagt die Goal Setting Theory (Latham & Locke 1991)?",
    a: "<ol><li><strong>Schwierige spezifische Ziele</strong> führen zu signifikant höherer Performance als einfache oder abstrakte Ziele</li><li>Je <strong>höher das Ziel</strong>, desto höher die Performance</li><li>Persönlichkeit & Anreize wirken über <strong>Goal Setting & Goal Commitment</strong></li><li>Ziele haben <strong>kognitive Wirkung</strong> (Direction, Effort, Persistence, Task Strategies)</li></ol>"
  },
  {
    topic: "motivation",
    tag: "JCM",
    q: "Auf welchen drei psychologischen Zuständen basiert das Job Characteristics Model?",
    a: "Intrinsische Motivation hängt ab von:<ol><li>Wie <strong>bedeutungsvoll</strong> der Job ist (Meaningfulness)</li><li>Wie viel <strong>Verantwortung</strong> die Person trägt</li><li>Wie sehr die Person <strong>Ergebnisse ihrer Arbeit sieht</strong> (Knowledge of Results)</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Pay Levels",
    q: "Welche drei Ebenen leistungsbezogener Bezahlung gibt es?",
    a: "<ol><li><strong>Individual Level</strong> – Provisionen, Boni</li><li><strong>Team Level</strong> – an Teamperformance gekoppelt</li><li><strong>Organizational Level</strong> – Profit Sharing, Stock Options</li></ol>"
  },
  {
    topic: "motivation",
    tag: "Pay-for-Motivation Tipps",
    q: "Wie macht man „Pay for Motivation\" wirksam?",
    a: "<ol><li><strong>Performance klar definieren</strong></li><li>Pay-Systeme an die <strong>Werte der Mitarbeiter</strong> anpassen</li><li><strong>Nicht nur</strong> auf finanzielle Motivatoren setzen</li><li>Einsehen: Pay hat einen <strong>begrenzten Effekt</strong></li></ol>"
  },
  {
    topic: "motivation",
    tag: "Empowerment",
    q: "Welche Voraussetzungen braucht erfolgreiches Empowerment?",
    a: "Beispiele: Participative Management, Repräsentative Beteiligung. Mixed Results, weil:<ul><li>Leadership oft <strong>keine echte Autonomie</strong> gewährt</li><li>Erfordert tiefen <strong>Kulturwandel</strong></li><li>Mitarbeiter brauchen <strong>Wissen & Kompetenz</strong></li><li>Kultur muss niedrige <strong>Power Distance</strong> erlauben</li></ul>"
  },
  {
    topic: "motivation",
    tag: "Conclusions",
    q: "Was sind die zentralen praktischen Schlussfolgerungen aus Motivationstheorien?",
    a: "<ul><li>Nicht alle Mitarbeiter sind gleich motivierbar – Persönlichkeit/Werte/Einstellungen zählen</li><li>Basisbedürfnisse befriedigen (Hygienefaktoren!)</li><li>Effort-Performance-Verbindung sichtbar machen</li><li>Erforschen, welche Belohnungen wirklich geschätzt werden</li><li><strong>Klar und herausfordernd</strong> sein</li><li>Mitarbeiter <strong>partizipieren</strong> lassen</li><li>Arbeit gut <strong>designen</strong></li><li><strong>Feedback</strong> geben und Erfolge anerkennen</li></ul>"
  },
];

/* ---------- PROBEKLAUSUR-FRAGEN ---------- */
/* correct = Index der richtigen Antwort (0-4)                            */
const QUESTION_BANK = [
  // -------- LEADERSHIP --------
  {
    topic: "Leadership",
    q: "Wie definieren Fischer, Dietz & Antonakis (2017) Leadership?",
    options: [
      "Die Fähigkeit einer Person, andere zu kontrollieren",
      "Der Prozess, andere zur Erreichung eines Ziels zu beeinflussen",
      "Die formale Autorität in einer Organisation",
      "Eine angeborene Persönlichkeitseigenschaft",
      "Die Position innerhalb einer Hierarchie"
    ],
    correct: 1,
    explanation: "Leadership ist laut Fischer et al. der Prozess, andere zur Zielerreichung zu beeinflussen. Modernes Verständnis ist bidirektional zwischen Leader und Follower."
  },
  {
    topic: "Leadership",
    q: "Welcher Big-Five-Trait sagt nach Judge (2002) Leadership Emergence am stärksten voraus?",
    options: [
      "Emotional Stability (.09)",
      "Agreeableness (−.14)",
      "Openness (.14)",
      "Conscientiousness (.36)",
      "Extraversion (.30)"
    ],
    correct: 3,
    explanation: "Conscientiousness hat mit .36 den höchsten Koeffizienten für Leadership Emergence. Extraversion folgt mit .30."
  },
  {
    topic: "Leadership",
    q: "Was ist die Kernfrage des Behavioural Approach?",
    options: [
      "Welche Eigenschaften haben Leader?",
      "Was tun Leader?",
      "In welchem Kontext führt welcher Stil?",
      "Wie inspirieren Leader Wandel?",
      "Welche Beziehung haben Leader zu Followern?"
    ],
    correct: 1,
    explanation: "Der Behavioural Approach fragt: Was tun Leader? Annahme: Leadership wird durch Handeln erzeugt und ist erlernbar."
  },
  {
    topic: "Leadership",
    q: "Welche Aussage zu Implicit Leadership Theories (ILTs) ist korrekt?",
    options: [
      "Sie werden in Manager-Trainings explizit vermittelt",
      "Sie sind alltägliche mentale Bilder davon, wie Leader sind und sich verhalten",
      "Sie beschreiben formale Job-Rollen in Organisationen",
      "Sie gelten nur für Erwachsene, nicht für Kinder",
      "Sie wurden von Antonakis & Dalgas widerlegt"
    ],
    correct: 1,
    explanation: "ILTs sind alltägliche mentale Bilder von Leadern. Antonakis & Dalgas (2009) zeigten, dass selbst Kinder mit 73% Trefferquote Wahlsieger nur am Gesicht erkennen."
  },
  {
    topic: "Leadership",
    q: "Welche drei Prinzipien gelten als universelle Säulen moderner Leadership?",
    options: [
      "Vision, Charisma, Kontrolle",
      "Trait, Behaviour, Contingency",
      "Balance Constraints/Freedom, Shared Identity, Closeness/Openness",
      "Macht, Status, Hierarchie",
      "Authentizität, Transparenz, Gerechtigkeit"
    ],
    correct: 2,
    explanation: "Die drei universellen Prinzipien sind: Balance zwischen Constraints und Freedom, geteilte Identität schaffen, Nähe und Offenheit fördern."
  },
  {
    topic: "Leadership",
    q: "Welche Aussage zur Social Identity Theory ist FALSCH?",
    options: [
      "Wir definieren uns über Ähnlichkeiten und Unterschiede zu anderen",
      "Unser Selbstwert hängt am Schicksal der Gruppe",
      "Soziale Identität ist die Basis für gemeinsames soziales Handeln",
      "Soziale Identität spielt keine Rolle für Leadership",
      "Es gibt eine Motivation zur Self-Enhancement"
    ],
    correct: 3,
    explanation: "Soziale Identität ist gerade ZENTRAL für Leadership – sie ist eine der drei universellen Säulen."
  },
  {
    topic: "Leadership",
    q: "In welcher historischen Phase der Leadership-Forschung dominierte der Trait Approach?",
    options: [
      "Aktuell (Contemporary)",
      "80er–90er",
      "70er–80er",
      "60er–70er",
      "Post WWI bis 60er"
    ],
    correct: 4,
    explanation: "Der Trait Approach dominierte von Post WWI bis in die 60er Jahre."
  },

  // -------- CULTURE / GLOBAL LEADERS --------
  {
    topic: "Culture",
    q: "Welche der folgenden ist KEINE der sechs Hofstede-Dimensionen?",
    options: [
      "Power Distance",
      "Individualism vs. Collectivism",
      "Tightness vs. Looseness",
      "Uncertainty Avoidance",
      "Long-term vs. Short-term Orientation"
    ],
    correct: 2,
    explanation: "Tightness/Looseness stammt von Gelfand, nicht von Hofstede. Hofstedes sechs Dimensionen sind: Power Distance, Individualism, Masculinity, Uncertainty Avoidance, Long-term Orientation, Indulgence."
  },
  {
    topic: "Culture",
    q: "Was ist „Cultural Cruise Control\"?",
    options: [
      "Ein Diversity-Training für Führungskräfte",
      "Verhalten auf Basis eingebauter kultureller Annahmen, ohne andere kulturelle Signale zu beachten",
      "Eine Methode zur kulturellen Kalibrierung",
      "Die Fähigkeit, sich an jede Kultur anzupassen",
      "Ein Kommunikationsstil in High-Context-Kulturen"
    ],
    correct: 1,
    explanation: "Cultural Cruise Control = Verhalten auf Basis mentaler kultureller Programmierung, während andere Signale ignoriert werden – z.B. das blinde Anwenden von Stereotypen."
  },
  {
    topic: "Culture",
    q: "Welche drei Dimensionen kennzeichnen internationale Effektivität?",
    options: [
      "Wissen, Können, Wollen",
      "Continuous Learning, Interpersonal Engagement, Hardiness",
      "Power, Status, Prestige",
      "Authentizität, Transparenz, Empathie",
      "Direction, Effort, Persistence"
    ],
    correct: 1,
    explanation: "Continuous Learning, Interpersonal Engagement und Hardiness. Wer auf allen drei hoch ist, gilt als „Globalist\"."
  },
  {
    topic: "Culture",
    q: "Was ist die zentrale Idee des EASI Models (Van Kleef 2009)?",
    options: [
      "Emotionen sind universell und kulturunabhängig",
      "Emotionen vermitteln Information und beeinflussen so andere – sie sind eine Quelle von Einfluss",
      "Emotionen sollten am Arbeitsplatz unterdrückt werden",
      "Emotionen sind nur für Frauen leadership-relevant",
      "Emotionen werden durch Kultur vollständig bestimmt"
    ],
    correct: 1,
    explanation: "EASI = Emotions As Social Information. Emotionsausdrücke vermitteln Informationen und rufen komplementäre/reziproke Emotionen hervor → Emotionen sind eine Influence-Quelle."
  },
  {
    topic: "Culture",
    q: "Welche Aussage zu Kluckhohn & Strodtbecks Modell ist KORREKT?",
    options: [
      "Es enthält nur drei Grundorientierungen",
      "„Mode of Activity\" unterscheidet Being, Becoming und Doing",
      "Es ersetzt Hofstedes Modell vollständig",
      "Es wurde 1991 entwickelt",
      "Es kennt keine Zeitdimension"
    ],
    correct: 1,
    explanation: "Kluckhohn & Strodtbeck (1961) unterscheiden fünf Grundorientierungen, davon „Mode of Activity\" mit Being, Becoming und Doing."
  },
  {
    topic: "Culture",
    q: "Welche Aussage zu Stereotypen entspricht der Vorlesung?",
    options: [
      "Stereotype sind grundsätzlich nutzlos",
      "Stereotype können nicht neutral sein, sie sind immer negativ",
      "Stereotype haben Funktionen wie schnelle Informationsverarbeitung und Vorhersagen, sind aber im Cruise-Control-Modus problematisch",
      "Cultural Metacognition verstärkt das blinde Vertrauen in Stereotype",
      "Stereotype sind nur in homogenen Kulturen relevant"
    ],
    correct: 2,
    explanation: "Stereotype haben legitime Funktionen (schnelle Verarbeitung, Vorhersagen). Problematisch werden sie im Cruise-Control-Modus. Cultural Metacognition ermöglicht ihre adaptive Nutzung."
  },
  {
    topic: "Culture",
    q: "Welche Limitation der Hofstede-Forschung ist KEIN Kritikpunkt?",
    options: [
      "Länder haben Subkulturen, die unberücksichtigt bleiben",
      "Manager dürfen individuelle Werte nicht aus dem Blick verlieren",
      "Begrenzte Samples mit wenigen Ländern",
      "Hofstede ignoriert die Existenz von Kultur insgesamt",
      "Länderdurchschnitte verdecken individuelle Unterschiede"
    ],
    correct: 3,
    explanation: "Hofstede ignoriert Kultur natürlich nicht – im Gegenteil. Die anderen Punkte sind tatsächliche Kritikpunkte."
  },
  {
    topic: "Culture",
    q: "Auf welcher Ebene findet sich „Culture\" in der Drei-Ebenen-Programmierung?",
    options: [
      "Auf der breitesten Ebene (universell)",
      "Auf der schmalsten Ebene (individuell)",
      "Auf der mittleren Ebene zwischen Human Nature und Personality",
      "Culture ist keine Ebene in diesem Modell",
      "Auf allen Ebenen gleichermaßen"
    ],
    correct: 2,
    explanation: "Mittlere Ebene: Universell ist Human Nature, individuell ist Personality, dazwischen liegt Culture (gruppenspezifisch, gelernt)."
  },

  // -------- DIVERSE TEAMS --------
  {
    topic: "Diverse Teams",
    q: "Welcher Mechanismus liegt nach dem CEM den POSITIVEN Diversity-Effekten zugrunde?",
    options: [
      "Soziale Kategorisierung",
      "Intergroup Bias",
      "Elaboration aufgabenbezogener Information",
      "Affektive Reaktion",
      "Faultline-Aktivierung"
    ],
    correct: 2,
    explanation: "Der primäre Mechanismus positiver Diversity-Effekte ist die Elaboration aufgabenbezogener Information."
  },
  {
    topic: "Diverse Teams",
    q: "Welche Aussage zu Faultlines stimmt?",
    options: [
      "Alle Teams sind diversitätsfrei und damit faultline-frei",
      "Alle Teams sind divers; das eigentliche Problem sind aktive Faultlines (fehlende geteilte Identität)",
      "Faultlines treten nur in Top-Management-Teams auf",
      "Faultlines verstärken Information Elaboration",
      "Faultlines sind synonym mit Diversity"
    ],
    correct: 1,
    explanation: "Alle Teams sind divers. Diversity an sich ist nicht das Problem – aktive Faultlines (fehlende Shared Identity) sind es."
  },
  {
    topic: "Diverse Teams",
    q: "Welche Aussage gehört NICHT zu den drei Hauptgründen, warum diverse Teams scheitern?",
    options: [
      "Mangel an Information Elaboration",
      "Kein gemeinsames Realitätsverständnis",
      "Keine geteilte Identität",
      "Zu wenig Diversität im Team",
      "Subgruppenbildung mit Misstrauen und Konflikt"
    ],
    correct: 3,
    explanation: "Zu wenig Diversität ist nicht der Grund. Die drei Gründe sind: fehlende Information Elaboration, fehlendes Shared Reality Understanding, fehlende Shared Identity."
  },
  {
    topic: "Diverse Teams",
    q: "Welche drei Hauptziele sollten Team-Leader laut CEM-Forschung verfolgen?",
    options: [
      "Diversität reduzieren, Konsens erzwingen, Leistungsdruck erhöhen",
      "Information Elaboration erhöhen, geteiltes Realitätsverständnis schaffen, geteilte Identität aufbauen",
      "Hierarchie stärken, Regeln durchsetzen, Konformität fördern",
      "Individualismus fördern, Konkurrenz stärken, Leistung vergleichen",
      "Trainings durchführen, Diversity-Quoten setzen, Reportings erstellen"
    ],
    correct: 1,
    explanation: "Die drei Leader-Ziele sind: Information Elaboration, Shared Reality Understanding, Shared Identity."
  },
  {
    topic: "Diverse Teams",
    q: "Was sagt das CEM darüber, ob Diversity gut oder schlecht für Teams ist?",
    options: [
      "Diversity ist immer gut für Performance",
      "Diversity ist immer schlecht für Performance",
      "Es kommt darauf an: Diversity hat zwei Pfade (Kategorisierung & Elaboration), Moderatoren entscheiden",
      "Diversity hat keinen Effekt auf Performance",
      "Nur sichtbare Diversity zählt"
    ],
    correct: 2,
    explanation: "Das CEM ist explizit ein Kontingenz-Modell: Beide Pfade laufen parallel, Moderatoren wie Diversity Beliefs und Task Requirements entscheiden über das Outcome."
  },
  {
    topic: "Diverse Teams",
    q: "Welche Aussage zu Diversity Beliefs (Homan et al. 2008) ist KORREKT?",
    options: [
      "Sie sind irrelevant für Teamoutcomes",
      "Negative Diversity Beliefs sind besser für Performance",
      "Sie sind ein wichtiger Moderator: Pro-Diversity-Beliefs verschieben den Pfad in Richtung Elaboration",
      "Sie wirken nur in homogenen Teams",
      "Sie sind dasselbe wie Faultlines"
    ],
    correct: 2,
    explanation: "Diversity Beliefs sind ein zentraler Moderator im CEM. Pro-Diversity-Beliefs fördern Information Elaboration."
  },

  // -------- POWER --------
  {
    topic: "Power",
    q: "Wie wird Power in der modernen Forschung typischerweise definiert?",
    options: [
      "Formale Autorität in einer Hierarchie",
      "Asymmetrische Kontrolle über wertvolle soziale Ressourcen",
      "Persönliches Charisma",
      "Die Fähigkeit, Gewalt anzudrohen",
      "Reichtum und Statussymbole"
    ],
    correct: 1,
    explanation: "Power = asymmetrische Kontrolle über wertvolle soziale Ressourcen (Magee & Galinsky 2008). Daraus folgen Kontrolle und Unabhängigkeit."
  },
  {
    topic: "Power",
    q: "Was ist die zentrale Aussage von Pike & Galinsky zum Zusammenhang zwischen Power und Action?",
    options: [
      "Power drückt das Gaspedal zum Handeln",
      "Power löst die psychologischen Bremsen am Handeln",
      "Power und Action sind unabhängig voneinander",
      "Nur formale Power führt zu Action",
      "Power führt grundsätzlich zu Inaktivität"
    ],
    correct: 1,
    explanation: "Power presses NOT the gas pedal — sie löst die Bremsen: weniger antizipierter Schmerz, weniger soziale Kosten, mehr Goal Focus."
  },
  {
    topic: "Power",
    q: "Welche Aussage zur Power-Approach Theory (Keltner 2003) ist KORREKT?",
    options: [
      "High Power aktiviert das Behavioral Inhibition System",
      "Low Power aktiviert das Behavioral Approach System",
      "High Power triggert das Approach System mit erhöhter Sensibilität für Belohnungen",
      "Power hat keinen Einfluss auf Approach/Inhibition",
      "Approach und Inhibition werden simultan aktiviert"
    ],
    correct: 2,
    explanation: "High Power → Approach System (Belohnungen). Low Power → Inhibition System (Angst, Vermeidung)."
  },
  {
    topic: "Power",
    q: "Was zeigte die Würfel-Studie von Fast, Gruenfeld, Sivanathan & Galinsky (2009)?",
    options: [
      "Power senkt das Selbstvertrauen",
      "100% der Personen in der Power-Bedingung wählten, selbst zu würfeln – Power steigert Illusion of Control",
      "Power hat keinen Effekt auf Kontrollillusion",
      "Nur in der Kontrollbedingung wurde gewürfelt",
      "Powerlose Personen kontrollieren mehr"
    ],
    correct: 1,
    explanation: "100% der Power-Bedingung würfelten selbst (vs. 58% No Power, 69% Control) – ein klarer Beleg für gesteigerte Illusion of Control."
  },
  {
    topic: "Power",
    q: "Wie verändert Power soziale Distanz (Lammers et al. 2012)?",
    options: [
      "Power senkt soziale Distanz, Mächtige helfen mehr",
      "Power hat keinen Effekt auf soziale Distanz",
      "Power erhöht soziale Distanz, mediiert über Self-Sufficiency",
      "Power führt zu mehr Konformität",
      "Power führt zu stärkerer Bindung an Untergebene"
    ],
    correct: 2,
    explanation: "Power → mehr soziale Distanz, mediiert durch Self-Sufficiency. Mächtige bevorzugen Alleinarbeit und helfen weniger."
  },
  {
    topic: "Power",
    q: "Was ist der „Curse of Authenticity\" für Karriere und Power?",
    options: [
      "Authentizität schadet immer dem Selbstwert",
      "Im Streben nach Authentizität vermeiden Menschen Networking, Schmeichelei und kraftvolle Selbstdarstellung – das senkt Einfluss",
      "Authentizität hat nur Vorteile",
      "Authentizität ist eine Form von Lüge",
      "Authentizität ist nur in egalitären Kulturen wertvoll"
    ],
    correct: 1,
    explanation: "Authentizität bringt Closeness und Komfort, aber Verletzlichkeit zu zeigen senkt Einfluss, Sympathie und wahrgenommene Power."
  },
  {
    topic: "Power",
    q: "Was sagt die Forschung zu Wut vs. Entschuldigung als Power-Signale (Tiedens et al.)?",
    options: [
      "Beide wirken identisch auf Status-Wahrnehmung",
      "Wut wirkt schwach, Entschuldigung stark",
      "Wut signalisiert Kompetenz und führt zu mehr Beförderungen, Apology gilt als Low-Power und senkt Status",
      "Wut wird nur bei Männern positiv bewertet",
      "Apology wirkt sympathisch UND erhöht den Status"
    ],
    correct: 2,
    explanation: "Wut = Power-Signal: höhere Beförderungen und Gehalt, aber weniger sympathisch. Apology = Low-Power-Verhalten: warm, aber senkt Einfluss/Status."
  },
  {
    topic: "Power",
    q: "Welche körpersprachlichen Signale gelten kulturübergreifend als Power-Signale (Carney 2020)?",
    options: [
      "Geschlossene Körperhaltung, leise Stimme, viele Fragen",
      "Mehr Gesten, offene Körperhaltung, lautere Stimme, mehr Sprechzeit, Aussagen statt Fragen",
      "Dauerhaftes Lächeln und kurze Sprechpausen",
      "Direkter Augenkontakt nur in westlichen Kulturen",
      "Ausschließlich verbale Signale"
    ],
    correct: 1,
    explanation: "Carney (2020) Meta-Analyse: Mehr Gesten, offene Haltung, geringere Distanz, lautere Stimme, mehr Sprechzeit, Aussagen statt Fragen, mehr enthemmtes Lachen, längere Blicke."
  },
  {
    topic: "Power",
    q: "Was ist das „Paradox of Likability\" nach Susan Fiske?",
    options: [
      "Sympathie und Kompetenz sind unkorreliert",
      "Sympathie und Kompetenz werden als negativ korreliert wahrgenommen – wer zu sehr gemocht werden will, wirkt weniger kompetent",
      "Wer kompetent ist, ist automatisch sympathisch",
      "Sympathie ist im Beruf irrelevant",
      "Wer warm wirkt, hat immer mehr Power"
    ],
    correct: 1,
    explanation: "Wärme und Kompetenz sind objektiv unabhängig, werden aber als negativ korreliert wahrgenommen. Vier Felder: Admiration, Envy, Pity, Contempt."
  },
  {
    topic: "Power",
    q: "Was zeigte die Studie von Belmi & Laurin (2016) zu Power-Strategien?",
    options: [
      "Beide Klassen nutzen Politics gleich häufig",
      "Untere Klasse nutzt Politics aktiver als die Oberklasse",
      "Beide Klassen halten Politics für ähnlich nützlich, aber nur die Oberklasse ist bereit, sie zu nutzen – damit perpetuiert sich Low Power",
      "Pro-Social-Strategien führen immer zu mehr Power",
      "Klassenunterschiede haben keinen Effekt auf Power-Strategien"
    ],
    correct: 2,
    explanation: "Beide Klassen halten Politics für gleich nützlich (~6/7), aber nur die Oberklasse setzt sie ein. Untere Klasse bleibt bei Pro-Social → Low Power perpetuiert sich."
  },
  {
    topic: "Power",
    q: "Welche Konsequenz hat Power für Perspective Taking?",
    options: [
      "Power erhöht Perspective Taking",
      "Power reduziert Perspective Taking; Mächtige unterliegen häufiger dem Curse of Knowledge",
      "Power und Perspective Taking sind unabhängig",
      "Nur formale Power senkt Perspective Taking",
      "Perspective Taking führt zu Powerverlust"
    ],
    correct: 1,
    explanation: "Mächtige nehmen weniger Perspektiven ein, unterliegen häufiger dem Curse of Knowledge → unterschätzen soziale Kosten ihres Handelns."
  },
  {
    topic: "Power",
    q: "Welcher Effekt von Power auf Kognition wurde NICHT in der Literatur belegt?",
    options: [
      "Erhöhte Goal Focus durch reduzierte Ablenkung",
      "Stärkeres abstraktes Denken (Smith & Trope 2006)",
      "Reduzierte Salienz zielhindernder Information",
      "Drastisch erhöhter IQ-Score in Tests",
      "Schnelleres Erkennen zielrelevanter Wörter"
    ],
    correct: 3,
    explanation: "Power steigert keinen IQ. Belegt sind Goal Focus, abstraktes Denken und reduzierte Inhibition – aber kein höherer IQ."
  },

  // -------- MOTIVATION --------
  {
    topic: "Motivation",
    q: "Wie wird Motivation definiert?",
    options: [
      "Die Fähigkeit, schnell Entscheidungen zu treffen",
      "Die Kraft, die Verhalten energetisiert, lenkt und aufrechterhält",
      "Das Gefühl von Zufriedenheit nach Erfolg",
      "Die Bereitschaft, Befehle zu befolgen",
      "Eine angeborene Eigenschaft, die nicht veränderbar ist"
    ],
    correct: 1,
    explanation: "Motivation = die Kraft, die Verhalten energetisiert (energy), lenkt (direction) und aufrechterhält (persistence)."
  },
  {
    topic: "Motivation",
    q: "Welche der folgenden ist KEINE der vier Drives im 4-Drives-Framework?",
    options: [
      "Drive to Acquire",
      "Drive to Bond",
      "Drive to Compete",
      "Drive to Comprehend",
      "Drive to Defend"
    ],
    correct: 2,
    explanation: "Die vier Drives sind Acquire, Bond, Comprehend, Defend. „Compete\" ist kein eigener Drive – das fällt unter Acquire (relative Vergleiche)."
  },
  {
    topic: "Motivation",
    q: "Warum hat eine Gehaltserhöhung nur begrenzten Motivationseffekt?",
    options: [
      "Weil Geld nie eine Rolle spielt",
      "Weil der Drive to Acquire relativ und unstillbar ist – wir vergleichen uns ständig und wollen mehr",
      "Weil Hygienefaktoren keine Rolle spielen",
      "Weil Gehälter steuerlich neutralisiert werden",
      "Weil Mitarbeiter Geld grundsätzlich ablehnen"
    ],
    correct: 1,
    explanation: "Der Drive to Acquire ist relativ (Vergleich mit anderen) und unstillbar (immer mehr) → der Effekt einer Erhöhung verpufft."
  },
  {
    topic: "Motivation",
    q: "Was unterscheidet bei Herzberg Hygienefaktoren von Motivatoren?",
    options: [
      "Hygienefaktoren motivieren, Motivatoren reduzieren Unzufriedenheit",
      "Hygienefaktoren verhindern Unzufriedenheit aber motivieren nicht; Motivatoren erzeugen echte Zufriedenheit",
      "Beide wirken identisch",
      "Hygienefaktoren sind nur in produzierenden Berufen relevant",
      "Motivatoren sind ausschließlich monetärer Natur"
    ],
    correct: 1,
    explanation: "Hygienefaktoren (Gehalt, Bedingungen, Supervision) verhindern Unzufriedenheit. Motivatoren (Recognition, Achievement, Growth) erzeugen Zufriedenheit."
  },
  {
    topic: "Motivation",
    q: "Welche Aussage ist KEIN Motivator nach Herzberg?",
    options: [
      "Recognition",
      "Achievement",
      "Salary and Benefits",
      "Advancement",
      "Job Challenge"
    ],
    correct: 2,
    explanation: "Salary und Benefits sind klassische HYGIENEFAKTOREN, keine Motivatoren. Motivatoren: Recognition, Achievement, Advancement, Growth, Responsibility, Job Challenge."
  },
  {
    topic: "Motivation",
    q: "Worauf basiert die Expectancy Theory (Vroom 1964)?",
    options: [
      "Auf der Hierarchie der Bedürfnisse",
      "Auf der Multiplikation Valence × Instrumentality × Expectancy",
      "Auf der Trennung von Hygiene und Motivatoren",
      "Auf der Eigenständigkeit von Zielen",
      "Auf einer simplen Reiz-Reaktions-Logik"
    ],
    correct: 1,
    explanation: "Vrooms VIE-Modell: Motivation ergibt sich aus dem Produkt von Valence (Wert), Instrumentality (Performance → Reward) und Expectancy (Effort → Performance)."
  },
  {
    topic: "Motivation",
    q: "Welche Aussage zur Goal Setting Theory (Latham & Locke 1991) ist KORREKT?",
    options: [
      "Einfache Ziele führen zu höherer Performance als schwierige",
      "Schwierige spezifische Ziele führen zu signifikant höherer Performance als einfache oder abstrakte",
      "Persönlichkeit hat keinen Einfluss auf Goal Commitment",
      "Ziele wirken nicht auf Effort, nur auf Direction",
      "Anreize beeinflussen Verhalten unabhängig von Zielen"
    ],
    correct: 1,
    explanation: "Latham & Locke: Schwierige spezifische Ziele führen zu höherer Performance. Persönlichkeit & Anreize wirken über Goal Setting & Commitment."
  },
  {
    topic: "Motivation",
    q: "Auf welchen drei kritischen psychologischen Zuständen basiert das JCM?",
    options: [
      "Energie, Effort, Initiative",
      "Direction, Effort, Persistence",
      "Meaningfulness, Verantwortung, Knowledge of Results",
      "Power, Affiliation, Achievement",
      "Autonomie, Kompetenz, Verbundenheit"
    ],
    correct: 2,
    explanation: "JCM-Prinzipien: intrinsische Motivation hängt ab von (1) Meaningfulness, (2) Verantwortung, (3) Knowledge of Results (Sicht auf eigene Arbeitsergebnisse)."
  },
  {
    topic: "Motivation",
    q: "Welche Voraussetzungen braucht erfolgreiches Empowerment?",
    options: [
      "Hohe Power Distance in der Kultur",
      "Echte Autonomie, Kulturwandel, Kompetenz der Mitarbeiter",
      "Strenge Hierarchie und enge Kontrolle",
      "Ausschließlich monetäre Anreize",
      "Reduzierung von Verantwortung"
    ],
    correct: 1,
    explanation: "Empowerment braucht echte Autonomie (oft fehlt sie), tiefen Kulturwandel, Wissen/Kompetenz der Mitarbeiter und niedrige Power Distance."
  },
  {
    topic: "Motivation",
    q: "Welche Aussage zu Pay-for-Performance ist FALSCH?",
    options: [
      "Performance muss klar definiert werden",
      "Pay-Systeme sollten an Werte der Mitarbeiter angepasst werden",
      "Man sollte sich nicht ausschließlich auf finanzielle Motivatoren verlassen",
      "Pay hat einen begrenzten Effekt auf Motivation",
      "Pay ist immer der wichtigste Motivator und überstrahlt alle anderen"
    ],
    correct: 4,
    explanation: "Genau das stimmt NICHT: Pay hat begrenzten Effekt – andere Motivatoren sind oft wichtiger. Die anderen vier sind die Tipps für effektives Pay-for-Performance."
  },
  {
    topic: "Motivation",
    q: "Welche Outcome-Variable wird in Motivationstheorien NICHT typischerweise als zentral genannt?",
    options: [
      "Engagement (Energie, Effort, Initiative)",
      "Satisfaction",
      "Commitment (Citizenship Behavior)",
      "Intention to Quit",
      "Body Mass Index"
    ],
    correct: 4,
    explanation: "BMI ist offensichtlich keine motivationsrelevante Outcome-Variable. Engagement, Satisfaction, Commitment und Intention to Quit sind die zentralen Outcomes."
  },
  {
    topic: "Motivation",
    q: "Welche Aussage zum Drive to Comprehend ist KORREKT?",
    options: [
      "Er wird durch monotone Sackgassen-Jobs befriedigt",
      "Er bezieht sich nur auf akademische Berufe",
      "Er wird durch herausfordernde Jobs aktiviert, die Wachstum und Lernen ermöglichen",
      "Er ist dasselbe wie der Drive to Acquire",
      "Er spielt nur in der Schule eine Rolle"
    ],
    correct: 2,
    explanation: "Drive to Comprehend = Bedürfnis, die Welt zu verstehen. Aktiviert durch herausfordernde, lernfördernde Jobs. Frustration durch Monotonie."
  },
  {
    topic: "Motivation",
    q: "Welche Bezahlungsart wirkt typischerweise auf der TEAM-Ebene?",
    options: [
      "Provisionen",
      "Individuelle Boni",
      "An Teamperformance gekoppelte Vergütung",
      "Profit Sharing",
      "Stock Options"
    ],
    correct: 2,
    explanation: "Team-Level: an Teamperformance gekoppelt. Individual: Provisionen, Boni. Organizational: Profit Sharing, Stock Options."
  },

  // -------- INTEGRATION / TRANSFER --------
  {
    topic: "Integration",
    q: "Welche Aussage verknüpft Power und Diversity-Forschung am besten?",
    options: [
      "Power und Diversity haben nichts miteinander zu tun",
      "High-Power-Personen mit reduziertem Perspective Taking gefährden Information Elaboration in diversen Teams",
      "Mehr Power führt automatisch zu besserer Diversity-Nutzung",
      "Diversity neutralisiert Power-Effekte",
      "Power senkt Faultlines"
    ],
    correct: 1,
    explanation: "Mächtige Personen nehmen weniger Perspektiven ein (Curse of Knowledge) – das blockiert genau jene Information Elaboration, die diverse Teams produktiv macht."
  },
  {
    topic: "Integration",
    q: "Welche Empfehlung ergibt sich aus Goal Setting + Diversity-Forschung für Team-Leader?",
    options: [
      "Vage Ziele setzen, um alle einzubinden",
      "Klare, herausfordernde Ziele setzen UND Information Elaboration über Perspektivenvielfalt aktiv fördern",
      "Auf Ziele verzichten und nur Wohlfühl-Atmosphäre schaffen",
      "Diverse Teammitglieder von Zielsetzung ausschließen",
      "Nur leichte Ziele setzen"
    ],
    correct: 1,
    explanation: "Goal Setting (klare, schwierige Ziele) + Diversity-Forschung (Elaboration & Shared Identity) ergeben kombiniert: klar UND inklusiv."
  },
  {
    topic: "Integration",
    q: "Welche Aussage zu Leadership in diversen, internationalen Settings ist KORREKT?",
    options: [
      "Eine universelle „One-size-fits-all\"-Leadership funktioniert weltweit",
      "Effektive interkulturelle Führung erfordert Continuous Learning, Interpersonal Engagement und Hardiness – plus Cultural Metacognition",
      "Stereotype sollten konsequent ignoriert werden",
      "Power Distance ist in allen Kulturen identisch",
      "Emotional Intelligence ist nur in westlichen Kulturen relevant"
    ],
    correct: 1,
    explanation: "Internationale Effektivität braucht alle drei Dimensionen plus Cultural Metacognition (statt Cruise Control)."
  },
  {
    topic: "Integration",
    q: "Welche Empfehlung passt am besten zu „Power makes the person\" + Curse of Knowledge?",
    options: [
      "Mächtige Leader sollten Feedback aktiv einholen und Perspective Taking systematisch trainieren",
      "Mächtige Leader sollten ihren Instinkten blind vertrauen",
      "Power-Effekte heben sich automatisch auf",
      "Empathie ist für Leadership überflüssig",
      "Hierarchien sollten flacher gestaltet werden, dann verschwindet das Problem"
    ],
    correct: 0,
    explanation: "Da Power Perspective Taking reduziert, müssen Leader bewusst Gegenmaßnahmen ergreifen: aktives Feedback, strukturierte Perspektivenübernahme."
  },
];

/* End of data file */
