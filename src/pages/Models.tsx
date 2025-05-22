
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ModelViewer from "@/components/ModelViewer";

const Models = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="section pt-24">
        <h2 className="section-title animate-fade-in">3D Model Showcase</h2>
        <p className="text-center max-w-2xl mx-auto mb-12">
          This page showcases my 3D modeling work. Use your mouse to rotate, zoom, and interact with the models.
        </p>
        
        <div className="mt-8">
          <ModelViewer />
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-[#30A5FF]">About My 3D Work</h3>
          <p className="mb-4">
            I create detailed 3D models using industry-standard software like Blender, Maya, and ZBrush. 
            My work spans from character design to environment modeling and product visualization.
          </p>
          <p>
            To showcase your own models, you'll need to:
            <ol className="list-decimal pl-6 mt-2 space-y-2">
              <li>Export your 3D models as glTF/GLB format (recommended for web)</li>
              <li>Upload the model files to the public/models folder</li>
              <li>Update the models array in the ModelViewer component</li>
            </ol>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Models;
