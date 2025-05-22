
import React, { Suspense, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls, Environment, useGLTF, Html } from "@react-three/drei";
import { Button } from "@/components/ui/button";
import * as THREE from "three";

// Model component that loads and displays the 3D model
const Model = ({ modelPath, scale = 40, position = [0, 0, 0] }) => {
  const ref = useRef();
  const { scene } = useGLTF(modelPath);
  
  // Rotate the model
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <primitive 
      ref={ref}
      object={scene}
      position={position}
      scale={scale}
    />
  );
};

// Available models for showcase
const models = [
  {
    name: "Robot",
    path: "/models/robot.glb",
    scale: 1.5,
    position: [0, -1, 0],
  },
  {
    name: "Helmet",
    path: "/models/helmet.glb",
    scale: 2.5,
    position: [0, 0, 0],
  },
  {
    name: "Spaceship",
    path: "/models/spaceship.glb",
    scale: 0.3,
    position: [0, -1, 0],
  },
];

// Placeholder model for development
const defaultModel = {
  name: "Example",
  path: "https://market-assets.fra1.cdn.digitaloceanspaces.com/market-assets/models/robot-playground/model.gltf",
  scale: 0.4,
  position: [0, -0.9, 0],
};

const ModelViewer = () => {
  const [currentModel, setCurrentModel] = useState(defaultModel);
  const [loading, setLoading] = useState(false);

  const handleChangeModel = (model) => {
    setLoading(true);
    setCurrentModel(model);
    // Reset loading state after model has loaded
    setTimeout(() => setLoading(false), 1000);
  };

  return (
    <div className="w-full h-[500px] relative rounded-lg overflow-hidden bg-black/10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "rgb(5, 10, 15)" }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={
          <Html center>
            <div className="text-white text-lg">Loading...</div>
          </Html>
        }>
          <Model
            modelPath={currentModel.path}
            scale={currentModel.scale}
            position={currentModel.position}
          />
          <OrbitControls enableZoom={true} autoRotate={false} />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
      
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white">Loading model...</div>
        </div>
      )}
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 px-4">
        <Button 
          onClick={() => handleChangeModel(defaultModel)}
          variant={currentModel === defaultModel ? "default" : "outline"}
          className="bg-[#053F5C] hover:bg-[#30A5FF]"
        >
          Demo Model
        </Button>
        {/* Uncomment this section once you have your own models */}
        {/* {models.map((model, index) => (
          <Button
            key={index}
            onClick={() => handleChangeModel(model)}
            variant={currentModel.name === model.name ? "default" : "outline"}
            className="bg-[#053F5C] hover:bg-[#30A5FF]"
          >
            {model.name}
          </Button>
        ))} */}
      </div>
    </div>
  );
};

export default ModelViewer;
