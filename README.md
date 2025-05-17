# Modern Developer Portfolio

A modern, responsive portfolio built with **Next.js**, **Tailwind CSS**, and **Framer Motion** to showcase a full-stack developer's skills, projects, and achievements.

This portfolio features a sleek design with glassmorphism, smooth animations, and interactive project demos. It is fully customizable and optimized for all devices.

---

## ✨ Features

### 🚀 Dynamic Content

- Update personal details, projects, skills, certifications, testimonials, and blog posts via `lib/data.js`.

### 🧪 Interactive Project Demos

- **ECommerceDemo**: A mini e-commerce cart with add/remove functionality, inspired by *EcoBazar*.
- **ChartDemo**: A Chart.js-based interactive bar chart, inspired by *ChartCrafter*.

### 🎨 Modern Design

- Glassmorphism cards with translucent effects.
- Vibrant gradients and clean typography (Inter font).
- Dark/light mode toggle using `next-themes`.

### 📱 Responsive Layout

- Adapts to:
  - Mobile (`sm: ≥640px`)
  - Tablet (`md: ≥768px`)
  - Desktop (`lg: ≥1024px`)
  - Large screens (`xl: ≥1280px`)

### 🎞️ Animations

- Smooth fade-ins, slides, and hover effects powered by **Framer Motion**.

### 📈 SEO Ready

- Includes meta tags and **Next.js Image optimization** for performance.

### 🧩 Interactive Components

- Contact form (logs to console, ready for backend integration).
- Testimonials slider with navigation.
- CV section with preview and downloadable PDF.
- Blog previews with external links.

---

## 📁 Folder Structure
portfolio/
├── app/ # Next.js App Router
│ ├── layout.js # Root layout with SEO and theme
│ ├── page.js # Main portfolio page
│ ├── globals.css # Tailwind CSS styles
│ └── favicon.ico # Favicon
├── public/ # Static assets
│ ├── profile.jpg # Profile photo
│ ├── cv-preview.jpg # CV preview image
│ ├── cv.pdf # Downloadable CV
│ ├── project1.jpg # E-commerce project image
│ ├── project2.jpg # Chart project image
│ ├── product1.jpg # Demo product image
│ └── product2.jpg # Demo product image
├── components/ # Reusable React components
│ ├── Header.js
│ ├── Footer.js
│ ├── HeroSection.js
│ ├── AboutSection.js
│ ├── CVSection.js
│ ├── SkillsSection.js
│ ├── ProjectsSection.js
│ ├── ECommerceDemo.js
│ ├── ChartDemo.js
│ ├── CertificationsSection.js
│ ├── TestimonialsSection.js
│ ├── BlogSection.js
│ └── ContactSection.js
├── lib/
│ └── data.js # All content managed here
├── .eslintrc.json # ESLint configuration
├── .gitignore # Git ignore rules
├── next.config.js # Next.js configuration
├── package.json # Project dependencies and scripts
├── postcss.config.js # PostCSS setup for Tailwind
├── tailwind.config.js # Tailwind CSS config
└── README.md # Project documentation



