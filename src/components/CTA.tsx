import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const CTA = () => {
  const features = [
    "AI-powered resume optimization",
    "Personalized mock interviews", 
    "ATS compatibility guarantee",
    "Job match analysis",
    "Success rate tracking"
  ];

  return (
    <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-accent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-medium mb-6">
              Limited Time Offer
            </div>
            
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Ready to 
              <span className="text-accent"> Transform</span>
              <br />
              Your Career?
            </h2>
            
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of professionals who have accelerated their careers with AI-powered resume optimization and interview preparation.
            </p>
          </div>

          {/* Features List */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center justify-center md:justify-start space-x-3">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-sm opacity-90">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="lg" className="group text-lg px-8 py-6 bg-accent text-accent-foreground hover:bg-accent-light">
              Start Your Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <p className="text-sm opacity-70 mb-4">
              ✨ No credit card required • 7-day free trial • Cancel anytime
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm opacity-60">
              <div>🔒 256-bit SSL Encryption</div>
              <div>⚡ Instant Setup</div>
              <div>🎯 92% Success Rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;