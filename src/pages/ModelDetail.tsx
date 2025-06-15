import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModelViewer from "@/components/ModelViewer";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ModelDetail = () => {
  const { id } = useParams();
  
  // Use the STEP file that exists in the public folder
  const modelPath = "/models/LFR.3MF";

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 container px-4 mx-auto">
        <div className="mb-8">
          <Link to="/3d-models">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Gallery
            </Button>
          </Link>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">STEP Model Viewer</h1>
          <p className="mb-8 text-foreground/80">
            Interact with the STEP model below using OpenCascade.js. This viewer supports native CAD file formats.
          </p>
          
          <ModelViewer modelPath={modelPath} />
          
          <div className="mt-8 bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">About This Model</h2>
            <p className="mb-4">
              This STEP model is displayed using OpenCascade.js, a powerful JavaScript library that enables 
              native CAD file viewing in web browsers without requiring file conversion.
            </p>
            <p>
              OpenCascade.js provides advanced CAD functionality including precise geometry representation, 
              measurements, and professional-grade visualization capabilities.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelDetail;
