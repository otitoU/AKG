import React from 'react';
import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <section id="contact" className="registration-section">
      <h1>Register for Camp</h1>
      <p className="intro">
        We’re excited to have your child join us for an unforgettable STEM experience! 
        Please complete the registration form to secure your spot. 
        Space is limited, and registration is on a first-come, first-served basis.
      </p>

      <a
        className="register-button"
        href="https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_LINK/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go to Registration Form
      </a>
    </section>
  );
}

export default RegistrationForm;
