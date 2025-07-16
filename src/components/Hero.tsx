import { ArrowDown, Download, Github, Linkedin, Mail, Star, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-bg-dark via-bg-darker to-bg-dark">
      {/* Animated Background */}
      <div className="absolute inset-0 floating-particles" />
      
      {/* Neon Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-neon-gradient-1 rounded-full animate-float opacity-30 blur-sm" />
      <div className="absolute top-40 right-20 w-16 h-16 bg-neon-gradient-2 rounded-full animate-float opacity-40 blur-sm" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-32 left-20 w-12 h-12 bg-neon-gradient-3 rounded-full animate-float opacity-30 blur-sm" style={{ animationDelay: '4s' }} />
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-neon-gradient-4 rounded-full animate-float opacity-50 blur-sm" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-neon-gradient-1 rounded-full animate-float opacity-30 blur-sm" style={{ animationDelay: '3s' }} />
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 animate-slide-up">
        {/* Profile Photo - UPLOAD YOUR PHOTO HERE */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden profile-neon">
              {/* REPLACE THIS SRC WITH YOUR PHOTO PATH */}
              {/* UPLOAD YOUR PHOTO TO: public/images/profile.jpg */}
              <img 
                src="/images/profile.jpg" 
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  // Fallback placeholder if image not found
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23374151'/%3E%3Ctext x='100' y='100' font-family='Arial' font-size='14' fill='%23fff' text-anchor='middle' dy='0.3em'%3EUPLOAD YOUR PHOTO%3C/text%3E%3C/svg%3E";
                }}
              />
            </div>
            <div className="absolute -inset-2 bg-rainbow-gradient rounded-full opacity-75 animate-rainbow blur-md -z-10" />
          </div>
        </div>

        <div className="mb-6">
          <span className="inline-flex items-center gap-2 px-6 py-3 glass-card rounded-full text-sm font-medium animate-fade-in border border-white/10">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-neon-gradient-1">Welcome to my portfolio</span>
            <Zap className="w-4 h-4 text-blue-400" />
          </span>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <span className="text-rainbow-gradient">John Doe</span>
        </h1>
        
        <h2 className="text-3xl md:text-5xl font-light mb-8 text-transparent bg-neon-gradient-2 bg-clip-text animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Full Stack Developer & Designer
        </h2>
        
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto animate-slide-up leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Crafting beautiful, functional, and user-centered digital experiences with modern technologies and creative solutions. 
          <span className="text-neon-gradient-1"> Turning ideas into reality with code!</span>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12 animate-slide-up" style={{ animationDelay: '0.8s' }}>
          <Button size="lg" className="bg-neon-gradient-1 hover:opacity-90 hover-neon-pink text-white font-semibold px-8 py-4 text-lg">
            <Mail className="mr-3 h-6 w-6" />
            Get In Touch
          </Button>
          
          <Button size="lg" variant="outline" className="glass-card hover-neon-blue border-white/20 text-white font-semibold px-8 py-4 text-lg">
            <Download className="mr-3 h-6 w-6" />
            Download Resume
          </Button>
        </div>
        
        <div className="flex justify-center gap-6 animate-fade-in" style={{ animationDelay: '1s' }}>
          <Button size="icon" variant="ghost" className="w-14 h-14 rounded-full glass-card hover-neon-pink border-white/10">
            <Github className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" className="w-14 h-14 rounded-full glass-card hover-neon-blue border-white/10">
            <Linkedin className="h-6 w-6" />
          </Button>
          <Button size="icon" variant="ghost" className="w-14 h-14 rounded-full glass-card hover-neon-green border-white/10">
            <Mail className="h-6 w-6" />
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-400">Scroll Down</span>
          <ArrowDown className="h-6 w-6 text-transparent bg-neon-gradient-1 bg-clip-text animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;