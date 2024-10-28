import { useEffect, useRef } from "react";

const About = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const context = canvas.getContext("2d");
      if (context) {
        // Set canvas size
        canvas.width = 200;
        canvas.height = 200;

        // Clear canvas
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Draw chair
        context.fillStyle = "#8B4513"; // Brown for the chair
        context.fillRect(60, 120, 80, 10); // Seat
        context.fillRect(50, 130, 10, 50); // Left leg
        context.fillRect(140, 130, 10, 50); // Right leg
        context.fillRect(65, 110, 70, 10); // Backrest

        // Draw person
        context.fillStyle = "#FFCC00"; // Yellow for the head
        context.beginPath();
        context.arc(100, 70, 20, 0, Math.PI * 2); // Head
        context.fill();

        context.fillStyle = "#0000FF"; // Blue for the body
        context.fillRect(90, 90, 20, 30); // Body

        context.fillStyle = "#FF0000"; // Red for the arms
        context.fillRect(70, 90, 20, 5); // Left arm
        context.fillRect(110, 90, 20, 5); // Right arm

        context.fillStyle = "#FFCC00"; // Yellow for the legs
        context.fillRect(90, 120, 5, 20); // Left leg
        context.fillRect(105, 120, 5, 20); // Right leg

        // Draw computer
        context.fillStyle = "#808080"; // Gray for the monitor
        context.fillRect(60, 40, 80, 50); // Monitor
        context.fillStyle = "#000"; // Black for the screen
        context.fillRect(65, 45, 70, 40); // Screen
        context.fillStyle = "#C0C0C0"; // Silver for the keyboard
        context.fillRect(70, 95, 60, 5); // Keyboard
      }
    }
  }, []);

  return (
    <section className="py-12 relative" id="about">
      <div className="container mx-auto px-6 flex items-center justify-center flex-space-around">
        <canvas ref={canvasRef} className="border" />
        <div className="flex flex-col ml-6">
          <h2 className="text-4xl font-bold text-gray-800 mb-4 animate-fade-in">About Me</h2>
          <p className="text-lg mb-4 animate-fade-in">
            Hi! I&#39;m <span className="font-semibold text-teal-600">Sagar Kumar</span>, a full-stack developer with over 4.6 years of experience in building robust applications using the
            &nbsp;<span className="font-semibold">MERN</span>&nbsp;and&nbsp;<span className="font-semibold">MEAN</span> stacks.
            I thrive on creating seamless user experiences and scalable solutions that address real-world problems.
          </p>
          <p className="text-lg mb-4 animate-fade-in">
            My journey in web development has been driven by a passion for both front-end and back-end technologies.
            I specialize in using&nbsp;
            <span className="font-semibold text-teal-600">MongoDB</span>,&nbsp;
            <span className="font-semibold text-teal-600">Express.js</span>,&nbsp;
            <span className="font-semibold text-teal-600">React</span>,&nbsp;
            <span className="font-semibold text-teal-600">Node.js</span>,&nbsp;
            and&nbsp;<span className="font-semibold text-teal-600">Angular</span>
            &nbsp;to create dynamic applications that are not only functional but also user-friendly.
          </p>
          <p className="text-lg animate-fade-in mb-0">
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
