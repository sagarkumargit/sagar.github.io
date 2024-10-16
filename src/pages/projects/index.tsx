import Footer from "@/Components/Footer/footer";
import Header from "@/Components/Header/header";
import ProjectCard from "@/Components/ProjectCard";

const Projects = () => {
  const projectData = [
    { title: 'Makaansaz', description: 'Its Property based platform where user can buy properties in Pakistan', link: '#' },
    {
      title: 'Adani One',
      description: `An integrated platform with diversified offerings, Adani One is where goodness begins. It is built to elevate everyday experiences by combining comfort, quality, and ease-of-use for our customers. From door-to-door travel to shopping the choicest global brands, this is where it all manifests together, with seamless digital access.Remembering the Group’s core philosophy of ‘Growth with Goodness’, Adani One stays true to the aim of enriching experiences with goodness, through this singular but multifaceted world. The Group has been dedicated towards contributing to India’s growth through its various businesses over the years. In the digital era, Adani One is another step forward in this journey, of making goodness a part of our customer’s life, anywhere, any time.`,
      link: 'https://www.adanione.com/'
    },
    {
      title: 'Timeinator', description: `Timeinator is a state-of-the-art restaurant kitchen digital timer that helps automate your kitchen tasks & increases productivity.`,
      link: 'https://timeinator.com/'
    },
    {
      title: 'Kaboodle',
      description: 'Kaboodle has been integral in keeping dialogue with our community and protecting our data. The tools they provide to help us do our job and promote our shows in a way that isn’t reliant on generic ticket agent marketing',
      link: 'https://kaboodle.com/'
    },

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
