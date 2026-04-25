import { Armchair, Snowflake, Shield, Zap, Check, Coffee, Users, Wifi, MapPin, Building2, TrainFront } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const incluso = [
  { icon: Armchair, text: "Sala privativa 100% mobiliada (Mesas, cadeiras e mesinha de café)" },
  { icon: Snowflake, text: "Ar-condicionado" },
  { icon: Shield, text: "Fechadura digital" },
  { icon: Zap, text: "Energia, água e IPTU inclusos" },
  { icon: Check, text: "Limpeza das áreas comuns" },
  { icon: Coffee, text: "Cozinha compartilhada completa (Microondas, geladeira e fogão)" },
  { icon: Users, text: "Banheiros com chuveiro" },
];

const diferenciais = [
  { icon: Wifi, text: "Internet: 3 opções (1 Fibra + 2 Starlink)" },
  { icon: Building2, text: "Ambiente corporativo e silencioso" },
  { icon: MapPin, text: "Localização estratégica no Eldorado" },
  { icon: TrainFront, text: "Próximo à Estação Eldorado (metrô)" },
];

const IdealSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-secondary">
    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
      <div>
        <h2 className="font-display text-3xl font-bold mb-8 text-black">O que está incluso</h2>
        <div className="space-y-4">
          {incluso.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 p-3 border border-border bg-white rounded-md hover:bg-black hover:-translate-y-1 transition-all cursor-pointer"
            >
              <item.icon className="w-5 h-5 text-primary group-hover:text-white" />
              <span className="text-sm font-body text-black group-hover:text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="font-display text-3xl font-bold mb-8 text-black">Diferenciais</h2>
        <div className="space-y-4">
          {diferenciais.map((item, i) => (
            <div
              key={i}
              className="group flex items-center gap-3 p-3 border border-border bg-white rounded-md hover:bg-black hover:-translate-y-1 transition-all cursor-pointer"
            >
              <item.icon className="w-5 h-5 text-primary group-hover:text-white" />
              <span className="text-sm font-body text-black group-hover:text-white">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AnimatedSection>
);

export default IdealSection;
