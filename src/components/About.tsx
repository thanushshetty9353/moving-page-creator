import { Code, Palette, Zap, Users } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  const features = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code with best practices"
    },
    {
      icon: Palette,
      title: "Creative Design",
      description: "Crafting beautiful user interfaces with attention to detail and user experience"
    },
    {
      icon: Zap,
      title: "Fast Performance",
      description: "Optimizing applications for speed and performance across all devices"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborating effectively with cross-functional teams and stakeholders"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer with 5+ years of experience creating digital solutions that make a difference. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              Started as a curious student who fell in love with code, I've grown into a full-stack developer 
              who thrives on building innovative solutions. My experience spans from startups to enterprise 
              applications, always focusing on clean architecture and exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring new technologies, contributing to open source, 
              or sharing knowledge with the developer community. I believe in continuous learning and 
              staying ahead of the curve in this ever-evolving field.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-card-gradient p-8 rounded-2xl border border-border/50 hover-glow">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Experience</span>
                  <span className="text-primary font-semibold">5+ Years</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Projects Completed</span>
                  <span className="text-primary font-semibold">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Happy Clients</span>
                  <span className="text-primary font-semibold">30+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Technologies</span>
                  <span className="text-primary font-semibold">20+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 bg-card-gradient border-border/50 hover-glow group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:animate-pulse-glow">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;