# Mahmoud Sallam — Portfolio (static, no build step)
Upload the whole folder as-is to GitHub Pages, Netlify (drag & drop) or Vercel. No npm needed.

## Edit content
Everything lives in `js/content.js`: info, skills, services, projects, gallery, links.
- Project screenshots: `assets/projects/<slug>-1.jpg`, `-2.jpg`, `-3.jpg` (slugs: ayman-allam, alaa-eldeen-travel, ust-camp, nas-company-store, eldawleya-medical)
- Design gallery: add images to `assets/gallery/` and set `src` in content.js
- CV: put `Mahmoud-Sallam-CV.pdf` in `cv/` (until then the button shows a placeholder)
- Case-study sections marked "Pending" fill in from the project's fields in content.js (contribution, tech, objectives...). Only add facts you confirm.

## After deploying
Replace `YOUR-DOMAIN` in `robots.txt` and `sitemap.xml`, and add canonical + og:image in `index.html` (see comment in head).
Test locally: `python3 -m http.server` inside this folder.
The contact form opens the visitor's email app (no backend). Content is rendered by JavaScript.
