"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      title: "5 Essential Skincare Tips for Glowing Skin in Summer",
      category: "Skin Care",
      date: "May 15, 2026",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Understanding Hair Loss: Causes and Effective Treatments",
      category: "Hair Care",
      date: "May 10, 2026",
      image: "https://images.unsplash.com/photo-1631214500115-598fc2cb8d2d?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "The Ultimate Guide to PRP Therapy for Hair Regrowth",
      category: "Hair Transplant",
      date: "May 5, 2026",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section className="py-24 bg-soft-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-primary font-semibold tracking-wider uppercase text-sm mb-2 block">Latest Insights</span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
              News & <span className="text-gradient">Articles</span>
            </h2>
            <p className="text-text-muted text-lg">
              Stay updated with the latest trends, tips, and expert advice in dermatology and aesthetic treatments.
            </p>
          </div>
          
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            href="#blog"
            className="flex items-center gap-2 font-semibold text-primary hover:text-primary-dark transition-colors"
          >
            View All Articles <ArrowRight className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, idx) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden premium-shadow group cursor-pointer"
            >
              <div className="relative h-60 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary uppercase tracking-wide">
                  {blog.category}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-2 text-text-muted text-sm mb-4">
                  <Calendar className="w-4 h-4" /> {blog.date}
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4 group-hover:text-primary transition-colors line-clamp-2">
                  {blog.title}
                </h3>
                <div className="flex items-center text-sm font-semibold text-primary group-hover:text-secondary transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
