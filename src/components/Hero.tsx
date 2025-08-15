import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Target, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="absolute top-20 left-20 animate-float">
        <Sparkles className="text-accent w-8 h-8 opacity-20" />
      </div>
      <div className="absolute bottom-32 right-32 animate-float" style={{ animationDelay: '2s' }}>
        <Target className="text-accent w-12 h-12 opacity-20" />
      </div>
      <div className="absolute top-1/3 right-20 animate-float" style={{ animationDelay: '4s' }}>
        <Zap className="text-accent w-6 h-6 opacity-20" />
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Powered Career Success
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Transform Your 
              <span className="text-accent"> Resume</span>
              <br />
              Ace Every 
              <span className="text-accent"> Interview</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              ResuVoo uses AI to tailor your resume for specific LinkedIn job listings and provides personalized mock interviews to help you land your dream job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="hero" size="lg" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-accent" size="lg">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="font-semibold text-accent">5,000+</span>
                <span className="ml-1">resumes optimized</span>
              </div>
              <div className="flex items-center">
                <span className="font-semibold text-accent">92%</span>
                <span className="ml-1">interview success rate</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={heroImage} 
                alt="AI-powered resume optimization dashboard"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent"></div>
            </div>
            
            {/* Floating UI Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-card p-4 rounded-xl shadow-accent animate-glow">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-foreground">AI Analyzing...</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-card p-4 rounded-xl shadow-card">
              <div className="text-sm text-muted-foreground">Match Score</div>
              <div className="text-2xl font-bold text-accent">94%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;