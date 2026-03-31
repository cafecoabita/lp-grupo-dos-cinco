// src/components/landing/IdealSection.tsx
import { motion } from "framer-motion";
import { Armchair, Snowflake, Shield, Zap, Check, Coffee, Users, Wifi, MapPin, Building2, TrainFront, Car } from "lucide-react";
import { fadeUp, stagger } from "./AnimatedSection";

const incluso = [
  { icon: Armchair, text: "Sala privativa 100% mobiliada" },
  { icon: Snowflake, text: "Ar-condicionado" },
  { icon: Shield, text: "Fechadura digital" },
  { icon: Zap, text: "Energia, água e IPTU inclusos" },
  { icon: Check, text: "Limpeza das áreas comuns" },
  { icon: Coffee, text: "Cozinha compartilhada completa" },
  { icon: Users, text: "Banheiros com chuveiro" },
];

const diferenciais = [
  { icon: Wifi, text: "Internet: Fibra + 2× Starlink (Redundância)" },
  { icon: Building2, text: "Ambiente corporativo e silencioso" },
  { icon: MapPin, text: "Localização estratégica no Eldorado" },
  { icon: TrainFront, text: "Próximo à Estação Eldorado (metrô)" },
];

const IdealSection = () => (
  <motion.section
    className="py-20 md:py-28 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={stagger}
  >
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold mb-8">O que está incluso</motion.h2>
        <div className="space-y-4">
          {incluso.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 p-3 bg-secondary rounded-md">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-body">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <motion.h2 variants={fadeUp} className="font-display text-3xl font-bold mb-8">Diferenciais</motion.h2>
        <div className="space-y-4">
          {diferenciais.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="flex items-center gap-3 p-3 border border-border rounded-md">
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-body">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default IdealSection;