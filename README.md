# Mario Hernandez Jr. — Mechanical Engineering Portfolio

Live site: **[mth2846.github.io/MTHernandez](https://mth2846.github.io/MTHernandez/)**

Mechanical engineering portfolio: rocketry control systems, CFD and FEA, additive manufacturing
research, and UAV / marine platform design. B.S. Mechanical Engineering (Minor in Business),
The University of Texas at Austin, expected May 2028.

Layout and visual design modeled on [Retvin Pant's portfolio](https://ret101.github.io/Retvin-Pant-Portfolio/).

---

## Pages

- **Home**: hero carousel, profile and bio cards, experience timeline, reference
- **Industry Experience** (`/industry`): Guinn Partners / Ascendant AI programs, one page each
- **Longhorn Rocketry** (`/rocketry`): airbrakes, fin tabs, TVC gimbal, TVC flight computer, Rocket V9, motor test stand
- **Research** (`/research`): UT Austin ECE atomic strain analysis, NASA HUNCH projects
- **Skills** (`/skills`): tools, certifications, coursework, education

Old links (`/experience/`, `/projects/`, `/education/`, `/reference/`, `/contact/`) redirect to the new pages.

---

## Editing content

Almost all project text lives in **`src/data/projects.js`**: one entry per project page, with its
stats, specs, contribution bullets, key decisions, and captioned figures. Hub pages pull their cards
from the same file. Images go in `public/images/`.

Other content:

- Home page (bio, timeline, reference): `src/pages/Home.jsx`
- Skills page: `src/pages/Skills.jsx`
- Hero carousel slides: `src/components/HeroCarousel.jsx`
- Footer contact details: `src/components/Footer.jsx`

To add a project page, add an entry to `src/data/projects.js`, add a `<Route>` for it in
`src/App.jsx`, and add its slug to the hub page that should list it.

---

## Stack

- **React 18** + **Vite**, **React Router v6** with real URLs
- **Framer Motion** page transitions, scroll-reveal animations
- Custom CSS with CSS variables (dark theme), Space Grotesk + Inter
- Deployed by **GitHub Actions** to **GitHub Pages**

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:5173/MTHernandez/](http://localhost:5173/MTHernandez/).

`npm run build` runs `vite build`, then `scripts/postbuild.mjs`, which writes a copy of the page for
every route in `src/App.jsx` (so deep links return a real page on GitHub Pages) and regenerates
`sitemap.xml`.

## Deployment

Every push to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes `dist/`
to GitHub Pages.

**One-time setup:** in the repo go to **Settings → Pages** and set **Source** to **GitHub Actions**.
