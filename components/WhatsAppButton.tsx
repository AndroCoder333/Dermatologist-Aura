"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919993377566"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-16 h-16 bg-[#25D366] text-white rounded-full premium-shadow group"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {/* Pulse Animation Rings */}
      <span className="absolute w-full h-full rounded-full bg-[#25D366] opacity-75 animate-ping" style={{ animationDuration: '2s' }}></span>
      
      {/* Icon */}
      <MessageCircle className="w-8 h-8 relative z-10" />

      {/* Tooltip */}
      <span className="absolute right-20 bg-white text-gray-800 text-sm font-medium py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 premium-shadow whitespace-nowrap pointer-events-none">
        Chat with our Expert
      </span>
    </motion.a>
  );
}
