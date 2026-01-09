import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Video, Globe, Smartphone, BarChart3 } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const features = [
    {
      title: "Website Design & Development",
      description: "Custom-built, fast, and SEO-optimized websites that convert visitors into reservations.",
      points: ["Mobile responsive", "Menu management system", "Reservation integration", "Local SEO setup"],
      icon: Globe
    },
    {
      title: "Content Creation",
      description: "We visit your location monthly to capture high-quality photo and video content.",
      points: ["4 Professional Reels/month", "20+ High-res photos", "Story highlights", "Editing & color grading"],
      icon: Video
    },
    {
      title: "Social Media Management",
      description: "Complete handling of your Instagram and Facebook presence.",
      points: ["Caption writing", "Hashtag strategy", "Community engagement", "Posting schedule"],
      icon: Smartphone
    },
    {
      title: "Analytics & Growth",
      description: "Data-driven insights to improve your reach and customer retention.",
      points: ["Monthly reports", "Competitor analysis", "Growth strategy calls", "Ad campaign management"],
      icon: BarChart3
    }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      <section className="pt-32 pb-20 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-display font-bold text-primary mb-6"
          >
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive digital partner for modern hospitality brands.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 border border-border/50 shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 text-accent">
                  <feature.icon className="h-7 w-7" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground mb-8 text-lg">{feature.description}</p>
                <ul className="space-y-3">
                  {feature.points.map((point, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                      <span className="font-medium text-foreground/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/5 rounded-3xl p-8 md:p-16 border border-white/10 backdrop-blur-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">Simple, Transparent Pricing</h2>
                <p className="text-lg text-primary-foreground/80 mb-8">
                  No hidden fees. No long-term contracts. Just results.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center font-bold">1</div>
                    <span className="text-lg font-medium">Initial Website Setup</span>
                  </div>
                  <div className="h-8 w-0.5 bg-white/20 ml-5" />
                  <div className="flex items-center space-x-4">
                    <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center font-bold">2</div>
                    <span className="text-lg font-medium">Monthly Content Subscription</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 text-foreground">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold">Growth Package</h3>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-bold">Popular</span>
                </div>
                <div className="flex items-baseline mb-6">
                  <span className="text-4xl font-bold font-display"></span>
                  <span className="text-muted-foreground ml-2">/ month</span>
                </div>
                <p className="text-muted-foreground mb-8 pb-8 border-b border-border">
                  Everything you need to dominate your local market. Website + 4 Reels + Management.
                </p>
                <Link href="/contact">
                  <button className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="h-5 w-5" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
