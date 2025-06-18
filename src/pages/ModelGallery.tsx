import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Box, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const ModelGallery = () => {
  const models = [
    {
      id: "line-follower",
      title: "Line Follower Robot",
      description: "Autonomous line following robot with sensors and precise motor control systems.",
      category: "product",
      imageUrl: "/placeholder.svg",
      icon: <Box className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "nano-battlebot",
      title: "Nano Battlebot",
      description: "Compact fighting robot designed for competitive robotics with advanced combat mechanisms.",
      category: "product",
      imageUrl: "/lovable-uploads/e967c162-b356-4e25-8ad9-ec31049c431a.png",
      icon: <Zap className="w-10 h-10 text-[#30A5FF]" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">3D Model Gallery</h1>
          <p className="text-lg text-foreground/80">
            Explore my 3D models of robots created using industry-standard tools.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All Models</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model, index) => (
                <ModelCard key={index} model={model} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="product" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {models.map((model, index) => (
                <ModelCard key={index} model={model} />
              ))}
            </div>
          </TabsContent>
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
          <CardTitle>{model.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>{model.description}</p>
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
