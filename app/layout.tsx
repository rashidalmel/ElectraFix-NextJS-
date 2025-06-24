import Link from 'next/link'
import Image from 'next/image'
import './styles/Navbar.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

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