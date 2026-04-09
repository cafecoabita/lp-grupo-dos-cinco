// src/components/landing/HeroSection.tsx
import { motion } from "framer-motion";
import { fadeUp, stagger } from "./AnimatedSection";

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => void;
  }
}

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Gostaria+de+agendar+uma+visita+para+sala+privativa+Grupos+dos+Cinco.+A+sala+ainda+está+disponível?+:-D";

const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden">
    <img
      src="/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-03.webp"
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
        className="text-white/80 font-body text-sm uppercase tracking-[0.3em] mb-5"
      >
        Café Coabita Coworking
      </motion.p>

      <motion.h1
        variants={fadeUp}
        className="font-display text-5xl md:text-7xl text-white font-bold mb-10"
      >
        Grupo dos Cinco
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => {
            if (typeof window.gtagSendEvent === 'function') {
              window.gtagSendEvent(WHATSAPP_LINK);
            }
          }}
          className="bg-white text-primary px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-gray-100 transition-all"
        >
          Agendar Visita
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
