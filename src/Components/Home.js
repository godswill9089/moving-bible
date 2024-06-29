import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import HowWedo from "./HowWeDo/HowWedo";
import Become from "./Become/Become";
import SignUp from "./Signup/SignUp";
import Testimonials from "./Testimonials/Testimonials";
import Footer from "./Footer/Footer";


const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <About />
            <HowWedo />
            <Testimonials />
            <Become />
            <SignUp />
            <Footer />
        </div>
    )
}

export default Home;