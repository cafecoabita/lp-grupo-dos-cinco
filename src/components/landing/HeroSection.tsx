import { ArrowRight } from "lucide-react";

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

      {/* Preço clicável → seção de planos */}
      <a
        href="#planos"
        onClick={(e) => {
          e.preventDefault();
          document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
        }}
        className="inline-flex items-center gap-2 bg-white text-gray-900 text-sm font-bold px-5 py-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
      >
        <ArrowRight className="h-4 w-4" />
        A partir de R$ 1.750/mês
      </a>
    </div>
  </section>
);

export default HeroSection;
