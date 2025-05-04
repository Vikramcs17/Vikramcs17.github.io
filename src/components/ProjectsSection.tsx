
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  repoLink?: string;
}

const projects: Project[] = [
  {
    title: "Reimagine Porsche - A Digital Brand Experience",
    description: "Reimagine Porsche is a dynamic, visually immersive web application crafted to reintroduce the legacy, innovation, and design excellence of the Porsche brand. Built as part of a creative tech challenge, the project features a seamless blend of interactive UI elements, rich animations, and informative storytelling.",
    image: "src/components/ui/Screenshot 2025-05-04 181817.png",
    technologies: ["HTML", "CSS", "JS", "Tailwind CSS"],
    liveLink: "https://errorcreators-reimagine-round2.vercel.app/",
    repoLink: "https://github.com/Vikramcs17/Errorcreators_ReimagineRound2",
  },
  {
    title: "Food Nutritionist App",
    description: "A sophisticated nutrition analysis and meal recommendation system specialized for Indian cuisine. This application combines advanced data science techniques with traditional Indian food knowledge to provide personalized meal plans while considering regional preferences and nutritional requirements.",
    image: "src/components/ui/Screenshot 2025-05-04 182445.png",
    technologies: ["Python", "Streamlit"],
    liveLink: "https://nutritionist-17.streamlit.app/",
    repoLink: "https://github.com/Vikramcs17/nutritionist",
  },
  {
    title: "Bank Mangement System",
    description: "Designed to focus on operational efficiency and user satisfaction, the system utilizes advanced database features like stored procedures, triggers, and functions to automate processes, reduce errors, and provide a seamless banking experience.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    technologies: ["PL/SQL"],
    liveLink: "https://github.com/Vikramcs17/Bank_Management_System",
    repoLink: "https://github.com/Vikramcs17/Bank_Management_System",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-container py-20">
      <ScrollAnimation>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center glow">
            My <span className="text-primary">Projects</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollAnimation key={index} threshold={0.1} className={`delay-${index * 150}`}>
                <Card className="glass overflow-hidden h-full flex flex-col hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                  <div className="h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-500 hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6 flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">{tech}</Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0 flex gap-4">
                    {project.liveLink && (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                    )}
                    {project.repoLink && (
                      <Button variant="outline" size="sm" className="gap-2" asChild>
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          Code
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default ProjectsSection;
