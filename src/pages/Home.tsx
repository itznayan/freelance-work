// pages/index.tsx
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
import { useLocomotiveV5 } from "../lib/locomotiveV5";
import LocomotiveScroll from "locomotive-scroll";
import Hero from "./home/Hero";
import Service from "./home/Service";
import Demo from "./home/Demo";
import CTA from "./home/CTA";
import ServiceAni from "./page/ServiceAni";
import Curve from "../Animation/Curve";

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  useLocomotiveV5(scrollRef);
  return (
    <>
      <div
        ref={scrollRef}
        className="w-full h-full bg-zinc-900 overflow-hidden text-white "
      >
        <Hero />
        <Service />
        <Demo />
      </div>
    </>
  );
}
