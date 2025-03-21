import { useState } from "react";
import Card from "../components/ui/card";
import NavBar from "../components/ui/NavBar";
// import NavBar from "../components/ui/NavBar";
import Header from "../components/ui/Header";
import AboutSection from "../components/ui/AboutSection.tsx";
import FeaturesSection from "../components/ui/FeaturesSection.tsx";
import CostSection from "../components/ui/CostSection.tsx";
import StaffSection from "../components/ui/StaffSection.tsx";
import RequirementsSection from "../components/ui/RequirementsSection.tsx";
import Testimonials from "../components/ui/Testimonials.tsx";
import RegistrationForm from "../components/ui/RegistrationForm.tsx";
import Footer from "../components/ui/Footer.tsx";
import "./App.scss";

function App() {
    return (
        <>
            <NavBar />
            <Card />
            <Header />
            <AboutSection />
            <FeaturesSection />
            <CostSection />
            <StaffSection />
            <RequirementsSection />
            <Testimonials />
            <RegistrationForm />
            <Footer />
        </>
    );
}

export default App;
