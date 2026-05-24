"use client";

import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

export default function MapSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F0FBFC] relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">
            Our Location
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Visit Our <span className="text-gradient">Clinic</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-stretch">
          
          {/* Map Embed Container */}
          <div className="lg:col-span-8 h-[400px] sm:h-[450px] rounded-3xl overflow-hidden premium-shadow border border-gray-100 relative">
            <iframe
              src="https://maps.google.com/maps?q=23,+Street+Number+1,+Bagh+Umrao+Dulha,+Bhopal,+Madhya+Pradesh+462010&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Dermatologist Aura Map Location"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Contact Details Card */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl bg-white/80 border border-gray-100 shadow-sm backdrop-blur-sm relative overflow-hidden">
            {/* Background blur aura */}
            <div className="absolute -top-10 -right-10 w-32 h-32 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
            
            <div className="space-y-6 relative z-10">
              <h3 className="text-2xl font-heading font-bold text-foreground mb-6">
                Clinic Details
              </h3>

              {/* Address */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wider">Address</h4>
                  <p className="text-text-muted text-sm leading-relaxed">
                    23, Street Number 1, Bagh Umrao Dulha, Bhopal, Madhya Pradesh 462010, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wider">Phone</h4>
                  <p className="text-text-muted text-sm">
                    +91 99933 77566
                  </p>
                </div>
              </div>

              {/* Timings */}
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 border border-primary/10">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1 text-sm uppercase tracking-wider">Hours</h4>
                  <p className="text-text-muted text-sm">
                    Mon - Sat: 10:00 AM - 8:00 PM
                  </p>
                  <p className="text-red-500 text-xs mt-0.5">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Direct share link button */}
            <a
              href="https://maps.app.goo.gl/EzyMzy2EoMhf3jsH8"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full group bg-primary hover:bg-primary-dark text-white font-semibold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 transform hover:scale-[1.02] shadow-md shadow-primary/10 text-sm md:text-base relative z-10 text-center"
            >
              Get Directions
              <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[-1px] group-hover:translate-x-[1px]" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
