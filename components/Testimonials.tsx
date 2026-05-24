"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sophia Martinez",
      treatment: "Acne Treatment",
      text: "I struggled with severe acne for years. Dr. Mitchell's personalized treatment plan cleared my skin completely in just 3 months. I finally feel confident again!",
      rating: 5,
    },
    {
      id: 2,
      name: "David Reynolds",
      treatment: "Hair Transplant",
      text: "The hair transplant procedure was seamless. The staff was incredibly professional, and the results look completely natural. Highly recommend Dermatologist Aura.",
      rating: 5,
    },
    {
      id: 3,
      name: "Priya Sharma",
      treatment: "Laser Hair Removal",
      text: "Painless and effective. I saw a massive reduction in hair growth after just two sessions. The clinic's hygiene standards are top-notch.",
      rating: 5,
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Patient Stories</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Hear From Our <span className="text-gradient">Clients</span>
            </h2>
            <p className="text-text-muted text-lg">
              Don't just take our word for it. Read how we've helped thousands of patients achieve their goals.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Treatment Result Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-video rounded-3xl overflow-hidden premium-shadow group"
          >
            <img 
              src="/images/hair-fall-result.png" 
              alt="Hair Fall Treatment Result" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Text Testimonials Slider (CSS based auto-scroll) */}
          <div className="relative overflow-hidden h-[400px]">
            <motion.div 
              className="flex flex-col gap-6"
              animate={{ y: [0, -400] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              {[...testimonials, ...testimonials].map((testimonial, idx) => (
                <div key={`${testimonial.id}-${idx}`} className="glass p-8 rounded-3xl premium-shadow">
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-10 h-10 text-primary/20" />
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-foreground text-lg mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-heading font-bold text-foreground">{testimonial.name}</div>
                      <div className="text-primary text-sm font-medium">{testimonial.treatment}</div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
                      <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${testimonial.name}`} alt={testimonial.name} />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
            
            {/* Gradient Mask for smooth scrolling effect */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
