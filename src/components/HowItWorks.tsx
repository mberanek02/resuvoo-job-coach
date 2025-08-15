import { Upload, Wand2, Download, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: 1,
      icon: <Upload className="w-8 h-8" />,
      title: "Upload Your Resume",
      description: "Upload your existing resume and paste the LinkedIn job URL you're interested in."
    },
    {
      step: 2,
      icon: <Wand2 className="w-8 h-8" />,
      title: "AI Analysis & Optimization",
      description: "Our AI analyzes the job requirements and automatically tailors your resume to match perfectly."
    },
    {
      step: 3,
      icon: <Download className="w-8 h-8" />,
      title: "Download & Apply",
      description: "Get your optimized resume instantly and practice with AI-generated interview questions."
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Get Started in
            <span className="text-accent"> 3 Simple Steps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your job application process with our streamlined workflow designed for maximum efficiency and success.
          </p>
        </div>

        <div className="relative">
          {/* Connection Lines */}
          <div className="hidden lg:block absolute top-32 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-accent to-accent opacity-20"></div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-accent text-accent-foreground text-2xl font-bold mb-6 shadow-accent relative z-10">
                  {step.step}
                </div>

                {/* Arrow between steps */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-6 xl:-right-12">
                    <ArrowRight className="w-8 h-8 text-accent opacity-60" />
                  </div>
                )}

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                  {step.icon}
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
            Ready to get started?
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-accent text-accent-foreground rounded-xl font-semibold shadow-accent hover:shadow-lg hover:scale-105 transition-all duration-300">
              Start Free Trial - No Credit Card Required
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;