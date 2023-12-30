// Home.jsx
// Importing necessary modules and styles
import React, { useState } from "react";
import "./CssFiles/Home.css";
import ManVideo from "./ProjectImage/HomeImages/Home.mp4";
import WorkImg from './ProjectImage/HomeImages/Work.png';
import PassionImg from "./ProjectImage/HomeImages/PassionImg.png"
import EyeImg from "./ProjectImage/HomeImages/eye.svg";
import ProfileImg from "./ProjectImage/HomeImages/Main.jpg";
import { TfiInstagram } from "react-icons/tfi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import showToast from "./Toast/ToastHome";

function Home() {
  const [currentContent, setCurrentContent] = useState(1);

  const switchContent = (contentNumber, toastMessage) => {
    setCurrentContent(contentNumber);
    showToast(toastMessage, contentNumber);
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
            <h1>We</h1>
            <h1>create </h1>
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
          <div className="switch-button">
            <button onClick={() => switchContent(1, "Switched to Intro ☄️")}>
              Intro
            </button>
            <button
              onClick={() => switchContent(2, "Switched to About Web  🪐")}
            >
              About Web
            </button>
            <button onClick={() => switchContent(3, "Switched to Passion 🔮")}>
              Passion
            </button>
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
      <div className="intro-text-image">
        <div className="intro-image">
          <img src={ProfileImg} alt="" />
        </div>
        <div className="intro-text">
          <h1>Ashish Sharma</h1>
          <p>FullStack Developer</p>
        </div>
      </div>

      <div className="intro-bottom-text">
        <div className="about-text">
          <p>
            Passionate FullStack Developer and UI/UX enthusiast, Ashish Sharma,
            finds joy in crafting seamless digital experiences. With a cup of
            coffee in hand, he believes in constant learning, turning challenges
            into opportunities.
          </p>
        </div>

        <SocialMediaIcons />
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
          <a
            href="https://www.instagram.com/coder_boy_ashish"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TfiInstagram />
          </a>
        </div>
        <div className="icon-name">
          <p>InstaGram</p>
        </div>
      </div>
      <div className="github">
        <div className="icon">
          <a
            href="https://github.com/ashishsharma-frontend"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiGithub />
          </a>
        </div>
        <div className="icon-name">
          <p>GitHub</p>
        </div>
      </div>
      <div className="linkdin">
        <div className="icon">
          <a
            href="https://www.linkedin.com/in/your_linkedin_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
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

      <div className="work-img">
        <img src={WorkImg} alt="" />
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

      <div className="passion-img">
        <img src={PassionImg} alt="" />
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
