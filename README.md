# 🗂️ Personal Portfolio

A modern, responsive developer portfolio website built with React, Vite, and Tailwind CSS. Features smooth animations, a working contact form, and clean sections to showcase skills, projects, and experience.

🔗 **Live Demo:** [portfolio-kohl-one-v7sfueoexw.vercel.app](https://portfolio-kohl-one-v7sfueoexw.vercel.app)

---

## 🗂️ Project Structure

```
portfolio/
├── public/         # Static assets (favicon, images)
├── src/            # React source code (components, pages, styles)
├── index.html      # HTML entry point
├── vite.config.js  # Vite configuration
└── package.json    # Project dependencies
```

---

## ✨ Features

- 🎨 **Modern UI** — Clean design built with Tailwind CSS
- 🌀 **Smooth Animations** — Page and scroll animations powered by Framer Motion
- 📬 **Working Contact Form** — Send messages directly via EmailJS (no backend needed)
- 📱 **Fully Responsive** — Looks great on mobile, tablet, and desktop
- ⚡ **Fast Build** — Powered by Vite for lightning-fast dev and production builds
- 🔗 **Smooth Scrolling** — Section-based navigation with React Scroll
- 🚀 **Deployed on Vercel** — Zero-config deployment

---

## 🛠️ Tech Stack

| Technology       | Purpose                              |
|------------------|--------------------------------------|
| React 19         | UI framework                         |
| Vite             | Build tool and dev server            |
| Tailwind CSS 4   | Utility-first styling                |
| Framer Motion    | Animations and transitions           |
| EmailJS          | Contact form (no backend required)   |
| React Router DOM | Client-side routing                  |
| React Scroll     | Smooth scroll between sections       |
| React Icons      | Icon library                         |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+)
- npm

### 1. Clone the Repository

```bash
git clone https://github.com/Riju-hub/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up EmailJS (for Contact Form)

1. Create a free account at [emailjs.com](https://www.emailjs.com/)
2. Get your **Service ID**, **Template ID**, and **Public Key**
3. Add them to your EmailJS config inside the contact component

### 4. Start the Dev Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

---

## 📁 Sections

| Section      | Description                                      |
|--------------|--------------------------------------------------|
| `Hero`       | Introduction with name, title, and CTA buttons  |
| `About`      | Brief bio and background                         |
| `Skills`     | Tech stack and tools with icons                 |
| `Projects`   | Showcase of featured projects with links        |
| `Contact`    | Working contact form powered by EmailJS         |

---

## 📦 Scripts

| Command         | Description                    |
|-----------------|--------------------------------|
| `npm run dev`   | Start local development server |
| `npm run build` | Build for production           |
| `npm run preview` | Preview the production build |
| `npm run lint`  | Run ESLint checks              |

---

## 🌐 Deployment

This project is deployed on **Vercel**. To deploy your own:

1. Push the repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Import Project**
3. Select the repo and click **Deploy** — done!

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
