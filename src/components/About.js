import React from "react";
import profile from "../images/mypic.jpg";

const About = () => {
    return (
        <>
            <section id="about" className="about mt-5">
                <div className="container">

                    <div className="section-title">
                        <h2>About</h2>
                        <p>Shanu Panchal, a tenacious software developer engineer hailing from the heartland of Madhya Pradesh.
                            I am a diligent and time-conscious individual, a perpetual learner with a fervent passion for development. I am eager to cultivate further technical expertise. I approach my work with sincerity and a deep love for learning.
                        </p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right">
                            <img src={profile} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                            <h3>Software Developer Engineer.</h3>
                            <p className="fst-italic">
                                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua. */}
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+91 8088566151</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bangalore, India</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Linkedin:</strong> <span><a href="https://www.linkedin.com/in/shanupl/">linkedin/shanupl</a></span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bechelor</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>ranupl542011@gmail.com</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span><a href="https://github.com/ranupl">github/shanupl</a></span></li>
                                    </ul>
                                </div>
                            </div>
                            <p>
                                {/* I am a diligent and time-conscious individual, a perpetual learner with a fervent passion for development. I am eager to cultivate further technical expertise. I approach my work with sincerity and a deep love for learning. */}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default About;