"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Award, Heart, ShieldCheck, Clock, CheckCircle2, Star, Sparkles } from "lucide-react";
import Image from "next/image";

export default function AboutUs() {
  const coreValues = [
    {
      icon: <Heart className="w-6 h-6 text-[#007FCD]" />,
      title: "Patient-Centric Care",
      description: "We listen, care, and tailor every skin and hair treatment plan to your unique personal goals."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#007FCD]" />,
      title: "Clinical Safety & Hygiene",
      description: "Adhering to strict medical standards, advanced safety protocols, and FDA-approved technologies."
    },
    {
      icon: <Award className="w-6 h-6 text-[#007FCD]" />,
      title: "Advanced Medical Expertise",
      description: "Led by expert practitioners blending traditional wisdom with modern advanced cosmetic sciences."
    }
  ];

  const milestones = [
    { year: "1000+", label: "Happy Patients" },
    { year: "98%", label: "Satisfaction Rate" },
    { year: "10+", label: "Advanced Treatments" },
    { year: "100%", label: "Clinical Excellence" }
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-b from-[#EBF5FA] via-[#F4FAFD] to-[#EBF5FA] overflow-hidden">
        
        {/* Header Hero Section */}
        <section className="relative py-20 sm:py-28 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007FCD]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <span className="text-[#007FCD] font-semibold tracking-wider uppercase text-sm mb-3 block">
                Discover Our Story
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[#0F1E36] mb-8 leading-tight">
                About Dermatologist <span className="text-gradient bg-gradient-to-r from-[#007FCD] to-[#0066A3]">Aura</span>
              </h1>
              <p className="text-[#506075] text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
                Medical expertise and advanced technology combined for outstanding clinical care. Discover how we are redefining aesthetic dermatology and clinical hair restoration.
              </p>
            </div>
          </div>
        </section>

        {/* Brand Story & Philosophy */}
        <section className="py-16 bg-white border-y border-[#B3D6E7]/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              
              {/* Left Column: Story details */}
              <div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-[#007FCD]" />
                  <span className="text-[#007FCD] font-medium uppercase tracking-wider text-xs">Our Mission</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F1E36] mb-6">
                  Redefining Luxury Skin & Hair Care
                </h2>
                <div className="space-y-5 text-[#506075] leading-relaxed text-sm sm:text-base">
                  <p>
                    At Dermatologist Aura, we believe that healthy skin and vibrant hair are the foundation of true personal confidence. Founded on the principles of luxury care and absolute medical efficacy, we have established a state-of-the-art clinical space designed to offer bespoke treatments.
                  </p>
                  <p>
                    Under the visionary leadership of <strong>Dr. Shabeeh Haidar</strong>, our medical team blends the scientific principles of advanced dermatology with holistic care. Every patient receives a detailed diagnostic overview, ensuring that whether you are treating stubborn hair fall, advanced pigmentation, or seeking premium anti-aging solutions, you get visible, lasting results.
                  </p>
                  <p className="italic border-l-4 border-[#007FCD] pl-4 py-1 text-[#0F1E36] font-medium bg-[#007FCD]/5 rounded-r-xl">
                    "Our goal is not just temporary aesthetic improvements, but deep-seated, cellular rejuvenation that restores your confidence."
                  </p>
                </div>
              </div>

              {/* Right Column: Dynamic Side Stats and Image card */}
              <div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#B3D6E7]/30 bg-gradient-to-tr from-[#EBF5FA] to-white p-2">
                  <img
                    src="/images/hero_clinic.png"
                    alt="Dermatologist Aura Clinic"
                    className="rounded-2xl w-full h-[320px] sm:h-[400px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl" />
                </div>
                
                {/* Overlay Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-[#B3D6E7]/50 rounded-2xl p-4 sm:p-6 shadow-xl max-w-[200px] sm:max-w-xs flex gap-4 items-center">
                  <div className="w-12 h-12 rounded-xl bg-[#007FCD]/10 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                    <Star className="w-6 h-6 text-[#007FCD] fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0F1E36] leading-none">1000+</h4>
                    <p className="text-xs sm:text-sm text-[#506075] mt-1 font-medium">Bespoke Journeys Completed</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#F4FAFD]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#007FCD] font-semibold tracking-wider uppercase text-sm mb-2 block">Our Pillars</span>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F1E36]">
                Core Values of Dermatologist Aura
              </h2>
              <p className="text-[#506075] text-sm sm:text-base mt-4">
                We are guided by clear medical ethics, uncompromised quality, and an unwavering commitment to our patients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white border border-[#B3D6E7]/30 rounded-3xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-2xl bg-[#007FCD]/10 flex items-center justify-center mb-6 border border-[#007FCD]/20">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#0F1E36] mb-3">{value.title}</h3>
                  <p className="text-[#506075] text-sm sm:text-base leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Milestones Grid banner */}
        <section className="py-12 sm:py-16 bg-[#0F1E36] text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="space-y-2 border-r border-white/10 last:border-0"
                >
                  <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#007FCD]">{milestone.year}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">{milestone.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialist Profile Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Doctor Image Panel */}
              <div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative flex justify-center"
              >
                <div className="relative rounded-3xl overflow-hidden border-2 border-[#B3D6E7]/30 p-2 bg-gradient-to-br from-[#EBF5FA] to-white max-w-md w-full shadow-lg">
                  <img
                    src="/images/doctor-expert-image.png"
                    alt="Dr. Shabeeh Haidar"
                    className="rounded-2xl w-full h-[400px] object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F1E36]/80 to-transparent p-6 rounded-b-2xl">
                    <h3 className="text-white font-heading font-bold text-2xl">Dr. Shabeeh Haidar</h3>
                    <p className="text-primary-light text-sm mt-1">Lead Medical Practitioner & Cosmetologist</p>
                  </div>
                </div>
              </div>

              {/* Doctor Details */}
              <div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <span className="text-[#007FCD] font-semibold tracking-wider uppercase text-sm block">Expertise You Can Trust</span>
                <h2 className="text-3xl sm:text-4xl font-heading font-bold text-[#0F1E36]">
                  Meet Dr. Shabeeh Haidar
                </h2>
                <p className="text-[#506075] text-sm sm:text-base leading-relaxed">
                  Dr. Shabeeh Haidar brings years of clinical dedication and a stellar patient-first methodology. He specializes in a comprehensive blend of modern non-surgical cosmetological procedures and Unani therapies, delivering a completely unique, safe, and effective experience.
                </p>

                <div className="space-y-4">
                  <div className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#007FCD] shrink-0" />
                    <span className="text-[#0F1E36] font-medium text-sm sm:text-base">Specialist in Advanced Hair Loss & PRP Restorations</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#007FCD] shrink-0" />
                    <span className="text-[#0F1E36] font-medium text-sm sm:text-base">Acne Scars, Laser Resurfacing, & Anti-Aging Treatments</span>
                  </div>
                  <div className="flex gap-3 items-center">
                    <CheckCircle2 className="w-5 h-5 text-[#007FCD] shrink-0" />
                    <span className="text-[#0F1E36] font-medium text-sm sm:text-base">Holistic Skin Care Diagnostics & Individual Consultation Schemes</span>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="/#appointment"
                    className="inline-flex bg-[#007FCD] hover:bg-[#0066A3] text-white font-bold px-8 py-3.5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,127,205,0.25)] text-base"
                  >
                    Schedule A Session
                  </a>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
