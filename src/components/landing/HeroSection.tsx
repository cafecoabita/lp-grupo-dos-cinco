// src/components/landing/HeroSection.tsx
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./AnimatedSection";

const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-40px)] flex items-start justify-center overflow-hidden pt-32">
    <img
      src="/images/sala-grupo-dos-cinco-03.png"
      alt="Sala Grupo dos Cinco"
      className="absolute inset-0 w-full h-full object-cover"
    />

    <div className="absolute inset-0 bg-black/45" />

    <motion.div
      className="relative z-10 text-center px-6 max-w-4xl"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.p
        variants={fadeUp}
        className="text-white/80 font-body text-sm uppercase tracking-[0.3em] mb-40"
      >
        Café Coabita Coworking
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-display text-5xl md:text-7xl text-white font-bold mb-40"
      >
        Grupo dos Cinco
      </motion.h1>

      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
      >
        <a
          href="https://wa.me/553121158984/?text=Olá!+Gostaria+de+agendar+uma+visita+para+sala+privativa+Grupos+dos+Cinco.+A+sala+ainda+está+disponível?+:-D"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-primary px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-gray-100 transition-all"
        >
          Agendar Visita
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;