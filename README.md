# ILIAD

**Live site → [mdsouzie-sketch.github.io/iliad](https://mdsouzie-sketch.github.io/iliad/)**

Performance testing and training facility — marketing site.

San Diego, CA. Find your weakness. Write your epic.

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home — hero, summaries of testing / programs / journey, CTAs |
| `testing.html` | The 3 assessment protocols — force plates, speed, movement screen |
| `programs.html` | The 4 ongoing programs — coaching, training, corrective, recovery |
| `journey.html` | The methodology — why assessment-first, the 4-act process, evidence |
| `about.html` | The team, story, facility, approach |
| `pricing.html` | Tiered pricing + FAQ |
| `book.html` | Intake form (Formspree-backed) |
| `thanks.html` | Post-submission landing page |
| `privacy.html` / `terms.html` | Legal placeholders — review before launch |

## Architecture

Plain static HTML, no build step.

- `app.css` — all styles. Responsive at ≤1024px (tablet) and ≤640px (mobile). Honors `prefers-reduced-motion`.
- `app.js` — page behavior. IntersectionObserver-driven fade-up reveals, sticky chapter rail, scroll-spy on main nav, mobile hamburger menu, hero watermark parallax, page-to-page fade-out, content applier (writes `content.js` values into `data-content` slots).
- `content.js` — **all editable marketing copy** lives here. Edit values, save, refresh. Used by every page.

## Editing copy

Open `content.js`, find the field you want to change, edit between the quotes, save, refresh the page. The HTML keeps the previous text as a fallback so nothing breaks while you edit.

Format rules in the file header.

## Deploying

Static site. Drop the folder on any static host (GitHub Pages, Netlify, Vercel, Cloudflare Pages). No backend required other than Formspree for the booking form.

## Form endpoint

`book.html` posts to a Formspree endpoint. The form ID is in the `<form action>` attribute.

## License

All rights reserved.
