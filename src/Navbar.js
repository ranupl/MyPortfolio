import React, { useState, useEffect } from "react";
import profile from "./images/mypic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faHouse,
  faAddressCard,
  faFile,
  faDiagramProject,
  faList,
  faTimes,
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
                    <img src={profile} alt="" className="img-fluid rounded-circle" />
                    <h1 className="text-light"><a href="index.html">Shanu Panchal</a></h1>
                    <div className="social-links mt-3 text-center">
                        <a href="#" className="google-plus"><FontAwesomeIcon icon={faEnvelope} /></a>
                        <a href="#" className="linkedin"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                    </div>
                </div>
                <nav id="navbar" class="nav-menu navbar">
                    <ul>
                        <li><a href="#hero" className="nav-link active"><FontAwesomeIcon icon={faHouse} />&nbsp;&nbsp;<span>Home</span></a></li>
                        <li><a href="#about" className="nav-link"><FontAwesomeIcon icon={faAddressCard} />&nbsp;&nbsp;<span>About</span></a></li>
                        <li><a href="#resume" className="nav-link"><FontAwesomeIcon icon={faFile} />&nbsp;&nbsp;<span>Resume</span></a></li>
                        <li><a href="#projects" className="nav-link"><FontAwesomeIcon icon={faDiagramProject} />&nbsp;&nbsp;<span>Projects</span></a></li>
                    </ul>
                </nav>
            </div>
        </header>
      )}

      {window.innerWidth < 1100 && (
        <FontAwesomeIcon
          icon={isToggleIcon ? faTimes : faList}
          className="bi bi-list mobile-nav-toggle d-xl-none w-list"
          onClick={toggleHeader}
        />
      )}
    </>
  );
};

export default Navbar;



