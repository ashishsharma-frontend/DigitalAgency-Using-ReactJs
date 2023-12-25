import React, { useEffect } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./CssFiles/OurProcess.css";
import DiscussionImg from "./ProjectImage/OurServiveImage/Discussion.jpg";
import IdeaImg from "./ProjectImage/OurServiveImage/Idea.jpg";
import ExecutionImg from "./ProjectImage/OurServiveImagE/Execustion.jpg";

gsap.registerPlugin(Draggable);

function OurProcess() {
  useEffect(() => {
    // Use the document.querySelectorAll to target all the card-skill elements
    const works = document.querySelectorAll(".work");

    // Iterate through each card-skill element and make it draggable
    works.forEach((work) => {
      Draggable.create(work, {
        type: "x,y", // Allow dragging in both x and y directions
        edgeResistance: 0.65, // Control the resistance when dragging towards the edges
        onPress: function () {
          gsap.to(work, { scale: 1.1, zIndex: 2, ease: "power3.out" }); // Scale up when pressed
        },
        onRelease: function () {
          gsap.to(work, { scale: 1, zIndex: 1, ease: "power3.out" }); // Scale down when released
        },
      });
    });
  }, []);

  // Array containing data for each step
  const steps = [
    {
      title: "1. Step One",
      image: DiscussionImg,
      alt: "Discussion Image",
      subtitle: "Discussion",
      description:
        "Understand the client's business, goals, and challenges for building relationships.",
    },
    {
      title: "2. Step Second",
      image: IdeaImg,
      alt: "Idea Image",
      subtitle: "Ideation",
      description:
        "Gather ideas and create the first concept for the future product.",
    },
    {
      title: "3. Step Third",
      image: ExecutionImg,
      alt: "Execution Image",
      subtitle: "Execution",
      description:
        "Provide the first draft of a project, accept minor and major revisions.",
    },
  ];

  return (
    <div className="work-container">
      <div className="work-content">
        <div className="work-top-text">
          <span>OUR PROCESS</span>
          <h1>Working process</h1>
          <p>A well-structured workflow with great design execution.</p>
        </div>

        <div className="work-process-content">
          {/* Mapping through the steps array to display cards */}
          {steps.map((step, index) => (
            <div className="work" key={index}>
              <div className="card-title">
                <span>{step.title}</span>
              </div>
              <div className="img-text-content">
                <div className="work-image">
                  <img src={step.image} alt={step.alt} />
                </div>
                <h1>{step.subtitle}</h1>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default OurProcess;
