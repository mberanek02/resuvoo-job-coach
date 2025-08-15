import { FileText, MessageSquare, Target, Zap, CheckCircle, TrendingUp } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: "AI Resume Tailoring",
      description: "Automatically customize your resume for each LinkedIn job posting with AI-powered optimization that highlights relevant skills and experience.",
      color: "accent"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Mock Interviews",
      description: "Practice with AI-generated interview questions based on the specific job requirements and get instant feedback on your responses.",
      color: "primary"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Job Match Analysis",
      description: "See exactly how well your profile matches job requirements with detailed analysis and suggestions for improvement.",
      color: "accent"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Instant Optimization",
      description: "Get your tailored resume in seconds, not hours. Our AI processes job descriptions instantly for rapid results.",
      color: "primary"
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "ATS Compatibility",
      description: "Ensure your resume passes through Applicant Tracking Systems with optimized formatting and keyword placement.",
      color: "accent"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Success Tracking",
      description: "Monitor your application success rates and continuously improve your job search strategy with detailed analytics.",
      color: "primary"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="text-accent"> Land Your Dream Job</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ResuVoo combines cutting-edge AI technology with proven career strategies to give you a competitive edge in today's job market.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-card p-8 rounded-2xl shadow-card hover:shadow-accent transition-all duration-300 hover:scale-105 animate-fade-in-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 ${
                feature.color === 'accent' 
                  ? 'bg-gradient-accent text-accent-foreground shadow-accent' 
                  : 'bg-gradient-primary text-primary-foreground shadow-soft'
              }`}>
                {feature.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;