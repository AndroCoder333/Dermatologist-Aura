"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, CheckCircle, ArrowRight } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate sending time
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Auto reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
    }, 1800);
  };

  const handleWhatsAppInquiry = () => {
    const messageText = `Hi Dermatologist Aura, I would like to make an inquiry.\n\n*Name:* ${formData.name || "Visitor"}\n*Phone:* ${formData.phone || "Not provided"}\n*Subject:* ${formData.subject || "General Inquiry"}\n*Message:* ${formData.message || "Hi! I am interested in your clinical treatments."}`;
    const encodedText = encodeURIComponent(messageText);
    window.open(`https://wa.me/919993377566?text=${encodedText}`, "_blank");
  };

  return (
    <>
      <Navbar />
      <main className="pt-24 bg-gradient-to-b from-[#EBF5FA] via-[#F4FAFD] to-[#EBF5FA] overflow-hidden">
        
        {/* Contact Us Hero Header */}
        <section className="relative py-20 sm:py-24 overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#007FCD]/5 rounded-full blur-[120px] pointer-events-none" />
          
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <dev
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl mx-auto"
            >
              <span className="text-[#007FCD] font-semibold tracking-wider uppercase text-sm mb-3 block">
                Connect With Us
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[#0F1E36] mb-6 leading-tight">
                Get In <span className="text-gradient bg-gradient-to-r from-[#007FCD] to-[#0066A3]">Touch</span>
              </h1>
              <p className="text-[#506075] text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Have questions about our treatments, pricing, or procedures? Send us a message or schedule a personal session. Our expert clinic representatives are here to assist you.
              </p>
            </dev>
          </div>
        </section>

        {/* Contact details and form layout */}
        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
              
              {/* Left Side: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <dev
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-[#B3D6E7]/30 rounded-3xl p-6 sm:p-8 shadow-sm space-y-8"
                >
                  <h3 className="text-2xl font-bold text-[#0F1E36]">Clinic Information</h3>
                  
                  <div className="space-y-6">
                    {/* Phone block */}
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-[#007FCD]/10 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                        <Phone className="w-6 h-6 text-[#007FCD]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F1E36] uppercase tracking-wider mb-1">Call Us</h4>
                        <a href="tel:+919993377566" className="text-lg text-[#506075] hover:text-[#007FCD] transition-colors font-medium">
                          +91 99933 77566
                        </a>
                        <p className="text-xs text-[#506075] mt-1">Direct support & quick appointment scheduling</p>
                      </div>
                    </div>

                    {/* Email block */}
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-[#007FCD]/10 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                        <Mail className="w-6 h-6 text-[#007FCD]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F1E36] uppercase tracking-wider mb-1">Email Us</h4>
                        <a href="mailto:contact@dermatologist-aura.com" className="text-lg text-[#506075] hover:text-[#007FCD] transition-colors font-medium break-all">
                          contact@dermatologist-aura.com
                        </a>
                        <p className="text-xs text-[#506075] mt-1">For general inquiries, collaborations & suggestions</p>
                      </div>
                    </div>

                    {/* Location block */}
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-[#007FCD]/10 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                        <MapPin className="w-6 h-6 text-[#007FCD]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F1E36] uppercase tracking-wider mb-1">Visit Bhopal Clinic</h4>
                        <p className="text-[#506075] text-sm leading-relaxed font-medium">
                          23, Street Number 1, Bagh Umrao Dulha, Bhopal, Madhya Pradesh 462010, India
                        </p>
                      </div>
                    </div>

                    {/* Hours block */}
                    <div className="flex gap-4 items-start">
                      <div className="w-12 h-12 rounded-xl bg-[#007FCD]/10 flex items-center justify-center shrink-0 border border-[#007FCD]/20">
                        <Clock className="w-6 h-6 text-[#007FCD]" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-[#0F1E36] uppercase tracking-wider mb-1">Working Timings</h4>
                        <p className="text-[#506075] text-sm font-medium">Mon - Sat: 10:00 AM - 8:00 PM</p>
                        <p className="text-red-500 text-xs font-semibold mt-1">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </dev>

                {/* Direct WhatsApp Callout */}
                <dev
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gradient-to-r from-[#007FCD]/90 to-[#0066A3] rounded-3xl p-6 text-white shadow-md flex items-center justify-between gap-6"
                >
                  <div className="space-y-1">
                    <h4 className="font-bold text-lg">Need Instant Answers?</h4>
                    <p className="text-white/80 text-xs sm:text-sm">Start a live secure chat with our medical staff right now.</p>
                  </div>
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="bg-white text-[#007FCD] hover:bg-[#EBF5FA] font-bold px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-2 text-xs sm:text-sm shadow-md shrink-0"
                  >
                    Chat Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </dev>
              </div>

              {/* Right Side: Contact / Inquiry Form */}
              <div className="lg:col-span-7">
                <dev
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-white border border-[#B3D6E7]/30 rounded-3xl p-6 sm:p-10 shadow-sm relative overflow-hidden"
                >
                  {submitSuccess ? (
                    <dev
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12 px-4 space-y-6"
                    >
                      <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center mx-auto shadow-sm">
                        <CheckCircle className="w-10 h-10 text-emerald-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold text-[#0F1E36]">Thank You!</h3>
                        <p className="text-[#506075] text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
                          Your message has been compiled and recorded successfully. Our clinic team will reach out to you within 24 hours.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                        <button
                          onClick={() => setSubmitSuccess(false)}
                          className="bg-gray-100 hover:bg-gray-200 text-[#0F1E36] font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300"
                        >
                          Send Another Message
                        </button>
                        <button
                          onClick={handleWhatsAppInquiry}
                          className="bg-[#007FCD] hover:bg-[#0066A3] text-white font-bold px-6 py-3 rounded-xl text-sm transition-all duration-300 shadow-md flex items-center justify-center gap-2"
                        >
                          Open WhatsApp Inquiry
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </dev>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-5 h-5 text-[#007FCD]" />
                        <h3 className="text-2xl font-bold text-[#0F1E36]">Send a Message</h3>
                      </div>
                      
                      <p className="text-xs sm:text-sm text-[#506075] leading-relaxed">
                        Fill out the form below and we will review your consultation inquiry immediately. All data is kept strictly confidential.
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Name Input */}
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-xs sm:text-sm font-semibold text-[#0F1E36] uppercase tracking-wider block">Full Name</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="John Doe"
                            className="w-full bg-[#F4FAFD] border border-[#B3D6E7]/50 rounded-xl px-4 py-3 text-sm text-[#0F1E36] placeholder:text-[#506075]/40 focus:outline-none focus:border-[#007FCD] focus:bg-white transition-all duration-300"
                          />
                        </div>

                        {/* Email Input */}
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-xs sm:text-sm font-semibold text-[#0F1E36] uppercase tracking-wider block">Email Address</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="john@example.com"
                            className="w-full bg-[#F4FAFD] border border-[#B3D6E7]/50 rounded-xl px-4 py-3 text-sm text-[#0F1E36] placeholder:text-[#506075]/40 focus:outline-none focus:border-[#007FCD] focus:bg-white transition-all duration-300"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Phone Input */}
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-xs sm:text-sm font-semibold text-[#0F1E36] uppercase tracking-wider block">Phone Number</label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            required
                            placeholder="+91 98765 43210"
                            className="w-full bg-[#F4FAFD] border border-[#B3D6E7]/50 rounded-xl px-4 py-3 text-sm text-[#0F1E36] placeholder:text-[#506075]/40 focus:outline-none focus:border-[#007FCD] focus:bg-white transition-all duration-300"
                          />
                        </div>

                        {/* Subject Input */}
                        <div className="space-y-2">
                          <label htmlFor="subject" className="text-xs sm:text-sm font-semibold text-[#0F1E36] uppercase tracking-wider block">Subject</label>
                          <input
                            type="text"
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Acne Scars, Hair Fall PRP, etc."
                            className="w-full bg-[#F4FAFD] border border-[#B3D6E7]/50 rounded-xl px-4 py-3 text-sm text-[#0F1E36] placeholder:text-[#506075]/40 focus:outline-none focus:border-[#007FCD] focus:bg-white transition-all duration-300"
                          />
                        </div>
                      </div>

                      {/* Message Input */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-xs sm:text-sm font-semibold text-[#0F1E36] uppercase tracking-wider block">Message Details</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          placeholder="Describe your skin or hair symptoms, treatment interest, or specific questions here..."
                          className="w-full bg-[#F4FAFD] border border-[#B3D6E7]/50 rounded-xl px-4 py-3 text-sm text-[#0F1E36] placeholder:text-[#506075]/40 focus:outline-none focus:border-[#007FCD] focus:bg-white transition-all duration-300 resize-none"
                        />
                      </div>

                      {/* Submit Actions */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-[#007FCD] hover:bg-[#0066A3] text-white font-bold py-3.5 rounded-xl sm:rounded-2xl transition-all duration-300 shadow-[0_4px_20px_rgba(0,127,205,0.25)] flex items-center justify-center gap-2 text-sm sm:text-base disabled:opacity-75 disabled:cursor-not-allowed"
                        >
                          {isSubmitting ? (
                            <>Sending Message...</>
                          ) : (
                            <>
                              Send Inquiry
                              <Send className="w-4 h-4 ml-1" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </dev>
              </div>

            </div>
          </div>
        </section>

        {/* Embedded Bhopal Interactive Map Section */}
        <MapSection />

      </main>
      <Footer />
    </>
  );
}
