import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden  bg-[#0B1220] text-gray-300 pt-20 pb-8 mt-20">

      {/* Background Glow — analogous blue + split-complementary pink */}
      <div className="absolute top-0 right-0 h-80 w-80 bg-[#007FCD]/8 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 h-80 w-80 bg-[#D4AF37]/6 blur-[120px] rounded-full pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand Section — spans 2 cols */}
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

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {[
                {
                  label: "Facebook",
                  href: "https://www.facebook.com/shabeeh.haider.71/",
                  hoverBorder: "hover:border-[#007FCD]/50",
                  hoverBg: "hover:bg-[#007FCD]/15",
                  hoverText: "group-hover:text-[#007FCD]",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/dermatologist_aura",
                  hoverBorder: "hover:border-[#E1306C]/50",
                  hoverBg: "hover:bg-[#E1306C]/15",
                  hoverText: "group-hover:text-[#E1306C]",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z" clipRule="evenodd" />
                    </svg>
                  ),
                },
                {
                  label: "WhatsApp",
                  href: "https://wa.me/919993377566",
                  hoverBorder: "hover:border-[#25D366]/50",
                  hoverBg: "hover:bg-[#25D366]/15",
                  hoverText: "group-hover:text-[#25D366]",
                  icon: (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
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
                  className={`group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-300 hover:scale-105 ${item.hoverBorder} ${item.hoverBg}`}
                >
                  <span className={`text-gray-400 transition-colors duration-300 ${item.hoverText}`}>
                    {item.icon}
                  </span>
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
                  className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-[#007FCD]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#007FCD] transition-all group-hover:w-3" />
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contactUs"
                  className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-[#007FCD]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#007FCD] transition-all group-hover:w-3" />
                  Contact Us
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-[#007FCD]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#007FCD] transition-all group-hover:w-3" />
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms-of-service"
                  className="group flex items-center gap-3 text-gray-400 transition-colors hover:text-[#007FCD]"
                >
                  <span className="h-2 w-2 rounded-full bg-[#007FCD] transition-all group-hover:w-3" />
                  Terms of Service
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
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-[#007FCD]" />
                <p className="text-sm leading-relaxed text-gray-400">
                  23, Street Number 1, Bagh Umrao Dulha, Bhopal,
                  Madhya Pradesh 462010, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-[#007FCD]" />
                <a href="tel:+919993377566" className="text-sm text-gray-400 transition-colors hover:text-white">
                  +91 99933 77566
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-[#007FCD]" />
                <a href="mailto:contact@dermatologist-aura.com" className="text-sm text-gray-400 transition-colors hover:text-white">
                  contact@dermatologist-aura.com
                </a>
              </div>

              {/* Hours Card */}
              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 h-5 w-5 shrink-0 text-[#D4AF37]" />

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
            <Link
              href="/privacy-policy"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms-of-service"
              className="text-gray-400 transition-colors hover:text-white"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}