
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollAnimation from "@/components/ScrollAnimation";

const HeroSection = () => {
  const scrollToNextSection = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-4 text-center z-10">
        <ScrollAnimation>
          <h1 className="text-4xl md:text-7xl font-bold mb-6 glow">
            Hi, I'm <span className="text-primary">Vikram Gupta</span>
          </h1>
        </ScrollAnimation>
        
        <ScrollAnimation className="delay-150">
          <h2 className="text-xl md:text-3xl text-foreground/90 mb-8">
            Full Stack Developer & Designer
          </h2>
        </ScrollAnimation>
        
        <ScrollAnimation className="delay-300">
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10">
            Creating beautiful web experiences
          </p>
        </ScrollAnimation>
        
        <ScrollAnimation className="delay-500">
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="px-8 py-6 text-lg">
              <Link to="/projects">View My Work</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-8 py-6 text-lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </ScrollAnimation>
      </div>
      <div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-pulse-slow cursor-pointer"
        onClick={scrollToNextSection}
      >
        <ArrowDown size={32} className="text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
