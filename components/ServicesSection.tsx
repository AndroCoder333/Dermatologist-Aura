"use client";

import { ArrowRight, Droplet, MoveUp, Target, Sun, Zap, Clock, Eye, Sparkles, Syringe, Activity } from "lucide-react";

export default function ServicesSection() {
  const services = [
    { id: 1, title: "Hair Loss Treatment", icon: <Activity className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Advanced solutions to stop hair fall and promote regrowth." },
    { id: 2, title: "PRP Therapy", icon: <Syringe className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Platelet-Rich Plasma therapy for natural skin and hair rejuvenation." },
    { id: 3, title: "Hair Transplant", icon: <MoveUp className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Permanent, natural-looking hair restoration by experts." },
    { id: 4, title: "Acne Treatment", icon: <Target className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Targeted solutions for clear, blemish-free skin." },
    { id: 5, title: "Pigmentation Treatment", icon: <Sun className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Even out your skin tone and remove dark spots safely." },
    { id: 6, title: "Laser Hair Removal", icon: <Zap className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Painless and permanent reduction of unwanted body hair." },
    { id: 7, title: "Anti Aging", icon: <Clock className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Reverse the signs of aging with our premium anti-aging protocols." },
    { id: 8, title: "Hydra Facial", icon: <Droplet className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Deep cleansing, exfoliation, and hydration for an instant glow." },
    { id: 9, title: "Skin Brightening", icon: <Sparkles className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Enhance your natural radiance and achieve a luminous complexion." },
    { id: 10, title: "Dark Circle Treatment", icon: <Eye className="w-5 h-5 sm:w-8 sm:h-8 text-primary" />, desc: "Specialized care to eliminate under-eye bags and dark circles." },
  ];



  return (
    <section id="services" className="py-16 md:py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Our Expertise</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
              Premium <span className="text-gradient">Treatments</span>
            </h2>
            <p className="text-text-muted text-base sm:text-lg">
              Discover our comprehensive range of advanced dermatological treatments designed to enhance your natural beauty and boost your confidence.
            </p>
          </div>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {services.map((service) => (
            <div
              key={service.id}
              onClick={() => {
                window.dispatchEvent(new CustomEvent('selectService', { detail: service.title }));
                document.getElementById('appointment')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 premium-shadow border border-gray-100 transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between hover:-translate-y-2"
            >
              
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-mint-gradient flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  
                  <h3 className="text-base sm:text-lg md:text-xl font-heading font-bold mb-1.5 sm:mb-3 text-foreground transition-colors line-clamp-2">
                    {service.title}
                  </h3>
                  
                  <p className="text-text-muted mb-4 sm:mb-6 text-xs sm:text-sm leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {service.desc}
                  </p>
                </div>
                
                <div 
                  className="inline-flex items-center text-xs sm:text-sm font-semibold text-primary transition-colors mt-auto"
                >
                  Learn More <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
