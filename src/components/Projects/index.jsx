'use client';
import styles from './style.module.scss'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Image from 'next/image';
import Rounded from '../../common/RoundedButton';

const projects = [
  {
    title: "🔍 LogChat - AI Log Correlation Dashboard",
    src: "logChat.png",
    color: "#1a1a2e",
    category: "Defense & Monitoring • 2025",
    description: "FastAPI + MongoDB real-time log ingestion with AI-powered threat detection, automated incident response, and natural language querying"
  },
  {
    title: "🌐 GoReconX - OSINT & Reconnaissance Tool",
    src: "",
    category: "Offense & Reconnaissance • 2025",
    color: "#16213e",
    description: "Go-based automated recon tool with subdomain enumeration, port scanning, service fingerprinting, and comprehensive reporting"
  },
  {
    title: "🛡️ AI-Powered E-commerce Security Integration",
    src: "",
    color: "#0f3460",
    category: "AI Integration & Security • 2025 (Megapc)",
    description: "Deepseek-R1 chatbot, intelligent PC builder, n8n workflow automation, OAuth 2.0 API gateway hardening, JWT microservices security"
  },
  {
    title: "⚙️ Security Hardening & Automation Suite",
    src: "",
    color: "#533483",
    category: "Security Engineering • 2025 (Megapc)",
    description: "Backoffice hardening against broken auth, exposed APIs, privilege escalation. Automated security workflows reducing manual tasks"
  },
  {
    title: "📚 E-Books Platform (MERN Stack)",
    src: "ebookscom.png",
    color: "#2d1b4e",
    category: "Full-Stack Development • 2024",
    description: "Complete e-commerce platform with MERN stack, Firebase Auth, Stripe payments, admin dashboard, inventory management"
  },
  {
    title: "🏢 C2S Enterprise Backoffice",
    src: "",
    color: "#1a1a2e",
    category: "Enterprise Application • 2024",
    description: "Full-stack Angular + .NET application with role-based access control (RBAC), encrypted data handling, and audit logging"
  },
  {
    title: "📊 ACS Quality Management System",
    src: "",
    color: "#16213e",
    category: "Enterprise Solution • 2024",
    description: "Angular + Spring Boot quality management system with document control, compliance tracking, and reporting dashboard"
  },
  {
    title: "💪 AI Fitness & Nutrition App",
    src: "ai-coach.png",
    color: "#0f3460",
    category: "Mobile Development • 2024",
    description: "Flutter cross-platform fitness app with AI Assistant, workout tracking, meal planning, progress analytics, and social features"
  },
  {
    title: "🐾 Petshouse.tn E-commerce Platform",
    src: "petshouse.png",
    color: "#533483",
    category: "Odoo Development • 2024",
    description: "Complete pet shop management with invoicing, inventory, CRM integration, SEO optimization (25% sales increase)"
  },
  {
    title: "🚗 Oussman4WD Automotive Website",
    src: "oussman4wd.png",
    color: "#2d1b4e",
    category: "Web Development • 2024",
    description: "Responsive automotive website with custom vehicle configurator, service booking, and integrated Google Maps"
  },
  {
    title: "🚨 Snort IDS Lab Environment",
    src: "",
    color: "#2d1b4e",
    category: "Network Security • 2023",
    description: "Intrusion Detection System lab with custom rule creation, packet analysis, alert correlation, and threat hunting exercises"
  },
  {
    title: "🔐 OpenSSL PKI Infrastructure Lab",
    src: "",
    color: "#1a1a2e",
    category: "Cryptography & PKI • 2023",
    description: "Complete PKI implementation with CA hierarchy, certificate lifecycle management, CRL distribution, and OCSP responder"
  }
]

const scaleAnimation = {
    initial: {scale: 0, x:"-50%", y:"-50%"},
    enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
}

export default function Home() {

  const [modal, setModal] = useState({active: false, index: 0})
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);

  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect( () => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({active, index})
  }

  return (
  <main id="projects" onMouseMove={(e) => {moveItems(e.clientX, e.clientY)}} className={styles.projects}>
    <div className={styles.body}>
      {
        projects.map( (project, index) => {
          return <Project index={index} title={project.title} category={project.category} manageModal={manageModal} key={index}/>
        })
      }
    </div>
    <Rounded>
      <p>More work</p>
    </Rounded>
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
            <div style={{top: index * -100 + "%"}} className={styles.modalSlider}>
            {
                projects.map( (project, index) => {
                const { src, color, description } = project
                return <div className={styles.modal} style={{backgroundColor: color}} key={`modal_${index}`}>
                    {src ? (
                      <Image 
                        src={`/images/${src}`}
                        width={300}
                        height={0}
                        alt="image"
                      />
                    ) : (
                      <div className={styles.modalDescription}>
                        <p>{description}</p>
                      </div>
                    )}
                </div>
                })
            }
            </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  </main>
  )
}
