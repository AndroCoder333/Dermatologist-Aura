"use client";

import { motion } from "framer-motion";
import { Send, Clock, ShieldCheck, ChevronDown } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setFormData(prev => ({ ...prev, service: customEvent.detail }));
    };
    window.addEventListener('selectService', handleSelectService);
    return () => window.removeEventListener('selectService', handleSelectService);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the message for WhatsApp
    const textMessage = `Hello Dermatologist Aura,\n\nI would like to book a doctor consultation. Here are my details:\n\n*Name:* ${formData.name}\n*Service:* ${formData.service}\n\n*Message:*\n${formData.message}`;
    const encodedMessage = encodeURIComponent(textMessage);
    const whatsappUrl = `https://wa.me/919993377566?text=${encodedMessage}`;

    // Simulate short processing before redirect
    setTimeout(() => {
      setIsSubmitting(false);
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  return (
    <section id="appointment" className="py-24 bg-mint-gradient relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Form Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Doctor <span className="text-gradient">Consultation</span>
            </h2>
            <p className="text-text-muted text-lg mb-8 leading-relaxed">
              Get personalized advice from our expert dermatologists. Share your concerns below and we will guide you to the perfect treatment plan.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 premium-shadow">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg">Fast Response Time</h4>
                  <p className="text-text-muted">We typically respond within 15 minutes during working hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary shrink-0 premium-shadow">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-foreground text-lg">Confidentiality Assured</h4>
                  <p className="text-text-muted">Your medical information is strictly confidential and secure.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* The Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 lg:p-10 premium-shadow relative"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-6">
                <div className="relative">
                  <input type="text" id="name" required value={formData.name} onChange={handleChange} className="block px-4 pb-2.5 pt-6 w-full text-sm text-foreground bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" " />
                  <label htmlFor="name" className="absolute text-sm text-text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Full Name</label>
                </div>
              </div>
              
              <div className="relative" ref={dropdownRef}>
                <div 
                  className={`block px-4 pb-2.5 pt-6 w-full text-sm rounded-xl border ${isDropdownOpen ? 'border-primary ring-0 bg-white' : 'border-gray-300 bg-transparent'} cursor-pointer flex justify-between items-center transition-all`}
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                  <span className={formData.service ? "text-foreground" : "text-transparent"}>
                    {formData.service || "Select Service"}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-text-muted transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
                
                <label className={`absolute text-sm duration-300 transform z-10 origin-[0] left-4 top-4 pointer-events-none ${formData.service || isDropdownOpen ? '-translate-y-3 scale-75 text-primary' : 'text-text-muted translate-y-0 scale-100'}`}>
                  Select Service
                </label>
                
                {isDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl premium-shadow border border-gray-100 overflow-hidden z-50"
                  >
                    <ul className="max-h-60 overflow-y-auto py-2 custom-scrollbar">
                      {[
                        "Hair Loss Treatment", "PRP Therapy", "Hair Transplant", 
                        "Acne Treatment", "Pigmentation Treatment", "Laser Hair Removal", 
                        "Anti Aging", "Hydra Facial", "Skin Brightening", 
                        "Dark Circle Treatment", "Other Inquiry"
                      ].map(service => (
                        <li 
                          key={service}
                          className={`px-4 py-3 text-sm cursor-pointer hover:bg-mint-gradient hover:text-primary transition-colors ${formData.service === service ? 'bg-primary/5 text-primary font-medium' : 'text-foreground'}`}
                          onClick={() => {
                            setFormData(prev => ({ ...prev, service }));
                            setIsDropdownOpen(false);
                          }}
                        >
                          {service}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>

              <div className="relative">
                <textarea id="message" rows={4} value={formData.message} onChange={handleChange} className="block px-4 pb-2.5 pt-6 w-full text-sm text-foreground bg-transparent rounded-xl border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-primary peer resize-none" placeholder=" "></textarea>
                <label htmlFor="message" className="absolute text-sm text-text-muted duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3">Briefly describe your concern</label>
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-medium rounded-xl px-5 py-4 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Processing...</span>
                ) : (
                  <>
                    Book Appointment <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
