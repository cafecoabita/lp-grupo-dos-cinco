// src/components/landing/ReviewsSection.tsx
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { fadeUp, stagger } from "./AnimatedSection";

const reviews = [
  { name: "Carlos Andrade", role: "Advogado", text: "Ambiente extremamente profissional e silencioso. A localização no Eldorado facilita muito o dia a dia." },
  { name: "Mariana Silva", role: "Designer", text: "A internet é impecável, nunca tive quedas. O café e a estrutura da cozinha são excelentes diferenciais." },
  { name: "Roberto Dias", role: "Empresário", text: "Melhor custo-benefício da região. As salas são modernas e transmitem muita credibilidade para os clientes." },
];

const ReviewsSection = () => (
  <motion.section
    className="py-20 md:py-28 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={stagger}
  >
    <div className="max-w-6xl mx-auto">
      <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
        O que dizem sobre o Coabita
      </motion.h2>
      <div className="grid md:grid-cols-3 gap-8">
        {reviews.map((rev, i) => (
          <motion.div key={i} variants={fadeUp} className="p-8 bg-background border border-border rounded-2xl shadow-sm relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />)}
            </div>
            <p className="font-body text-muted-foreground mb-6 italic">"{rev.text}"</p>
            <div>
              <p className="font-bold text-foreground">{rev.name}</p>
              <p className="text-xs text-primary uppercase tracking-widest">{rev.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ReviewsSection;
