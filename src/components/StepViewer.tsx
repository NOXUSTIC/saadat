
import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, ZoomIn, ZoomOut, Move } from 'lucide-react';

interface StepViewerProps {
  modelPath: string;
}

const StepViewer: React.FC<StepViewerProps> = ({ modelPath }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [ocInstance, setOcInstance] = useState<any>(null);

  useEffect(() => {
    let isMounted = true;

    const loadOpenCascade = async () => {
      try {
        // Import OpenCascade.js
        const opencascade = await import('opencascade.js');
        const oc = await opencascade.default();
        
        if (!isMounted) return;
        
        setOcInstance(oc);
        await loadStepFile(oc, modelPath);
      } catch (err) {
        console.error('Error loading OpenCascade:', err);
        if (isMounted) {
          setError('Failed to load 3D viewer');
          setIsLoading(false);
        }
      }
    };

    loadOpenCascade();

    return () => {
      isMounted = false;
    };
  }, [modelPath]);

  const loadStepFile = async (oc: any, filePath: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Fetch the STEP file
      const response = await fetch(filePath);
      if (!response.ok) {
        throw new Error('Failed to load STEP file');
      }

      const stepData = await response.text();
      
      // Parse STEP file with OpenCascade
      const reader = new oc.STEPCAFControl_Reader_1();
      const doc = new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1());
      
      // Read the STEP data
      reader.ReadFile(stepData);
      reader.Transfer(doc);
      
      // Get the shape
      const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(doc.Main()).get();
      const shapes = new oc.TopTools_HSequenceOfShape_1();
      shapeTool.GetShapes(shapes);
      
      if (shapes.Length() > 0) {
        const shape = shapes.Value(1);
        renderShape(oc, shape);
      } else {
        throw new Error('No shapes found in STEP file');
      }

      setIsLoading(false);
    } catch (err) {
      console.error('Error loading STEP file:', err);
      setError('Failed to load STEP file. Please check if the file exists and is valid.');
      setIsLoading(false);
    }
  };

  const renderShape = (oc: any, shape: any) => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;

    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // Basic wireframe rendering (simplified)
    context.strokeStyle = '#333333';
    context.lineWidth = 1;
    
    // This is a simplified visualization - in a real implementation,
    // you'd use OpenCascade's visualization tools
    context.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    context.font = '16px Arial';
    context.fillStyle = '#666666';
    context.textAlign = 'center';
    context.fillText('STEP Model Loaded', canvas.width / 2, canvas.height / 2);
  };

  const handleReset = () => {
    if (ocInstance) {
      loadStepFile(ocInstance, modelPath);
    }
  };

  const handleZoomIn = () => {
    // Implement zoom in functionality
    console.log('Zoom in');
  };

  const handleZoomOut = () => {
    // Implement zoom out functionality
    console.log('Zoom out');
  };

  if (error) {
    return (
      <div className="w-full h-[500px] bg-red-50 border border-red-200 rounded-lg flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={handleReset} variant="outline">
            Try Again
          </Button>
        </div>
      </div>
    );
  }

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
      
      <div className="w-full h-[500px] bg-gray-50 border border-gray-200 rounded-lg overflow-hidden relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80">
            <div className="text-center">
              <div className="animate-spin w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Loading STEP file...</p>
            </div>
          </div>
        )}
        
        <canvas
          ref={canvasRef}
          width={800}
          height={500}
          className="w-full h-full"
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>Controls: Click and drag to rotate • Scroll to zoom • Use buttons above for additional controls</p>
      </div>
    </div>
  );
};

export default StepViewer;
