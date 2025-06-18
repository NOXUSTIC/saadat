
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
  
  // Model data
  const getModelData = (modelId: string) => {
    switch (modelId) {
      case "line-follower":
        return {
          title: "Line Follower Robot",
          path: "public/models/line-follower.glb",
          description: "Autonomous line following robot with sensors and precise motor control systems.",
          details: "This line follower robot demonstrates autonomous navigation capabilities with infrared sensors and motor control systems for precise path following. The design includes detailed mechanical components and electronic systems."
        };
      case "nano-battlebot":
        return {
          title: "Nano Battlebot",
          path: "public/models/nano-battlebot.glb",
          description: "Compact fighting robot designed for competitive robotics with advanced combat mechanisms.",
          details: "This nano battlebot features a robust design optimized for competitive robot fighting. The model includes detailed armor plating, weapon systems, and reinforced chassis designed to withstand intense combat scenarios."
        };
      default:
        return {
          title: "3D Model",
          path: "",
          description: "3D model not found.",
          details: "The requested model could not be found."
        };
    }
  };

  const modelData = getModelData(id || "");

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
          <h1 className="text-4xl font-bold mb-6">{modelData.title}</h1>
          <p className="mb-8 text-foreground/80">
            Interact with the 3D model below. Click and drag to rotate, scroll to zoom.
          </p>
          
          <ModelViewer modelPath={modelData.path} title={modelData.title} />
          
          <div className="mt-8 bg-card p-6 rounded-lg border border-border">
            <h2 className="text-2xl font-semibold mb-4">About This Model</h2>
            <p className="mb-4">
              {modelData.description}
            </p>
            <p>
              {modelData.details}
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ModelDetail;
