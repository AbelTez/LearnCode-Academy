# LearnCode Academy — Static Learning Center Website

LearnCode Academy is a small, static multi-page website scaffold intended to showcase a learning center or coding bootcamp. pages, layout, and styles are implemented and easy to customize for content and branding.

---

## Project status

- **Ready to document and customize** — HTML pages and CSS styles are complete for a basic site. No build tooling required.

---

## Purpose

This repository provides a clean, responsive template you can use to present course offerings, instructor/team information, and contact details. It's ideal for learning, demos, or as a starting point for a small static site.

---

## Tech stack

- Plain HTML and CSS (no frameworks).
- Works in modern browsers; responsive via CSS media queries.

---

## Upgrade Roadmap (Full-Stack)

Goal: Evolve this static site into an interactive, component-based, data-driven full‑stack project.

### Step 1: Vanilla JavaScript (done)

- Adds `script.js` for interactivity across pages.
- Features: mobile navbar toggle, client‑side form validation, course preview modal, simple testimonial carousel.

Usage: open any HTML file in a browser — no build tool required.

### Step 2: React Frontend (planned)

- Create `frontend/` with a React SPA (components for `Header`, `Footer`, `Card`).
- Routing with `react-router-dom` to mirror pages; state with hooks; fetch data via `src/api.js`.

### Step 3: Node.js Backend (planned)

- Create `backend/` using native `http` for REST endpoints (GET/POST/PUT/DELETE).
- Add CORS so the React app can call the API.

### Step 4: Database (planned)

- Use MongoDB + Mongoose for JS-friendly persistence.
- Store users, courses, and contact submissions.

### Suggested structure

```
project-root/
├─ frontend/
│  └─ src/{components,pages,styles,api.js}
├─ backend/
│  └─ src/{app.js,routes,models,config}
└─ database/ (optional for SQLite)
```

If you’d like, I can scaffold Steps 2–4 next and add run instructions.

---

## Repository structure

- `index.html` — Home / landing page
- `courses.html` — Course listings and highlights
- `about.html` — About / mission / team
- `login.html` / `signin.html` — Authentication UI mockups (static)
- `style.css` / `myStyle.css` — Global styles and overrides
- `image/` — Static images used by pages
- `README.md` — This file

---

## Customization notes

- Modify text content in the HTML files to update course names, descriptions, and contact info.
- Theme and colors live in `style.css` — update variables or color values for rebranding.
- Buttons use the `.btn` class; hover and focus interactions are defined in `style.css`.

---

## Contribution

Contributions are welcome: open an issue to suggest changes or improvements. For simple edits, submit a pull request with clear description of the change.

---

## License

See the `LICENSE` file in the repository for license details.
