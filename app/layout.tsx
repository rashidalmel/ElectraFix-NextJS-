import Link from 'next/link'
import Image from 'next/image'
import './styles/Navbar.css'
import Navbar from './components/Navbar'

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
      </body>
    </html>
  )
}