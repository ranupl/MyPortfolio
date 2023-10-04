import React from "react";
import cv from "../images/cv..png";

const Resume = () => {
    return (
        <>
            <section id="skills" className="skills section-bg mt-5">
                <div className="container">
                    <div className="section-title">
                        <h2>Resume</h2>
                        <img src={cv} alt="" className="img-fluid" width={850}/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;