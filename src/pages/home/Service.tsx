"use client";

import React, { useRef } from "react";
import { Globe, Instagram, TrendingUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ServiceCard } from "../../components/ServiceCard";
import TextAni from "../../components/TextAni";

interface ServiceCardData {
  icon: typeof Globe;
  title: string;
  description: string;
  alignment: "left" | "right";
}

const Service = () => {
  const serviceCards: ServiceCardData[] = [
    {
      icon: Globe,
      title: "Custom Website",
      description:
        "A stunning, mobile-optimized website that showcases your menu, location, and atmosphere perfectly.",
      alignment: "left",
    },
    {
      icon: Instagram,
      title: "4 Reels Per Month",
      description:
        "High-quality, engaging video content filmed on-site to keep your social media buzzing and growing.",
      alignment: "right",
    },
    {
      icon: TrendingUp,
      title: "Growth Strategy",
      description:
        "Monthly analytics reports and strategy sessions to ensure we're reaching your target customers.",
      alignment: "left",
    },
  ];

  return (
    <section
      data-scroll
      data-scroll-speed="0.05"
      data-scroll-section
      className="py-32 bg-black overflow-hidden"
    >
      {/* ================= WRAPPER ================= */}
      <div className="max-w-7xl px-8 py-20 rounded-2xl mx-auto">
        {/* ================= HEADER ================= */}
        <div className="grid grid-cols-12 gap-6 mb-40 items-start">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-6 px-6 overflow-hidden">
            <div
              data-scroll
              data-scroll-speed="-0.2"
              data-scroll-opacity
              className="py-12"
            >
              <TextAni blockColor="#ddd">
                <h2 className="text-6xl font-display text-zinc-200 font-bold mb-10">
                  Everything you need to grow
                </h2>
              </TextAni>
              <TextAni blockColor="#ddd">
                <p className="text-xl text-zinc-400">
                  A simple, powerful monthly package designed specifically for
                  the hospitality industry.
                </p>
              </TextAni>
            </div>
          </div>

          {/* RIGHT – IMAGE */}
          <div
            data-scroll
            data-scroll-speed="0.3"
            className="hidden lg:block lg:col-span-6"
          >
            <div className="sticky top-32">
              <div
                data-scroll
                data-scroll-speed="-0.25"
                data-scroll-opacity
                className="relative w-full h-[70vh] rounded-2xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                  alt="Agency workspace"
                  className="w-full h-full object-cover scale-110"
                />
                <div className="absolute inset-0 bg-black/20" />
              </div>
            </div>
          </div>
        </div>

        {/* ================= SERVICE CARDS ================= */}
        {serviceCards.map((card, index) => {
          const cardRef = useRef<HTMLDivElement>(null);

          // 🔥 Scroll progress for each card
          const { scrollYProgress } = useScroll({
            target: cardRef,
            offset: ["start 100%", "start 5%"],
          });

          // 🔥 Scroll-based transforms (WORK BOTH DIRECTIONS)
          const opacity = useTransform(scrollYProgress, [0.75, 1], [0.85, 1]);
          const y = useTransform(scrollYProgress, [0, 1], [60, 0]);
          const x = useTransform(
            scrollYProgress,
            [0, 1],
            card.alignment === "left" ? [-200, 0] : [200, 0]
          );
          const scale = useTransform(scrollYProgress, [0, 1], [0.65, 1]);

          return (
            <div key={index} ref={cardRef} className="grid grid-cols-12 py-24">
              <motion.div
                style={{ opacity, x, y, scale }}
                className={`col-span-12 md:col-span-6 ${
                  card.alignment === "right" ? "md:col-start-7" : ""
                }`}
              >
                <ServiceCard
                  icon={card.icon}
                  title={card.title}
                  description={card.description}
                  alignment={card.alignment}
                />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Service;
