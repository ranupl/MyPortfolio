import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Skills from "./Skills";
import Project from "./Project";
import About from "./About";

const Home = () => {
    return (
        <>
            <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
                <div className="hero-container text-pop-up-top" data-aos="fade-in">
                    <h1 className="text-center">Shanu Panchal</h1>
                    <p className="text-center">I'm a {' '}
                        <span><Typewriter
                            words={['Developer', 'Engineer', 'Coder', 'Designer']}
                            loop={0}
                            cursor
                            cursorStyle='|'
                            typeSpeed={70}
                            deleteSpeed={50}
                            delaySpeed={1000} /></span>
                    </p>
                </div>
            </section>
            <About />
            <Skills />
            <Project />
        </>
    )
}

export default Home;