import { Mail, Twitter, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <img 
              src="/lovable-uploads/1b1ae5d8-f199-43f9-adf7-95fec85d25ed.png" 
              alt="ResuVoo Logo" 
              className="h-8 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              ResuVoo uses AI to help professionals optimize their resumes for specific job postings and prepare for interviews with personalized mock sessions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center hover:bg-accent transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Resume Optimizer</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Mock Interviews</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Job Matching</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">ATS Checker</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Success Analytics</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Press</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Help Center</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
              © 2024 ResuVoo. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Terms of Service</a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;