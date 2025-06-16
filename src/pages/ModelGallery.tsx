import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Package, Cog } from "lucide-react";
import { Link } from "react-router-dom";

const ModelGallery = () => {
  const models = [
    {
      id: "lfr-model",
      title: "LFR Design",
      description: "Line Following Robot design rendered with Three.js for smooth interaction.",
      category: "product",
      format: "GLB",
      imageUrl: "/placeholder.svg",
      icon: <Box className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "step-model",
      title: "CAD Model (STEP)",
      description: "Professional CAD model using OpenCascade.js for precise engineering visualization.",
      category: "engineering",
      format: "STEP",
      imageUrl: "/placeholder.svg",
      icon: <Cog className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "interior-design",
      title: "Architectural Interior Design",
      description: "Modern living room interior with detailed furniture and lighting setup.",
      category: "architecture",
      format: "GLB",
      imageUrl: "/placeholder.svg",
      icon: <Box className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "product-viz",
      title: "Product Visualization",
      description: "3D product rendering of a smart device with photorealistic materials.",
      category: "product",
      format: "GLTF",
      imageUrl: "/placeholder.svg",
      icon: <Package className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "character-model",
      title: "Character Model",
      description: "Stylized character model with rigging and animation setup.",
      category: "character",
      format: "FBX",
      imageUrl: "/placeholder.svg",
      icon: <Box className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "environment-design",
      title: "Environmental Design",
      description: "Detailed outdoor environment with terrain and vegetation.",
      category: "environment",
      format: "OBJ",
      imageUrl: "/placeholder.svg",
      icon: <Box className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "concept-vehicle",
      title: "Concept Vehicle",
      description: "Futuristic vehicle concept with detailed interior and exterior.",
      category: "product",
      format: "STL",
      imageUrl: "/placeholder.svg",
      icon: <Package className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "game-assets",
      title: "Game Asset Pack",
      description: "Collection of low-poly game assets optimized for real-time rendering.",
      category: "game",
      format: "GLB",
      imageUrl: "/placeholder.svg",
      icon: <Box className="w-10 h-10 text-[#30A5FF]" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">3D Model Gallery</h1>
          <p className="text-lg text-foreground/80">
            Explore my collection of 3D models in various formats: GLB, GLTF, OBJ, FBX, STL, STEP, and more.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Models</TabsTrigger>
              <TabsTrigger value="architecture">Architecture</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="engineering">Engineering</TabsTrigger>
              <TabsTrigger value="character">Characters</TabsTrigger>
              <TabsTrigger value="environment">Environments</TabsTrigger>
              <TabsTrigger value="game">Game Assets</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model, index) => (
                <ModelCard key={index} model={model} />
              ))}
            </div>
          </TabsContent>
          
          {["architecture", "product", "engineering", "character", "environment", "game"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {models
                  .filter((model) => model.category === category)
                  .map((model, index) => (
                    <ModelCard key={index} model={model} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-16">
          <Button className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
            <a href="/#contact">Contact for Custom 3D Design</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

interface ModelCardProps {
  model: {
    id: string;
    title: string;
    description: string;
    category: string;
    format: string;
    imageUrl: string;
    icon: React.ReactNode;
  };
}

const ModelCard = ({ model }: ModelCardProps) => {
  return (
    <Card className="overflow-hidden border-border hover:shadow-lg transition-all animate-fade-up">
      <div className="h-48 bg-black/5 overflow-hidden flex items-center justify-center">
        <img 
          src={model.imageUrl} 
          alt={model.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-3">
          {model.icon}
          <CardTitle className="text-base">{model.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm mb-3">{model.description}</p>
        <Badge variant="secondary" className="text-xs">
          {model.format}
        </Badge>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline" className="bg-ocean/10 text-ocean-light">
          {model.category}
        </Badge>
        <Button size="sm" className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
          <Link to={`/3d-models/${model.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ModelGallery;
