
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
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with React, Node.js, and MongoDB. Includes user authentication, product management, and payment processing.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    liveLink: "https://example.com/ecommerce",
    repoLink: "https://github.com/yourusername/ecommerce",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Firebase", "Tailwind CSS", "Redux"],
    liveLink: "https://example.com/taskmanager",
    repoLink: "https://github.com/yourusername/taskmanager",
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React and Tailwind CSS featuring interactive animations and responsive design.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"],
    liveLink: "https://example.com/portfolio",
    repoLink: "https://github.com/yourusername/portfolio",
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
