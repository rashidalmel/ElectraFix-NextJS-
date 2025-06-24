import React from "react";
import styles from "../styles/sectioneight.module.css";

interface SectionEightProps {
  images: string[];
}

const SectionEight: React.FC<SectionEightProps> = ({ images }) => {
  return (
    <section className={styles.sectionEight}>
      <div className={styles.sectionEightInner}>
        <h2 className={styles.title}>Skilled Hands. United Minds. Powered by Dedication.</h2>
        <p className={styles.subtitle}>
          Meet the experts behind our service excellence — passionate professionals committed to safety, quality, and real repair results every time
        </p>
        <div className={styles.imageRow}>
          {images.map((src, idx) => (
            <div key={idx} className={styles.imageItem}>
              <img src={src} alt={`Expert ${idx + 1}`} className={styles.image} />
              <div className={styles.imageOverlay}>
                <div className={styles.overlayHeader}>
                  <div className={styles.overlayName}>Andi Nugroho</div>
                  <div className={styles.overlayRole}>Senior Electrical Technician</div>
                </div>
                <div className={styles.overlayText}>
                  With over 10 years of hands-on experience, Andi specializes in diagnosing and repairing complex electrical systems for both residential and industrial clients. Known for his precision, problem-solving skills, and commitment to safety, he leads our technician team with a calm and professional approach.
                </div>
                <div className={styles.socialIcons}>
                  <a className={`${styles.socialIcon} ${styles.facebook}`} href="#" aria-label="Facebook">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
                  </a>
                  <a className={`${styles.socialIcon} ${styles.x}`} href="#" aria-label="X">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M17.53 6.477h2.968l-6.477 7.412 7.627 9.611h-6.002l-4.684-5.91-5.36 5.91H2.03l6.89-7.6L1.09 6.477h6.13l4.19 5.29 4.12-5.29zm-1.05 15.023h1.66l-5.36-6.77-1.66 1.86 5.36 4.91zm-7.36-6.77l-5.36 6.77h1.66l5.36-4.91-1.66-1.86zm2.88-3.31l-4.19-5.29H3.09l5.36 6.77 1.66-1.48zm2.88 1.48l5.36-6.77h-1.66l-4.19 5.29 1.66 1.48z"/></svg>
                  </a>
                  <a className={`${styles.socialIcon} ${styles.instagram}`} href="#" aria-label="Instagram">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.241-1.246 3.608-1.308C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.775.131 4.602.425 3.635 1.392 2.668 2.359 2.374 3.532 2.315 4.809 2.256 6.089 2.243 6.498 2.243 12c0 5.502.013 5.911.072 7.191.059 1.277.353 2.45 1.32 3.417.967.967 2.14 1.261 3.417 1.32 1.28.059 1.689.072 7.191.072s5.911-.013 7.191-.072c1.277-.059 2.45-.353 3.417-1.32.967-.967 1.261-2.14 1.32-3.417.059-1.28.072-1.689.072-7.191s-.013-5.911-.072-7.191c-.059-1.277-.353-2.45-1.32-3.417C21.05.425 19.877.131 18.6.072 17.32.013 16.911 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionEight;
