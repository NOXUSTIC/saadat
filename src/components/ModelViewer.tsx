
import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, PresentationControls } from "@react-three/drei";

const Model = ({ modelPath }: { modelPath: string }) => {
  try {
    const { scene } = useGLTF(modelPath);
    return <primitive object={scene} scale={1} />;
  } catch (error) {
    console.error("Failed to load model:", error);
    return null;
  }
};

const FallbackModel = ({ title }: { title: string }) => {
  return (
    <group>
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2, 1, 1]} />
        <meshStandardMaterial color="#30A5FF" />
      </mesh>
    </group>
  );
};

interface ModelViewerProps {
  modelPath: string;
  title?: string;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath, title = "3D Model" }) => {
  const [modelExists, setModelExists] = useState(true);

  useEffect(() => {
    // Check if model file exists by trying to load it
    const checkModel = async () => {
      try {
        const response = await fetch(modelPath);
        if (!response.ok || response.headers.get('content-type')?.includes('text/html')) {
          console.log("Model file not found or invalid:", modelPath);
          setModelExists(false);
        } else {
          setModelExists(true);
        }
      } catch (error) {
        console.log("Error checking model:", error);
        setModelExists(false);
      }
    };
    
    checkModel();
  }, [modelPath]);

  return (
    <div className="w-full h-[500px] bg-gradient-to-b from-gray-50 to-gray-100 rounded-lg overflow-hidden">
      <Canvas 
        shadows 
        dpr={[1, 2]} 
        camera={{ fov: 45, position: [0, 0, 4] }}
        gl={{ antialias: true }}
      >
        <color attach="background" args={["#f8fafc"]} />
        
        {/* Reduced lighting intensity */}
        <ambientLight intensity={0.3} />
        <directionalLight 
          position={[10, 10, 5]} 
          intensity={0.4}
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight 
          position={[-10, -10, -5]} 
          intensity={0.2}
        />
        
        <PresentationControls
          global
          zoom={0.8}
          rotation={[0, -Math.PI / 4, 0]}
          polar={[0, Math.PI / 2]}
          azimuth={[-Math.PI / 2, Math.PI / 2]}
        >
          {modelExists ? (
            <Model modelPath={modelPath} />
          ) : (
            <FallbackModel title={title} />
          )}
        </PresentationControls>
        
        <OrbitControls 
          enableZoom={true} 
          enablePan={true} 
          enableRotate={true}
          minDistance={2}
          maxDistance={8}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
