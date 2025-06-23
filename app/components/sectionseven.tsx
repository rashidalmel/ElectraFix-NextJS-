import Image from 'next/image';
import styles from '../styles/sectionseven.module.css';

export default function SectionSeven() {
  return (
    <section className={styles.sectionSevenContainer}>
      <div className={styles.sectionSevenImageWrapper}>
        <Image
          src="/professional-technician-checking-and-repairing-par-2024-10-10-23-42-51-utc.jpg"
          alt="Professional Technician Checking"
          width={400}
          height={400}
          className={styles.sectionSevenImage}
        />
      </div>
      <div className={styles.sectionSevenGlassCard}>
        <div className={styles.sectionSevenGlassTitle}>
          Powering Productivity, Repairing with Precision
        </div>
        <div className={styles.sectionSevenGlassSubtitle}>
          We repair industrial electrical equipment quickly and reliably to minimize downtime and keep your operations running at full capacity.
        </div>
        <div className={styles.sectionSevenNumbersWrapper}>
          <div className={styles.sectionSevenNumberItem}>
            <div className={styles.sectionSevenNumberBox}>01</div>
            <div>
              <div className={styles.sectionSevenNumberTitle}>Fast Diagnostics</div>
              <div className={styles.sectionSevenNumberSubtitle}>Quickly identify issues to minimize downtime.</div>
            </div>
          </div>
          <div className={styles.sectionSevenNumberItem}>
            <div className={styles.sectionSevenNumberBox}>02</div>
            <div>
              <div className={styles.sectionSevenNumberTitle}>Expert Repairs</div>
              <div className={styles.sectionSevenNumberSubtitle}>Skilled technicians ensure reliable fixes.</div>
            </div>
          </div>
          <div className={styles.sectionSevenNumberItem}>
            <div className={styles.sectionSevenNumberBox}>03</div>
            <div>
              <div className={styles.sectionSevenNumberTitle}>Quality Parts</div>
              <div className={styles.sectionSevenNumberSubtitle}>We use only certified, high-quality components.</div>
            </div>
          </div>
          <div className={styles.sectionSevenNumberItem}>
            <div className={styles.sectionSevenNumberBox}>04</div>
            <div>
              <div className={styles.sectionSevenNumberTitle}>Guaranteed Support</div>
              <div className={styles.sectionSevenNumberSubtitle}>Ongoing assistance after every repair.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
