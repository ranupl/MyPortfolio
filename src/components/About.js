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
                        <div className="col-lg-4 aos-init aos-animate scale-up-center" data-aos="fade-right">
                            <img src={profile} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                            <h3>Software Developer Engineer.</h3>
                            <p className="fst-italic">
                            </p>
                            <div className="row">
                                <div className="col-lg-6 tracking-in-expand">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Bangalore, India</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Linkedin:</strong> <span><a href="https://www.linkedin.com/in/shanupl/">linkedin/shanupl</a></span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Github:</strong> <span><a href="https://github.com/ranupl">github/shanupl</a></span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6 tracking-in-expand">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Bechelor</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>ranupl542011@gmail.com</span></li>
                                    </ul>
                                </div>
                                <p>I honed my coding abilities with continuous learning proccess by working on various projects that have equipped me with a practical understanding of software development principles.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr />
        </>
    )
}

export default About;