
import React from "react";
import StepViewer from "./StepViewer";

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  // Check if the file is a STEP file
  const isStepFile = modelPath.toLowerCase().includes('.step') || modelPath.toLowerCase().includes('.stp');
  
  if (isStepFile) {
    return <StepViewer modelPath={modelPath} />;
  }

  // For non-STEP files, show a message for now
  return (
    <div className="w-full h-[500px] bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 mb-4">This viewer now supports STEP files.</p>
        <p className="text-sm text-gray-500">Please use a STEP file (.step or .stp) to view 3D models.</p>
      </div>
    </div>
  );
};

export default ModelViewer;
