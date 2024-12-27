import Image from "next/image";

type ProjectCardProps = {
  title: string;
  imageUrl: string,
  description: string;
  link: string;
};

const ProjectCard = ({ title, imageUrl, description, link }: ProjectCardProps) => {
  return (
    <div className="bg-teal-50 p-6 rounded-lg hover:shadow-lg transform transition duration-300 hover:-translate-y-2">
      <h3 className="text-xl font-semibold text-slate-800">{title}</h3>
      <Image
        src={imageUrl}
        alt="adani-one"
        priority
        width={500}
        height={600}
      />
      
      <p className="mt-2 text-gray-600 mb-4 line-clamp-3">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-500 hover:text-teal-700 hover:underline transition duration-200"
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
