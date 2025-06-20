import Link from 'next/link'
import ImageSection from './components/image'
import Stats from './components/Stats'
import FourImage from './components/FourImage'
import GlassSection from './components/GlassSection'

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
    </>
  )
}