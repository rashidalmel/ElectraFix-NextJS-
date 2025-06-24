import Link from 'next/link'
import Image from 'next/image'
import './styles/Navbar.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = { // for SEO
  title: "Fast, Reliable Electrical Equipment Repairs | Ahito",
  description: "From household appliances to industrial machines, we bring your equipment back to life with expert care. Emergency repairs, expert technicians, and trusted service."
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}