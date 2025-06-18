
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
      <mesh position={[0, -1.5, 0]}>
        <planeGeometry args={[4, 0.5]} />
        <meshBasicMaterial color="transparent" opacity={0} />
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
    // Check if model file exists
    fetch(modelPath)
      .then(response => {
        if (!response.ok || response.headers.get('content-type')?.includes('text/html')) {
          setModelExists(false);
        }
      })
      .catch(() => {
        setModelExists(false);
      });
  }, [modelPath]);

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
            {modelExists ? (
              <Model modelPath={modelPath} />
            ) : (
              <FallbackModel title={title} />
            )}
          </Stage>
        </PresentationControls>
        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
