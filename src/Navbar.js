import React, { useState, useEffect } from "react";
import profile from "./images/mypic.jpg";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { NavLink } from 'react-router-dom';
import {
    faEnvelope,
    faHouse,
    faAddressCard,
    faFile,
    faDiagramProject,
    faList,
    faTimes,
    faChartSimple
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    const [isHeaderVisible, setIsHeaderVisible] = useState(
        window.innerWidth >= 1100
    );
    const [isToggleIcon, setIsToggleIcon] = useState(false);

    const toggleHeader = () => {
        setIsHeaderVisible(!isHeaderVisible);
        setIsToggleIcon(!isToggleIcon);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsHeaderVisible(window.innerWidth >= 1100);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {isHeaderVisible && (
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src={profile} alt="" className="img-fluid rounded-circle"/>
                            <h1 className="text-white"><a href="index.html">Shanu Panchal</a></h1>
                            <div className="social-links mt-3 text-center">
                                <a href="mailto:ranupl542011@gmail.com" className="google-plus"><FontAwesomeIcon icon={faEnvelope} /></a>
                                <a href="https://www.linkedin.com/in/shanupl/" className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                        <nav id="navbar" class="nav-menu navbar">
                            <ul>
                                <li><NavLink to="/portfolio/" className="nav-link  active"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;<span>Home</span></NavLink></li>
                                <li><NavLink to="/about" className="nav-link"><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;<span>About</span></NavLink></li>
                                <li><a href="https://drive.google.com/file/d/18wEZAwgopzbGR1UWB4G5WvVkbSyEZkj4/view?usp=drive_link" className="nav-link" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;<span>Resume</span></a></li>
                                <li><NavLink to="/skills" className="nav-link"><FontAwesomeIcon icon={faChartSimple} />&nbsp;&nbsp;<span>Skills</span></NavLink></li>
                                <li><NavLink to="/project" className="nav-link"><FontAwesomeIcon icon={faDiagramProject} />&nbsp;&nbsp;<span>Project</span></NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </header>
            )}

            {window.innerWidth < 1100 && (
                <FontAwesomeIcon
                    icon={isToggleIcon ? faTimes : faList}
                    className="bi bi-list mobile-nav-toggle d-xl-none w-list"
                    style={{width: "20px", height:"20px", padding:"6px"}}
                    onClick={toggleHeader}
                />
            )}
        </>
    );
};

export default Navbar;



