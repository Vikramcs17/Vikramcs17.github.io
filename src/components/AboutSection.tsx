
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";

const AboutSection = () => {
  return (
    <section id="about" className="section-container py-20">
      <ScrollAnimation>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center glow">
            About <span className="text-primary">Me</span>
          </h2>
          <Card className="glass">
            <CardContent className="p-6 md:p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="animate-float">
                  <div className="rounded-xl overflow-hidden border-2 border-primary/30">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                      alt="Developer Portrait" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-lg mb-4">
                    Hi there! I'm a passionate full-stack developer with expertise in modern web technologies.
                  </p>
                  <p className="text-lg mb-4">
                    I specialize in creating responsive, user-friendly applications that not only look great but also perform exceptionally well.
                  </p>
                  <p className="text-lg">
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying the outdoors.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default AboutSection;
