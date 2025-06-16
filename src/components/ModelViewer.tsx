
import React from "react";
import StepViewer from "./StepViewer";
import ThreeViewer from "./ThreeViewer";

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  // Check file extension to determine viewer type
  const fileExtension = modelPath.toLowerCase().split('.').pop();
  
  // STEP files use OpenCascade viewer
  if (fileExtension === 'step' || fileExtension === 'stp') {
    return <StepViewer modelPath={modelPath} />;
  }
  
  // Common 3D formats use Three.js viewer
  const supportedFormats = ['glb', 'gltf', 'obj', 'fbx', 'dae', 'ply', 'stl'];
  if (fileExtension && supportedFormats.includes(fileExtension)) {
    return <ThreeViewer modelPath={modelPath} />;
  }

  // Unsupported format
  return (
    <div className="w-full h-[500px] bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 mb-4">Unsupported file format: {fileExtension}</p>
        <p className="text-sm text-gray-500">
          Supported formats: GLB, GLTF, OBJ, FBX, DAE, PLY, STL, STEP, STP
        </p>
      </div>
    </div>
  );
};

export default ModelViewer;
