import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Typewriter from "./Typewriter"; // Import the Typewriter component

const About = () => {
  // Text content for the typewriter paragraphs
  const paragraph1 = "Hello! I'm Saadat S. Rahman, a versatile developer with expertise spanning fullstack development, embedded systems engineering, machine learning, 3D modeling, and PCB design. I thrive on projects that challenge me to integrate hardware and software solutions to solve complex problems.";
  
  const paragraph2 = "My journey began with a passion for understanding how things work at both the software and hardware level. This curiosity led me to explore various technologies across different domains, from web development with React and Tailwind CSS to designing circuit boards in KiCad and creating 3D models in Fusion360.";
  
  const paragraph3 = "Recently, I've been expanding my skills in machine learning and AI, working with technologies like PyTorch and NumPy to build classification models, prediction systems, and text generation algorithms. This interdisciplinary approach allows me to create solutions that leverage the power of both traditional programming and AI-driven insights.";

  return (
    <section id="about" className="section">
      <h2 className="section-title animate-fade-in">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6">
          <div className="text-lg min-h-16">
            <Typewriter text={paragraph1} delay={20} startDelay={300} className="text-lg" />
          </div>
          
          <div className="text-lg min-h-16">
            <Typewriter text={paragraph2} delay={20} startDelay={3500} className="text-lg" />
          </div>
          
          <div className="text-lg min-h-16">
            <Typewriter text={paragraph3} delay={20} startDelay={7500} className="text-lg" />
          </div>
        </div>
        
        <div className="space-y-6 animate-slide-in-right" style={{animationDelay: "0.4s"}}>
          <Card className="transform transition-all hover:scale-105 duration-300">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#30A5FF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                My Mission
              </h3>
              <p>
                To create innovative solutions that seamlessly integrate hardware, software, and AI technologies, pushing the boundaries
                of what's possible and delivering products that make a meaningful impact.
              </p>
            </CardContent>
          </Card>
          
          <Card className="transform transition-all hover:scale-105 duration-300" style={{animationDelay: "0.2s"}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#3A0C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                My Approach
              </h3>
              <p>
                I take a holistic approach to development, considering both technical requirements and user needs.
                Whether working on embedded systems, web applications, or AI projects, I focus on creating solutions that are
                efficient, maintainable, and user-friendly.
              </p>
            </CardContent>
          </Card>
          
          <Card className="transform transition-all hover:scale-105 duration-300" style={{animationDelay: "0.4s"}}>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-[#3A0C3A]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                Continuous Learning
              </h3>
              <p>
                Technology evolves rapidly, and I'm committed to growing with it. I continuously expand my knowledge
                through hands-on projects, online courses, and community collaboration, ensuring I stay at the
                forefront of software, hardware, and AI development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
