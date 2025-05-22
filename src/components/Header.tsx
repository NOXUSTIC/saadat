
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed w-full top-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container px-4 mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-[#30A5FF]">
          Saadat
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="/#skills" className="text-foreground/80 hover:text-foreground transition-colors">Skills</a>
          <a href="/#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a>
          <a href="/#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          <Button className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
            <a href="/#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground p-2" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container px-4 py-4 flex flex-col gap-4">
            <a 
              href="/#about" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="/#skills" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </a>
            <a 
              href="/#projects" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="/#contact" 
              className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button className="bg-[#053F5C] hover:bg-[#30A5FF] mt-2 w-full" asChild>
              <a 
                href="/#contact"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get in Touch
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
