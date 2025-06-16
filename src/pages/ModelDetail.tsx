
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
  
  // Define different models with their paths and info
  const models = {
    "mars-rover": {
      path: "/models/LFR.fbx",
      title: "Mars Rover Exploration Vehicle",
      description: "Detailed 3D model of a Mars exploration rover with realistic components, solar panels, and scientific instruments.",
      format: "FBX"
    },
    "lfr-model": {
      path: "/models/LFR.fbx",
      title: "LFR Design Model",
      description: "Line Following Robot design with detailed components and structure.",
      format: "FBX"
    }
  };

  const currentModel = models[id as keyof typeof models] || models["mars-rover"];

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
          <h1 className="text-4xl font-bold mb-6">{currentModel.title}</h1>
          <p className="mb-8 text-foreground/80">
            {currentModel.description}
          </p>
          
          <ModelViewer modelPath={currentModel.path} />
          
          <div className="mt-8 bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">About This Model</h2>
            <p className="mb-4">
              Format: <span className="font-mono bg-muted px-2 py-1 rounded">{currentModel.format}</span>
            </p>
            <p className="mb-4">
              This 3D model viewer supports multiple formats including GLB, GLTF, OBJ, FBX, STL, and more.
              Each format is handled by the most appropriate rendering engine for optimal performance.
            </p>
            <p>
              Use the mouse to interact with the model: rotate, zoom, and pan to explore all angles and details.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelDetail;
