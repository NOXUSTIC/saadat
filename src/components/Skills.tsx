
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "Tailwind CSS", "Responsive Design"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "RESTful APIs", "Database Design"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["Python", "NumPy", "PyTorch", "Classification Models", "Prediction Models", "Text Generation", "Data Processing"]
    },
    {
      title: "Embedded Systems",
      skills: ["Raspberry Pi", "ATmega Microcontrollers", "ARM Chipsets", "IoT Development", "Firmware Programming"]
    },
    {
      title: "3D Modeling & Design",
      skills: ["Fusion360", "SolidWorks", "Blender", "CAD Design", "3D Printing"]
    },
    {
      title: "PCB Design",
      skills: ["EasyEDA", "KiCad", "Circuit Design", "Component Selection", "Hardware Prototyping"]
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
    <section id="skills" className="section bg-muted">
      <h2 className="section-title">My Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index} className="overflow-hidden border-border hover:border-ocean transition-colors">
            <div className="h-2 bg-gradient-to-r from-ocean to-ocean-light"></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="outline" 
                    className="bg-background hover:bg-ocean hover:text-white transition-colors"
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
          I believe in creating solutions that bridge hardware and software, combining my expertise in fullstack development,
          embedded systems, machine learning, and design to build innovative products and experiences. I'm passionate about the complete
          product development lifecycle from concept to implementation.
        </p>
      </div>
    </section>
  );
};

export default Skills;
