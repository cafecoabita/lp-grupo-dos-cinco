import AnimatedSection from "./00AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Car } from "lucide-react";

interface PromoProps {
  isBanner: boolean;
}

const PromoSection = ({ isBanner }: PromoProps) => {
  if (isBanner) {
    return (
      <div className="bg-primary text-primary-foreground py-3 text-center font-body text-sm tracking-wide">
        <span className="font-semibold text-yellow-400">🔥 MÊS DO CONSUMIDOR</span>
        <span className="mx-2">—</span>
        <span>50% de desconto na entrada!</span>
      </div>
    );
  }

  return (
    <motion.section
      id="plano"
      className="py-20 md:py-28 px-6 bg-primary text-primary-foreground"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={stagger}
    >
      <div className="max-w-3xl mx-auto text-center">
        <motion.div variants={fadeUp} className="inline-block bg-yellow-500 text-black px-4 py-1.5 font-body text-xs uppercase tracking-widest font-semibold mb-6">
          Mês do Consumidor — 50% OFF na Entrada
        </motion.div>
        <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-5xl font-bold mb-10">
          Plano Anual Promocional
        </motion.h2>
        <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 text-left mb-10">
          <div className="border border-primary-foreground/20 p-8">
            <p className="font-body text-sm uppercase tracking-wider text-primary-foreground/50 mb-2">Primeiro mês</p>
            <p className="font-display text-4xl font-bold">R$ 925</p>
            <p className="font-body text-primary-foreground/60 text-sm mt-1">50% de desconto aplicado</p>
          </div>
          <div className="border border-primary-foreground/20 p-8">
            <p className="font-body text-sm uppercase tracking-wider text-primary-foreground/50 mb-2">Demais meses</p>
            <p className="font-display text-4xl font-bold">R$ 1.850<span className="text-lg font-body font-normal">/mês</span></p>
            <p className="font-body text-primary-foreground/60 text-sm mt-1">11 parcelas restantes</p>
          </div>
        </motion.div>
        <motion.div variants={fadeUp} className="border border-primary-foreground/20 p-6 inline-block">
          <p className="font-body text-sm">
            <Car className="inline w-4 h-4 mr-2" />
            Vaga de garagem: <span className="font-semibold">R$ 200,00/mês</span>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PromoSection;