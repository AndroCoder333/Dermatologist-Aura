"use client";


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
    <div ref={ref} className="flex flex-col items-center p-2 sm:p-3 text-center">
      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 flex items-center justify-center text-white mb-2 shadow-lg backdrop-blur-sm shrink-0">
        {icon}
      </div>
      <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-white mb-0.5">
        {count}{suffix}
      </div>
      <div className="text-white/70 font-medium text-[10px] sm:text-xs uppercase tracking-wider line-clamp-1">{label}</div>
    </div>
  );
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-8 md:py-10 bg-dark-gradient overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Heading (compact layout) */}
          <div className="lg:col-span-4 text-center lg:text-left">
            <div>
              <span className="text-primary font-semibold tracking-wider uppercase text-xs mb-1 block">
                Why Us
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-1.5 leading-tight">
                Excellence in <br className="hidden lg:block" />
                <span className="text-primary">Dermatology</span>
              </h2>
              <p className="text-white text-xs max-w-md mx-auto lg:mx-0">
                Medical expertise and advanced technology combined for outstanding clinical care.
              </p>
            </div>
          </div>

          {/* Right Column: Ultra-Compact Counters Grid */}
          <div className="lg:col-span-8">
            <div 
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 glass-dark rounded-2xl p-3 sm:p-4 md:p-6"
            >
              <CounterItem label="Years Exp" end={15} suffix="+" icon={<Award className="w-5 h-5" />} />
              <CounterItem label="Happy Patients" end={50} suffix="k+" icon={<Users className="w-5 h-5" />} />
              <CounterItem label="Satisfaction" end={98} suffix="%" icon={<ThumbsUp className="w-5 h-5" />} />
              <CounterItem label="Advanced Tech" end={100} suffix="%" icon={<Activity className="w-5 h-5" />} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
