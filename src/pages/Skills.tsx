
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import SkillsSection from "@/components/SkillsSection";
import Footer from "@/components/Footer";

const Skills = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <div className="pt-24">
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
