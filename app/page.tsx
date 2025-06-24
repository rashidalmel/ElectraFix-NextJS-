import Link from 'next/link'
import ImageSection from './components/image'
import Stats from './components/Stats'
import FourImage from './components/FourImage'
import GlassSection from './components/GlassSection'
import NewSection from './components/sectionsix'
import HeaderAbout from './components/aboutcomponent/headerabout';
import SectionSeven from './components/sectionseven';
import SectionEight from './components/sectioneight';
import Footer from './components/Footer'

export default function Page() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'flex-start' }}>
        <main style={{ flex: 1 }}>
          <h1 className="main-header">Fast, Reliable Electrical Equipment Repairs You Can Trust</h1>
          <p className="subheader">From household appliances to industrial machines, we bring your equipment back to life with expert care</p>
          <div className="button-container">
            <Link href="/" className="cta-button">
              Emergencies Repairs
            </Link>
          </div>
        </main>
      </div>
      <ImageSection />
      <Stats />
      <FourImage />
      <GlassSection/>
      <NewSection />
      <SectionSeven />
      <SectionEight images={[
        '/a-male-electrician-works-in-a-switchboard-in-overa-2025-03-16-16-43-45-utc_11zon.jpg',
        '/both-of-engineers-installing-a-small-robotic-arm-i-2025-01-09-01-19-19-utc.jpg',
        '/closeup-side-view-of-early-30-s-male-employee-at-a-2025-02-03-09-53-05-utc.jpg',
        '/confident-contractor-2025-02-22-03-35-48-utc_11zon.jpeg',
      ]} />
    </>
  )
}