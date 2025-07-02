# 🚀 (CSO-2024/25 Final Project) FrontEnd Soundz: The Expansion
Welcome to the official github repository of FrontEnd Soundz (The Expansion). Here you will find all of what was made an put into the project by the Front End Music Architects team as final submission for the CSO STEM Coding Olympiad Finals 2025.

**The FrontEnd Soundz: The Expansion** is a high-fidelity, audio-centric web app built by the **Front End Music Architects** as the final submission for the **2025 CSO STEM Coding Olympiad Finals**.

An immersive, genre-based platform for discovering new artists, engaging with curated playlists, and exploring the future of music—developed using vanilla JavaScript and styled with CSS3, while leveraging MongoDB to store and serve artist data, moods, genres, and trending content.

🎵 FrontEnd Soundz The Expansion - WEBSITE: https://frontendsoundz-expansion.netlify.app/

<img src="https://github.com/JoshLanderz/CSO-2024-FrontEnd-Soundz-The-Expansion/blob/main/Screenshot.png">
---

🌐 **Live Site:** [https://frontendsoundz-expansion.netlify.app](https://frontendsoundz-expansion.netlify.app)

---

## 🔧 Project Overview

- 🎵 **Dynamic Audio Components**  
  Each album block has its own scoped `<audio>` element with playback control, real-time progress tracking, and dynamic time display. Fully reusable per genre.

- ⚙️ **Live Collaboration**  
  The Discussion Forum allows for live collaboration using MongoDB servers to keep, retrieve and edit real time comments that users upload in real time.
  
- 🧠 **Smart Playback Logic**  
  Enforces single-track playback: activating one song pauses others, resets their progress bars, and keeps audio states clean across the DOM.

- 📦 **Component-Based HTML Architecture**  
  No frameworks. Add new audio modules by duplicating `.curated-genres-album-wrapper` blocks. Audio logic binds automatically.

- ⚙️ **Modular Styling**  
  Built with CSS custom properties (`--variables`) and responsive Flex/Grid layout. Supports theme-specific color palettes and spacing rules.

- 📈 **Real-Time Progress & Seeking**  
  `<input type="range">` elements serve as both visual progress bars and scrubbers. User interaction is synced with the track’s playback in real time.

- 🚀 **CI/CD via Netlify**  
  GitHub-based deployment pipeline using Netlify. All pushes to `main` are instantly reflected on the live production site.

---

## 📁 Tech Stack We Used

| Layer         | Technology         | Notes |
|---------------|--------------------|-------|
| **Frontend**  | HTML5, CSS3, JS ES6 | No external libraries or frameworks |
| **Audio API** | just the `<audio>` 😄 | JS event listeners: `play`, `pause`, `ended`, `timeupdate`, `input` |
| **Styling**   | CSS Variables, Flexbox, Grid | Responsive UI, theme customization |
| **Backend, Object Orientation & Storage**   | MongoDB, JSON, | Data Storage, Retreival, Live Collaboration |
| **Deployment**| Netlify             | GitHub → Netlify CI/CD |

---

## 🎯 Purpose

This project demonstrates how to build **interactive audio UI experiences** with pure frontend web tools—ideal for:
- Hackathons
- Music streaming concepts
- Vanilla JS learning
- No-library web development
- Live Collaboration
---

📬 Built by the **Front End Music Architects**
**Joshua Watson**, **Dellonte Boucher**

---

🎓 Finalist submission for the **CSO STEM Coding Olympiad 2025**

---

## 🌐 Connect with Me  

- [🐱 GitHub](https://github.com/JoshLanderz)
- [📘 LinkedIn](https://www.linkedin.com/in/joshua-a-watson-1246882a3)  
- [🌐 Portfolio](https://jwportfolio.com)  
- [📸 Instagram](https://www.instagram.com/theotherjosh21)  
- [🎥 YouTube](https://www.youtube.com/@)  
- [🎯 Frontend Mentor](https://www.frontendmentor.io/profile/JoshLanderz)  
- [🖌️ CodePen](https://codepen.io/joshlander18)  
- [⚔️ CSSBattle](https://cssbattle.dev/player/therealjoshlanderz21)  

---
