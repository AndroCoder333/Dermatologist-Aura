import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden rounded-t-[32px] bg-[#0B1220] text-gray-300 pt-20 pb-8 mt-20">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 h-80 w-80 bg-primary/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 h-80 w-80 bg-pink-500/10 blur-[120px] rounded-full" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                Dermatologist{" "}
                <span className="text-primary">Aura</span>
              </span>
            </Link>

            <p className="max-w-xl text-gray-400 leading-relaxed mb-8">
              Premium dermatologist-led clinic specializing in advanced skin,
              hair, and anti-aging treatments. Experience luxury care with
              personalized consultations and visible results.
            </p>

            {/* Socials */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: "Facebook",
                  href: "#",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/dermatologist_aura",
                  icon: (
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:bg-primary hover:text-white hover:scale-105"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Quick Links
            </h4>

            <ul className="space-y-4">
              <li>
                <Link
                  href="/aboutUs"
                  className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-primary transition-all group-hover:w-3" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contactUs"
                  className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-primary"
                >
                  <span className="h-2 w-2 rounded-full bg-primary transition-all group-hover:w-3" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="mb-6 text-lg font-semibold text-white">
              Contact Info
            </h4>

            <div className="space-y-5">
              
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-gray-400">
                  23, Street Number 1, Bagh Umrao Dulha, Bhopal,
                  Madhya Pradesh 462010, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-gray-400">
                  +91 99933 77566
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-gray-400">
                  contact@dermatologist-aura.com
                </p>
              </div>

              {/* Hours Card */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-primary" />

                  <div>
                    <h5 className="font-semibold text-white mb-1">
                      Opening Hours
                    </h5>

                    <p className="text-sm text-gray-400">
                      Mon - Sat: 10:00 AM - 8:00 PM
                    </p>

                    <p className="text-sm text-gray-400">
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 pt-6 flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Dermatologist Aura. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}