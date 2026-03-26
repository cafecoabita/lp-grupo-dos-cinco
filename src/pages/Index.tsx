import { motion } from "framer-motion";
import { Check, MapPin, Clock, Phone, Wifi, Shield, Snowflake, Users, Armchair, Coffee, Zap, Building2, TrainFront, Car } from "lucide-react";
import heroImage from "@/assets/hero-sala.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const PromoBanner = () => (
  <div className="bg-primary text-primary-foreground py-3 text-center font-body text-sm tracking-wide">
    <span className="font-semibold text-promo">🔥 MÊS DO CONSUMIDOR</span>
    <span className="mx-2">—</span>
    <span>50% de desconto na entrada!</span>
  </div>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img
      src={heroImage}
      alt="Sala Grupo dos 5 - Coworking Café Coabita"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-primary/70" />
    <motion.div
      className="relative z-10 text-center px-6 max-w-3xl"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <motion.p variants={fadeUp} className="text-primary-foreground/70 font-body text-sm uppercase tracking-[0.25em] mb-4">
        Café Coabita Coworking
      </motion.p>
      <motion.h1 variants={fadeUp} className="font-display text-4xl md:text-6xl lg:text-7xl text-primary-foreground font-bold leading-tight mb-6">
        Sala Grupo dos 5
      </motion.h1>
      <motion.p variants={fadeUp} className="text-primary-foreground/80 font-body text-lg md:text-xl mb-4">
        Sala Comercial Mobiliada 19m² — Eldorado, Contagem
      </motion.p>
      <motion.p variants={fadeUp} className="text-primary-foreground/60 font-body text-base mb-8">
        Pronta para uso · Até 6 pessoas · 100% mobiliada e climatizada
      </motion.p>
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="https://wa.me/5531999999999?text=Olá! Gostaria de agendar uma visita na Sala Grupo dos 5."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary-foreground text-primary font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
        >
          Agende uma Visita
        </a>
        <a
          href="#plano"
          className="inline-flex items-center justify-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground/10 transition-colors"
        >
          Ver Plano Promocional
        </a>
      </motion.div>
    </motion.div>
  </section>
);

const Description = () => (
  <motion.section
    className="py-20 md:py-28 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={stagger}
  >
    <div className="max-w-3xl mx-auto text-center">
      <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
        Seu escritório privativo pronto para operar
      </motion.h2>
      <motion.p variants={fadeUp} className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
        Procurando um escritório privativo, confortável e com infraestrutura completa para sua empresa ou equipe?
        A Sala Grupo dos 5 é o espaço ideal: 19 m², mobiliada, climatizada e pronta para receber até 6 pessoas com total comodidade.
      </motion.p>
      <motion.div variants={fadeUp} className="bg-secondary p-6 rounded-lg font-body text-secondary-foreground text-base">
        <p className="font-semibold mb-2">Layout personalizado:</p>
        <p className="text-muted-foreground">
          2 mesas de trabalho para 2 pessoas cada + 1 mesa grande para reunião ou estação de trabalho para 2 pessoas.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

const PromoSection = () => (
  <motion.section
    id="plano"
    className="py-20 md:py-28 px-6 bg-primary text-primary-foreground"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={stagger}
  >
    <div className="max-w-3xl mx-auto text-center">
      <motion.div variants={fadeUp} className="inline-block bg-promo text-promo-foreground px-4 py-1.5 font-body text-xs uppercase tracking-widest font-semibold mb-6">
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

const incluso = [
  { icon: Armchair, text: "Sala privativa 100% mobiliada (mesas, cadeiras e mesa para café)" },
  { icon: Snowflake, text: "Ar-condicionado" },
  { icon: Shield, text: "Fechadura digital" },
  { icon: Zap, text: "Energia, água e IPTU" },
  { icon: Check, text: "Limpeza das áreas comuns" },
  { icon: Coffee, text: "Cozinha compartilhada com micro-ondas, fogão e geladeira" },
  { icon: Users, text: "Banheiros masculino e feminino com chuveiro" },
];

const diferenciais = [
  { icon: Zap, text: "Mesas com tomadas embutidas (caixa de tomadas)" },
  { icon: Wifi, text: "Internet ultrarrápida: cabeada (Algar) + redundância 2× Starlink" },
  { icon: Building2, text: "Ambiente corporativo, silencioso e profissional" },
  { icon: Check, text: "Estrutura pronta para receber sua operação imediatamente" },
  { icon: MapPin, text: "Localização estratégica no Eldorado — Contagem" },
  { icon: Building2, text: "Próximo à Receita Federal" },
  { icon: TrainFront, text: "Próximo à Estação Eldorado (metrô)" },
  { icon: Car, text: "Fácil acesso e estacionamento" },
];

const FeatureList = ({ title, items }: { title: string; items: typeof incluso }) => (
  <motion.section
    className="py-20 md:py-28 px-6"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={stagger}
  >
    <div className="max-w-3xl mx-auto">
      <motion.h2 variants={fadeUp} className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
        {title}
      </motion.h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="flex items-start gap-4 p-4 bg-secondary rounded-lg"
          >
            <item.icon className="w-5 h-5 text-foreground mt-0.5 shrink-0" />
            <p className="font-body text-secondary-foreground text-sm">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const CTA = () => (
  <motion.section
    className="py-20 md:py-28 px-6 bg-primary text-primary-foreground text-center"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
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
        href="https://wa.me/5531999999999?text=Olá! Gostaria de agendar uma visita na Sala Grupo dos 5."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-10 py-4 bg-primary-foreground text-primary font-body font-semibold text-sm uppercase tracking-wider hover:bg-primary-foreground/90 transition-colors"
      >
        Fale Conosco pelo WhatsApp
      </motion.a>
    </div>
  </motion.section>
);

const Footer = () => (
  <footer className="py-12 px-6 border-t border-border">
    <div className="max-w-3xl mx-auto text-center font-body text-sm text-muted-foreground space-y-3">
      <p className="flex items-center justify-center gap-2">
        <MapPin className="w-4 h-4" />
        Av. José Faria da Rocha, 5614 — 2º Pavimento — Eldorado, Contagem - MG, 32310-210
      </p>
      <p className="flex items-center justify-center gap-2">
        <Clock className="w-4 h-4" />
        Segunda a Sexta, 7h00 às 19h00
      </p>
      <p className="mt-6 text-muted-foreground/60">
        © {new Date().getFullYear()} Café Coabita Coworking. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5531999999999?text=Olá! Gostaria de saber mais sobre a Sala Grupo dos 5."
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Fale conosco pelo WhatsApp"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110"
  >
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  </a>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Hero />
      <Description />
      <PromoSection />
      <FeatureList title="O que está incluso" items={incluso} />
      <div className="border-t border-border" />
      <FeatureList title="Diferenciais que fazem a diferença" items={diferenciais} />
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
