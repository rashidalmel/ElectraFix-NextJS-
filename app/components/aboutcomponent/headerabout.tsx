import React from "react";
import styles from '../../styles/aboutcss/headerabout.module.css';
import Link from 'next/link';

const HeaderAbout = () => (
  <div className={styles.headerAbout}>
    <h1 className={styles.headerAboutTitle}>Fast, Reliable Electrical Equipment Repairs You Can Trust</h1>
    <p className={styles.headerAboutSubtitle}>From household appliances to industrial machines, we bring your equipment back to life with expert care</p>
    <Link href="/contact" className={`nav-link ${styles.headerAboutBtn}`}>Request a Free Quote</Link>
  </div>
);

export default HeaderAbout;
