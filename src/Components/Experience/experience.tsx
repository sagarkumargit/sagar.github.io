import { useState } from "react";
import { useTheme } from "../../Context/themeContext";

type Experience = {
  title: string;
  company: string;
  role: string;
  duration: string;
  description: string;
};

const experienceData: Experience[] = [
  {
    title: "MEAN and MERN Stack Developer",
    company: "Freelancing",
    role: "Developed and maintained web applications using React, Node.js, and MongoDB.",
    duration: "Nov 2023 - Present",
    description:
      `Worked on leading company in the tech industry. As a full-stack developer, 
      I contributed to both frontend and backend development. I worked with React for the frontend and Node.js for the backend, 
      integrating various APIs and databases. My work involved improving application performance, 
      implementing new features, and ensuring scalability for future growth.`,
  },
  {
    title: "React Js Developer",
    company: "Geek Informatic Solution",
    role: "Worked on building responsive and interactive UI with React js, Next js, and Angular.",
    duration: "March 2022 - Sept 2023",
    description:
      `At Geek Informatic Solutions, I was responsible for developing user interfaces with React and styling them using Tailwind CSS. 
      The projects I worked on required attention to detail, performance optimization, and responsiveness. 
      I collaborated with a team of designers and backend developers to create intuitive and user-friendly applications.`,
  },
  {
    title: "React Js Developer",
    company: "Netset Software Solution",
    role: "Worked on building scalable backend systems using React js.",
    duration: "Mar 2019 - May 2020",
    description:
      `As a backend developer at Netset Software Solutions, I worked with Node.js, Express, and MongoDB to create robust and scalable APIs. 
      I was involved in designing RESTful services, managing databases, and implementing authentication and 
      authorization mechanisms. My role was to ensure that the backend systems could handle a high volume of traffic 
      and be scalable for future use.`,
  },
  {
    title: "Frontend Developer",
    company: "Evolvan Info Solutions",
    role: "Worked on building scalable frontend systems using React js.",
    duration: "Mar 2019 - May 2020",
    description:
      `As a frontend developer at Evolvan Info Solutions, I worked with React js, Express, and Node.js to create robust and scalable APIs. 
      I was involved in designing RESTful services, managing databases, and implementing authentication and 
      authorization mechanisms. My role was to ensure that the frontend systems could handle a high volume of traffic 
      and be scalable for future use.`,
  },
];

const ExperienceSection = () => {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  // Toggle the description visibility
  const toggleDescription = (index: number) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section
      id="experience"
      className={`py-20 ${
        theme === "dark" ? "bg-black text-yellow-400" : "bg-yellow-400 text-black"
      }`}
    >
      <div className="container mx-auto px-6 text-left">
        <h2
          className={`text-4xl font-bold mb-8 ${
            theme === "dark" ? "text-yellow-400" : "text-black"
          }`}
        >
          My Experience
        </h2>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <div
              key={index}
              className={`relative group p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:shadow-xl ${
                theme === "dark"
                  ? "bg-black text-yellow-400 hover:shadow-yellow-400"
                  : "bg-yellow-400 text-black hover:shadow-black"
              }`}
            >
              {/* Vertical Line and Dot */}
              <div
                className={`absolute left-0 top-0 h-full flex flex-col items-center justify-start`}
              >
                <div
                  className={`w-2 h-2 rounded-full mt-4 transform transition-all opacity-0 group-hover:opacity-100 group-hover:scale-110 ${
                    theme === "dark" ? "bg-yellow-400" : "bg-black"
                  }`}
                ></div>
                <div
                  className={`w-1 h-full transform transition-all opacity-0 group-hover:opacity-100 group-hover:scale-110 ${
                    theme === "dark" ? "bg-yellow-400" : "bg-black"
                  }`}
                ></div>
              </div>

              {/* Content */}
              <h3
                className={`text-xl font-semibold ${
                  theme === "dark" ? "text-yellow-400" : "text-black"
                }`}
              >
                {item.title}
              </h3>
              <p
                className={`text-lg ${
                  theme === "dark" ? "text-yellow-400" : "text-black"
                } mb-2`}
              >
                {item.company}
              </p>
              <p
                className={`${
                  theme === "dark" ? "text-yellow-400" : "text-black"
                }`}
              >
                {item.role}
              </p>
              <p
                className={`mt-4 ${
                  theme === "dark" ? "text-yellow-400" : "text-black"
                }`}
              >
                {item.duration}
              </p>

              {/* Description */}
              <p
                className={`mt-4 text-lg ${
                  theme === "dark" ? "text-yellow-400" : "text-black"
                } mb-2 line-clamp-3`}
              >
                {expanded[index] ? item.description : `${item.description.slice(0, 150)}...`}
              </p>

              {/* Read More / Less Button */}
              <button
                onClick={() => toggleDescription(index)}
                className={`text-teal-500 hover:text-teal-700 transition duration-200`}
              >
                {expanded[index] ? "Read Less" : "Read More"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
