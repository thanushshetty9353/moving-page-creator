import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-background/80" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-primary-glow/30 rounded-full animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-accent/40 rounded-full animate-float" style={{ animationDelay: '4s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-slide-up">
        <div className="mb-6">
          <span className="inline-block px-4 py-2 bg-primary/20 rounded-full text-primary border border-primary/30 text-sm font-medium animate-fade-in">
            👋 Welcome to my portfolio
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-gradient">John Doe</span>
        </h1>
        
        <h2 className="text-2xl md:text-4xl font-light mb-8 text-muted-foreground animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Full Stack Developer & Designer
        </h2>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative solutions.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="bg-primary hover:bg-primary/90 hover-glow">
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </Button>
          
          <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 hover-scale">
            <Download className="mr-2 h-5 w-5" />
            Download CV
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button size="icon" variant="ghost" className="hover-glow rounded-full">
            <Github className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="hover-glow rounded-full">
            <Linkedin className="h-5 w-5" />
          </Button>
          <Button size="icon" variant="ghost" className="hover-glow rounded-full">
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-primary animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;