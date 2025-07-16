import { useState, useEffect } from "react";
import { Github, ArrowRight, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  loadCSVData,
  ProjectData,
  getTechnologiesArray,
} from "@/utils/csvParser";

const Projects = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const projectsData = await loadCSVData<ProjectData>(
          "/src/data/projects.csv"
        );
        setProjects(projectsData);
      } catch (error) {
        console.error("Error loading projects data:", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-bg-dark to-bg-darker">
        <div className="max-w-6xl mx-auto">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-80 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const featuredProjects = projects.slice(0, 4);
  const otherProjects = projects.slice(4);

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-bg-dark to-bg-darker relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-gradient-1 rounded-full opacity-10 animate-float blur-xl" />
      <div className="absolute bottom-40 right-20 w-24 h-24 bg-neon-gradient-2 rounded-full opacity-15 animate-float blur-xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-neon-gradient-3 rounded-full opacity-20 animate-float blur-xl" style={{ animationDelay: '4s' }} />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-rainbow-gradient">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            A showcase of my recent work, featuring full-stack applications, innovative solutions, and creative implementations with stunning neon aesthetics.
          </p>
        </div>

        {/* 🌟 Featured Projects */}
        <div className="space-y-20 mb-20">
          {featuredProjects.map((project, index) => {
            const technologies = getTechnologiesArray(project.technologies);
            return (
              <div 
                key={project.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div>
                    <Badge className="mb-4 bg-neon-gradient-1 text-white border-0 px-4 py-2 font-semibold animate-pulse-neon">
                      <Star className="w-4 h-4 mr-2" />
                      Featured Project
                    </Badge>
                    <h3 className="text-4xl font-bold mb-4 text-neon-gradient-1">{project.title}</h3>
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, techIndex) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="bg-glass-gradient border-white/20 text-white hover-neon-blue"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      className="glass-card hover-neon-blue border-white/20 text-white font-semibold px-6 py-3"
                      onClick={() => window.open(project.github_url, '_blank')}
                    >
                      <Github className="mr-2 h-5 w-5" />
                      Source Code
                    </Button>
                  </div>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative group hover-lift">
                    <div className="absolute -inset-4 bg-neon-gradient-1 rounded-2xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500" />
                    <img 
                      src={`/images/${project.image}`}
                      alt={project.title}
                      className="relative w-full rounded-2xl shadow-2xl transition-transform duration-500 group-hover:scale-105 border border-white/10"
                      onError={(e) => {
                        e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='500' height='300' viewBox='0 0 500 300'%3E%3Crect width='500' height='300' fill='%23374151'/%3E%3Ctext x='250' y='150' font-family='Arial' font-size='16' fill='%23fff' text-anchor='middle' dy='0.3em'%3EPROJECT IMAGE%3C/text%3E%3C/svg%3E";
                      }}
                    />
                    <div className="absolute inset-0 bg-neon-gradient-2 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 🧠 Other Notable Projects */}
        <div className="mb-12">
          <h3 className="text-4xl font-bold text-center mb-12">
            <span className="text-neon-gradient-2">Other Notable Projects</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => {
              const technologies = getTechnologiesArray(project.technologies);
              return (
                <Card 
                  key={project.title} 
                  className="overflow-hidden glass-card hover-lift group border-white/10 relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute -inset-1 bg-neon-gradient-2 rounded-lg opacity-0 group-hover:opacity-50 blur-sm transition-all duration-500" />
                  <div className="relative bg-bg-card rounded-lg">
                    <div className="relative overflow-hidden">
                      <img 
                        src={`/images/${project.image}`}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                        onError={(e) => {
                          e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%23374151'/%3E%3Ctext x='200' y='100' font-family='Arial' font-size='14' fill='%23fff' text-anchor='middle' dy='0.3em'%3EPROJECT IMAGE%3C/text%3E%3C/svg%3E";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/90 to-transparent" />
                      <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button 
                          size="sm" 
                          className="glass-card hover-neon-blue border-white/20 p-2"
                          onClick={() => window.open(project.github_url, '_blank')}
                        >
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-semibold mb-2 text-white group-hover:text-transparent group-hover:bg-neon-gradient-1 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {technologies.slice(0, 3).map((tech, techIndex) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="text-xs bg-blue-900/30 border-blue-400/30 text-blue-300 hover-neon-blue"
                            style={{ animationDelay: `${techIndex * 0.05}s` }}
                          >
                            {tech}
                          </Badge>
                        ))}
                        {technologies.length > 3 && (
                          <Badge variant="outline" className="text-xs bg-purple-900/30 border-purple-400/30 text-purple-300">
                            +{technologies.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <Zap className="w-4 h-4 text-yellow-400 animate-pulse" />
                          <span className="text-xs text-gray-400">Source Code</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
