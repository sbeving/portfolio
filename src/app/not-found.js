'use client';
import { motion } from 'framer-motion';
import { useEffect, useState, useMemo } from 'react';
import styles from './not-found.module.scss';

const glitchText = [
  "404",
  "4̷̢̛0̵̨4̸̡̛",
  "4̸̢0̷̨4̵̡",
  "404",
  "4̴̡0̶̢4̵̧",
  "404"
];

const funnyMessages = [
  "Oops! This page got pwned 🏴‍☠️",
  "Error: Flag not found in this location 🚩",
  "This page was deleted by a script kiddie 💀",
  "404: Page went to hack somewhere else 🔓",
  "Looks like this page got reverse-engineered out of existence 🔍",
  "This URL has been exploited and is now empty 🕳️",
  "Page crashed harder than my first buffer overflow 💥",
  "This page is as hidden as a zero-day vulnerability 🤫",
    "You've reached a dead link in the matrix 🕶️",
    "This page has been sandboxed and quarantined 🦠",
    "Error 404: Page has been DDoSed into oblivion 🌐",
    "This page has been encrypted beyond recognition 🔐",
    "You've found a honeypot! No data here 🐝",
    "This page has been obfuscated to the point of non-existence 🌀",
    "Access Denied: This page is for hackers only 🚫",
    "This page has been virtualized out of reality 🖥️",
    "You've stumbled upon a ghost page 👻"
];

const hackingText = [
  "Initializing...",
  "Scanning ports...",
  "Nmap -sS -sV -O -A",
  "Brute forcing...",
  "Exploiting vuln...",
  "Access DENIED ❌",
  "Page not found!",
];

export default function NotFound() {
  const [glitchIndex, setGlitchIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);

  // Memoize random message to prevent re-calculation
  const message = useMemo(() => funnyMessages[Math.floor(Math.random() * funnyMessages.length)], []);

  // Memoize matrix characters data to prevent re-calculation on each render
  const matrixData = useMemo(() => 
    Array.from({ length: 50 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
      char: String.fromCharCode(0x30A0 + Math.floor(Math.random() * 96))
    })), []);

  // Glitch effect for 404
  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchIndex(prev => (prev + 1) % glitchText.length);
    }, 150);
    return () => clearInterval(glitchInterval);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    if (currentLine < hackingText.length) {
      const timeout = setTimeout(() => {
        setTerminalLines(prev => [...prev, hackingText[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 400 + Math.random() * 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLine]);

  // Auto redirect after 5 seconds
  useEffect(() => {
    const redirectTimeout = setTimeout(() => {
      window.location.href = '/';
    }, 5000);
    return () => clearTimeout(redirectTimeout);
  }, []);

  return (
    <div className={styles.container}>
      {/* Background matrix effect */}
      <div className={styles.matrix}>
        {matrixData.map((item, i) => (
          <motion.span
            key={i}
            className={styles.matrixChar}
            initial={{ opacity: 0, y: -20 }}
            animate={{ 
              opacity: [0, 1, 0],
              y: [0, 1000]
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              delay: item.delay,
              ease: "linear"
            }}
            style={{ left: item.left }}
          >
            {item.char}
          </motion.span>
        ))}
      </div>

      <motion.div 
        className={styles.content}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Glitchy 404 */}
        <motion.h1 
          className={styles.errorCode}
          animate={{ 
            textShadow: [
              "0 0 10px #22c55e, 0 0 20px #22c55e",
              "0 0 15px #06b6d4, 0 0 30px #06b6d4",
              "0 0 10px #22c55e, 0 0 20px #22c55e"
            ]
          }}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {glitchText[glitchIndex]}
        </motion.h1>

        {/* Skull ASCII art */}
        <pre className={styles.skull}>
{`
    ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
    ░░░░░░░░░░▄▀▀▀▀▀▀▀▀▄░░░░░░░░░░░
    ░░░░░░░░▄▀░░░░░░░░░░▀▄░░░░░░░░░
    ░░░░░░░█░░▄▀▀▀▀▄░▄▀▀▀░█░░░░░░░░
    ░░░░░░░█░█▄░▄░░░▀░░░▄░█░░░░░░░░
    ░░░░░░░░▀▄░▀▀▀▀░░░▀▀░▄▀░░░░░░░░
    ░░░░░░░░░█░░░░░░░░░░░█░░░░░░░░░
    ░░░░░░░░░█░▀░░░▀░░░░░█░░░░░░░░░
    ░░░░░░░░░░▀▄▄▄▄▄▄▄▄▄▀░░░░░░░░░░
`}
        </pre>

        {/* Funny message */}
        <motion.p 
          className={styles.message}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          {message}
        </motion.p>

        {/* Fake terminal */}
        <motion.div 
          className={styles.terminal}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className={styles.terminalHeader}>
            <span className={styles.dot} style={{ background: '#ff5f57' }}></span>
            <span className={styles.dot} style={{ background: '#febc2e' }}></span>
            <span className={styles.dot} style={{ background: '#27c93f' }}></span>
            <span className={styles.terminalTitle}>root@sbeve:~</span>
          </div>
          <div className={styles.terminalBody}>
            {terminalLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={styles.terminalLine}
              >
                <span className={styles.prompt}>$</span> {line}
              </motion.div>
            ))}
            <span className={styles.cursor}>_</span>
          </div>
        </motion.div>

        {/* Auto redirect message */}
        <motion.p
          className={styles.redirect}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Redirecting to safety in 5 seconds... ⏳
        </motion.p>

        {/* Easter egg */}
        <motion.p 
          className={styles.hint}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 2 }}
        >
          Hint: The flag is not here... or is it? 🤔
        </motion.p>
      </motion.div>
    </div>
  );
}
