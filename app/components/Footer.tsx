import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.leftSection}>
          <Image src="/logo.png" alt="Logo" width={120} height={40} className={styles.logo} />
          <div className={styles.brandContainer}>
            <Image src="/Brand RA.png" alt="Brand RA" width={60} height={40} className={styles.brand} />
          </div>
        </div>
        <div className={styles.centerSection}>
          <Link href="/" className={styles.footerNavLink}>Home</Link>
          <Link href="/about" className={styles.footerNavLink}>About Us</Link>
          <Link href="/" className={styles.footerNavLink}>Service</Link>
          <Link href="/" className={styles.footerNavLink}>Study Case</Link>
          <Link href="/" className={styles.footerNavLink}>Pages</Link>
        </div>
        <div className={styles.rightSection}>
          <a href="#" className={styles.footerLink}>Privacy Policy</a>
          <a href="#" className={styles.footerLink}>Terms of Service</a>
          <a href="#" className={styles.footerLink}>Contact</a>
        </div>
      </div>
      <div className={styles.copyright}>
        Copyright © 2025 ElectraFix - Electrical equipment repair
      </div>
    </footer>
  );
};

export default Footer;
