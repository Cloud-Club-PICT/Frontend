import React, { useState } from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const core = [
  {
    name: "Rachna Karnavat",
    role: "Teacher Coordinator",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Himanshu",
    role: "President",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Shreya Kumar",
    role: "Vice President",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Kaushik Adhuri",
    role: "Secretary",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const webDevelopers = [
  {
    name: "Mayuri Kolhe",
    role: "Web Development Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Prajwal Padole",
    role: "Web Developer",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Hritika Phapale",
    role: "Web Developer",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Hrishikesh Patkar",
    role: "Web Developer",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Kiran Kankariya",
    role: "Web Developer",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const eventManagers = [
  {
    name: "Shivam Khetan",
    role: "Event Management Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Vedant Badade",
    role: "Event Management Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Vaishnavi Lakhade",
    role: "Event Manager",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Sampada Tagalpallewar",
    role: "Event Manager",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Purva Vajire",
    role: "Event Manager",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Shravani Kamthankar",
    role: "Event Manager",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Shrinivas Prachand",
    role: "Event Manager",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const socialMedia = [
  {
    name: "Harsha Pareek",
    role: "Marketing Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Palak Agrawal",
    role: "Social Media & Marketing Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Yash Shukla",
    role: "Social Media & Marketing Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const designTeam = [
  {
    name: "Shraddha Isokar",
    role: "Design Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Pranav Metil",
    role: "Design Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Shreyas Shirwadkar",
    role: "Design Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const documentation = [
  {
    name: "Sonali Kamble",
    role: "Documentation Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Prachi Said",
    role: "Documentation Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Anjali Changedia",
    role: "Documentation Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Nilakshi Sonawane",
    role: "Documentation Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Pranali Lokhande",
    role: "Documentation Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const sponsor = [
  {
    name: "Sanjeev Hotha",
    role: "Sponsorship Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Himanshu Gholde",
    role: "Sponsorship Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const techTeam = [
  {
    name: "Ankit Patne",
    role: "Technical Lead",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Tirthraj Mahajan",
    role: "Technical Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Girish Kale",
    role: "Technical Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Mikhiel Benji",
    role: "Technical Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
  {
    name: "Amey Joshi",
    role: "Technical Team Member",
    image: "/images/angela.jpg",
    social: { twitter: "#", linkedin: "#" },
  },
];

const TeamSection = ({ title, members }) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-6 transition-transform duration-300 transform hover:scale-105 hover:text-gray-300">
          {title}
        </h2>
        <div className="team-grid">
          {members.map((member, index) => (
            <div key={index} className="frame-container">
              <img
                className="w-full rounded-lg shadow-lg"
                src={member.image}
                alt={member.name}
              />
              <div className="overlay">
                <div className="text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm">{member.role}</p>
                  <div className="mt-4 flex justify-center space-x-4">
                    <a
                      href={member.social.twitter}
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-white"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MembersPage = () => {
  const [activeCategory, setActiveCategory] = useState("core");

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  const renderTeamSection = () => {
    switch (activeCategory) {
      case "core":
        return <TeamSection title="THE CORE" members={core} />;
      case "techTeam":
        return <TeamSection title="TECHNICAL TEAM" members={techTeam} />;
      case "webDevelopers":
        return <TeamSection title="WEB DEVELOPERS" members={webDevelopers} />;
      case "eventManagers":
        return <TeamSection title="EVENT MANAGERS" members={eventManagers} />;
      case "socialMedia":
        return (
          <TeamSection
            title="SOCIAL MEDIA & MARKETING TEAM"
            members={socialMedia}
          />
        );
      case "designTeam":
        return <TeamSection title="DESIGN TEAM" members={designTeam} />;
      case "documentation":
        return (
          <TeamSection title="DOCUMENTATION TEAM" members={documentation} />
        );
      case "sponsorship":
        return <TeamSection title="SPONSORSHIP TEAM" members={sponsor} />;
      default:
        return null;
    }
  };

  return (
    <div className="App bg-dark min-h-screen text-white font-merriweather">
      <div className="py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-16">
            MEET THE TEAM
          </h1>
          <div className="category-buttons">
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "core" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("core")}
            >
              The Core
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "webDevelopers" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("webDevelopers")}
            >
              Web Developers
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "techTeam" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("techTeam")}
            >
              Technical Team
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "eventManagers" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("eventManagers")}
            >
              Event Managers
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "socialMedia" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("socialMedia")}
            >
              Social Media & Marketing Team
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "designTeam" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("designTeam")}
            >
              Design Team
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "documentation" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("documentation")}
            >
              Documentation Team
            </button>
            <button
              className={`px-4 py-2 font-bold ${activeCategory === "sponsorship" ? "bg-gray-700 text-white" : "bg-gray-500 text-gray-200"} rounded`}
              onClick={() => handleCategoryChange("sponsorship")}
            >
              Sponsorship Team
            </button>
          </div>
          <div className="category-dropdown">
            <select
              className="dropdown-select"
              value={activeCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
            >
              <option value="core">The Core</option>
              <option value="webDevelopers">Web Developers</option>
              <option value="techTeam">Technical Team</option>
              <option value="eventManagers">Event Managers</option>
              <option value="socialMedia">Social Media & Marketing Team</option>
              <option value="designTeam">Design Team</option>
              <option value="documentation">Documentation Team</option>
              <option value="sponsorship">Sponsorship Team</option>
            </select>
          </div>
          {renderTeamSection()}
        </div>
      </div>
    </div>
  );
};

export default MembersPage;
