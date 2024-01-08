import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me5.jpeg`} alt="" />
      </Link>
      <header>
        <h2>Sudarshan Kumar</h2>
        <p><a href="mailto:sudarshansuccess@gmail.com">sudarshansuccess@gmail.com</a></p>
        <p>Phone Number: 746-199-5193</p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Sudarshan. I am a <a href="https://gbu.ac.in/">GBU</a> graduate
        and the Lead Frontend Engineer at <a href="https://fooddarzee.com">Food Darzee</a>. Previously,
        I was a Fullstack Developer at <a href="https://mlinfomap.com">ML Infomap. </a>
        I'm working with newest front-end frameworks like Angular and
        React. I am a Software Developer with a demonstrated history of working in the information technology and services industry.
        Skilled in Web Design and Machine Learning. I Excel at Web Development,
        App Development including coordinating group-up planning, programming, and implementing at core modules along with excellent written
        and verbal communication skills.. Thank you 💜
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      {/* <p className="copyright">&copy; Michael D&apos;Angelo <Link to="/">mldangelo.com</Link>.</p> */}
    </section>
  </section>
);

export default SideBar;
