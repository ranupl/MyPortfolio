import React from "react";

const Skills = () => {
    return (
        <>
            <section id="skills" className="skills section-bg mt-5">
                <div className="container">
                    <div className="section-title">
                        <h2>Skills</h2>
                        <p>I have meticulously cultivated a diverse array of skills throughout my journey, encompassing a wide spectrum of technologies and domains. My proficiency extends to Node.js, Express.js, C++, React.js, HTML, CSS, MongoDB, MySQL, and Bootstrap, all of which empower me to craft dynamic and robust solutions. Beyond these technical facets, I possess a keen aptitude for data structures and algorithms, which enables me to tackle complex challenges with finesse. In essence, I am not just a developer; I am a problem solver, armed with a versatile toolkit to innovate and overcome obstacles in the ever-evolving landscape of technology.</p>
                    </div>
                    <div className="row skills-content">
                        <div className="col-lg-6 aos-init aos-animate tracking-in-expand" data-aos="fade-up">

                            <div className="progress">
                                <span className="skill">HTML <i className="val">100%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="90" style={{ width: "100%" }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">CSS <i className="val">90%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">JavaScript <i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
                                </div>
                            </div>

                            <div className="progress">
                                <span className="skill">MongoDB<i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%" }}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">C++<i className="val">65%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "65%" }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 aos-init aos-animate tracking-in-expand" data-aos="fade-up" data-aos-delay="100">
                            <div className="progress">
                                <span className="skill">Node Js <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">Express Js <i className="val">70%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">React Js <i className="val">55%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100" style={{ width: "55%" }}></div>
                                </div>
                            </div>
                            <div className="progress">
                                <span className="skill">MySQL<i className="val">60%</i></span>
                                <div className="progress-bar-wrap">
                                    <div className="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ width: "60%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills;