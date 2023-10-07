import React from "react";
import profile from "../images/profile.png";
import Skills from "./Skills";
import Project from "./Project";
import About from "./About";

const Home = () => {    
    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container aos-init aos-animate text-pop-up-top" data-aos="fade-in">
                    <h1>Shanu Panchal</h1>
                    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Developer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></p>
                </div>
            </section>
            <About />
            <Skills />
            <Project />
        </>
    )
}

export default Home;