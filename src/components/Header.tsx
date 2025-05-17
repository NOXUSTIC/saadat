
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { title: "Home", href: "#home" },
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 
      ${scrolled ? "bg-background/90 backdrop-blur-md shadow-md" : "bg-transparent"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="font-bold text-xl md:text-2xl flex items-center gap-2 animate-fade-in">
          <span className="text-black">Saadat</span>
          <span className="hidden sm:inline">S. Rahman</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              className="text-foreground/80 hover:text-black transition-colors animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.title}
            </a>
          ))}
          <Button className="bg-[#30A5FF] hover:bg-[#2694e8] animate-fade-in" style={{ animationDelay: '500ms' }}>
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t mt-4 py-4 px-6 flex flex-col gap-4 animate-fade-in">
          {navLinks.map((link, index) => (
            <a
              key={link.title}
              href={link.href}
              className="text-foreground/80 hover:text-black py-2 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {link.title}
            </a>
          ))}
          <Button
            className="bg-[#30A5FF] hover:bg-[#2694e8] w-full mt-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </nav>
      )}
    </header>
  );
};

export default Header;
