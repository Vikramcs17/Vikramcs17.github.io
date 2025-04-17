
import ParticleBackground from "@/components/ParticleBackground";
import Navigation from "@/components/Navigation";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen relative">
      <ParticleBackground />
      <Navigation />
      <div className="pt-24">
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
