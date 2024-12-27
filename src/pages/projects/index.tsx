import Layout from "@/Components/Layout/Layout";
import ProjectCard from "@/Components/ProjectCard";
import adaniOne from '@/assets/images/1.png'
import kaboodle from '@/assets/images/kaboodle.png'
import makaansaz from '@/assets/images/makaansaz.png'
import successAi from '@/assets/images/success ai.png'
import timeinator from '@/assets/images/timeinator.png'

const Projects = () => {
  const projectData = [
    { 
      title: 'Success Ai', 
      imageUrl: successAi.src,
      description: `An AI-powered email marketing platform that helps businesses of all sizes craft and manage email campaigns. It uses artificial intelligence technology to automatically personalize emails based on the recipient's name, company, and industry. This helps improve open rates and click-through rates.`, 
      link: 'https://dev.makaansaz.com/find-agents' 
    },
    { 
      title: 'Makaansaz', 
      imageUrl: makaansaz.src,
      description: ` MakaanSaz is transforming the real estate landscape in Pakistan by bridging the gap between clients and agents with innovative, AI-driven solutions. Our platform simplifies the property buying, selling, and renting experience, offering a centralized hub where users can easily find trusted agents, explore verified listings, and access valuable market insights. At MakaanSaz, we are committed to transparency, efficiency, and empowerment, ensuring that every stakeholder—whether buyer, seller, or agent—benefits from a seamless and informed real estate journey. Join us as we reshape the future of real estate in Pakistan`, 
      link: 'https://dev.makaansaz.com/find-agents' 
    },
    {
      title: 'Adani One',
      imageUrl: adaniOne.src,
      description: `An integrated platform with diversified offerings, Adani One is where goodness begins. It is built to elevate everyday experiences by combining comfort, quality, and ease-of-use for our customers. From door-to-door travel to shopping the choicest global brands, this is where it all manifests together, with seamless digital access.Remembering the Group’s core philosophy of ‘Growth with Goodness’, Adani One stays true to the aim of enriching experiences with goodness, through this singular but multifaceted world. The Group has been dedicated towards contributing to India’s growth through its various businesses over the years. In the digital era, Adani One is another step forward in this journey, of making goodness a part of our customer’s life, anywhere, any time.`,
      link: 'https://www.adanione.com/'
    },
    {
      title: 'Timeinator', 
      imageUrl: timeinator.src,
      description: `Timeinator is a state-of-the-art restaurant kitchen digital timer that helps automate your kitchen tasks & increases productivity.`,
      link: 'https://timeinator.com/'
    },
    {
      title: 'Kaboodle',
      imageUrl: kaboodle.src,
      description: 'Kaboodle has been integral in keeping dialogue with our community and protecting our data. The tools they provide to help us do our job and promote our shows in a way that isn’t reliant on generic ticket agent marketing',
      link: 'https://kaboodle.com/'
    },

  ];

  return (
    <Layout>
      <div className="bg-gradient-to-r from-teal-100 to-white min-h-screen">
        <main className="container mx-auto p-4 flex flex-col">
          <h1 className="text-3xl font-bold text-slate-800 text-center mb-8">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projectData.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
