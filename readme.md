# Flowbite Svelte Playground 💫

This is a beginner-friendly playground project where I learned to use **Flowbite-Svelte**, a powerful component library built on Tailwind CSS and Svelte. This repository showcases various UI components like Accordions, Avatars, Buttons, Cards, and more — all implemented using Flowbite's Svelte integration.

---

## 🚀 What I Learned

- How to install and set up **Flowbite-Svelte** in a Svelte project.
- How to import and use components like:
  - `Accordion`
  - `Avatar`
  - `Button`
  - `Card`
  - `Rating`, `Badge`, `Toggle`, etc.
- How to use **props**, **loops (`{#each}`)**, and **dynamic imports** in Svelte.
- How to manage structured image assets via `.js` instead of `.json` to avoid bundler issues.
- How to style components using **Tailwind utility classes**.
- How to add simple **hover animations** (like the Apple dock scaling effect) using custom CSS.

---

## 📁 Project Structure (Highlights)

```text

├── src/
│ ├── assets/ # Images and icons
│ ├── components/ # Reusable components (Accordion, Avatar, Card, etc.)
│ ├── jsonContent/ # Card data (moved to JS for asset imports)
│ ├── App.svelte # Main app with component usage
│ └── main.js # Svelte entry point
```