
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Code, Terminal, Rocket, FileCode, BookOpen, Layers, Cube } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Tripti Token Hub",
      description: "A comprehensive platform for managing digital tokens and cryptocurrency assets.",
      tags: ["React", "TypeScript", "Web3", "Smart Contracts"],
      liveUrl: "https://tripti-token-hub.vercel.app/",
      githubUrl: "https://github.com/NOXUSTIC",
      icon: <Rocket className="w-16 h-16 text-[#30A5FF]" />
    },
    {
      title: "Movie Genre Classification",
      description: "ML model that predicts movie genres based on plot summaries and metadata using NLP techniques.",
      tags: ["Python", "PyTorch", "NLP", "Classification"],
      liveUrl: "#",
      githubUrl: "https://github.com/NOXUSTIC/CODSOFT/tree/master/CODSOFT_01",
      icon: <FileCode className="w-16 h-16 text-[#30A5FF]" />
    },
    {
      title: "Fraud Detection System",
      description: "Machine learning model to identify fraudulent transactions using anomaly detection algorithms.",
      tags: ["Python", "NumPy", "Data Analysis", "ML"],
      liveUrl: "#",
      githubUrl: "https://github.com/NOXUSTIC/CODSOFT/tree/master/CODSOFT_02",
      icon: <Layers className="w-16 h-16 text-[#30A5FF]" />
    },
    {
      title: "Customer Churn Prediction",
      description: "Predictive model to identify customers likely to discontinue services, enabling proactive retention strategies.",
      tags: ["Python", "ML", "Data Science", "Analytics"],
      liveUrl: "#",
      githubUrl: "https://github.com/NOXUSTIC/CODSOFT/tree/master/CODSOFT_03",
      icon: <BookOpen className="w-16 h-16 text-[#30A5FF]" />
    },
    {
      title: "Spam Email Classification",
      description: "ML system that filters spam emails using text classification techniques with high accuracy.",
      tags: ["Python", "NLP", "Classification", "ML"],
      liveUrl: "#",
      githubUrl: "https://github.com/NOXUSTIC/CODSOFT/tree/master/CODSOFT_04",
      icon: <Code className="w-16 h-16 text-[#30A5FF]" />
    },
    {
      title: "Handwritten Text Generation",
      description: "AI model that generates realistic handwritten text using deep learning and neural networks.",
      tags: ["Python", "PyTorch", "Deep Learning", "GAN"],
      liveUrl: "#",
      githubUrl: "https://github.com/NOXUSTIC/CODSOFT/tree/master/CODSOFT_05",
      icon: <Terminal className="w-16 h-16 text-[#30A5FF]" />
    }
  ];

  return (
    <section id="projects" className="section">
      <h2 className="section-title animate-fade-in">My Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden border-border hover:shadow-lg transition-all flex flex-col animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="h-48 overflow-hidden flex items-center justify-center bg-black/5 p-6">
              {project.icon}
            </div>
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge 
                    key={tagIndex}
                    variant="outline" 
                    className="text-xs px-2 py-1 bg-ocean/10 text-ocean-light"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                  </svg>
                  Code
                </a>
              </Button>
              <Button size="sm" className="bg-ocean hover:bg-ocean-light" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                  Live Demo
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-16 text-center animate-fade-up" style={{animationDelay: "0.6s"}}>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button className="bg-ocean hover:bg-ocean-light" asChild>
            <a href="https://github.com/NOXUSTIC" target="_blank" rel="noopener noreferrer">
              View More on GitHub
            </a>
          </Button>
          
          <Button className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
            <Link to="/3d-models">
              <Cube className="w-4 h-4 mr-2" />
              View 3D Models
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
