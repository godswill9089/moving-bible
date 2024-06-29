import React from "react";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import About from "./About/About";
import HowWedo from "./HowWeDo/HowWedo";


const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <About />
            <HowWedo />
        </div>
    )
}

export default Home;