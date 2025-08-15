import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      company: "Tech Corp",
      content: "ResuVoo helped me land my dream job at a Fortune 500 company. The AI-tailored resume got me 3x more interviews than my old one!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Product Manager",
      company: "Innovation Labs",
      content: "The mock interview feature is incredible. It prepared me for questions I never would have thought of. Got the job on my first try!",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Director",
      company: "Growth Agency",
      content: "I went from 2% response rate to 40% after using ResuVoo. The job match analysis showed me exactly what I was missing.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "David Thompson",
      role: "Data Scientist",
      company: "AI Innovations",
      content: "The ATS optimization feature is a game-changer. My resume now passes through automated systems effortlessly.",
      rating: 5,
      avatar: "DT"
    },
    {
      name: "Lisa Wang",
      role: "UX Designer",
      company: "Design Studio",
      content: "ResuVoo's AI understood my industry better than most recruiters. The tailored resumes were spot-on every time.",
      rating: 5,
      avatar: "LW"
    },
    {
      name: "James Miller",
      role: "Sales Manager",
      company: "Enterprise Solutions",
      content: "The success tracking helped me optimize my approach. Increased my interview-to-offer ratio from 25% to 80%.",
      rating: 5,
      avatar: "JM"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Success Stories from 
            <span className="text-accent"> Our Users</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers with ResuVoo's AI-powered job search tools.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">5,000+</div>
            <div className="text-muted-foreground">Resumes Optimized</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">92%</div>
            <div className="text-muted-foreground">Interview Success Rate</div>
          </div>
          <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-4xl lg:text-5xl font-bold text-accent mb-2">4.9/5</div>
            <div className="text-muted-foreground">Average Rating</div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl shadow-card hover:shadow-accent transition-all duration-300 hover:scale-105 animate-fade-in-up border border-border/50"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-accent">{testimonial.company}</div>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-accent opacity-20" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;