import { ArrowRight } from "lucide-react";

declare global {
  interface Window {
    gtagSendEvent?: (url: string, eventName?: string) => void;
  }
}

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Gostaria+de+agendar+uma+visita+para+sala+privativa+Grupos+dos+Cinco.+A+sala+ainda+está+disponível?+:-D";

const HeroSection = () => (
  <section className="relative min-h-[calc(100vh-40px)] flex items-center justify-center overflow-hidden">
    <img
      src="/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-03.webp"
      alt="Sala Grupo dos Cinco"
      className="absolute inset-0 w-full h-full object-cover"
      fetchPriority="high"
    />

    <div className="absolute inset-0 bg-black/45" />

    <div className="relative z-10 text-center px-6 max-w-4xl">
      <p className="text-white/80 text-sm uppercase tracking-[0.3em] mb-5">
        Café Coabita Coworking · Eldorado, Contagem/MG
      </p>

      <h1 className="text-5xl md:text-7xl text-white font-bold mb-6">
        Grupo dos Cinco
      </h1>

      <p className="text-base md:text-xl font-light text-white/80 mb-6 max-w-xl mx-auto">
        Sala comercial privativa mobiliada · 19m² · até 5 pessoas
      </p>

      {/* Preço + urgência */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
        <span className="bg-white text-gray-900 text-sm font-bold px-5 py-2 rounded-full shadow-md">
          A partir de R$ 1.750/mês
        </span>
        <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-5 py-2 rounded-full shadow-md">
          ⚡ 50% OFF na entrada
        </span>
      </div>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault();
          if (typeof window.gtagSendEvent === "function") {
            window.gtagSendEvent(WHATSAPP_LINK, "cta_hero_agendar_visita");
          } else {
            window.open(WHATSAPP_LINK, "_blank");
          }
        }}
        className="inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 font-bold uppercase text-sm tracking-widest hover:bg-gray-100 transition-all rounded-[15px]"
      >
        Agendar Visita
        <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  </section>
);

export default HeroSection;
