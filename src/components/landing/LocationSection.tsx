import { motion } from "framer-motion";
import { MapPin, TrainFront, Building2, Clock, Navigation } from "lucide-react";
import { fadeUp, stagger } from "./AnimatedSection";

const LocationSection = () => (
  <motion.section
    className="py-20 md:py-28 px-6 bg-secondary/50"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={stagger}
  >
    <div className="max-w-6xl mx-auto">
      {/* Título */}
      <div className="text-center mb-12">
        <motion.h2
          variants={fadeUp}
          className="font-display text-3xl md:text-4xl font-bold mb-4"
        >
          Localização Privilegiada
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-body text-muted-foreground"
        >
          No coração do Eldorado, em Contagem/MG, com fácil acesso para você, sua equipe e seus clientes.
        </motion.p>
      </div>

      {/* Grid principal */}
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
        {/* 🔹 Coluna esquerda — informações */}
        <motion.div variants={fadeUp} className="space-y-6">
          
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-bold">Endereço</p>
              <p className="text-muted-foreground text-sm">
                Av. José Faria da Rocha, 5614 — 2º Pavimento, Eldorado, Contagem — MG, 32310-210
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-bold">Horário de funcionamento</p>
              <p className="text-muted-foreground text-sm">
                Segunda a sexta, de 7h00 às 19h00.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <TrainFront className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-bold">Mobilidade</p>
              <p className="text-muted-foreground text-sm">
                Próximo à Estação Eldorado (metrô).
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Building2 className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-bold">Conveniência</p>
              <p className="text-muted-foreground text-sm">
                Próximo à Receita Federal, restaurantes e serviços.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <Navigation className="w-6 h-6 text-primary shrink-0" />
            <div>
              <p className="font-bold">Acesso</p>
              <p className="text-muted-foreground text-sm">
                Fácil acesso e estacionamento na região.
              </p>
            </div>
          </div>

        </motion.div>

        {/* 🔹 Coluna direita — mapa */}
        <motion.div variants={fadeUp}>
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.9985990826536!2d-44.033499!3d-19.9408418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa695135d27476b%3A0xa0c86b60f702663b!2sCaf%C3%A9%20Coabita!5e0!3m2!1spt-BR!2sbr!4v1710000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Café Coabita Coworking"
            />
          </div>
        </motion.div>

      </div>
    </div>
  </motion.section>
);

export default LocationSection;