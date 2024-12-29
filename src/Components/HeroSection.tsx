import { useEffect, useState } from "react";
import { useTheme } from "../Context/themeContext";
import { FaReact, FaNodeJs, FaGithub, FaGit, FaJira, FaSlack, FaAngular } from "react-icons/fa";
import { SiTypescript, SiExpress, SiMongodb, SiMysql, SiSequelize } from "react-icons/si";
import Image from "next/image"; // To include the image

const HeroSection = () => {
  const { theme } = useTheme();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse position
  const handleMouseMove = (e: MouseEvent) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <header
      className={`h-screen flex items-center justify-between px-12 relative overflow-hidden ${
        theme === "light"
          ? "bg-gradient-to-r from-yellow-500 to-yellow-600"
          : "bg-gradient-to-r from-yellow-700 to-yellow-800"
      }`}
      style={{
        background: theme === "light"
          ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 0, 0.6) 10%, rgba(0, 0, 0, 0.4) 60%)`
          : `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 255, 0, 0.4) 10%, rgba(0, 0, 0, 0.4) 60%)`,
      }}
    >
      {/* Left Content: Text */}
      <div
        className="text-left flex flex-col justify-center w-full lg:w-1/2 animate__animated animate__fadeIn animate__delay-1s bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 rounded-lg p-8 md:p-12 shadow-2xl"
        style={{
          background: theme === "light"
            ? "linear-gradient(135deg, rgba(255, 221, 51, 0.8), rgba(255, 159, 0, 0.8))"
            : "linear-gradient(135deg, rgba(255, 159, 0, 0.6), rgba(255, 221, 51, 0.6))",
        }}
      >
        {/* Avatar Image */}
        <div className="w-full flex justify-center animate__animated animate__fadeIn animate__delay-3s">
          <Image
            src="https://avatars.githubusercontent.com/u/166545261?s=400&v=4"
            alt="Developer Avatar"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
        </div>

        {/* Title */}
        <h1
          className={`text-6xl font-bold mb-6 transition-all ${
            theme === "light" ? "text-yellow-100" : "text-yellow-50"
          }`}
        >
          I&lsquo;m a Freelance Developer
        </h1>

        {/* Description */}
        <p
          className={`text-xl md:text-2xl mb-8 transition-all ${
            theme === "light" ? "text-yellow-200" : "text-yellow-100"
          }`}
        >
          Specializing in MERN & MEAN stacks with expertise in modern JavaScript technologies. Let&lsquo;s build something amazing together!
        </p>

        {/* Call-to-action Button */}
        <a
          href="#about"
          className="mt-6 inline-block bg-black text-yellow-400 py-3 px-8 rounded-full shadow-2xl transform transition duration-300 hover:scale-105 hover:shadow-xl dark:bg-gray-800 dark:text-yellow-400"
        >
          Learn More
        </a>

        {/* Additional Subtitle */}
        <p
          className={`mt-4 text-md md:text-lg text-yellow-200 ${
            theme === "light" ? "text-opacity-90" : "text-opacity-80"
          }`}
        >
          Curious about my journey? Discover more about my work and experience.
        </p>
      </div>

      {/* Right Content: Skills and Icons */}
      <div className="flex flex-col justify-center w-1/2 animate__animated animate__fadeIn animate__delay-2s">
        {/* Skills: Frontend */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mb-12">
          <div className="flex flex-col items-center">
            <FaReact className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">React</p>
          </div>
          <div className="flex flex-col items-center">
            <SiTypescript className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">TypeScript</p>
          </div>
          <div className="flex flex-col items-center">
            <FaAngular className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Angular</p>
          </div>
          <div className="flex flex-col items-center">
            <FaNodeJs className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Node.js</p>
          </div>
        </div>

        {/* Backend Technologies */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mb-12">
          <div className="flex flex-col items-center">
            <SiExpress className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Express</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMongodb className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">MongoDB</p>
          </div>
          <div className="flex flex-col items-center">
            <SiSequelize className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Sequelize</p>
          </div>
          <div className="flex flex-col items-center">
            <SiMysql className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">MySQL</p>
          </div>
        </div>

        {/* Collaboration Tools */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mb-12">
          <div className="flex flex-col items-center">
            <FaGit className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Git</p>
          </div>
          <div className="flex flex-col items-center">
            <FaGithub className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">GitHub</p>
          </div>
          <div className="flex flex-col items-center">
            <FaJira className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Jira</p>
          </div>
          <div className="flex flex-col items-center">
            <FaSlack className="text-5xl text-yellow-400 mb-2 hover:text-yellow-500 transition-all" />
            <p className="text-yellow-400">Slack</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
