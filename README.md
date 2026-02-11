# 🎨 Reusable 3D Portfolio Website

This project is now structured as a **reusable portfolio template**.

You can make it your own by editing one configuration file:

- `src/data/siteConfig.js`

> ⚠️ **Important for static-hosted deployments (GitHub Pages / serving this repo directly):** after changing `src/data/siteConfig.js`, rebuild the app and commit the updated deploy bundle (`index.html`, `asset-manifest.json`, and `static/`) so your changes appear on the live site.

---

## ✅ What you can customize

Inside `siteConfig.js`, update:

- **Owner data** (name, role, tagline)
- **Gallery cards** (image/GIF URL, title, project link)
- **Style tokens** using Tailwind utility classes

```js
export const siteConfig = {
  owner: {
    name: "Your Name",
    role: "3D Artist & Creative Developer",
    tagline: "Replace this text with your short introduction.",
  },
  style: {
    pageBackground: "bg-gray-50",
    pageText: "text-black",
    cardBackground: "bg-neutral-700",
    cardOverlay: "bg-slate-600/50",
    cardTitle: "text-white",
  },
  gallery: [
    { url: "https://...", title: "Project 1", link: "https://..." },
  ],
};
```

---

## 🧩 Reusability behavior

`VideoGallery` reads config from:

1. `props.config` (if you pass custom data at runtime), otherwise
2. `siteConfig` (default local config file)

That means anyone can:

- duplicate the project,
- replace content in one file,
- rebuild the bundle,
- and quickly create their own portfolio.

---

## 🚀 Getting Started

```bash
npm install
npm run build
```

Then copy the generated build output into the deploy root (or publish the `build/` directory), including:

- `index.html`
- `asset-manifest.json`
- `static/`

If your environment supports a dev server, you can also run:

```bash
npm run dev
# or
npm start
```

---

## 📁 Key Files

- `src/components/VideoGallery.js` → reusable gallery UI
- `src/data/siteConfig.js` → data + theme configuration

