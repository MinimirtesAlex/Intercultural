# Study Hub · Leadership & Management

Ein vollständiger, browserbasierter Study Hub zur Vorbereitung auf die 45-minütige Multiple-Choice-Klausur in Leadership / Management.

## Features

- **Karteikarten** zu allen prüfungsrelevanten Themen (5 Themenbereiche, 40+ Karten)
- **Probeklausur** mit Echtzeit-Timer (45 Min), 18–20 zufälligen Fragen pro Versuch, 5 Antwortmöglichkeiten, 2,5 Punkte pro Frage
- **Themenübersicht** mit allen Konzepten auf einen Blick
- **Vollständig responsive** — optimiert für Handy (iPhone/Android) und Laptop
- **Funktioniert offline** nach erstem Laden, alle Daten bleiben lokal im Browser
- **Kein Build-Schritt nötig** — einfach öffnen oder hosten

## Themen

1. Leadership Grundlagen (Trait, Behavioural, ILT, 3 Prinzipien, Social Identity)
2. Culture & Global Leaders (Hofstede, Kluckhohn & Strodtbeck, EASI, Cultural Metacognition)
3. Diverse Teams (CEM, Faultlines, Diversity Beliefs)
4. Power & Influence (Galinski, Power-Approach Theory, Body Language, Apology vs. Anger)
5. Motivation (4-Drives, Herzberg, Expectancy, Goal Setting, JCM)

## Lokal nutzen

Einfach `index.html` doppelklicken — fertig.

## Auf GitHub Pages hosten

1. Auf GitHub einloggen → **New repository** → Name z. B. `study-hub` → **Create**.
2. Die drei Dateien (`index.html`, `data.js`, `app.js`) und diese `README.md` ins Repo hochladen (Drag-and-Drop im Browser geht).
3. Im Repo: **Settings** → **Pages** → **Source: Deploy from a branch** → Branch `main` (oder `master`) / Folder `/ (root)` → **Save**.
4. Nach 1–2 Minuten ist deine Seite unter `https://<DEIN-USERNAME>.github.io/study-hub/` erreichbar.

## Farbschema anpassen

Die komplette Farbpalette steckt am Anfang von `index.html` in den CSS-Variablen unter `:root`. Einfach die Hex-Codes austauschen — der Rest passt sich automatisch an:

```css
:root {
  --ink:    #0E1B2C;   /* Hintergrund */
  --ink-2:  #15263D;   /* Karten */
  --gold:   #C8A165;   /* Akzent */
  --cream:  #F2E8D5;   /* Text */
  /* ... */
}
```

## Tastatur-Shortcuts (Desktop)

- `←` / `→` — Karteikarte zurück / vor
- `Leertaste` / `Enter` — Karte umdrehen

## Bewertungsschlüssel der Probeklausur

| Quote | Note |
|------|------|
| ≥ 90 % | 1,0 – 1,3 (sehr gut) |
| ≥ 80 % | 1,7 – 2,0 (gut) |
| ≥ 70 % | 2,3 – 2,7 (befriedigend) |
| ≥ 60 % | 3,0 – 3,3 |
| ≥ 50 % | 3,7 – 4,0 (ausreichend) |
| < 50 % | 5,0 (nicht bestanden) |

## Lizenz

Privates Lernmaterial — frei für eigene Klausurvorbereitung.

Viel Erfolg!
