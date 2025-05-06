
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6">
          <p className="text-lg">
            Hello! I'm Saadat S. Rahman, a passionate developer with a love for creating
            innovative solutions and elegant user experiences. I enjoy tackling complex problems
            and turning them into simple, beautiful, and intuitive designs.
          </p>
          
          <p className="text-lg">
            My journey in technology began with a curiosity about how things work, which led me to
            explore various programming languages and frameworks. I'm continuously learning and adapting 
            to new technologies to improve my skills and deliver better results.
          </p>
          
          <p className="text-lg">
            When I'm not coding, you might find me exploring new technologies, contributing to open-source
            projects, or participating in hackathons and coding challenges to keep my skills sharp.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                My Mission
              </h3>
              <p>
                To create impactful digital solutions that solve real-world problems and provide 
                exceptional user experiences, while continuously growing as a developer.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                My Approach
              </h3>
              <p>
                I believe in writing clean, maintainable code and creating applications that are not
                only functional but also intuitive and accessible. I value collaboration and continuous
                learning in my development process.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                Education
              </h3>
              <p>
                I'm continuously expanding my knowledge through self-learning, online courses, 
                and practical project experience. I stay up-to-date with the latest technologies
                and industry best practices.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
