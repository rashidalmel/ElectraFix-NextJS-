"use client";
import React, { useEffect, useRef } from 'react';
import styles from '../styles/sectionsix.module.css';

const frames = [
  {
    title: 'PERFORMANCE TESTING',
    subtitle: 'Full inspection of electrical components, circuits, sensors, and wiring.',
    style: { left: '4%', bottom: '36%' }
  },
  {
    title: 'COMPREHENSIVE SYSTEM CHECKS',
    subtitle: 'Full inspection of electrical components, circuits, sensors, and wiring.',
    style: { right: '12%', top: '18%' }
  },
  {
    title: 'THERMAL & VOLTAGE MONITORING',
    subtitle: 'Full inspection of electrical components, circuits, sensors, and wiring.',
    style: { right: '24%', bottom: '8%' }
  }
];

export default function NewSection() {
  const frameRefs = useRef([]);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.inView);
          }
        });
      },
      { threshold: 0.2 }
    );
    frameRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.centerText}>
        <h2 className={styles.title}>
          SMART CHECKS. ACCURATE
        </h2>
        <div className={styles.titleTertiary}>REPAIR STARTS HERE.</div>
        <p className={styles.subtitle}>
          We diagnose appliance issues with precision, providing fast, clear insights to ensure effective, affordable, and long-lasting repairs
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/engineer-improves-robot-arm-with-silicon-wafer-pcb-2025-01-09-22-07-22-utc.jpg" alt="Engineer Improves" className={styles.bgImage} />
        {frames.map((frame, idx) => (
          <div
            className={styles.frame}
            style={frame.style}
            key={idx}
            ref={el => {
              if (el) frameRefs.current[idx] = el;
            }}
          >
            <img src="/Frame-1321316189.png" alt="Frame Icon" className={styles.frameIcon} />
            <div>
              <h3 className={styles.frameTitle}>{frame.title}</h3>
              <p className={styles.frameSubtitle}>{frame.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}