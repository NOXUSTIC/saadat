
import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage, PresentationControls, Box, Text } from "@react-three/drei";

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
      <Box args={[2, 1, 1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#30A5FF" />
      </Box>
      <Text
        position={[0, -1.5, 0]}
        fontSize={0.3}
        color="#053F5C"
        anchorX="center"
        anchorY="middle"
      >
        {title}
      </Text>
      <Text
        position={[0, -2, 0]}
        fontSize={0.2}
        color="#666"
        anchorX="center"
        anchorY="middle"
      >
        Model Preview
      </Text>
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
