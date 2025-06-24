
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const PCBGallery = () => {
  const pcbs = [
    {
      id: "line-follower-pcb",
      title: "Line Follower PCB",
      description: "Custom PCB design for autonomous line following robot with sensor array and motor drivers.",
      category: "robotics",
      imageUrl: "/lovable-uploads/a4a443e8-da30-400a-b3fe-770d636d2f42.png",
      icon: <Cpu className="w-10 h-10 text-[#30A5FF]" />
    },
    {
      id: "battlebot-control-pcb",
      title: "Battlebot Control PCB",
      description: "High-power PCB design for battlebot control systems with motor controllers and safety circuits.",
      category: "robotics",
      imageUrl: "/lovable-uploads/e967c162-b356-4e25-8ad9-ec31049c431a.png",
      icon: <Zap className="w-10 h-10 text-[#30A5FF]" />
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24 pb-16 container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold mb-4">PCB Design Gallery</h1>
          <p className="text-lg text-foreground/80">
            Explore my custom PCB designs for various robotics and electronics projects.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All PCBs</TabsTrigger>
              <TabsTrigger value="robotics">Robotics</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pcbs.map((pcb, index) => (
                <PCBCard key={index} pcb={pcb} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="robotics" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pcbs.map((pcb, index) => (
                <PCBCard key={index} pcb={pcb} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-16">
          <Button className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
            <a href="/#contact">Contact for Custom PCB Design</a>
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

interface PCBCardProps {
  pcb: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    icon: React.ReactNode;
  };
}

const PCBCard = ({ pcb }: PCBCardProps) => {
  return (
    <Card className="overflow-hidden border-border hover:shadow-lg transition-all animate-fade-up">
      <div className="h-48 bg-black/5 overflow-hidden flex items-center justify-center">
        <img 
          src={pcb.imageUrl} 
          alt={pcb.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <div className="flex items-center gap-3">
          {pcb.icon}
          <CardTitle>{pcb.title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p>{pcb.description}</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Badge variant="outline" className="bg-ocean/10 text-ocean-light">
          {pcb.category}
        </Badge>
        <Button size="sm" className="bg-[#053F5C] hover:bg-[#30A5FF]" asChild>
          <Link to={`/pcb-designs/${pcb.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PCBGallery;
