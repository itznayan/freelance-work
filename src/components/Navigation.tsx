"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "wouter";
import { useState } from "react";
import Index from "./navbar/Index";

export function Navigation() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();

    if (latest > previous && latest > 300) {
      // scrolling down
      setHidden(true);
    } else {
      // scrolling up
      setHidden(false);
    }
  });

  return (
    <motion.nav
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-0 z-50 w-full h-20 flex justify-center bg-zinc-800/80 px-12 backdrop-blur-md"
    >
      <div className="flex w-full items-center justify-between max-w-7xl">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2 group">
          <img
            src="/images/logo.png"
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-105"
            alt="Logo"
          />
          <span className="font-display text-3xl font-bold tracking-tight text-white">
            Spritz
          </span>
        </Link>

        {/* MENU */}
        <Index />
      </div>
    </motion.nav>
  );
}
