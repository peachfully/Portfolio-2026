# Portfolio 2026

Personal portfolio site for Cynthia Hua.

## Structure

- `index.html` — home page (hero + selected work grid + contact)
- `about.html` — bio, background, skills, resume link
- `work/` — individual case study pages (currently skeletons):
  - `experian-fraud.html` — Experian fraud detection platform
  - `wealth-dashboard.html` — Wealth management dashboard for a Canadian bank
  - `tria.html` — Architecture thesis project
  - `udesign.html` — UofT UDesign club revival
- `css/style.css` — shared stylesheet
- `js/main.js` — shared script

## Status

This is currently a **skeleton**: layout and navigation are in place, but section
content is marked with `TODO` placeholders. Fill in real copy, imagery, and links
as case studies are ready.

## Local preview

No build step — open `index.html` directly in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push to the `main` branch of this repo.
2. In the repo settings, enable GitHub Pages for the `main` branch (root).
3. The site will be live at `https://peachfully.github.io/Portfolio-2026/`.
