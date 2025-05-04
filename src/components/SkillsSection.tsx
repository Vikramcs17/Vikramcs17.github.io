
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import ScrollAnimation from "@/components/ScrollAnimation";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "tools";
}

const skills: Skill[] = [
  // Frontend
  { name: "React", level: 95, category: "frontend" },
  { name: "TypeScript", level: 90, category: "frontend" },
  { name: "HTML/CSS", level: 98, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80,category: "backend" },
  // { name: "Express", level: 85, category: "backend" },
  // { name: "MongoDB", level: 80, category: "backend" },
  { name: "SQL", level: 75, category: "backend" },
  
  // Tools
  { name: "Git", level: 90, category: "tools" },
  // { name: "Docker", level: 78, category: "tools" },
  // { name: "AWS", level: 70, category: "tools" },
  { name: "Figma", level: 85, category: "tools" },
];

const SkillsSection = () => {
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const toolSkills = skills.filter(skill => skill.category === "tools");
  
  return (
    <section id="skills" className="section-container py-20 bg-secondary/5">
      <ScrollAnimation>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center glow">
            My <span className="text-primary">Skills</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <ScrollAnimation threshold={0.2}>
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Frontend</h3>
                  <div className="space-y-6">
                    {frontendSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            {/* Backend Skills */}
            <ScrollAnimation threshold={0.2} className="delay-150">
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Backend</h3>
                  <div className="space-y-6">
                    {backendSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
            
            {/* Tools & Others */}
            <ScrollAnimation threshold={0.2} className="delay-300">
              <Card className="glass h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">Tools & Others</h3>
                  <div className="space-y-6">
                    {toolSkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{skill.name}</span>
                          <Badge variant="outline">{skill.level}%</Badge>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollAnimation>
          </div>
        </div>
      </ScrollAnimation>
    </section>
  );
};

export default SkillsSection;
