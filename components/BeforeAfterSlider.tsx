"use client";

import { useState, useRef, useEffect } from "react";
import { MoveRight, MoveLeft } from "lucide-react";

export default function BeforeAfterSlider() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchend", handleMouseUp);
    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, []);

  return (
    <section id="before-after" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div>
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Real Results</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Before & <span className="text-gradient">After</span>
            </h2>
            <p className="text-text-muted text-lg">
              See the transformative results our advanced treatments provide. Slide to compare the visible differences.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div 
            className="relative w-full aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden premium-shadow select-none"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onTouchStart={() => setIsDragging(true)}
          >
            {/* After Image (Background) */}
            <div className="absolute inset-0 bg-gray-200">
              <img 
                src="/images/after_skin.png" 
                alt="After treatment" 
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                After
              </div>
            </div>

            {/* Before Image (Foreground, Clipped) */}
            <div 
              className="absolute inset-0 bg-gray-300 border-r-4 border-white z-10"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img 
                src="/images/before_skin.png" 
                alt="Before treatment" 
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-bold shadow-sm">
                Before
              </div>
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 z-20 flex items-center justify-center"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center premium-shadow cursor-ew-resize transform transition-transform hover:scale-110">
                <div className="flex gap-1 text-primary">
                  <MoveLeft className="w-4 h-4" />
                  <MoveRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-text-muted">
            <span className="inline-block md:hidden">Swipe left and right</span>
            <span className="hidden md:inline-block">Drag the slider left and right</span>
            {' '}to see the transformation.
          </div>
        </div>
      </div>
    </section>
  );
}
