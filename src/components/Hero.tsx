import React from "react";
import { Button } from "@/components/ui/button";
import Typewriter from "./Typewriter";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* YouTube Video Background */}
      <div className="absolute inset-0 overflow-hidden -z-20">
        <iframe 
          className="w-full h-full scale-125 pointer-events-none"
          src="https://www.youtube.com/embed/6OyEpEnifMo?autoplay=1&mute=1&controls=0&showinfo=0&loop=1&playlist=6OyEpEnifMo&start=0&end=81&enablejsapi=1"
          title="Background Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameBorder="0"
        ></iframe>
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>
      
      {/* Thunderstorm Animation */}
      <div className="thunderstorm absolute inset-0 -z-10">
        <div className="lightning-container">
          <div className="lightning white"></div>
          <div className="lightning red"></div>
        </div>
        <div className="lightning-container">
          <div className="lightning white"></div>
          <div className="lightning red" style={{animationDelay: "1.5s"}}></div>
        </div>
        <div className="lightning-container">
          <div className="lightning white"></div>
          <div className="lightning red" style={{animationDelay: "3s"}}></div>
        </div>
      </div>

      <div className="container px-4 sm:px-6 flex flex-col items-center text-center z-10">
        <span className="inline-block py-2 px-4 mb-5 bg-[#053F5C]/30 text-[#30A5FF] text-lg md:text-xl font-semibold rounded-full animate-pulse-slow border border-[#053F5C]/50">
          Fullstack & Embedded Systems Engineer
        </span>
        
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight animate-fade-up">
          Hi, I'm <span className="text-[#30A5FF]">Saadat S. Rahman</span>
        </h1>
        
        <div className="max-w-2xl text-xl text-foreground/90 mb-8 md:mb-10 animate-fade-up" style={{animationDelay: "0.2s"}}>
          <Typewriter 
            text="Creating innovative solutions at the intersection of software, hardware, and design. Building impactful experiences with modern web technologies and embedded systems."
            delay={30}
          />
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{animationDelay: "0.3s"}}>
          <Button className="bg-[#053F5C] hover:bg-[#30A5FF] text-lg px-6 py-6" asChild>
            <a href="#projects">View My Work</a>
          </Button>
          <Button variant="outline" className="text-lg px-6 py-6 border-[#053F5C] hover:border-[#30A5FF] hover:text-[#30A5FF]" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
        
        <div className="mt-16 sm:mt-20 animate-fade-up" style={{animationDelay: "0.4s"}}>
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://github.com/NOXUSTIC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background border border-[#053F5C] hover:border-[#30A5FF] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
              </svg>
            </a>
            <a 
              href="https://bd.linkedin.com/in/saadat-s-rahman-7634a1277" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-background border border-[#053F5C] hover:border-[#30A5FF] transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a 
              href="mailto:saadat20022002@gmail.com"
              className="p-2 rounded-full bg-background border border-[#053F5C] hover:border-[#30A5FF] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#about">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
