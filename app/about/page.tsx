import HeaderAbout from '../components/aboutcomponent/headerabout';
import Image from 'next/image';
import styles from '../styles/aboutcss/headerabout.module.css';

export default function AboutPage() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutContent}>
        <HeaderAbout />
      </div>
      <div className={styles.aboutImageWrapper}>
        <Image
          src="/both-of-engineers-installing-a-small-robotic-arm-i-2025-01-09-01-19-19-utc.jpg"
          alt="Both of Engineers"
          width={600}
          height={600}
          className={styles.aboutImage}
        />
        <div className={styles.glassCard}>
          <img src="/Broom-5.png" alt="Broom Icon" className={styles.glassCardIcon} />
          <div className={styles.glassCardTitle}>Rapid Response Team</div>
          <div className={styles.glassCardSubtitle}>
            Round-the-clock service to respond to unexpected breakdowns, even on weekends and holidays.
          </div>
        </div>
      </div>
    </div>
  );
}
