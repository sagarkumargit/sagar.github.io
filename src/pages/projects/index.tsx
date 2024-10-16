import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import ProjectCard from "@/Components/ProjectCard";

const Projects = () => {
  const projectData = [
    { title: 'Project 1', description: 'Description of project 1.', link: 'https://project1.com' },
    { title: 'Project 2', description: 'Description of project 2.', link: 'https://project2.com' },
    { title: 'Project 3', description: 'Description of project 3.', link: 'https://project3.com' },
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
