"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import TextAni from "../../components/TextAni";
import TextReveal from "../../TextReveal";

const Hero = () => {
  return (
    <section
      data-scroll-section
      data-scroll
      data-scroll-speed="-0.35"
      className="w-full h-screen bg-zinc-900 flex flex-col justify-center"
    >
      {/* TEXT STRUCTURE */}
      <div className="px-20 mt-24">
        {" "}
        <div className="grid grid-cols-12">
          {" "}
          {/* LEFT SIDE */}{" "}
          <div className="col-span-12 lg:col-span-6">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {" "}
              <TextAni delay={0.75} blockColor="#7c3aed">
                <p className="text-sm uppercase tracking-widest text-zinc-300 mb-2">
                  {" "}
                  Software & Web Design Agency{" "}
                </p>{" "}
              </TextAni>
              <TextAni delay={0.75} blockColor="#7c3aed">
                <h1 className="font-display text-5xl text-white md:text-6xl leading-tight mb-6">
                  {" "}
                  We design digital experiences that help brands grow.{" "}
                </h1>
              </TextAni>
              <TextAni delay={0.75} blockColor="#7c3aed">
                <p className="text-lg md:text-xl mb-12 text-zinc-200 max-w-xl leading-relaxed text-start">
                  A modern software agency focused on building high-performing
                  websites, platforms and digital products for ambitious
                  businesses.
                </p>
              </TextAni>
              <div className="flex items-center gap-6">
                {" "}
                <Link href="/contact">
                  {" "}
                  <button className="px-8 py-4 rounded-xl bg-slate-400 text-black font-medium text-lg hover:opacity-90 hover:bg-slate-500 transition-all">
                    {" "}
                    Start a Project{" "}
                  </button>{" "}
                </Link>{" "}
                <span className="text-sm text-zinc-300">
                  {" "}
                  ★ 4.9 rating from 100+ clients{" "}
                </span>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
          {/* RIGHT SIDE EMPTY */}{" "}
          <div className="hidden lg:block lg:col-span-6" />{" "}
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
