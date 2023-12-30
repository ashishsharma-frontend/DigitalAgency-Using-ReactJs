// Importing React and styles
import React from "react";
import "./CssFiles/WebProject.css"; // Corrected file extension to .css

// Importing project images
import EcommerceImg from "./ProjectImage/ProjectImages/Eccomerce.jpg";
import PotfolioImg from "./ProjectImage/ProjectImages/Portfolio.jpg";
import SkillsWebImg from "./ProjectImage/ProjectImages/SkillsWeb.jpg";
import ArrowImg from "./ProjectImage/ProjectImages/Arrow.svg";
import showToast from "./Toast/ToastWork";

// WebProject component

function WebProject() {
  const showToastMessage = (text) => {
    showToast(text);
  };

  return (
    <div className="project-container">
      {/* Project title */}
      <div className="project-title">
        <h1>See My Projects</h1>
      </div>

      {/* Project content */}
      <div className="project-content">
        {/* E-commerce Web Project */}
        <div className="e-commerce-web">
          <div className="project-text">
            <h1>Project 01</h1>
            <span>E-commerce Web</span>
            <p>
              Vastra Fashion, an e-commerce web destination, embodies the
              epitome of men's fashion. Explore a curated collection of stylish
              and timeless clothing that seamlessly blends comfort and
              sophistication. Elevate your wardrobe with our meticulously
              crafted pieces, designed for the modern man with a discerning
              taste.
            </p>
            <div className="buttons">
              <div
                className="live-button"
                onClick={() => showToastMessage("Web is live!")}
              >
                <span>
                  Visit Live <img src={ArrowImg} alt="" />
                </span>
              </div>

              <div
                className="more"
                onClick={() => showToastMessage("More about the project!")}
              >
                <span>
                  More <img src={ArrowImg} alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="image-content">
            {/* Project image */}
            <div className="project-image">
              <img src={EcommerceImg} alt="E-commerce Web Project" />
            </div>
          </div>
        </div>

        {/* Frontend & UI/UX Learning Platform */}
        <div className="frontend-portfolio">
          <div className="image-content">
            {/* Project image */}
            <div className="project-image">
              <img src={PotfolioImg} alt="Frontend & UI/UX Learning Platform" />
            </div>
          </div>

          <div className="project-text">
            <h1>Project 02</h1>
            <span>Frontend & UI/UX Learning Platform</span>
            <p>
              Embark on a journey to master HTML, CSS, JavaScript, responsive
              design, React.js, and GSAP. This portfolio web showcases my skills
              in creating visually appealing and interactive user interfaces.
              Let's build captivating digital experiences together.
            </p>
            <div className="buttons">
              <div className="live-button">
                <span>
                  Visit Live <img src={ArrowImg} alt="" />
                </span>
              </div>

              <div className="more">
                <span>
                  More <img src={ArrowImg} alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* HeyDood - Learning Platform */}
        <div className="education-platform">
          <div className="project-text">
            <h1>Project 03</h1>
            <span>HeyDood - Learning Platform</span>
            <p>
              HeyDood is your go-to education platform for coding,
              communication, and immersive book reading. Join a vibrant
              community of learners, broaden your knowledge, and embark on a
              journey of continuous growth and discovery.
            </p>
            <div className="buttons">
              <div className="live-button">
                <span>
                  Visit Live
                  <img src={ArrowImg} alt="" />
                </span>
              </div>

              <div className="more">
                <span>
                  More <img src={ArrowImg} alt="" />
                </span>
              </div>
            </div>
          </div>

          <div className="image-content">
            {/* Project image */}
            <div className="project-image">
              <img src={SkillsWebImg} alt="HeyDood - Learning Platform" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebProject;
