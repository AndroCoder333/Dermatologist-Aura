"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "Before & After", href: "/#before-after" },
    { name: "Our Doctors", href: "/#doctors" },
    { name: "Reviews", href: "/#testimonials" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
          
            <span className="font-heading font-bold text-xl tracking-tight text-foreground">
              Dermatologist <span className="text-primary">Aura</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="/#appointment"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors flex items-center gap-2 shadow-lg shadow-primary/30"
            >
              <PhoneCall className="w-4 h-4" />
              Book Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-dark mt-3 py-4 px-4 flex flex-col gap-4 absolute w-full"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-white hover:text-primary-light font-medium py-2 border-b border-white/10"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="/#appointment"
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white px-5 py-3 rounded-full text-center font-medium mt-2 flex items-center justify-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            Book Consultation
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
