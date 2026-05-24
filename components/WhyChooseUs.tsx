"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Award, Users, ThumbsUp, Activity } from "lucide-react";

// Hook for counting animation
function useCounter(end: number, duration: number = 2000, startWhenVisible: boolean = true) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  useEffect(() => {
    if (!startWhenVisible || isVisible) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [end, duration, isVisible, startWhenVisible]);

  return { count, ref };
}

function CounterItem({ label, end, suffix, icon }: { label: string, end: number, suffix: string, icon: React.ReactNode }) {
  const { count, ref } = useCounter(end, 2000);

  return (
    <div ref={ref} className="flex flex-col items-center p-6 text-center">
      <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white mb-4 shadow-lg backdrop-blur-sm">
        {icon}
      </div>
      <div className="text-4xl lg:text-5xl font-heading font-bold text-white mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/80 font-medium text-lg uppercase tracking-wider">{label}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-dark-gradient overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Why Choose Dermatologist Aura</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              Excellence in <span className="text-primary">Dermatology</span>
            </h2>
            <p className="text-gray-300 text-lg">
              We combine medical expertise with cutting-edge technology to deliver results that exceed expectations.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 glass-dark rounded-3xl p-8 lg:p-12"
        >
          <CounterItem label="Years Experience" end={15} suffix="+" icon={<Award className="w-8 h-8" />} />
          <CounterItem label="Happy Patients" end={50} suffix="k+" icon={<Users className="w-8 h-8" />} />
          <CounterItem label="Satisfaction" end={98} suffix="%" icon={<ThumbsUp className="w-8 h-8" />} />
          <CounterItem label="Advanced Tech" end={100} suffix="%" icon={<Activity className="w-8 h-8" />} />
        </motion.div>
      </div>
    </section>
  );
}
