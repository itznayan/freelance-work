import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
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
import StickyFooter from "../components/Footer/StickyFooter";

export default function Home() {
  return (
    <div className="h-screen w-full bg-zinc-800 font-body">
      <div>
        <Navigation />
      </div>
      {/* Hero Section */}
      <section
        data-scroll
        data-scroll-speed=""
        data-scroll-section
        className="pt-28 bg-zinc-900 isolate pb-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-12">
            {/* LEFT SIDE CONTENT */}
            <div className="col-span-12 lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <p className="text-sm uppercase tracking-widest text-zinc-300 mb-6">
                  Software & Web Design Agency
                </p>

                <h1 className="font-display text-5xl text-white md:text-6xl leading-tight mb-8">
                  We design digital experiences
                  <br />
                  that help brands grow.
                </h1>

                <p className="text-lg md:text-xl text-zinc-200 max-w-xl mb-12 leading-relaxed">
                  A modern software agency focused on building high-performing
                  websites, platforms and digital products for ambitious
                  businesses.
                </p>

                <div className="flex items-center gap-6">
                  <Link href="/contact">
                    <button className="px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:opacity-90 transition">
                      Start a Project
                    </button>
                  </Link>

                  <span className="text-sm text-zinc-300">
                    ★ 4.9 rating from 100+ clients
                  </span>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE (INTENTIONAL EMPTY SPACE) */}
            <div className="hidden lg:block lg:col-span-6" />
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      {/* Services Snapshot */}
      <section
        data-scroll
        data-scroll-speed=""
        data-scroll-section
        className="py-40 bg-cyan-950 isolate "
      >
        <div className="max-w-7xl mx-auto px-6 py-12 rounded-xl bg-black lg:px-12">
          {/* MAIN GRID */}
          <div className="grid grid-cols-12 gap-16 items-start">
            {/* LEFT COLUMN */}
            <div className="col-span-12 lg:col-span-6">
              {/* INTRO SECTION */}
              <div className="mb-32">
                <h2 className="text-6xl font-display text-zinc-200 font-bold mb-6">
                  Everything you need to grow
                </h2>

                <p className="text-xl text-zinc-400 max-w-md">
                  A simple, powerful monthly package designed specifically for
                  the hospitality industry.
                </p>
              </div>

              {/* SERVICES GRID */}
            </div>

            {/* RIGHT COLUMN – IMAGE */}
            <div className="hidden lg:block lg:col-span-6">
              <div className="sticky top-32">
                <div className="relative w-full h-[70vh] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80"
                    alt="Agency workspace"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-12 mt-24">
            {/* CARD 1 – LEFT */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <ServiceCard
                  icon={Globe}
                  title="Custom Website"
                  description="A stunning, mobile-optimized website that showcases your menu, location, and atmosphere perfectly."
                  delay={0}
                />
              </div>
            </div>

            {/* CARD 2 – RIGHT */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <ServiceCard
                  icon={Instagram}
                  title="4 Reels Per Month"
                  description="High-quality, engaging video content filmed on-site to keep your social media buzzing and growing."
                  delay={0.1}
                />
              </div>
            </div>

            {/* CARD 3 – LEFT */}
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-6">
                <ServiceCard
                  icon={TrendingUp}
                  title="Growth Strategy"
                  description="Monthly analytics reports and strategy sessions to ensure we're reaching your target customers."
                  delay={0.2}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Project */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* minimalist restaurant website design */}
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
                  <span className="font-medium  text-zinc-400">
                    Mobile-first design
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    ✓
                  </div>
                  <span className="font-medium  text-zinc-400">
                    Integrated reservation system
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="h-6 w-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                    ✓
                  </div>
                  <span className="font-medium  text-zinc-400">
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
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative ">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Ready to transform your brand?
          </h2>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            Book a free 15-minute discovery call. We'll discuss your goals and
            how we can help you fill more tables.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-accent text-white font-bold text-lg shadow-lg hover:bg-accent/90 transition-all duration-300 flex items-center justify-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Book a Free Call</span>
              </button>
            </Link>
            <Link href="/services">
              <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <StickyFooter />
    </div>
  );
}
