import Image from 'next/image';
import '../styles/image.css';

const ImageSection = () => {
  // Create array of logos for repetition
  const singleSet = (
    <div className="logo-container">
      <Image src="/logo.png" alt="Company Logo" width={120} height={30} className="ribbon-logo" />
      <Image src="/logo.png" alt="Company Logo" width={120} height={30} className="ribbon-logo" />
      <Image src="/logo.png" alt="Company Logo" width={120} height={30} className="ribbon-logo" />
      <Image src="/logo.png" alt="Company Logo" width={120} height={30} className="ribbon-logo" />
    </div>
  );

  return (
    <section className="image-section">
      <div className="image-container">
        <div className="image-wrapper">          
            <Image
            src="/a-male-electrician-works-in-a-switchboard-in-overa-2025-03-16-16-43-45-utc_11zon.jpg"
            alt="Male Electrician"
            width={500}
            height={400}
            className="image"
            priority
          />
        </div>
        <div className="image-wrapper">
          <Image
            src="/reporting-on-machine-process-2025-03-15-15-32-02-utc.jpg"
            alt="Reporting on Machine Process"
            width={500}
            height={400}
            className="image"
            priority
          />
        </div>
      </div>
      <div className="logo-ribbon">
        <div className="logo-scroll">
          {/* Repeat the set multiple times to ensure smooth looping */}
          {singleSet}
          {singleSet}
          {singleSet}
          {singleSet}
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
