import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaChevronDown } from "react-icons/fa";

const core = [
  {
    name: "Rachna Karnavat",
    role: "Teacher Coordinator",
    image: "/images/AWS CC PICT- Member images/Core team/Rachna Karnavat.jpeg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/rachna-c-631a0916?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Himanshu Sangshetti",
    role: "President",
    image:
      "/images/AWS CC PICT- Member images/Core team/Himanshu Sangshetti.jpg",
    social: {
      gitHub: "https://github.com/Himanshu-Sangshetti",
      linkedin: "https://www.linkedin.com/in/himanshu-sangshetti-43b42122a/",
    },
  },
  {
    name: "Shreya Kumar",
    role: "Vice President",
    image: "/images/AWS CC PICT- Member images/Core team/Shreya Kumar.jpg",
    social: {
      gitHub: "https://github.com/KShreya03",
      linkedin: "https://www.linkedin.com/in/shreya-kumar-75a376254/",
    },
  },
  {
    name: "Kaushik Aduri",
    role: "Secretary",
    image: "/images/AWS CC PICT- Member images/Core team/Kaushik Aduri.jpg",
    social: {
      gitHub: "https://github.com/Kok363",
      linkedin: "https://www.linkedin.com/in/kaushik-aduri-b3ba20142/",
    },
  },
];

const webDevelopers = [
  {
    name: "Mayuri Kolhe",
    role: "Web Development Lead",
    image:
      "/images/AWS CC PICT- Member images/Web Development Team/Mayuri Kolhe.jpeg",
    social: {
      gitHub: "https://github.com/MayuriKolhe-2003",
      linkedin: "https://www.linkedin.com/in/mayuri-kolhe-538883193",
    },
  },
  {
    name: "Prajwal Padole",
    role: "Web Developer",
    image:
      "/images/AWS CC PICT- Member images/Web Development Team/Prajwal Padole.jpeg",
    social: {
      gitHub: "https://github.com/prajwalpkp2106",
      linkedin: "https://www.linkedin.com/in/prajwalpadole/",
    },
  },
  {
    name: "Hritika Phapale",
    role: "Web Developer",
    image:
      "/images/AWS CC PICT- Member images/Web Development Team/Hritika Phapale.jpg",
    social: { gitHub: "#", linkedin: "https://www.linkedin.com/in/hritikaph/" },
  },
];

