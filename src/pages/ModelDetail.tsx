
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
  
  // For now, we'll just show the LFR.step model
  // In a real app, you could use the id parameter to choose which model to display
  const modelPath = "/models/LFR.glb"; // Path to your converted model

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
          <h1 className="text-4xl font-bold mb-6">3D Model Viewer</h1>
          <p className="mb-8 text-foreground/80">
            Interact with the 3D model below. Click and drag to rotate, scroll to zoom.
          </p>
          
          <ModelViewer modelPath={modelPath} />
          
          <div className="mt-8 bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">About This Model</h2>
            <p className="mb-4">
              This is a detailed 3D model created by Saadat S Rahman. The model demonstrates professional 3D design skills
              and attention to detail.
            </p>
            <p>
              Created using industry-standard 3D modeling tools and techniques, this model showcases my ability to create
              high-quality 3D assets for various applications.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelDetail;
