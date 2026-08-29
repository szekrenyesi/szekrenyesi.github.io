# szekrenyesi.github.io

Personal academic and business website of **István Szekrényes** (Assistant Professor, University of Debrecen; sole proprietor). Astro-based, bilingual (Hungarian / English) static site deployed to GitHub Pages.

---

## Table of contents

- [Requirements](#requirements)
- [Local development](#local-development)
- [Project structure](#project-structure)
- [Content editing](#content-editing)
  - [Personal profile and avatar](#personal-profile-and-avatar)
  - [Publications](#publications)
  - [Conference talks](#conference-talks)
  - [Services](#services)
  - [UI labels / translations](#ui-labels--translations)
  - [Page-level texts](#page-level-texts)
  - [CV (PDF)](#cv-pdf)
- [Design and styling](#design-and-styling)
- [Building for production](#building-for-production)
- [Deployment to GitHub Pages](#deployment-to-github-pages)
- [Common tasks — cheatsheet](#common-tasks--cheatsheet)
- [Troubleshooting](#troubleshooting)

---

## Requirements

- **Node.js 20 or newer** (checked with `node --version`)
- **npm 10+** (bundled with Node)
- A modern browser for previewing
- **Git** for deployment

Optional but useful:

- **GitHub CLI** (`gh`) for one-command repo creation and Pages setup

---

## Local development

Install dependencies (only needed once, or after `package.json` changes):

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

The site is served at **http://localhost:4321**. Any change to `.astro`, `.ts`, `.css`, `.md`, or files under `public/` is picked up instantly (hot reload).

Default language is Hungarian (`/`), English pages live under `/en/…`.

Stop the server with `Ctrl+C`.

---

## Project structure

```
szekrenyesi.github.io/
├── astro.config.mjs         Astro config (site URL, i18n locales)
├── package.json             Dependencies and npm scripts
├── tsconfig.json            TypeScript strict config
├── README.md                This file
├── .github/
│   └── workflows/
│       └── deploy.yml       GitHub Actions: build + deploy to Pages
├── public/                  Static assets served as-is at the site root
│   ├── favicon.svg
│   ├── cv.pdf               CV — copied from /Documents/cv/cv.pdf
│   └── avatar.jpg           (optional) Profile photo
└── src/
    ├── data/                Content data (edit here for updates)
    │   ├── profile.ts       Name, e-mail, MTMT, GitHub, CV link, avatar
    │   ├── publications.ts  Full publication list, categorised
    │   ├── talks.ts         Conference talks
    │   └── services.ts      Services (bilingual)
    ├── i18n/
    │   └── ui.ts            All UI strings for both languages
    ├── components/
    │   ├── Header.astro     Top nav bar + language switch
    │   └── Sidebar.astro    Left sidebar (avatar, name, contact)
    ├── layouts/
    │   └── BaseLayout.astro Common page shell (head, sidebar, footer)
    ├── styles/
    │   └── global.css       All CSS (variables, layout, components)
    └── pages/               File-based routing
        ├── index.astro       /            (Hungarian home)
        ├── about.astro       /about
        ├── publications.astro
        ├── talks.astro
        ├── services.astro
        ├── contact.astro
        └── en/               English mirror
            ├── index.astro   /en/
            ├── about.astro
            ├── publications.astro
            ├── talks.astro
            ├── services.astro
            └── contact.astro
```

**Routing rule:** each `.astro` file under `src/pages/` becomes a page. The URL follows the file path, minus the `.astro` extension. `index.astro` maps to the folder root.

---

## Content editing

Most content lives in **plain TypeScript files** under `src/data/`. Changes there instantly reflect on all pages that consume them (both languages).

### Personal profile and avatar

File: **`src/data/profile.ts`**

```ts
export const profile = {
  name: 'Szekrényes István',                    // Hungarian display name
  nameEn: 'István Szekrényes',                  // English display name
  email: 'szekrenyes.istvan@arts.unideb.hu',
  affiliation: {
    hu: 'Debreceni Egyetem, Filozófia Intézet',
    en: 'Institute of Philosophy, University of Debrecen',
  },
  position: {
    hu: 'Egyetemi adjunktus',
    en: 'Assistant Professor',
  },
  mtmt: 'https://m2.mtmt.hu/gui2/?type=authors&mode=browse&sel=authors10038180',
  github: 'https://github.com/szekrenyesi',
  cvUrl: '/cv.pdf',
  avatar: null as string | null,                // set to '/avatar.jpg' when photo added
};
```

**To add a profile photo:**

1. Drop the image into `public/`, e.g. `public/avatar.jpg` (square, 400×400 px recommended — the sidebar crops it to a 180 px circle with `object-fit: cover`).
2. In `profile.ts`, change `avatar: null` to `avatar: '/avatar.jpg'` (or whichever filename you used).

The monogram fallback comes back automatically if you set `avatar` back to `null`.

### Publications

File: **`src/data/publications.ts`**

Publications are one flat array of `Publication` objects, each tagged with a `type`. The `/publications` page groups them by type in a fixed order (`journal → book → chapter → conference → thesis → other`) and sorts each group by year, newest first.

**To add a new publication**, append an object to the `publications` array:

```ts
{
  type: 'journal',                            // 'journal' | 'book' | 'chapter' | 'conference' | 'thesis' | 'other'
  year: 2026,
  authors: 'Szekrényes, I. – Co-author, N.',
  title: 'Full paper title without a trailing period',
  venue: 'Journal Name',                      // or "In: Editor (ed.) Book title. Publisher, City"
  detail: '12:3, pp. 123–145',                // optional: volume/pages/paper number
  doi: 'https://doi.org/10.1234/xyz',         // optional
  quartile: 'Q1',                             // optional: shown as a coloured badge
},
```

Category labels (both languages) live in the same file, in `pubTypeLabels`. Reordering the sections: change `pubTypeOrder`.

### Conference talks

File: **`src/data/talks.ts`**

Array of `Talk` objects. Displayed on `/talks` in the order they appear in the array — keep newest first.

```ts
{
  year: 2026,
  authors: 'Szekrényes István',
  title: 'Talk title without trailing period',
  venue: 'Conference name, City (Country)',
  date: '2026. március 15.',                  // free-form; kept in Hungarian by convention
},
```

### Services

File: **`src/data/services.ts`**

Each service is one object with a `slug`, and a bilingual `title` and `description`:

```ts
{
  slug: 'new-service',
  title: {
    hu: 'Új szolgáltatás címe',
    en: 'New service title',
  },
  description: {
    hu: 'Magyar leírás egy vagy két mondatban.',
    en: 'English description in one or two sentences.',
  },
},
```

### UI labels / translations

File: **`src/i18n/ui.ts`**

Contains every fixed string used by the site — navigation labels, page headings, section titles, home-page intro paragraph, footer text, contact-page field labels. Two nested objects: `ui.hu` and `ui.en`. Keys must match exactly across the two.

Use `t(lang, 'key.name')` in any `.astro` file to fetch the current-language string.

### Page-level texts

Long, page-specific texts (like the `/about` biography) live directly inside the `.astro` file, not in `ui.ts`. To edit the About page:

- Hungarian: `src/pages/about.astro`
- English: `src/pages/en/about.astro`

The two files must be kept in sync manually — Astro has no built-in translation-diff tooling.

### CV (PDF)

The CV lives at `public/cv.pdf`. The sidebar link (`/cv.pdf`) and any About-page reference point to it.

The source `.tex` file is **outside this repo**, at `/home/user/Documents/cv/cv.tex`. After you regenerate `cv.pdf` from that source, copy it over:

```bash
cp /home/user/Documents/cv/cv.pdf /home/user/Documents/szekrenyesi.github.io/public/cv.pdf
```

Then commit and push.

---

## Design and styling

All CSS is in a single file: **`src/styles/global.css`**.

Design principles:

- **Two-column layout**: sticky sidebar (260 px) on the left, main content on the right. Collapses to a single column below 900 px viewport width.
- **Typography**: [Source Sans Pro](https://fonts.google.com/specimen/Source+Sans+Pro) for body, [PT Serif](https://fonts.google.com/specimen/PT+Serif) for headings — loaded via Google Fonts CDN.
- **Colour system**: CSS custom properties on `:root`, with a `prefers-color-scheme: dark` override. To rebrand, change these variables (top of `global.css`):
  - `--color-accent` — links, active nav item, badges, avatar gradient
  - `--color-bg`, `--color-text`, `--color-muted`, `--color-line`
- **Text width**: paragraphs are justified with automatic hyphenation, capped at 68ch inside the wider 960px page container.

The page container width, sidebar width, and content max-width are also variables (`--page-max`, `--sidebar-width`, `--content-max`) — change once, applies everywhere.

---

## Building for production

Build the static site into `dist/`:

```bash
npm run build
```

Preview the built site locally (serves `dist/` on a random port):

```bash
npm run preview
```

You **do not need** to run `build` locally before pushing — GitHub Actions does it on every push. Local build is only useful for spot-checking the production output.

---

## Deployment to GitHub Pages

The workflow file `.github/workflows/deploy.yml` handles everything automatically once the repo is on GitHub and the Pages source is set correctly.

### First-time setup

1. **Create the repository** on GitHub:
   - Repository name: **`szekrenyesi.github.io`** (must match the account name for a user site)
   - Visibility: **public**
   - Initialise: **empty** (no README, no `.gitignore`, no licence — you'll push these from local)

2. **Configure Pages source** (critical — do this before the first push):
   - In the repo → **Settings → Pages**
   - Under **Build and deployment → Source**, select **GitHub Actions** (not "Deploy from a branch")

3. **Push the local project**:
   ```bash
   cd /home/user/Documents/szekrenyesi.github.io
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:szekrenyesi/szekrenyesi.github.io.git
   git push -u origin main
   ```

4. **Watch the deploy**: repo → **Actions** tab. The `Deploy to GitHub Pages` workflow runs on every push to `main`. First run takes ~1–3 minutes.

5. **Site is live** at **https://szekrenyesi.github.io**.

### Everyday updates

After the first-time setup, the workflow is fully automatic:

```bash
git add .
git commit -m "Update publications"
git push
```

Push → Actions run → site rebuilt and redeployed within 2 minutes.

### If the first Actions run fails at the `deploy` step

Almost always because the Pages source is still set to "Deploy from a branch". Fix it as follows:

1. Set **Settings → Pages → Source → GitHub Actions**.
2. In the Actions tab, open the failed run → **Re-run failed jobs**.
   Alternatively: `git commit --allow-empty -m "Trigger deploy" && git push`.

---

## Common tasks — cheatsheet

| Task | Command / file |
|---|---|
| Start dev server | `npm run dev` |
| Add a new publication | Edit `src/data/publications.ts` |
| Add a new conference talk | Edit `src/data/talks.ts` |
| Change a UI label | Edit `src/i18n/ui.ts` (both `hu` and `en`) |
| Change the intro paragraph | Edit `home.intro` in `src/i18n/ui.ts` |
| Update the About page | Edit `src/pages/about.astro` **and** `src/pages/en/about.astro` |
| Add profile photo | Drop file in `public/`, set `avatar` in `profile.ts` |
| Update CV PDF | `cp ~/Documents/cv/cv.pdf public/cv.pdf` |
| Change accent colour | `--color-accent` in `src/styles/global.css` |
| Publish changes | `git add . && git commit -m "…" && git push` |

---

## Troubleshooting

**Port 4321 already in use.**
Another `npm run dev` is running. Find it (`lsof -i :4321`) and stop it, or Astro will pick 4322/4323 automatically.

**"Cannot find module" or missing dependency.**
Run `npm install` again. If it still fails, wipe and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

**Language switcher points to a page that doesn't exist.**
Check that both `src/pages/foo.astro` and `src/pages/en/foo.astro` exist. If one is missing, the switch will 404.

**Build succeeds but deploy fails on GitHub.**
Check **Settings → Pages → Source** is set to **GitHub Actions**. See the "first run fails" section above.

**A change doesn't appear in the browser.**
- Hard reload (`Ctrl+Shift+R`).
- Make sure you edited the right file — `src/` (source), not `dist/` (build output; `dist/` is regenerated on every build and is in `.gitignore`).

**Image or CV file returns 404.**
Files must be under `public/`. `public/cv.pdf` is served at `/cv.pdf`, `public/avatar.jpg` at `/avatar.jpg`, and so on. Filenames are case-sensitive on GitHub Pages.
