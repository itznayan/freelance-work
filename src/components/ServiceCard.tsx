import { motion, useInView } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { useRef } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({
  title,
  description,
  icon: Icon,
  delay = 0,
}: ServiceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.1, 0.25, 1]
      }}
      style={{ 
        willChange: isInView ? "auto" : "transform, opacity"
      }}
      className="bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-2xl hover:border-accent/50 group"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
        <Icon className="h-6 w-6 text-accent group-hover:text-white transition-colors duration-300" />
      </div>

      {/* Title */}
      <h3 className="text-2xl text-white font-bold mb-3">{title}</h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
}
