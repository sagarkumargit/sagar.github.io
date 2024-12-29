'use client'

import { useEffect, useRef } from 'react';
import { useTheme } from '../Context/themeContext';

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { theme } = useTheme(); // Get the current theme from context

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext('2d');
      if (context) {
        // Set canvas size
        canvas.width = 200;
        canvas.height = 200;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw chair
        context.fillStyle = theme === 'light' ? '#8B4513' : '#8B4513'; // Brown for the chair
        context.fillRect(60, 120, 80, 10); // Seat
        context.fillRect(50, 130, 10, 50); // Left leg
        context.fillRect(140, 130, 10, 50); // Right leg
        context.fillRect(65, 110, 70, 10); // Backrest

        // Draw person
        context.fillStyle = theme === 'light' ? '#FFCC00' : '#FFCC00'; // Yellow for the head
        context.beginPath();
        context.arc(100, 70, 20, 0, Math.PI * 2); // Head
        context.fill();

        context.fillStyle = theme === 'light' ? '#0000FF' : '#0000FF'; // Blue for the body
        context.fillRect(90, 90, 20, 30); // Body

        context.fillStyle = theme === 'light' ? '#FF0000' : '#FF0000'; // Red for the arms
        context.fillRect(70, 90, 20, 5); // Left arm
        context.fillRect(110, 90, 20, 5); // Right arm

        context.fillStyle = theme === 'light' ? '#FFCC00' : '#FFCC00'; // Yellow for the legs
        context.fillRect(90, 120, 5, 20); // Left leg
        context.fillRect(105, 120, 5, 20); // Right leg

        // Draw computer
        context.fillStyle = theme === 'light' ? '#808080' : '#808080'; // Gray for the monitor
        context.fillRect(60, 40, 80, 50); // Monitor
        context.fillStyle = theme === 'light' ? '#000' : '#000'; // Black for the screen
        context.fillRect(65, 45, 70, 40); // Screen
        context.fillStyle = theme === 'light' ? '#C0C0C0' : '#C0C0C0'; // Silver for the keyboard
        context.fillRect(70, 95, 60, 5); // Keyboard
      }
    }
  }, [theme]); // Re-run the effect when theme changes

  return (
    <section className={`py-12 relative pt-24 ${theme === 'light' ? 'bg-yellow-400 text-black' : 'bg-black text-yellow-400'}`} id="about">
      <div className="container mx-auto px-6 flex items-center justify-center flex-space-around">
        <canvas ref={canvasRef} className="border" />
        <div className="flex flex-col ml-6">
          <h2 className={`text-4xl font-bold mb-4 animate-fade-in ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}>
            About Me
          </h2>
          <p className={`text-lg mb-4 animate-fade-in ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}>
            Hi! I&#39;m <span className="font-semibold text-teal-600">Sagar Kumar</span>, a full-stack developer with over 4.6 years of experience in building robust applications using the
            &nbsp;<span className="font-semibold">MERN</span>&nbsp;and&nbsp;<span className="font-semibold">MEAN</span> stacks.
            I thrive on creating seamless user experiences and scalable solutions that address real-world problems.
          </p>
          <p className={`text-lg mb-4 animate-fade-in ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}>
            My journey in web development has been driven by a passion for both front-end and back-end technologies.
            I specialize in using&nbsp;
            <span className="font-semibold text-teal-600">MongoDB</span>,&nbsp;
            <span className="font-semibold text-teal-600">Express.js</span>,&nbsp;
            <span className="font-semibold text-teal-600">React</span>,&nbsp;
            <span className="font-semibold text-teal-600">Node.js</span>,&nbsp;
            and&nbsp;<span className="font-semibold text-teal-600">Angular</span>
            &nbsp;to create dynamic applications that are not only functional but also user-friendly.
          </p>
          <p className={`text-lg animate-fade-in mb-0 ${theme === 'light' ? 'text-black' : 'text-yellow-400'}`}>
            When I’m not coding, I love to observe the world around me and learn about new things that spark my interest.
            This curiosity fuels my creativity and drives me to explore innovative solutions in my work.
            Let’s connect and build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
