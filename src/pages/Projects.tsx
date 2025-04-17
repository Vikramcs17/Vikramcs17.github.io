
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Projects = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <div className="pt-24">
        <ProjectsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Projects;
