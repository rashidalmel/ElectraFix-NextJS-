"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import '../styles/Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-left">
          <Link href="/">
            <Image src="/logo.png" alt="Logo" width={100} height={50} className="logo" priority />
          </Link>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        <div className={`nav-center${menuOpen ? ' menu-open' : ''}`}> 
          <Link href="/" className="nav-link" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/about" className="nav-link" onClick={() => setMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/service" className="nav-link" onClick={() => setMenuOpen(false)}>
            Service
          </Link>
          <Link href="/study-case" className="nav-link" onClick={() => setMenuOpen(false)}>
            Study Case
          </Link>
          <div className="dropdown">
            <button className="nav-link dropdown-toggle">
              Pages
            </button>
            <div className="dropdown-content">
              <Link href="/pages/page1" className="dropdown-item" onClick={() => setMenuOpen(false)}>Page 1</Link>
              <Link href="/pages/page2" className="dropdown-item" onClick={() => setMenuOpen(false)}>Page 2</Link>
              <Link href="/pages/page3" className="dropdown-item" onClick={() => setMenuOpen(false)}>Page 3</Link>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <Link href="/" className="emergency-button" onClick={() => setMenuOpen(false)}>
            Emergency Repairs
          </Link>
        </div>
      </div>
    </nav>
  );
}
