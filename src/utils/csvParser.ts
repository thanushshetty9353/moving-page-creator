export interface SkillData {
  name: string;
  category: 'technical' | 'soft' | 'sports' | 'language';
  level: number;
  type: string;
}

export interface EducationData {
  institution: string;
  degree: string;
  year: string;
  marks: string;
  address: string;
  description: string;
}

export interface ProjectData {
  title: string;
  description: string;
  technologies: string;
  live_url: string;
  github_url: string;
  image: string;
  featured: boolean;
}

export interface InternshipData {
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string;
}

export const parseCSV = <T>(csvText: string): T[] => {
  const lines = csvText.trim().split('\n');
  const headers = lines[0].split(',');
  
  return lines.slice(1).map(line => {
    const values = line.split(',');
    const obj: any = {};
    
    headers.forEach((header, index) => {
      let value: any = values[index]?.trim() || '';
      
      // Convert numeric strings to numbers
      if (!isNaN(Number(value)) && value !== '') {
        value = Number(value);
      }
      
      // Convert boolean strings
      if (value === 'true') value = true;
      if (value === 'false') value = false;
      
      obj[header.trim()] = value;
    });
    
    return obj as T;
  });
};

export const loadCSVData = async <T>(filePath: string): Promise<T[]> => {
  try {
    const response = await fetch(filePath);
    const csvText = await response.text();
    return parseCSV<T>(csvText);
  } catch (error) {
    console.error(`Error loading CSV data from ${filePath}:`, error);
    return [];
  }
};

// Helper functions for filtering data
export const filterSkillsByCategory = (skills: SkillData[], category: SkillData['category']): SkillData[] => {
  return skills.filter(skill => skill.category === category);
};

export const getTopSkills = (skills: SkillData[], count: number = 5): SkillData[] => {
  return skills.sort((a, b) => b.level - a.level).slice(0, count);
};

export const getFeaturedProjects = (projects: ProjectData[]): ProjectData[] => {
  return projects.filter(project => project.featured);
};

export const getTechnologiesArray = (technologies: string): string[] => {
  return technologies.split(',').map(tech => tech.trim());
};