// src/components/landing/CTASection.tsx
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./AnimatedSection";

const CTASection = () => (
  <motion.section
    className="py-20 md:py-28 px-6 bg-primary text-primary-foreground text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={stagger}
  >
    <div className="max-w-2xl mx-auto">
      <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-6">
        Agende uma visita
      </motion.h2>
      <motion.p variants={fadeUp} className="font-body text-primary-foreground/70 text-lg mb-10">
        Garanta seu espaço e trabalhe com mais conforto, privacidade e produtividade!
      </motion.p>
      <motion.a
        variants={fadeUp}
        href="https://wa.me/553121158984/?text=Olá!+Vi+no+site+a+sala+Grupo+dos+Cinco.+Ainda+está+disponível?"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary font-body font-semibold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors"
      >
        Fale Conosco pelo WhatsApp
      </motion.a>
    </div>
  </motion.section>
);

export default CTASection;