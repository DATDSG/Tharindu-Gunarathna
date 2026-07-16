# 🚀 Tharindu Danushka — Personal Portfolio

A premium, fully responsive personal portfolio for a quantum computing & AI researcher, built with pure **HTML5**, **Vanilla CSS3**, and **Vanilla JavaScript** — ready to deploy on **GitHub Pages** with zero build step.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Dark / Light Mode** | System-aware default with one-click toggle, persisted in `localStorage` |
| **Interactive Canvas** | Animated particle network rendered on a `<canvas>` background |
| **Typewriter Effect** | Cycling role titles with a smooth blinking cursor |
| **Scroll Reveal** | Elements fade and slide in as they enter the viewport via `IntersectionObserver` |
| **Scroll Spy** | Active nav link automatically highlights the current visible section |
| **Glassmorphism UI** | Navigation, cards, and forms use `backdrop-filter: blur()` for a frosted-glass look |
| **Responsive Layout** | Mobile-first CSS Grid / Flexbox layout tested across all screen sizes |
| **Timeline Component** | Alternating two-column timeline on desktop, stacked on mobile |
| **Contact Form** | Validated form with loading state and success/error feedback |
| **SEO Optimized** | Semantic HTML5, meta tags, OpenGraph & Twitter card support |

---

## 📁 Project Structure

```
Tharindu-Gunarathna/
├── index.html            ← Main single-page layout
├── styles.css            ← Design system (variables, components, animations)
├── script.js             ← Interactive behaviour (theme, particles, typewriter, etc.)
├── README.md
├── LICENSE
└── assets/
    ├── images/
    │   └── avatar.png    ← Profile avatar image
    └── icons/            ← Reserved for future SVG icon assets
```

---

## 🎨 Design System

- **Fonts**: [Outfit](https://fonts.google.com/specimen/Outfit) (headings) + [Inter](https://fonts.google.com/specimen/Inter) (body) via Google Fonts
- **Colors**: Deep dark base (`hsl(260, 24%, 6%)`) with **neon purple** (`hsl(270, 85%, 65%)`) and **cyan** (`hsl(190, 90%, 50%)`) accents
- **Glassmorphism**: `backdrop-filter: blur(12px)` with subtle semi-transparent borders

---

## 🛠️ Local Development

No build tools required. Simply serve the project root with any static file server.

**Using Python (recommended):**
```bash
python -m http.server 8000
# → Open http://localhost:8000
```

**Using Node.js (npx serve):**
```bash
npx serve .
```

---

## 🚀 Deploy to GitHub Pages

1. Push all files to the `main` branch of your GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select `Deploy from a branch` → `main` → `/ (root)`.
4. Click **Save**.
5. Your portfolio will be live at `https://<username>.github.io/<repo-name>/` within a few minutes.

---

## ✏️ Customization Guide

| Section | File | What to update |
|---|---|---|
| Name, bio, social links | `index.html` | Search for "Tharindu Danushka" and update all instances |
| Profile avatar | `assets/images/avatar.png` | Replace with your own photo |
| Skills & experience | `index.html` | Edit `.skills-tags` spans and `.timeline-item` blocks |
| Project cards | `index.html` | Edit `#projects` section articles |
| Contact details | `index.html` | Update email `href`, phone `href`, and location text |
| Theme colors | `styles.css` | Modify `--first-color` and `--second-color` HSL values in `:root` |
| Typewriter words | `script.js` | Edit the `words` array in the `TYPEWRITER EFFECT` section |

---

## 📄 License

MIT © 2026 [Tharindu Danushka](https://github.com/DATDSG)
