
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useTexture, Stage, Environment } from '@react-three/drei';
import { Button } from '@/components/ui/button';
import { RotateCcw, ZoomIn, ZoomOut, Maximize } from 'lucide-react';

interface ThreeViewerProps {
  modelPath: string;
}

const Model: React.FC<{ url: string }> = ({ url }) => {
  try {
    const { scene } = useGLTF(url);
    return <primitive object={scene} />;
  } catch (error) {
    console.error('Error loading model:', error);
    return null;
  }
};

const ThreeViewer: React.FC<ThreeViewerProps> = ({ modelPath }) => {
  const controlsRef = React.useRef<any>(null);

  const handleReset = () => {
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  };

  const handleZoomIn = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyIn(0.5);
      controlsRef.current.update();
    }
  };

  const handleZoomOut = () => {
    if (controlsRef.current) {
      controlsRef.current.dollyOut(0.5);
      controlsRef.current.update();
    }
  };

  return (
    <div className="w-full">
      <div className="flex gap-2 mb-4">
        <Button onClick={handleReset} variant="outline" size="sm">
          <RotateCcw size={16} className="mr-2" />
          Reset View
        </Button>
        <Button onClick={handleZoomIn} variant="outline" size="sm">
          <ZoomIn size={16} className="mr-2" />
          Zoom In
        </Button>
        <Button onClick={handleZoomOut} variant="outline" size="sm">
          <ZoomOut size={16} className="mr-2" />
          Zoom Out
        </Button>
      </div>
      
      <div className="w-full h-[500px] bg-gray-900 rounded-lg overflow-hidden">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Suspense fallback={null}>
            <Stage adjustCamera={1.5} intensity={1} shadows="contact">
              <Model url={modelPath} />
            </Stage>
            <Environment preset="studio" />
            <OrbitControls
              ref={controlsRef}
              enablePan={true}
              enableZoom={true}
              enableRotate={true}
              dampingFactor={0.05}
              screenSpacePanning={false}
              minDistance={1}
              maxDistance={100}
            />
          </Suspense>
        </Canvas>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Controls: Click and drag to rotate • Scroll to zoom • Right-click and drag to pan</p>
      </div>
    </div>
  );
};

export default ThreeViewer;
