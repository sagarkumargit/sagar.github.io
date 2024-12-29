import { useTheme } from "../../Context/themeContext";
import { FaLaptopCode, FaPaintBrush, FaCog } from "react-icons/fa"; // Using FaPaintBrush for design-related services

const servicesData = [
  {
    title: "Web Development",
    description:
      "I build dynamic and responsive websites using modern web technologies like React, Node.js, and MongoDB.",
    icon: <FaLaptopCode className="text-4xl" />,
  },
  {
    title: "UI/UX Design",
    description:
      "I specialize in creating beautiful and intuitive user interfaces that provide seamless experiences across all devices.",
    icon: <FaPaintBrush className="text-4xl" />, // Using FaPaintBrush for UI/UX Design
  },
  {
    title: "Technical Consultation",
    description:
      "I provide expert guidance on system architecture, performance optimization, and scalability to help you achieve your business goals.",
    icon: <FaCog className="text-4xl" />,
  },
];

const ServicesSection = () => {
  const { theme } = useTheme();

  return (
    <section
      id="services"
      className={`py-16 ${
        theme === "dark" ? "bg-black text-yellow-400" : "bg-yellow-400 text-black"
      }`}
    >
      <div className="container mx-auto px-6 text-center">
        <h2
          className={`text-4xl font-bold mb-12 ${
            theme === "dark" ? "text-yellow-400" : "text-black"
          }`}
        >
          My Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-md transform transition duration-300 hover:scale-105 ${
                theme === "dark"
                  ? "bg-black text-yellow-400 hover:shadow-xl hover:shadow-yellow-400"
                  : "bg-yellow-400 text-black hover:shadow-xl hover:shadow-black"
              }`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3
                className={`text-2xl font-semibold mb-2 ${
                  theme === "dark" ? "text-yellow-400" : "text-black"
                }`}
              >
                {service.title}
              </h3>
              <p className="text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
