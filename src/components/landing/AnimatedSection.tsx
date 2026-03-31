import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// 1. Criamos as variantes que o HeroSection está tentando buscar
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

export const stagger: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string; // Adicionado ID caso precise para âncoras de menu
}

// 2. O componente principal
const AnimatedSection = ({ children, className = "", delay = 0, id }: AnimatedSectionProps) => (
  <motion.section
    id={id}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={fadeUp}
    transition={{ delay }}
    className={className}
  >
    {children}
  </motion.section>
);

export default AnimatedSection;