# Forge Automotive — Website Snapshot

> Snapshot of [Forge Automotive](https://forgeautomotive.co.uk/) — A luxury automotive atelier for bespoke styling, performance and craftsmanship.

---

## 🏎️ Overview

This repository contains a full static mirror and snapshot of the **Forge Automotive** website. It includes all pages, Next.js static scripts, CSS styling bundles, responsive layout assets, typography fonts, and media references.

### Included Pages
- **Homepage** (`/` -> `index.html`) — Brand identity, atelier approach, core services (Bodystyling, Interior, Wheels, Lighting, Exhaust, Protection), and portfolio highlights.
- **Builds Showcase** (`/builds/`) — Collection of bespoke builds.
  - Individual Build Dossiers:
    - `/builds/fa001/`
    - `/builds/fa002/`
    - `/builds/fa005/`
    - `/builds/fa006/`
    - `/builds/fa007/`
    - `/builds/fa008/`
    - `/builds/fa009/`
    - `/builds/fa010/`
- **Stock** (`/stock/`) — Vehicles available for purchase.
  - `/stock/fa003/`
- **Contact** (`/contact/`) — Project inquiry and atelier commission page.
- **Policies & Information**:
  - `/cookies/` — Cookie policy
  - `/privacy/` — Privacy policy
  - `/terms/` — Terms of service
  - `/sitemap/` — Visual site navigation & XML sitemap

---

## 📁 Repository Structure

```
├── index.html                   # Main landing page
├── builds/                      # Builds gallery & individual build pages
│   ├── index.html
│   ├── fa001/index.html
│   └── ...
├── stock/                       # Available stock listings
│   ├── index.html
│   └── fa003/index.html
├── contact/                     # Atelier commission contact page
├── cookies/                     # Cookie policy page
├── privacy/                     # Privacy policy page
├── terms/                       # Terms and conditions page
├── sitemap/                     # Site map page
├── _next/static/                # Next.js bundled scripts, CSS, and media fonts
│   ├── chunks/                  # Core JS bundles & CSS stylesheets
│   └── media/                   # Custom fonts (Geist, UltraLight, Light)
├── images/                      # Static branding images & textures
├── favicon.ico                  # Browser favicon
├── apple-icon.png               # Apple touch icon
├── manifest.json                # Web app manifest
├── robots.txt                   # Search crawler directives
└── sitemap.xml                  # Canonical XML sitemap
```

---

## 🚀 How to Run & Preview Locally

You can preview the site using any lightweight local HTTP server:

### Option 1: Python HTTP Server (Built-in)
```bash
python -m http.server 3000
```
Then visit `http://localhost:3000` in your web browser.

### Option 2: Node.js `serve`
```bash
npx serve .
```

### Option 3: VS Code Live Server
Right-click `index.html` in VS Code and select **"Open with Live Server"**.

---

## 🌐 Deployment

This snapshot is ready to be hosted on:
- **GitHub Pages** (Settings > Pages > Deploy from branch `main` / root)
- **Vercel** (`npx vercel`)
- **Netlify** (`npx netlify deploy`)
- **Cloudflare Pages**
