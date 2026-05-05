# Study Hub · Leadership & Management

A complete, browser-based study hub for preparing for the 45-minute multiple-choice exam in Leadership / Management.

## Features

- **Flashcards** covering every exam-relevant topic (5 topic areas, 49 cards)
- **Mock Exam** with a real-time timer (45 min), 18–20 random questions per attempt, 5 answer options, 2.5 points per question
- **Topic overview** showing all concepts at a glance
- **Fully responsive** — optimized for mobile (iPhone/Android) and laptop
- **Works offline** after first load, all data stays local in the browser
- **No build step required** — just open or host

## Topics

1. Leadership Foundations (Trait, Behavioural, ILT, 3 Principles, Social Identity)
2. Culture & Global Leaders (Hofstede, Kluckhohn & Strodtbeck, EASI, Cultural Metacognition)
3. Diverse Teams (CEM, Faultlines, Diversity Beliefs)
4. Power & Influence (Galinsky, Power-Approach Theory, Body Language, Apology vs. Anger)
5. Motivation (4-Drives, Herzberg, Expectancy, Goal Setting, JCM)

## Use locally

Just double-click `index.html` — that's it.

## Host on GitHub Pages

1. Log in to GitHub → **New repository** → name e.g. `study-hub` → **Create**.
2. Upload the three files (`index.html`, `data.js`, `app.js`) and this `README.md` to the repo (drag-and-drop in the browser works).
3. In the repo: **Settings** → **Pages** → **Source: Deploy from a branch** → Branch `main` (or `master`) / Folder `/ (root)` → **Save**.
4. After 1–2 minutes your site will be live at `https://<YOUR-USERNAME>.github.io/study-hub/`.

## Customize the colour scheme

The complete colour palette lives at the top of `index.html` in the CSS variables under `:root`. Just swap the hex codes — everything else adapts automatically:

```css
:root {
  --ink:    #0E1B2C;   /* background */
  --ink-2:  #15263D;   /* cards */
  --gold:   #C8A165;   /* accent */
  --cream:  #F2E8D5;   /* text */
  /* ... */
}
```

## Keyboard shortcuts (desktop)

- `←` / `→` — flashcard previous / next
- `Space` / `Enter` — flip the card

## Mock exam grading scale

| Score | Grade |
|-------|-------|
| ≥ 90 % | A (Excellent) |
| ≥ 80 % | B (Good) |
| ≥ 70 % | C (Satisfactory) |
| ≥ 60 % | D (Sufficient) |
| ≥ 50 % | E (Pass) |
| < 50 % | F (Fail) |

## License

Private study material — free for personal exam prep.

Good luck!
