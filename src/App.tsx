import { useState } from "react";
import Card from "../components/ui/card";
import NavBar from "../components/ui/NavBar";
// import NavBar from "../components/ui/NavBar";
import Header from "../components/ui/Header";
import Dates from "../components/ui/Dates.tsx";
import AboutSection from "../components/ui/AboutSection.tsx";
// import FeaturesSection from "../components/ui/FeaturesSection.tsx";
// import CostSection from "../components/ui/CostSection.tsx";
import StaffSection from "../components/ui/StaffSection.tsx";
import CaliberofPlay from "../components/ui/CaliberofPlay.tsx";
// import Testimonials from "../components/ui/Testimonials.tsx";
import RegistrationForm from "../components/ui/RegistrationForm.tsx";
import Footer from "../components/ui/Footer.tsx";
import "./App.scss";

function App() {
    return (
    
         <div className="home-container">
            <h1>
                Armstrong, Kelley &amp; Gatewood Referee School
            </h1>
            <NavBar />
            <Header />
            <Dates />
            <div className="home-container2">
            <AboutSection />
            </div>
            <StaffSection />
            <CaliberofPlay />
            <RegistrationForm />
            <Footer />
            </div>

    );
}

export default App;
