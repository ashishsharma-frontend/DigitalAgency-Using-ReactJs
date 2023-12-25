import React, { useState } from "react";
import "./CssFiles/WhatWeDo.css";
import EyeLeftSvg from "./ProjectImage/WhatWeDoImage/EyeRight.svg";
import EyeRight from "./ProjectImage/WhatWeDoImage/EyeLeft.svg";
import Arrow from "./ProjectImage/WhatWeDoImage/Arrow.svg";

function WhatWeDO() {
  const [showWebDevelopment, setShowWebDevelopment] = useState(false);
  const [showWebDesign, setShowWebDesign] = useState(false);

  const toggleWebDevelopment = () => {
    setShowWebDevelopment(!showWebDevelopment);
    setShowWebDesign(false); // Hide Web Design
  };

  const toggleWebDesign = () => {
    setShowWebDesign(!showWebDesign);
    setShowWebDevelopment(false); // Hide Web Development
  };

  return (
    <div className="big-container">
      {/* Heading for the section */}
      <div className="card-heading">
        <h1>What We Do?</h1>
      </div>

      {/* Container for services and scope of work */}
      <div className="Service-container">
        {/* Section for the scope of work */}
        <div className="what-work-do">
          <div className="work-do-text">
            <p>Our Services</p>
            <div className="work-do-heading">
              <h1>The Service</h1>
              <h1>
                We <span>Provide</span>
              </h1>
            </div>
          </div>

          <div className="work-do-para">
            <p>
              Welcome to our exquisite web development services! Our dynamic
              team, led by Mousam's frontend prowess, Satvik's UI/UX finesse,
              and Rohan's backend expertise, is passionately committed to
              crafting visually stunning and functionally robust digital
              experiences. Your satisfaction is our code!
            </p>
          </div>
        </div>

        {/* Section for web development and design */}
        <div className="service-content">
          {/* Web Development Content */}
          <div className="development-content">
            <div className="text-content">
              <div className="top-dev-text" onClick={toggleWebDevelopment}>
                <div className="count">
                  <h1>01</h1>
                </div>
                <div className="title">
                  <h1>
                    Web Development _{" "}
                    <span className="svg-logo-img-one">
                      <img src={EyeRight} alt="" />
                    </span>
                  </h1>
                </div>
                <div className="dev-img">
                  <img src={Arrow} alt="" />
                </div>
              </div>
              {/* List of services under web development */}
              <div
                className={`service ${showWebDevelopment ? "show" : ""} ${
                  showWebDesign ? "hide" : ""
                }`}
              >
                <span>Website Development</span>
                <span>Web App Development</span>
                <span>Frontend Development</span>
                <span>API Development</span>
                <span>Brand Guide</span>
              </div>
            </div>
          </div>

          {/* Web Design Content */}
          <div className="design">
            <div className="design-content">
              <div className="text-content">
                <div className="top-dev-text" onClick={toggleWebDesign}>
                  <div className="count">
                    <h1>02</h1>
                  </div>
                  <div className="title">
                    <h1>
                      Web Design _{" "}
                      <span className="svg-logo-img-two">
                        <img src={EyeLeftSvg} alt="" />
                      </span>
                    </h1>
                  </div>
                  <div className="dev-img">
                    <img src={Arrow} alt="" />
                  </div>
                </div>
                {/* List of services under web design */}
                <div
                  className={`service ${showWebDesign ? "show" : ""} ${
                    showWebDevelopment ? "hide" : ""
                  }`}
                >
                  <span>Website</span>
                  <span>Logo & Branding</span>
                  <span>Brand Guide</span>
                  <span>Sass</span>
                  <span>Design System</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhatWeDO;
