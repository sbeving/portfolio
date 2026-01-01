import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { menuSlide } from '../animation';
import NavLink from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  {
    title: "Contact",
    href: "#contact",
  },
  {
    title: "CV",
    href: "/cv.pdf",
    external: true,
  },
]

export default function Index({ closeMenu }) {

  const [selectedIndicator, setSelectedIndicator] = useState("#home");

  const handleNavClick = (href, external) => {
    if (external) {
      window.open(href, '_blank');
    } else {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    if (closeMenu) closeMenu();
  };

  return (
    <motion.div 
      variants={menuSlide} 
      initial="initial" 
      animate="enter" 
      exit="exit" 
      className={styles.menu}
      >
       <div className={styles.body}>
            <div onMouseLeave={() => {setSelectedIndicator("#home")}} className={styles.nav}>
                    <div className={styles.header}>
                        <p>Navigation</p>
                    </div>
                    {
                      navItems.map( (data, index) => {
                        return <NavLink 
                        key={index} 
                        data={{...data, index}} 
                        isActive={selectedIndicator == data.href} 
                        setSelectedIndicator={setSelectedIndicator}
                        onClick={() => handleNavClick(data.href, data.external)}>
                        </NavLink>
                      })
                    }
            </div>
            <Footer />
        </div>
        <Curve />
    </motion.div>
  )
}