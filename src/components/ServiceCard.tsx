import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";

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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-cyan-800 hover:bg-cyan-900 rounded-2xl p-8 shadow-sm hover:shadow-xl hover:border-accent/20 transition-all duration-300 group"
    >
      <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors duration-300">
        <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl text-black font-extrabold mb-3">{title}</h3>
      <p className="text-muted-foreground  text-zinc-300  hover:text-white leading-relaxed">
        {description}
      </p>
    </motion.div>
  );
}
