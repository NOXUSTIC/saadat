
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PCBDetail = () => {
  const { id } = useParams();
  
  // PCB data
  const getPCBData = (pcbId: string) => {
    switch (pcbId) {
      case "line-follower-pcb":
        return {
          title: "Line Follower PCB",
          imageUrl: "/lovable-uploads/93dee0bb-e255-41eb-bb31-a4ae14e708bd.png",
          description: "Custom PCB design for autonomous line following robot with sensor array and motor drivers.",
          details: "This PCB design features a compact layout optimized for line following robots. It includes dedicated sensor input circuits, motor driver integration, and power management systems. The design incorporates proper ground planes and signal isolation for reliable operation."
        };
      case "battlebot-control-pcb":
        return {
          title: "Battlebot Control PCB",
          imageUrl: "/lovable-uploads/e967c162-b356-4e25-8ad9-ec31049c431a.png",
          description: "High-power PCB design for battlebot control systems with motor controllers and safety circuits.",
          details: "This high-power PCB design is engineered for competitive battlebot applications. Features include robust motor control circuits, safety interlocks, and high-current handling capabilities. The layout prioritizes thermal management and electromagnetic compatibility."
        };
      default:
        return {
          title: "PCB Design",
          imageUrl: "",
          description: "PCB design not found.",
          details: "The requested PCB design could not be found."
        };
    }
  };

  const pcbData = getPCBData(id || "");

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 container px-4 mx-auto">
        <div className="mb-8">
          <Link to="/pcb-designs">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Gallery
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">{pcbData.title}</h1>
          <p className="mb-8 text-foreground/80">
            Detailed view of the PCB design with specifications and implementation details.
          </p>
          
          <div className="mb-8 bg-card p-6 rounded-lg border border-border">
            <img 
              src={pcbData.imageUrl} 
              alt={pcbData.title} 
              className="w-full max-w-2xl mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">About This Design</h2>
            <p className="mb-4">
              {pcbData.description}
            </p>
            <p>
              {pcbData.details}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PCBDetail;
