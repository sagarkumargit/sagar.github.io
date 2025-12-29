'use client'

import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../Context/themeContext';
import Image from 'next/image';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme(); // Get the current theme from context
  const [imageLoaded, setImageLoaded] = useState(false); // State to track image load
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // Drawing logic
        const drawOnCanvas = () => {
          canvas.width = 200;
          canvas.height = 200;
          context.clearRect(0, 0, canvas.width, canvas.height);

          // Drawing shapes for the chair, person, computer
          context.fillStyle = '#8B4513'; // Brown for the chair
          context.fillRect(60, 120, 80, 10); // Seat
          context.fillRect(50, 130, 10, 50); // Left leg
          context.fillRect(140, 130, 10, 50); // Right leg
          context.fillRect(65, 110, 70, 10); // Backrest

          context.fillStyle = '#FFCC00'; // Yellow for the head
          context.beginPath();
          context.arc(100, 70, 20, 0, Math.PI * 2); // Head
          context.fill();

          context.fillStyle = '#0000FF'; // Blue for the body
          context.fillRect(90, 90, 20, 30); // Body

          context.fillStyle = '#FF0000'; // Red for the arms
          context.fillRect(70, 90, 20, 5); // Left arm
          context.fillRect(110, 90, 20, 5); // Right arm

          context.fillStyle = '#FFCC00'; // Yellow for the legs
          context.fillRect(90, 120, 5, 20); // Left leg
          context.fillRect(105, 120, 5, 20); // Right leg

          context.fillStyle = '#808080'; // Gray for the monitor
          context.fillRect(60, 40, 80, 50); // Monitor
          context.fillStyle = '#000'; // Black for the screen
          context.fillRect(65, 45, 70, 40); // Screen
          context.fillStyle = '#C0C0C0'; // Silver for the keyboard
          context.fillRect(70, 95, 60, 5); // Keyboard
        };
        
        drawOnCanvas();
      }
    }
  }, [theme]);
  
  const handleImageLoad = () => setImageLoaded(true);

  return (
    <section
      className={`py-12 relative pt-24 h-screen ${theme === 'light' ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-400'}`}
      id="about"
    >
      <div className="container mx-auto px-6 flex items-center justify-center flex-col md:flex-row h-full">
        {/* Canvas section */}
        <div className="flex-1 max-w-xs md:max-w-md mb-6 md:mb-0">
          <canvas
            ref={canvasRef}
            className="border rounded-lg shadow-lg w-full"
            style={{ opacity: imageLoaded ? 1 : 0.5 }}
          />
        </div>
        
        {/* Content Section */}
        <div className="flex-1 flex flex-col ml-6">
          <h2
            className={`text-4xl font-bold mb-6 transition-all duration-500 transform ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}
          >
            About Me
          </h2>
          <p
            className={`text-lg mb-4 transition-all duration-500 ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}
          >
            Hi! I&lsquo;m <span className="font-semibold text-teal-600">Sagar Kumar</span>, a full-stack developer with over 6+ years of experience in building robust applications using the
            <span className="font-semibold"> MERN</span> and <span className="font-semibold">MEAN</span> stacks.
            I thrive on creating seamless user experiences and scalable solutions that address real-world problems.
          </p>

          <p
            className={`text-lg mb-4 transition-all duration-500 ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}
          >
            My journey in web development has been driven by a passion for both front-end and back-end technologies.
            I specialize in using
            <span className="font-semibold text-teal-600"> MongoDB</span>, 
            <span className="font-semibold text-teal-600"> Express.js</span>, 
            <span className="font-semibold text-teal-600"> React</span>, 
            <span className="font-semibold text-teal-600"> Node.js</span>, 
            and <span className="font-semibold text-teal-600">Angular</span>
            to create dynamic applications that are both functional and user-friendly.
          </p>

          <p
            className={`text-lg mb-4 transition-all duration-500 ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}
          >
            When I’m not coding, I love to observe the world around me and learn about new things that spark my interest.
            This curiosity fuels my creativity and drives me to explore innovative solutions in my work.
            Let’s connect and build something amazing together!
          </p>

          {/* Profile Image */}
          <div className="mt-6">
            <Image
              src="https://avatars.githubusercontent.com/u/166545261?s=400&v=4"
              alt="Sagar Kumar"
              className="w-40 h-40 rounded-full object-cover shadow-xl border-4 border-white"
              onLoad={handleImageLoad}
              style={{ opacity: imageLoaded ? 1 : 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
