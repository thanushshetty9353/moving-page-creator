import { useState, useEffect } from "react";
import { Download, GraduationCap, Award, Globe, Dumbbell, Brain, Code, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  loadCSVData, 
  filterSkillsByCategory, 
  SkillData, 
  EducationData, 
  InternshipData 
} from "@/utils/csvParser";

const Resume = () => {
  const [skills, setSkills] = useState<SkillData[]>([]);
  const [education, setEducation] = useState<EducationData[]>([]);
  const [internships, setInternships] = useState<InternshipData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [skillsData, educationData, internshipsData] = await Promise.all([
          loadCSVData<SkillData>('/src/data/skills.csv'),
          loadCSVData<EducationData>('/src/data/education.csv'),
          loadCSVData<InternshipData>('/src/data/internships.csv')
        ]);

        setSkills(skillsData);
        setEducation(educationData);
        setInternships(internshipsData);
      } catch (error) {
        console.error('Error loading CSV data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'technical': return <Code className="w-5 h-5" />;
      case 'soft': return <Users className="w-5 h-5" />;
      case 'sports': return <Dumbbell className="w-5 h-5" />;
      case 'language': return <Globe className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  if (loading) {
    return (
      <section className="py-20 px-6 bg-gradient-to-br from-bg-dark to-bg-darker">
        <div className="max-w-6xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-700 rounded w-1/3 mx-auto mb-8"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="h-40 bg-gray-700 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  const technicalSkills = filterSkillsByCategory(skills, 'technical');
  const softSkills = filterSkillsByCategory(skills, 'soft');
  const sportsSkills = filterSkillsByCategory(skills, 'sports');
  const languageSkills = filterSkillsByCategory(skills, 'language');

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-bg-dark to-bg-darker">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            My <span className="text-rainbow-gradient">Resume</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Comprehensive overview of my education, skills, and professional experience
          </p>

          {/* ✅ Clean download using <a download> */}
          <a href="/resume.pdf" download>
            <Button 
              size="lg" 
              className="bg-neon-gradient-1 hover-neon-pink text-white font-semibold px-8 py-4"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume PDF
            </Button>
          </a>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="text-transparent bg-neon-gradient-1 bg-clip-text" />
            <span className="text-neon-gradient-1">Education</span>
          </h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card 
                key={edu.institution}
                className="p-6 glass-card hover-lift border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                    <p className="text-lg text-neon-gradient-2">{edu.institution}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-lg font-semibold text-yellow-400">{edu.year}</p>
                    <p className="text-sm text-green-400">{edu.marks}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-2">{edu.description}</p>
                <p className="text-sm text-gray-400">{edu.address}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Internships */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="text-transparent bg-neon-gradient-2 bg-clip-text" />
            <span className="text-neon-gradient-2">Internships</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship, index) => (
              <Card 
                key={internship.company}
                className="p-6 glass-card hover-neon-blue border-white/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-bold text-white mb-2">{internship.position}</h4>
                <p className="text-neon-gradient-2 font-semibold mb-2">{internship.company}</p>
                <p className="text-yellow-400 text-sm mb-3">{internship.duration}</p>
                <p className="text-gray-300 text-sm mb-4">{internship.description}</p>
                <div className="flex flex-wrap gap-1">
                  {internship.technologies.split(',').map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-blue-900/30 border-blue-400/30 text-blue-300"
                    >
                      {tech.trim()}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              {getSkillIcon('technical')}
              <span className="text-neon-gradient-1">Technical Skills</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {technicalSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="glass-card hover-neon-pink border-white/10 flex flex-col items-center justify-center text-center h-28"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-sm text-gray-400 mt-1">{skill.type}</span>
                </Card>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              {getSkillIcon('soft')}
              <span className="text-neon-gradient-2">Soft Skills</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {softSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="p-4 glass-card hover-neon-blue border-white/10 text-center"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, starIndex) => (
                      <div
                        key={starIndex}
                        className={`w-3 h-3 rounded-full mx-0.5 ${
                          starIndex < skill.level / 20 ? 'bg-blue-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-blue-300">{skill.type}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              {getSkillIcon('language')}
              <span className="text-neon-gradient-3">Languages</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {languageSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="p-4 glass-card hover-neon-green border-white/10 text-center"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                  <p className="text-green-400 font-medium">{skill.type}</p>
                  <div className="mt-2">
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-neon-gradient-3 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sports */}
          <div>
            <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
              {getSkillIcon('sports')}
              <span className="text-neon-gradient-4">Sports & Hobbies</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {sportsSkills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="p-4 glass-card hover-neon-green border-white/10 text-center"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <h4 className="font-semibold text-white mb-2">{skill.name}</h4>
                  <p className="text-green-400 text-sm mb-2">{skill.type}</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, starIndex) => (
                      <div
                        key={starIndex}
                        className={`w-2 h-2 rounded-full mx-0.5 ${
                          starIndex < skill.level / 20 ? 'bg-green-400' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
