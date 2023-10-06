import React from "react";
import profile from "../images/profile.png";
import Skills from "./Skills";
import Project from "./Project";
import About from "./About";
// import Resume from "./Resume";

const Home = () => {
    return (
        <>
            <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
                <div class="hero-container aos-init aos-animate" data-aos="fade-in">
                    <h1>Shanu Panchal</h1>
                    <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Developer</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></p>
                </div>
            </section>
            <About />
            {/* <Resume /> */}
            <Skills />
            <Project />
        </>
    )
}

export default Home;