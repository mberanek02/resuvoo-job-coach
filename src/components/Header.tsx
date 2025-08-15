import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img 
            src="/lovable-uploads/1b1ae5d8-f199-43f9-adf7-95fec85d25ed.png" 
            alt="ResuVoo Logo" 
            className="h-10 w-auto"
          />
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-foreground hover:text-accent transition-colors duration-200">
            Features
          </a>
          <a href="#how-it-works" className="text-foreground hover:text-accent transition-colors duration-200">
            How It Works
          </a>
          <a href="#testimonials" className="text-foreground hover:text-accent transition-colors duration-200">
            Testimonials
          </a>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;