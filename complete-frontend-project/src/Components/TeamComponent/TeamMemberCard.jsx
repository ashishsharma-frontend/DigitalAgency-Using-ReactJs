// TeamMemberCard.js
import React from "react";
import "../CssFiles/TeamMember.css";
import WowImg from "../ProjectImage/TeamImages/Wow.svg";
import { FaInstagram, FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

// TeamMemberCard component
function TeamMemberCard({ member, isExpanded, onClick }) {
  return (
    <div className="team-member-cards">
      {/* Card container for each team member */}
      <div className="my-team">
        {/* Expandable card for each team member */}
        <div
          className={`expandable-card ${isExpanded ? "card-out-expanded" : ""}`}
          onClick={onClick}
        >
          <div className="team-card">
            {/* Team member image */}
            <div className="team-img">
              <img src={member.image} alt="" />
            </div>
            {/* Team member name */}
            <div className="team-signature">
              <span>{member.name}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Expanded card content */}
      {isExpanded && (
        <div className="layer-card">
          <div className="card-out" onClick={onClick}>
            <div className="team-card-out">
              {/* Team member role and wow image */}
              <div className="team-skill">
                <p>{member.role}</p>
                <div className="wow-img">
                  <img src={WowImg} alt="" />
                </div>
              </div>

              {/* Team member description and social icons */}
              <div className="para-social">
                <div className="para">
                  <p>{member.description}</p>
                </div>
                <div className="social-icons">
                  {/* Social media icons with links */}
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram size={25} />
                  </a>
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={25} />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter size={25} />
                  </a>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin size={25} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TeamMemberCard;
