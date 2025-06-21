import Image from 'next/image';
import styles from '../styles/GlassSection.module.css';

const iconData = [
	{
		src: '/Broom.png',
		alt: 'Broom',
		title: 'Air Conditioner (AC)',
		subtitle:
			'Our expert technicians diagnose and fix all types of fridge issues quickly and efficiently.',
	},
	{
		src: '/Broom-1.png',
		alt: 'Broom 1',
		title: 'Washing Machine',
		subtitle:
			'We provide fast and reliable washing machine repairs for all brands and models.',
	},
	{
		src: '/Broom-2.png',
		alt: 'Broom 2',
		title: 'Refrigerator',
		subtitle:
			'Keep your food fresh with our professional refrigerator repair services.',
	},
	{
		src: '/Broom-2 (1).png',
		alt: 'Broom 2-1',
		title: 'Microwave Oven',
		subtitle:
			'Quick and safe microwave oven repairs for your convenience.',
	},
	{
		src: '/Broom-3.png',
		alt: 'Broom 3',
		title: 'Dishwasher',
		subtitle: 'Restore your dishwasher’s performance with our expert help.',
	},
	{
		src: '/Broom-3 (1).png',
		alt: 'Broom 3-1',
		title: 'Vacuum Cleaner',
		subtitle: 'Efficient vacuum cleaner repairs for a cleaner home.',
	},
];

export default function GlassSection() {
	// Split icons into rows of 2
	const rows = [];
	for (let i = 0; i < iconData.length; i += 2) {
		rows.push(iconData.slice(i, i + 2));
	}

	return (
		<div className={styles.glassSectionWrapper}>
			<section className={styles.glassSection} style={{ flex: 1 }}>
				<div className={styles.glassHeader}>
					<h2>We Fix What Your Home Relies On</h2>
					<p>
						From kitchen to laundry room, we repair essential household
						appliances with expert care, fast service, and lasting results
					</p>
					<button className={styles.seeMoreBtn}>See More</button>
				</div>
				<div className={styles.iconsGrid}>
					{rows.map((row, rowIdx) => (
						<div className={styles.iconRow} key={rowIdx}>
							{row.map((icon, idx) => (
								<div className={styles.iconItem} key={idx}>
									<Image
										src={icon.src}
										alt={icon.alt}
										width={60}
										height={60}
									/>
									<div className={styles.iconText}>
										<div className={styles.iconTitle}>{icon.title}</div>
										<div className={styles.iconSubtitle}>
											{icon.subtitle}
										</div>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</section>
			<div className={styles.imageContainer}>
				<Image
					src="/both-of-engineers-installing-a-small-robotic-arm-i-2025-01-09-01-19-19-utc.jpg"
					alt="Engineers working on a robotic arm"
					width={600}
					height={800}
					className={styles.engineerImage}
				/>
			</div>
		</div>
	);
}
