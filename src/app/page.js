'use client';
import styles from './page.module.scss'
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from '../components/Preloader';
import Landing from '../components/Landing';
import Projects from '../components/Projects';
import Description from '../components/Description';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import SlidingImages from '../components/SlidingImages';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

export default function Home() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    let locomotiveScroll
    let timer
    ;(
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          locomotiveScroll = new LocomotiveScroll({
            lenisOptions: {
              wrapper: window,
              content: document.documentElement,
              lerp: 0.1,
              duration: 1.2,
              orientation: 'vertical',
              gestureOrientation: 'vertical',
              smoothWheel: true,
              smoothTouch: false, // Disable smooth scroll on touch for better mobile compatibility
              touchMultiplier: 2,
            }
          });

          timer = setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 1200)
      }
    )()

    return () => {
      clearTimeout(timer)
      locomotiveScroll?.destroy?.()
    }
  }, [])

  return (
    <main className={styles.main}>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Blog />
      <Skills />
      <Experience />
      <Projects />
      <SlidingImages />
      <Contact />
    </main>
  )
}
