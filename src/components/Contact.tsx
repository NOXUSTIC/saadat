
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailJSInitialized, setEmailJSInitialized] = useState(false);

  // Initialize EmailJS once when component mounts
  useEffect(() => {
    emailjs.init("YOUR_USER_ID"); // You need to replace with your own User ID from EmailJS
    setEmailJSInitialized(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill all the fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "saadat20022002@gmail.com"
      };

      await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        templateParams
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Failed to send email:", error);
      toast({
        title: "Failed to send",
        description: "There was an error sending your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title animate-fade-in">Get In Touch</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="space-y-6 animate-slide-in-left" style={{animationDelay: "0.2s"}}>
          <h3 className="text-2xl font-bold">Let's Connect</h3>
          <p className="text-lg">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            Feel free to reach out using the contact form or through my social platforms.
          </p>
          
          <div className="space-y-4 mt-8">
            <div className="flex items-center transform transition-all hover:translate-x-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center text-ocean mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Email</p>
                <a href="mailto:saadat20022002@gmail.com" className="text-lg hover:text-ocean transition-colors">
                  saadat20022002@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center transform transition-all hover:translate-x-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center text-ocean mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">LinkedIn</p>
                <a 
                  href="https://bd.linkedin.com/in/saadat-s-rahman-7634a1277" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-ocean transition-colors"
                >
                  Saadat S. Rahman
                </a>
              </div>
            </div>
            
            <div className="flex items-center transform transition-all hover:translate-x-2 duration-300">
              <div className="w-12 h-12 rounded-full bg-ocean/10 flex items-center justify-center text-ocean mr-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div>
                <p className="text-sm text-foreground/60">GitHub</p>
                <a 
                  href="https://github.com/NOXUSTIC" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-lg hover:text-ocean transition-colors"
                >
                  NOXUSTIC
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-background rounded-lg p-6 shadow-sm border border-border animate-slide-in-right" style={{animationDelay: "0.4s"}}>
          <h3 className="text-2xl font-bold mb-6">Send Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="transition-all focus:border-ocean focus:ring-ocean"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="transition-all focus:border-ocean focus:ring-ocean"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hello, I'd like to talk about..."
                rows={4}
                className="transition-all focus:border-ocean focus:ring-ocean"
              />
            </div>
            
            <div className="text-sm text-gray-500 mt-2">
              Your message will be sent to saadat20022002@gmail.com
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-ocean hover:bg-ocean-light transition-all hover:scale-[1.02] active:scale-[0.98] duration-200" 
              disabled={isSubmitting || !emailJSInitialized}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
