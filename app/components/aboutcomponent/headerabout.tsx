import React from "react";
import '../../styles/aboutcss/headerabout.css';
import Link from 'next/link';

const HeaderAbout = () => (
  <div className="header-about">
    <h1 className="header-about-title">Fast, Reliable Electrical Equipment Repairs You Can Trust</h1>
    <p className="header-about-subtitle">From household appliances to industrial machines, we bring your equipment back to life with expert care</p>
    <Link href="/contact" className="nav-link header-about-btn">Request a Free Quote</Link>
  </div>
);

export default HeaderAbout;
