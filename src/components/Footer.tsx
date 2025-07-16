import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/thanushshetty9353",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/thanush-shetty-a49801298",
      label: "LinkedIn",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/", // Replace with your actual Twitter handle
      label: "Twitter",
    },
    {
      icon: Mail,
      href: "mailto:thanushshetty7@gmail.com",
      label: "Email",
    },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-card-gradient border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-gradient">Thanush Shetty</h3>
            <p className="text-muted-foreground max-w-sm">
              AIML Aspirant | Web Developer | Tech Explorer
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="icon"
                    variant="ghost"
                    className="hover-glow rounded-full"
                  >
                    <social.icon className="h-4 w-4" />
                  </Button>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>
                <a href="mailto:thanushshetty7@gmail.com" className="hover:text-primary">
                  thanushshetty7@gmail.com
                </a>
              </p>
              <p>+918762722706</p>
              <p>Mangalore, India 🇮🇳</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {currentYear} Thanush Shetty. All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
