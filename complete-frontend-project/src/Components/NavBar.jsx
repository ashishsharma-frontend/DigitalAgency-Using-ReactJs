// Import React and useState from the React library
import React, { useState } from "react";

// Import the CSS file for styling
import "./CssFiles/NavBar.css";
import { Link } from "react-router-dom";

// Define a functional component called Navbar
const NavBar = () => {
  // Define a state variable `navOpen` and a function to update it `setNavOpen`
  const [navOpen, setNavOpen] = useState(false);

  // Define a function to toggle the navigation
  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  // JSX structure for the Navbar component
  return (
    <div className="nav">
      <div className="nav-container">
        {/* Navbar with conditional classes based on the `navOpen` state */}
        <div className={`navbar ${navOpen ? "navbar-open" : ""}`}>
          {/* Logo section with conditional classes */}
          <div className={`logo ${navOpen ? "logo-open" : ""}`}>
            <Link to="/">
              <span>CoderGuy</span>
            </Link>
            <div className="logo-img">
              {/* <Link to="/"> <img src={MonkeyLogo} alt="" /></Link> */}
            </div>
          </div>
          {/* Menu toggle button */}
          <div className="menu-toggle" onClick={toggleNav}>
            {/* Animated lines for the toggle button */}
            <div className={navOpen ? "homeBox homeBoxOpen" : "homeBox"}>
              <span className={navOpen ? "lineTop spin" : "lineTop"}></span>
              <span
                className={navOpen ? "lineBottom spin" : "lineBottom"}
              ></span>
            </div>
          </div>
        </div>

        {/* Navigation overlay with transition effects */}
        <div
          className="nav-overlay"
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s", // Delay transition
          }}
        >
          {/* Navigation links with transition delays */}
          <ul className="nav-links">
            <li className="nav-item">
              {/* Link to About Me with transition */}
              <Link
                to="/whatwedo"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "0.9s" : "0s",
                }}
              >
                What We Do
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* Link to Collection with transition */}
              <Link
                to="/Team"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1s" : "0s",
                }}
              >
                My Team
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* Link to Collection with transition */}
              <Link
                to="/process"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.1s" : "0s",
                }}
              >
                Our Process
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* Link to Collection with transition */}
              <Link
                to="/project"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.2s" : "0s",
                }}
              >
                My Work
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

            <li className="nav-item">
              {/* Link to Collection with transition */}
              <Link
                to="/contact"
                onClick={() => setNavOpen(!navOpen)}
                style={{
                  top: navOpen ? "0" : "120px",
                  transitionDelay: navOpen ? "1.3s" : "0s",
                }}
              >
                Contact Me
              </Link>
              <div className="nav-item-wrapper"></div>
            </li>

          </ul>

        </div>
      </div>
    </div>
  );
};

// Export the Navbar component
export default NavBar;
