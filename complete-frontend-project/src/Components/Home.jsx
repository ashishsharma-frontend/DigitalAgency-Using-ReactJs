// Importing necessary modules and styles
import React, { useState } from "react";
import "./CssFiles/Home.css";
import ManVideo from "./ProjectImage/HomeImages/Home.mp4";
import EyeImg from "./ProjectImage/HomeImages/eye.svg";
import AshishImg from "./ProjectImage/HomeImages/Ashish.jpg";
import { TfiInstagram } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

// Home component
function Home() {
  // State to manage the content switch
  const [currentContent, setCurrentContent] = useState(1);

  // Function to switch content based on button click
  const switchContent = (contentNumber) => {
    setCurrentContent(contentNumber);
  };

  return (
    <div className="home-container">
      {/* Main content section */}
      <div className="home-content">
        <div className="text-content">
          <p>
            Available For Hire <img src={EyeImg} alt="" />
          </p>
          <div className="heading">
            <h1>We </h1>
            <h1> create </h1>
            <h1>Memorial</h1>
            <h1> Experience</h1>
            <h1>
              For <span>Web Development </span>!
            </h1>
          </div>
        </div>

        <div className="video-container">
          <video autoPlay loop muted className="video">
            <source src={ManVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>

      {/* Information container */}
      <div className="info-container">
        <div className="info-title">
          <h1>What About Me ?</h1>
        </div>
        <div className="info-content">
          {/* Buttons to switch content */}
          <div className="switch-button">
            <button onClick={() => switchContent(1)}>Intro</button>
            <button onClick={() => switchContent(2)}>About Web</button>
            <button onClick={() => switchContent(3)}>Passion</button>
          </div>

          {/* Render content based on the current selection */}
          {currentContent === 1 && <IntroContent />}
          {currentContent === 2 && <AboutWebContent />}
          {currentContent === 3 && <PassionContent />}
        </div>
      </div>
    </div>
  );
}
// Separate component for Intro content
const IntroContent = () => {
  return (
    <div className="intro-content">
      <div className="intro-title">
        <h1>Intro</h1>
      </div>
      <div className="main-content">
        <div className="intro-text-content">
          <div className="main-text">
            <div className="my-image">
              <img src={AshishImg} alt="" />
            </div>
            <div className="text">
              <p>Ashish Sharma</p>
              <span>Frontend Developer</span>
            </div>
          </div>
        </div>

        <div className="pro-exper">
          <div className="projects">
            <span> 04 +</span>
            <p>Projects</p>
          </div>
          <div className="experience">
            <span> 6 +</span>
            <p>Months</p>
          </div>
        </div>

        <SocialMediaIcons />
      </div>
      <div className="quotes">
        <p>
          Crafting logic into lines, creating digital symphonies of innovation.
        </p>
      </div>
    </div>
  );
};

// Separate component for Social Media Icons
const SocialMediaIcons = () => {
  return (
    <div className="social-media">
      <div className="instagram">
        <div className="icon">
          <TfiInstagram />
        </div>
        <div className="icon-name">
          <p>InstaGram</p>
        </div>
      </div>
      <div className="github">
        <div className="icon">
          <FiGithub />
        </div>
        <div className="icon-name">
          <p>GitHub</p>
        </div>
      </div>
      <div className="linkdin">
        <div className="icon">
          <FaLinkedinIn />
        </div>
        <div className="icon-name">
          <p>LinkedIn</p>
        </div>
      </div>
    </div>
  );
};

// Separate component for About Web content
const AboutWebContent = () => {
  return (
    <div className="digital-agency">
      <div className="title">
        <h1>About Web</h1>
      </div>

      <div className="main-title">
        <h1>Innovate. Collaborate. Elevate</h1>
      </div>
      <div className="paragraph">
        <p>
          At our digital development and UI/UX agency, Mousham, Satvik, and
          Rohan seamlessly blend skills to craft cutting-edge solutions.
        </p>
        <p>
          With expertise in frontend, UI/UX, and backend development, we, the
          dedicated team, ensure the delivery of exceptional and impactful
          digital products.
        </p>
      </div>

      <div className="digital-button">
        <button>Discover</button>
      </div>
    </div>
  );
};

// Separate component for Passion content
const PassionContent = () => {
  return (
    <div className="passion">
      <div className="title">
        <h1>Passion</h1>
      </div>
      <div className="main-title">
        <h1>CODING IS MORE THAN JUST A JOB</h1>
        <p>Coding Is Passion</p>
      </div>
      <div className="paragraph">
        <p>
          I am very lucky that I was able to turn my hobby into a profession. I
          regularly get new challenges that can be solved with code. Sometimes
          the solution is simple, sometimes a bit more complicated, but never
          boring.
        </p>
        <p>
          Design must serve a purpose, blending strategy and creativity to
          convey a brand's unique narrative, forging meaningful connections with
          the target audience.
        </p>
      </div>
    </div>
  );
};

export default Home;
