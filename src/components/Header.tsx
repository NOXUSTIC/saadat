
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Volume2, VolumeX } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const toggleMusic = () => {
    const player = window.__ytPlayer;
    if (player) {
      if (isMuted) {
        player.unMute();
        setIsMuted(false);
      } else {
        player.mute();
        setIsMuted(true);
      }
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
          Saadat <span className="text-white">S Rahman</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="/#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
          <a href="/#skills" className="text-foreground/80 hover:text-foreground transition-colors">Skills</a>
          <a href="/#projects" className="text-foreground/80 hover:text-foreground transition-colors">Projects</a>
          <Link to="/3d-models" className="text-foreground/80 hover:text-foreground transition-colors">3D Models</Link>
          <Link to="/pcb-designs" className="text-foreground/80 hover:text-foreground transition-colors">PCB Designs</Link>
          <a href="/#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          <button
            onClick={toggleMusic}
            className="p-2 rounded-full border border-[#053F5C] hover:border-[#30A5FF] transition-colors text-foreground/80 hover:text-[#30A5FF]"
            title={isMuted ? "Turn on music" : "Turn off music"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <Button className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
            <a href="/#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleMusic}
            className="p-2 rounded-full border border-[#053F5C] hover:border-[#30A5FF] transition-colors text-foreground/80 hover:text-[#30A5FF]"
            title={isMuted ? "Turn on music" : "Turn off music"}
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
          </button>
          <button 
            className="text-foreground p-2" 
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
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <nav className="container px-4 py-4 flex flex-col gap-4">
            <a href="/#about" className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="/#skills" className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}>Skills</a>
            <a href="/#projects" className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
            <Link to="/3d-models" className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}>3D Models</Link>
            <Link to="/pcb-designs" className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}>PCB Designs</Link>
            <a href="/#contact" className="text-foreground/80 hover:text-foreground transition-colors py-2"
              onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            <Button className="bg-[#053F5C] hover:bg-[#30A5FF] mt-2 w-full" asChild>
              <a href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
