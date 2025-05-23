
import React, { useRef, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, PresentationControls } from "@react-three/drei";

const Model = ({ modelPath }: { modelPath: string }) => {
  const { scene } = useGLTF(modelPath);
  
  return <primitive object={scene} scale={1} />;
};

interface ModelViewerProps {
  modelPath: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  return (
    <div className="w-full h-[500px] bg-black/5 rounded-lg overflow-hidden">
      <Canvas shadows dpr={[1, 2]} camera={{ fov: 45 }}>
        <color attach="background" args={["#f5f5f5"]} />
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 4]}
          azimuth={[-Math.PI / 4, Math.PI / 4]}
        >
          <Stage environment="city" intensity={0.6}>
            <Model modelPath={modelPath} />
          </Stage>
        </PresentationControls>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
