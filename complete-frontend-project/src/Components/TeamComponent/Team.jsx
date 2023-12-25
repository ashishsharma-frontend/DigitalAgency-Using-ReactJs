// Team.js
import React, { useState } from "react";
import "../CssFiles/TeamMember.css";
import TeamMemberCard from "../TeamComponent/TeamMemberCard";
import { BsLightning } from "react-icons/bs";
import MoushamImg from "../ProjectImage/TeamImages/Mousham.jpg";
import SatvikImg from "../ProjectImage/TeamImages/Satvik.jpg";
import RonakImg from "../ProjectImage/TeamImages/Ronak.jpg";

// Sample data for team members
const teamMembers = [
  {
    name: "Mousham Kushwah",
    image: MoushamImg,
    role: "Frontend Developer",
    description:
      "Passionate about crafting engaging user experiences, Mousham brings a touch of magic to the frontend. With a blend of creativity and precision, he turns ideas into captivating web interfaces.",
  },
  {
    name: "Satvik Pandey",
    image: SatvikImg,
    role: "UI/UX Designer",
    description:
      "Satvik is the artistic soul behind our user interfaces. With a keen eye for design and a passion for creating intuitive experiences, he transforms ideas into visually stunning and user-friendly designs.",
  },
  {
    name: "Ronak Sharma",
    image: RonakImg,
    role: "Backend Developer",
    description:
      "With a knack for backend wizardry, Ronak ensures the functionality and performance of our web applications. His coding expertise and problem-solving skills lay the foundation for a robust and seamless backend experience.",
  },
];

// Team component
function Team() {
  // State to track the expanded member card
  const [expandedMember, setExpandedMember] = useState(null);

  // Handler for member card click
  const handleMemberClick = (index) => {
    // Toggle the expanded state for the clicked member
    setExpandedMember(expandedMember === index ? null : index);
  };

  return (
    <div className="team-all-content">
      <div className="team-main-title">
        <h1>Meet the Team</h1>
      </div>
      <div className="top-content">
        <div className="top-text-content">
          <div className="top-paragraph">
            <p>
              <span>
                <BsLightning />
              </span>{" "}
              Step into the world of coding where creativity knows no bounds.
              Join our talented team on an exhilarating adventure filled with
              passion for programming. Together, let's unlock the magic of
              coding and embrace the joy that comes with turning lines of code
              into something extraordinary.{" "}
              <span>
                <BsLightning />
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="team-container">
        {/* Map through team members and render TeamMemberCard for each */}
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            member={member}
            isExpanded={expandedMember === index}
            onClick={() => handleMemberClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Team;
