# Saleh Eddine Touil - Portfolio

A modern, animated portfolio website showcasing cybersecurity expertise, development projects, and professional experience.

## 🚀 Tech Stack

- **Framework**: Next.js 13.4.10
- **Styling**: SASS/SCSS
- **Animations**: Framer Motion & GSAP
- **Smooth Scrolling**: Locomotive Scroll

## 🎯 Features

- ✨ Smooth scroll animations
- 🎨 Cybersecurity-themed design
- 📱 Fully responsive
- 🏆 CTF achievements showcase
- 💼 Professional experience timeline
- 🛠️ Technical skills display
- 📦 Project portfolio with hover effects
- 📄 Downloadable CV

## 🛠️ Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization Guide

### Adding Your Own Project Images

1. Place your project images in `/public/images/` folder
2. Name them according to your projects (e.g., `project1.png`, `project2.png`)
3. Update the project data in `/src/components/Projects/index.jsx`:

```javascript
const projects = [
  {
    title: "Your Project Name",
    src: "your-image.png",  // Image filename in /public/images/
    color: "#1a1a2e"        // Background color for hover effect
  },
  // Add more projects...
]
```

### Updating Personal Information

- **Contact Info**: Edit `/src/components/Contact/index.jsx`
- **Social Links**: Update links in `/src/components/Contact/index.jsx`
- **Bio/Description**: Modify `/src/components/Description/index.jsx`
- **Skills**: Update `/src/components/Skills/index.jsx`
- **Experience**: Edit `/src/components/Experience/index.jsx`
- **CV**: Replace `/public/cv.pdf` with your own CV

### Color Theme

The portfolio uses a cybersecurity-inspired color scheme defined in `/src/app/globals.css`:

```css
:root {
    --primary-cyber: #00ff88;    /* Neon green */
    --secondary-cyber: #0066ff;   /* Electric blue */
    --accent-cyber: #ff0066;      /* Hot pink */
    --dark-bg: #0a0a0a;           /* Deep black */
    --card-bg: #1a1a2e;           /* Dark blue-gray */
}
```

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & theme colors
│   ├── layout.js            # Root layout
│   └── page.js              # Main page with all components
├── common/
│   ├── Magnetic/            # Magnetic hover effect
│   └── RoundedButton/       # Reusable button component
└── components/
    ├── Contact/             # Contact section with social links
    ├── Description/         # About section
    ├── Experience/          # Work experience timeline
    ├── Header/              # Navigation header
    ├── Landing/             # Hero section
    ├── Preloader/           # Loading animation
    ├── Projects/            # Project portfolio
    ├── Skills/              # Skills & achievements
    └── SlidingImages/       # Image slider section
```

## 🎨 Key Sections

1. **Landing**: Hero section with animated title
2. **Description**: Personal bio and introduction
3. **Skills**: Technical skills and CTF achievements
4. **Experience**: Professional experience timeline
5. **Projects**: Interactive project showcase
6. **Contact**: Contact information and social links

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints at:
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm run build
```

Then connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This project is open source and available for personal use.

## 🤝 Contact

- Email: saleh.touil@icloud.com
- Phone: +216 52 750 718
- LinkedIn: [Your LinkedIn Profile]
- Portfolio: portfolio.salehtouil.tech

---

Built with ❤️ by Saleh Eddine Touil
