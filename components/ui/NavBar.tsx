// import React, { useState } from "react";
// // import { companyLogo } from '../assets'
// import "./NavBar.scss";

// const NavBar = () => {
//     const [toggleHamburger, setToggleHambuger] = useState(false);
//     return (
//         <nav>
//             <ul className={toggleHamburger ? "open" : ""}>
//                 <li>
//                     <a
//                         href="#aboutsection"
//                         onClick={() => setToggleHambuger(false)}>
//                         Home
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#product" onClick={() => setToggleHambuger(false)}>
//                         Product
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#about" onClick={() => setToggleHambuger(false)}>
//                         About
//                     </a>
//                 </li>
//                 <li>
//                     <a href="#contact" onClick={() => setToggleHambuger(false)}>
//                         Contact
//                     </a>
//                 </li>
//             </ul>

//             <div
//                 className="hamburger"
//                 onClick={() => setToggleHambuger(!toggleHamburger)}>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//                 <span className="bar"></span>
//             </div>
//         </nav>
//     );
// };

// export default NavBar;

import React from 'react';
import './NavBar.scss';

function Navbar() {
  return (
    <header className="navbar">
      <nav className="navbar-menu">
        <a href="#home" className="nav-link">Home</a>
        <a href="#aboutus" className="nav-link">About Us</a>
        <a href="#team" className="nav-link">Team</a>
        <a href="#contact" className="nav-link">Contact Us</a>
      </nav>
    </header>
  );
}

export default Navbar;



