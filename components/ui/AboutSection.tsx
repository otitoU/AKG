import React from 'react';
import './AboutSection.css';

function AboutUs() {
  return (
    <section id="aboutus" className="about-section">
      <h1>MISSION STATEMENT</h1>
      <p className="mission">
      The Central AR Officiating basketball camp is designed for beginning and
        veteran high school and collegiate officials looking to advance their
        basketball officiating careers. Our objective is to help you advance your
        officiating career goals. Campers will learn 2 and 3-person basketball
        officiating mechanics and philosophies, court coverage for men’s and women’s
        collegiate and high school contests, based on your individual goals.
        We’ll help you improve your game management and communication skills,
        network with other officials, coaches, and assignors.
      </p>

      <h3>Our Objectives</h3>
      <ul className="objectives-list">
        <li>Emphasis on individual instructions</li>
        <li>Videotape analysis and daily on-court assignments.</li>
        <li>Proper application of officiating mechanics and techniques.</li>
      </ul>
    </section>
  );
}

export default AboutUs;
