import React from 'react';
import './Dates.css';

function DatesAndLocations() {
  return (
    <section className="dates-section" id="dates">
      <h2>2025 Camp Dates & Locations</h2>
      <ul>
        <li>
          <strong>Session I:</strong> Girls Team Camp <br />
          <strong>Dates:</strong> June 16 - 17, 2025
        </li>
        <li>
          <strong>Session II:</strong> Boys Team Camp <br />
          <strong>Dates:</strong> July 7 - 8, 2025
        </li>
        <li>
          <strong>Time:</strong> 7:30 AM – 6:00 PM
        </li>
        <li>
          <strong>Location:</strong> Pulaski Academy High School <br />
          12701 Hinson Rd, Little Rock, AR 72212
        </li>
      </ul>
    </section>
  );
}

export default DatesAndLocations;
