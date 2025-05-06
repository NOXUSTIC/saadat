
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "RESTful APIs", "Database Design"]
    },
    {
      title: "Database Technologies",
      skills: ["MongoDB", "MySQL", "PostgreSQL"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "VS Code", "Docker", "Npm/Yarn", "Webpack"]
    },
    {
      title: "Additional Skills",
      skills: ["UI/UX Design", "Problem Solving", "Team Collaboration", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="section bg-secondary/50">
      <h2 className="section-title">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden border-border hover:border-purple-400 transition-colors">
            <div className="h-2 bg-gradient-to-r from-purple-400 to-purple-600"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline" 
                    className="bg-background hover:bg-purple-100 hover:text-purple-700 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mt-16 max-w-3xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">My Development Philosophy</h3>
        <p className="text-lg">
          I believe in writing clean, maintainable code and prioritizing user experience in every project.
          I'm committed to continuous learning and staying updated with the latest technologies and best practices.
        </p>
      </div>
    </section>
  );
};

export default Skills;
