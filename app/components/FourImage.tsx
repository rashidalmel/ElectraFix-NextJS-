import Image from 'next/image'
import '../styles/fourimage.css'

const FourImage = () => {
  const imageItems = [
    {
      src: '/a-male-electrician-works-in-a-switchboard-in-overa-2025-03-16-16-43-45-utc_11zon.jpg',
      text: 'Industrial Equipment Repairs for all'
    },
    {
      src: '/reporting-on-machine-process-2025-03-15-15-32-02-utc.jpg',
      text: 'Industrial Equipment Repairs for all'
    },
    {
      src: '/robotic-arm-engineer-check-on-equipment-in-its-wit-2025-01-29-10-43-11-utc.jpg',
      text: 'Industrial Equipment Repairs for all'
    },
    {
      src: '/robotic-arm-engineer-check-on-equipment-in-its-wit-2025-01-29-10-43-11-utc.jpg',
      text: 'Industrial Equipment Repairs for all'
    }
  ]

  return (
    <section className="fourimage-section">
      <div className="fourimage-header">
        <h2 className="fourimage-title">Professional Repairs for Every Electrical Problem</h2>
      </div>
      <div className="fourimage-container">
        {imageItems.map((item, index) => (
          <div key={index} className="image-item">
            <Image
              src={item.src}
              alt={`Electrical repair service ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="image-text">
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FourImage
