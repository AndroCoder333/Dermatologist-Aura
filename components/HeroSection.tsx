"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Users, Star, Sparkles, Compass } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  const trustBadges = [
    { icon: <ShieldCheck className="w-5 h-5 text-primary" />, text: "FDA Approved Technology" },
    { icon: <Users className="w-5 h-5 text-primary" />, text: "10k+ Happy Clients" },
    { icon: <Star className="w-5 h-5 text-accent" />, text: "Expert Dermatologists" },
    { icon: <Sparkles className="w-5 h-5 text-primary" />, text: "Personalized Treatments" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-mint-gradient">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <dev
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-primary/20 text-primary text-sm font-medium mb-6 premium-shadow">
              <Sparkles className="w-4 h-4" />
              <span>Premium Skincare Clinic</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6">
              Advanced <br />
              <span className="text-gradient">Dermatologist-Led</span> <br />
              Hair & Skin Care
            </h1>
            
            <p className="text-lg text-text-muted mb-8 max-w-xl leading-relaxed">
              Experience world-class cosmetic dermatology. We specialize in advanced treatments for skin, hair, acne, anti-aging, laser, and pigmentation.
            </p>
            
            <div className="flex mb-12">
              <a
                href="#services"
                className="group p-[1.5px] rounded-2xl bg-gradient-to-r from-primary to-secondary transition-all transform hover:scale-105 premium-shadow flex items-center justify-center"
              >
                <div className="w-full h-full bg-white/90 text-primary px-6 sm:px-8 py-3 sm:py-3.5 rounded-[14px] flex items-center justify-center gap-2 text-base sm:text-lg font-medium transition-all duration-300 backdrop-blur-sm">
                  Explore Treatments
                  <Compass className="w-5 h-5 transition-transform duration-500 group-hover:rotate-90" />
                </div>
              </a>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4">
              {trustBadges.map((badge, index) => (
                <dev
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-2xl glass"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    {badge.icon}
                  </div>
                  <span className="text-xs sm:text-sm font-medium text-foreground">{badge.text}</span>
                </dev>
              ))}
            </div>
          </dev>

          {/* Hero Image */}
          <dev
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative lg:h-[700px] flex items-center justify-center"
          >
            {/* Floating Elements */}
            <dev
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-4 right-4 sm:top-10 sm:right-10 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl premium-shadow z-20"
            >
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-accent fill-current" />
                <div className="text-xs sm:text-sm font-bold">4.9/5 Rating</div>
              </div>
            </dev>

            <dev
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-6 left-4 sm:bottom-20 sm:left-0 glass p-3 sm:p-4 rounded-xl sm:rounded-2xl premium-shadow z-20"
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-secondary rounded-full flex items-center justify-center text-white shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold">100% Safe</div>
                  <div className="text-[10px] sm:text-xs text-text-muted">Procedures</div>
                </div>
              </div>
            </dev>

            {/* Main Image placeholder - Using a styled div as placeholder since we don't have an actual image asset */}
            <div className="relative w-full max-w-md aspect-[3/4] rounded-[2rem] overflow-hidden premium-shadow border-8 border-white">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 mix-blend-overlay z-10" />
              <img 
                src="/images/hero_clinic.png" 
                alt="Premium Dermatologist Clinic" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Background shape */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg aspect-square rounded-full bg-gradient-to-tr from-primary/10 to-secondary/10 -z-10 blur-3xl" />
          </dev>

        </div>
      </div>
    </section>
  );
}
