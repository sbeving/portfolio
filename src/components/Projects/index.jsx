'use client';
import styles from './style.module.scss'
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import ProjectCard from './components/project';
import Rounded from '../../common/RoundedButton';

// Built products only — client sites, full-stack apps and interfaces, each with a
// live screenshot and (where it's on a domain we control) a live `url`.
const projects = [
  {
    title: "Codivinity",
    subtitle: "Digital Agency Platform",
    src: "codivinity.jpg",
    url: "https://codivinity.com/en",
    type: "Web",
    year: "2026",
    tags: ["Next.js", "i18n", "Framer Motion"],
    description: "Multilingual site for a digital agency across Milan, Paris and Tunis — services, work, process and insights, with light and dark themes."
  },
  {
    title: "DEREC Consulting",
    subtitle: "Engineering Firm Site",
    src: "derec-consulting.jpg",
    url: "https://derec-consulting.saleheddinetouil.tech",
    type: "Web",
    year: "2026",
    tags: ["React", "Bilingual", "Lead Capture"],
    description: "Site for an energy-transition consultancy covering green hydrogen, battery storage and hybrid power, with an animated systems diagram."
  },
  {
    title: "SOET Energy",
    subtitle: "Corporate Platform",
    src: "soetenergy.jpg",
    url: "https://soetenergy.com",
    type: "Web",
    year: "2025",
    tags: ["Multilingual", "SEO", "Performance"],
    description: "Corporate site for a battery-storage and EV-charging company — product catalogue, partner and news sections, tuned for speed and SEO."
  },
  {
    title: "Eat Box",
    subtitle: "Food Brand Site",
    src: "eatbox.jpg",
    type: "Web",
    year: "2025",
    tags: ["Brand Site", "Gallery", "WhatsApp Orders"],
    description: "Brand site for a Tunisian catering box service — menu boxes, gallery, events and WhatsApp-based ordering."
  },
  {
    title: "Nextelog",
    subtitle: "Urban Logistics Platform",
    src: "nextelog.jpg",
    url: "https://nextelog.com",
    type: "Web",
    year: "2024",
    tags: ["Next.js", "i18n", "Booking Flow"],
    description: "IT/EN site for a sustainable last-mile delivery service in Parma — booking and quote flows, services and sustainability sections."
  },
  {
    title: "LogChat",
    subtitle: "AI Log Correlation Dashboard",
    src: "logChat.jpg",
    type: "Product",
    year: "2025",
    tags: ["FastAPI", "MongoDB", "AI Detection"],
    description: "Real-time log ingestion dashboard with AI-powered detection, automated response, and natural-language querying."
  },
  {
    title: "E-Books Platform",
    subtitle: "MERN Marketplace",
    src: "ebookscom.jpg",
    type: "Full-Stack",
    year: "2024",
    tags: ["MERN", "Stripe", "Firebase Auth"],
    description: "Full e-commerce platform — Firebase Auth, Stripe payments, admin dashboard and inventory management."
  },
  {
    title: "AI Fitness & Nutrition",
    subtitle: "Cross-Platform App",
    src: "ai-coach.jpg",
    type: "Mobile",
    year: "2024",
    tags: ["Flutter", "AI Assistant", "Analytics"],
    description: "Flutter fitness app with an AI assistant, workout tracking, meal planning, progress analytics and social features."
  },
  {
    title: "Petshouse.tn",
    subtitle: "E-commerce Platform",
    src: "petshouse.jpg",
    type: "Web",
    year: "2024",
    tags: ["Odoo", "CRM", "SEO"],
    description: "Pet-shop management with invoicing, inventory and CRM — SEO work that lifted sales by ~25%."
  },
  {
    title: "Oussman4WD",
    subtitle: "Automotive Website",
    src: "oussman4wd.jpg",
    type: "Web",
    year: "2024",
    tags: ["Configurator", "Booking", "Maps"],
    description: "Responsive automotive site with a custom vehicle configurator, service booking and integrated Google Maps."
  }
]

const gridContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
};

export default function Projects() {
  const header = useRef(null);
  const inView = useInView(header, { once: true, margin: "-80px" });

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.inner}>
        <header ref={header} className={styles.head}>
          <motion.span
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Selected Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          >
            Things I&apos;ve shipped
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Client sites, full-stack products and interfaces I&apos;ve designed and built —
            {' '}{projects.length} projects across web, product and mobile.
          </motion.p>
        </header>

        <motion.div
          className={styles.grid}
          variants={gridContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>

        <div className={styles.footer}>
          <a
            href="https://github.com/sbeving"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaLink}
            aria-label="See more work on GitHub"
          >
            <Rounded backgroundColor="#22c55e">
              <p>More on GitHub</p>
            </Rounded>
          </a>
        </div>
      </div>
    </section>
  )
}
