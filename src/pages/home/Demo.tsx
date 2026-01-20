import React from "react";
import { useEffect, useRef } from "react";
import { ServiceCard } from "@/components/ServiceCard";
import {
  ArrowRight,
  Instagram,
  Globe,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { Link } from "wouter";
import { motion } from "framer-motion";

const Demo = () => {
  return (
    <div data-scroll data-scroll-speed="-0.05" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1600"
                alt="Restaurant website demo"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-3xl font-display text-zinc-100 font-bold mb-6">
              See what's possible
            </h3>
            <p className="text-lg text-muted-foreground text-zinc-300 mb-6">
              This is "Lumina Café" — a concept brand we built to showcase our
              design philosophy. Clean lines, appetizing imagery, and seamless
              reservations.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  ✓
                </div>
                <span className="font-medium text-zinc-400">
                  Mobile-first design
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  ✓
                </div>
                <span className="font-medium text-zinc-400">
                  Integrated reservation system
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  ✓
                </div>
                <span className="font-medium text-zinc-400">
                  SEO optimized for local search
                </span>
              </li>
            </ul>
            <button
              onClick={() =>
                window.open("https://ochhi-clone.netlify.app/", "_blank")
              }
              className="text-accent font-bold text-lg hover:underline decoration-2 underline-offset-4 flex items-center space-x-2"
            >
              <span>View Live Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
