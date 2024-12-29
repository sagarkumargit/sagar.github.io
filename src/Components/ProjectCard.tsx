'use client'

import Image from "next/image";

type ProjectCardProps = {
  title: string;
  imageUrl: string;
  description: string;
  link: string;
  theme: string;  // Added theme prop to adjust styles
};

const ProjectCard = ({ title, imageUrl, description, link, theme }: ProjectCardProps) => {
  return (
    <div className={`p-6 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-2 
      ${theme === 'light' ? 'bg-teal-50 text-slate-800' : 'bg-gray-800 text-yellow-400'}`}>
      
      <h3 className={`text-xl font-semibold ${theme === 'light' ? 'text-slate-800' : 'text-yellow-400'}`}>{title}</h3>

      <Image
        src={imageUrl}
        alt={title} // Dynamic alt text
        priority
        width={500}
        height={600}
      />
      
      <p className={`mt-2 mb-4 line-clamp-3 ${theme === 'light' ? 'text-gray-600' : 'text-yellow-200'}`}>
        {description}
      </p>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-teal-500 hover:text-teal-700 hover:underline transition duration-200
          ${theme === 'light' ? 'text-teal-500' : 'text-teal-400'}`}
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
