type ProjectCardProps = {
    title: string;
    description: string;
    link: string;
  };
  
  const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
    return (
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-600">{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Project</a>
      </div>
    );
  };
  
  export default ProjectCard;
  