const eventManagers = [
  {
    name: "Shivam Khetan",
    role: "Event Management Lead",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Shivam Khetan.jpeg",
    social: {
      gitHub: "https://github.com/Shivk123",
      linkedin: "https://www.linkedin.com/in/shivam-khetan/",
    },
  },
  {
    name: "Vedant Badade",
    role: "Event Management Lead",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Vedant Badade.jpg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/vedant-badade-b83707234?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Vaishnavi Lakade",
    role: "Event Manager",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Vaishnavi Lakade.jpg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/vaishnavi-lakade-29a14724a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Sampada Tagalpallewar",
    role: "Event Manager",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Sampada Tagalpallewar.jpg",
    social: {
      gitHub: "https://github.com/sampada010",
      linkedin:
        "https://www.linkedin.com/in/sampada-tagalpallewar-00171625b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Purva Vajire",
    role: "Event Manager",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Purva Vajire.jpeg",
    social: {
      gitHub: "https://github.com/PurvaVajire",
      linkedin: "https://www.linkedin.com/in/purva-vajire-662541258/",
    },
  },
  {
    name: "Shravani Kamthankar",
    role: "Event Manager",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Shravani Kamathkar.jpeg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/shravani-kamthankar-307242239?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Shrinivas Prachand",
    role: "Event Manager",
    image:
      "/images/AWS CC PICT- Member images/Event Management  Team/Shriniwas Prachand.jpeg",
    social: {
      gitHub: "https://github.com/Shriniwas27",
      linkedin:
        "https://www.linkedin.com/in/shriniwas-prachand-1ba72428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

const socialMedia = [
  {
    name: "Harsha Pareek",
    role: "Marketing Lead",
    image:
      "/images/AWS CC PICT- Member images/Social Media and Marketing Team/Harsha Pareek.jpg",
    social: {
      gitHub: "https://github.com/hharshapareekk",
      linkedin: "https://www.linkedin.com/in/harshapareek",
    },
  },
  {
    name: "Palak Agrawal",
    role: "Social Media & Marketing Team Member",
    image:
      "/images/AWS CC PICT- Member images/Social Media and Marketing Team/Palak Agarwal.jpg",
    social: {
      gitHub: "https://github.com/PalakAgrawal04",
      linkedin: "https://www.linkedin.com/in/palak-agrawal-a19b3b281",
    },
  },
  {
    name: "Yash Shukla",
    role: "Social Media & Marketing Team Member",
    image:
      "/images/AWS CC PICT- Member images/Social Media and Marketing Team/Yash Shukla.jpg",
    social: {
      gitHub: "https://github.com/yash-shukla-2004",
      linkedin: "https://www.linkedin.com/in/yash-shukla-499860297/",
    },
  },
];

const designTeam = [
  {
    name: "Shraddha Asolkar",
    role: "Design Lead",
    image:
      "/images/AWS CC PICT- Member images/Design Team/Shradha Asolkar.jpeg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/shraddha-asolkar-1a7104236?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Pranav Metil",
    role: "Design Team Member",
    image: "/images/AWS CC PICT- Member images/Design Team/Pranav Metil.jpg",
    social: {
      gitHub: "https://github.com/Pranav5255",
      linkedin:
        "https://www.linkedin.com/in/pranav-metil-a460991b0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Shreyas Shirwadkar",
    role: "Design Team Member",
    image:
      "/images/AWS CC PICT- Member images/Design Team/Shreyas Shirwadkar.jpeg",
    social: {
      gitHub: "https://github.com/shreyasshirwadkar",
      linkedin: "https://www.linkedin.com/in/shreyas-shirwadkar/",
    },
  },
];

const documentation = [
  {
    name: "Sonali Kamble",
    role: "Documentation Lead",
    image:
      "/images/AWS CC PICT- Member images/Documentation Team/Sonali Kamble.jpeg",
    social: {
      gitHub: "https://github.com/Sonali545",
      linkedin: "http://linkedin.com/in/sonali-kamble-2791a1295",
    },
  },
  {
    name: "Prachi Said",
    role: "Documentation Team Member",
    image:
      "/images/AWS CC PICT- Member images/Documentation Team/Prachi Said.jpeg",
    social: {
      gitHub: "https://github.com/prachisaid",
      linkedin:
        "https://www.linkedin.com/in/prachi-said-65a0691a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Anjali Changedia",
    role: "Documentation Team Member",
    image:
      "/images/AWS CC PICT- Member images/Documentation Team/Anjali Changedia.jpg",
    social: { gitHub: "#", linkedin: "https://www.linkedin.com/in/anjalic24" },
  },
  {
    name: "Nilakshi Sonawane",
    role: "Documentation Team Member",
    image:
      "/images/AWS CC PICT- Member images/Documentation Team/Nilakshi Sonawane.png",
    social: {
      gitHub: "#",
      linkedin: "https://www.linkedin.com/in/nilakshi-sonawane-350086291/",
    },
  },
  {
    name: "Pranali Lokhande",
    role: "Documentation Team Member",
    image:
      "/images/AWS CC PICT- Member images/Documentation Team/Pranali Lokhande.jpg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/pranali-lokhande-15947a260?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

const sponsor = [
  {
    name: "Sanjeev Hotha",
    role: "Sponsorship Lead",
    image:
      "/images/AWS CC PICT- Member images/Sponsorship Team/Sanjeev Hotha.jpg",
    social: {
      gitHub: "#",
      linkedin:
        "https://www.linkedin.com/in/sanjeev-hotha-73b48117a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
  {
    name: "Himanshu Gholde",
    role: "Sponsorship Team Member",
    image:
      "/images/AWS CC PICT- Member images/Sponsorship Team/Himanshu Gholse.jpg",
    social: {
      gitHub: "https://github.com/himanshug-08",
      linkedin:
        "https://www.linkedin.com/in/himanshu-gholse-6604ba227?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
  },
];

const techTeam = [
  {
    name: "Ankit Patne",
    role: "Technical Lead",
    image: "/images/AWS CC PICT- Member images/Technical Team/Ankit Patne.jpeg",
    social: {
      gitHub: "https://github.com/ankitpatne",
      linkedin: "https://www.linkedin.com/in/ankitpatne/",
    },
  },
  {
    name: "Tirthraj Mahajan",
    role: "Technical Team Member",
    image:
      "/images/AWS CC PICT- Member images/Technical Team/Tirthraj Mahajan.jpeg",
    social: {
      gitHub: "#",
      linkedin: "https://www.linkedin.com/in/tirthraj-mahajan",
    },
  },
  {
    name: "Girish Kale",
    role: "Technical Team Member",
    image: "/images/AWS CC PICT- Member images/Technical Team/Girish Kale.JPG",
    social: {
      gitHub: "https://github.com/girishk1911",
      linkedin: "https://www.linkedin.com/in/girish-kale-85a118256",
    },
  },
  {
    name: "Mikhiel Benji",
    role: "Technical Team Member",
    image:
      "/images/AWS CC PICT- Member images/Technical Team/Mikhiel Benji.jpg",
    social: {
      gitHub: "https://github.com/Mikhiel39",
      linkedin: "https://www.linkedin.com/in/mikhiel-benji-5061b2285/",
    },
  },
  {
    name: "Amey Joshi",
    role: "Technical Team Member",
    image: "/images/AWS CC PICT- Member images/Technical Team/Amey Joshi.jpeg",
    social: {
      gitHub: "http://github.com/ameyjoshi3068",
      linkedin: "https://www.linkedin.com/in/amey-joshi-3bbb02256",
    },
  },
];

const TeamSection = ({ title, members }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="py-6 w-full">
      <div className="max-w-6xl mx-auto px-4">
        <h2
          className={`text-2xl sm:text-3xl font-bold text-center mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text transition duration-300 ease-in-out ${
            isHovered ? "text-gray-300 scale-105" : ""
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {title}
        </h2>
        <div className="flex flex-wrap justify-center gap-10">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                className="object-cover w-24 h-24 sm:w-36 sm:h-36 mb-2 rounded-full shadow border border-back-extralight"
                src={member.image}
                alt={member.name}
              />
              <div className="flex flex-col items-center">
              <p className="text-md sm:text-lg font-bold text-gray-200">{member.name}</p>
                <p className="text-sm text-gray-300">{member.role}</p>
              </div>
              <div className="mt-4 flex justify-center gap-4">
                <a
                  href={member.social.gitHub}
                  className="text-neo-yellow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={member.social.linkedin}
                  className="text-neo-blue"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// App component to manage state and render different team sections
const Members = () => {
  const [activeCategory, setActiveCategory] = useState("core");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setDropdownOpen(false);
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
        return <TeamSection title="THE CORE" members={core} />;
    }
  };

  return (
    <div className=" min-MEETcreen text-white font-serif flex flex-col items-center py-8">
      <div className="flex flex-col">
        <h1 className="text-text-200 text-[2rem] sm:text-[3rem] font-bold text-center">
          MEET THE{" "}
          <p className="inline bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
            TEAM
          </p>{" "}
        </h1>
      </div>

      {/* Category buttons for larger screens */}
      <div className="hidden md:flex flex-wrap justify-center gap-4 mb-5 mt-7">
        {[
          "core",
          "techTeam",
          "webDevelopers",
          "eventManagers",
          "socialMedia",
          "designTeam",
          "documentation",
          "sponsorship",
        ].map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`py-2.5 px-5 sm:me-3 md:me-4 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 ${
              activeCategory === category
                ? "text-gray-100 bg-gradient-to-r from-back-dark to-back-extralight dark:border-blue-700"
                : "text-gray-800 dark:text-gray-200 hover:text-gray-800 dark:hover:text-gray-200 hover:border-back-extralight"
            }`}
          >
            {category.replace(/([A-Z])/g, " $1").toUpperCase()}
          </button>
        ))}
      </div>
      {/* Dropdown menu for smaller screens */}
      <div className="md:hidden relative mb-4 mt-4">
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="min-w-48 flex items-center py-2.5 px-4 sm:me-3 md:me-4 text-sm font-medium rounded-full border border-gray-200 hover:bg-gray-100 focus:outline-none focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:hover:text-white dark:hover:bg-gray-700 text-gray-100 bg-gradient-to-r from-back-dark to-back-extralight dark:border-gray-600"
        >
          <span className="flex-grow">
            {activeCategory.replace(/([A-Z])/g, " $1").toUpperCase()}
          </span>
          <FaChevronDown className="ml-4" />
        </button>
        {dropdownOpen && (
          <div className="absolute left-0 mt-2 w-full max-w-md bg-gradient-to-b from-back-dark to-back-extralight text-white rounded-md shadow-lg z-10">
            {[
              "core",
              "techTeam",
              "webDevelopers",
              "eventManagers",
              "socialMedia",
              "designTeam",
              "documentation",
              "sponsorship",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`block px-4 py-2 text-md text-left w-full hover:bg-gray-600 ${activeCategory === category ? "bg-gray-700" : ""}`}
              >
                {category.replace(/([A-Z])/g, " $1").toUpperCase()}
              </button>
            ))}
          </div>
        )}
      </div>
      {renderTeamSection()}
    </div>
  );
};

export default Members;
