"use client";

import { motion } from "framer-motion";
import { GraduationCap, Stethoscope, Award, ChevronRight } from "lucide-react";

export default function DoctorsSection() {
  return (
    <section id="doctors" className="py-16 md:py-28 bg-gradient-to-b from-[#EBF5FA] via-[#F4FAFD] to-[#EBF5FA] text-[#0F1E36] relative overflow-hidden">
      {/* Background Soft Blue Glow Auras */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[500px] h-[500px] rounded-full bg-[#007FCD]/5 blur-3xl opacity-60 -z-10" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] rounded-full bg-[#B3D6E7]/10 blur-3xl opacity-60 -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <div className="flex flex-col items-center">
            {/* Soft Ice-Blue Subheading Tag (matches Back to School badge style) */}
            <div className="inline-flex px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4 sm:mb-6 bg-[#E1F0F7] border border-[#B3D6E7]/30 text-[#006699] shadow-sm">
              Meet Your Expert
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-4 tracking-tight text-[#0F1E36]">
              Know Your <span className="text-[#007FCD]">Doctor</span>
            </h2>
            <div className="w-24 sm:w-32 h-[3px] bg-gradient-to-r from-transparent via-[#007FCD] to-transparent mx-auto mt-4 sm:mt-6 rounded-full shadow-[0_0_8px_rgba(0,127,205,0.3)]" />
          </div>
        </div>

        {/* Doctor Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          
          {/* Left Column: Image with floating soft glowing shapes */}
          <div className="lg:col-span-5 flex justify-center relative px-4 sm:px-0">
              <div className="relative w-full max-w-[320px] sm:max-w-md">
                {/* Soft, pulsing blue gradient aura behind photo */}
                <div className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-gradient-to-br from-[#007FCD]/10 to-[#B3D6E7]/10 blur-3xl -z-10 animate-pulse" />
                
                {/* Bottom-right soft glass outline card */}
                <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-24 h-24 sm:w-36 sm:h-36 rounded-2xl sm:rounded-[2.5rem] border border-[#B3D6E7]/30 bg-white/60 shadow-lg backdrop-blur-md -z-10" />
                
                {/* Top-left soft solid outline accent shape */}
                <div className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-16 h-16 sm:w-24 sm:h-24 bg-[#E1F0F7] border border-[#B3D6E7]/30 rounded-xl sm:rounded-2xl -z-10 shadow-sm" />

                {/* Main Doctor Image Frame with soft glowing border */}
                <div className="p-[2px] sm:p-[2.5px] bg-gradient-to-tr from-[#007FCD]/20 via-[#B3D6E7]/30 to-[#EBF5FA]/20 rounded-[1.8rem] sm:rounded-[2.2rem] shadow-[0_10px_45px_rgba(0,127,205,0.06)] border border-white/80">
                  <div className="relative aspect-[4/5] rounded-[1.7rem] sm:rounded-[2.1rem] overflow-hidden bg-gray-50">
                    <img 
                      src="/images/doctor-expert-image.png" 
                      alt="Dr. Shabeeh Haidar" 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
                      onError={(e) => {
                        // Falls back gracefully to a high-quality male doctor portrait
                        e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>
              </div>
          </div>

          {/* Right Column: Info details */}
          <div className="lg:col-span-7">
            <div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 tracking-tight text-[#0F1E36]">
                Dr. Shabeeh Haidar
              </h3>
              <p className="text-[#007FCD] font-semibold text-lg sm:text-xl md:text-2xl mb-6 sm:mb-10 tracking-wide">
                Skin & Hair Specialist | Cosmetologist
              </p>

              {/* Specs List with soft hover state */}
              <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-10">
                {/* Education */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="flex gap-3 sm:gap-5 items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-[#B3D6E7]/25 shadow-sm transition-all hover:bg-white hover:border-[#007FCD]/30 hover:shadow-md"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#007FCD]/10 to-[#007FCD]/5 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                    <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#007FCD]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F1E36] mb-1">Education</h4>
                    <p className="text-[#506075] text-xs sm:text-sm md:text-base leading-relaxed">
                      BUMS (Bachelor of Unani Medicine and Surgery)
                    </p>
                  </div>
                </motion.div>

                {/* Specialization */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="flex gap-3 sm:gap-5 items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-[#B3D6E7]/25 shadow-sm transition-all hover:bg-white hover:border-[#007FCD]/30 hover:shadow-md"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#007FCD]/10 to-[#007FCD]/5 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                    <Stethoscope className="w-6 h-6 sm:w-7 sm:h-7 text-[#007FCD]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F1E36] mb-1">Specialization</h4>
                    <p className="text-[#506075] text-xs sm:text-sm md:text-base leading-relaxed">
                      General Physician, Skin & Hair Treatment, Cosmetology
                    </p>
                  </div>
                </motion.div>

                {/* Expertise */}
                <motion.div 
                  whileHover={{ x: 6 }}
                  className="flex gap-3 sm:gap-5 items-start p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/80 border border-[#B3D6E7]/25 shadow-sm transition-all hover:bg-white hover:border-[#007FCD]/30 hover:shadow-md"
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-[#007FCD]/10 to-[#007FCD]/5 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                    <Award className="w-6 h-6 sm:w-7 sm:h-7 text-[#007FCD]" />
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg font-bold text-[#0F1E36] mb-1">Expertise</h4>
                    <p className="text-[#506075] text-xs sm:text-sm md:text-base leading-relaxed">
                      Advanced skin treatments, hair restoration, and holistic wellness therapies
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Biography paragraph */}
              <p className="text-[#506075] leading-relaxed text-xs sm:text-sm md:text-base mb-8 sm:mb-12 max-w-2xl">
                Dr. Shabeeh Haidar brings a unique blend of traditional Unani medicine and modern cosmetology to deliver exceptional results. With a patient-first approach and commitment to affordable healthcare, he has helped over 1000+ patients achieve their skin and hair goals.
              </p>

              {/* Actions & Socials */}
              <div className="flex flex-wrap gap-3 sm:gap-5 items-center">
                {/* Cobalt Blue Booking Button (matches Explore Gear button style) */}
                <a
                  href="#appointment"
                  className="group bg-[#007FCD] hover:bg-[#0066A3] text-white font-bold px-6 sm:px-10 py-3 sm:py-4 rounded-xl sm:rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-[0_4px_20px_rgba(0,127,205,0.25)] hover:shadow-[0_4px_25px_rgba(0,127,205,0.4)] text-base sm:text-lg inline-flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  Book Consultation
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
                
                {/* Social icons */}
                <div className="flex gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-start mt-2 sm:mt-0">
                  <a
                    href="https://www.instagram.com/dermatologist_aura"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white border border-[#B3D6E7]/30 text-gray-500 hover:text-[#007FCD] hover:border-[#007FCD]/40 hover:bg-[#007FCD]/5 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-md shrink-0"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                    </svg>
                  </a>
                  
                  <a
                    href="https://www.facebook.com/shabeeh.haider.71/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-white border border-[#B3D6E7]/30 text-gray-500 hover:text-[#007FCD] hover:border-[#007FCD]/40 hover:bg-[#007FCD]/5 flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-md shrink-0"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
