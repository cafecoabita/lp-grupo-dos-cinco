import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const photos = [
  {
    src: "/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-03.webp",
    alt: "Layout da Sala Grupo dos Cinco",
    title: "Vista geral do ambiente",
  },
  {
    src: "/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-04.webp",
    alt: "Vista interna da Sala Grupo dos Cinco",
    title: "Ambiente climatizado e mobiliado",
  },
  {
    src: "/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-05.webp",
    alt: "Estrutura da Sala Grupo dos Cinco",
    title: "Mesa de reunião e estações de trabalho",
  },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);
  const prev = useCallback(() => setSelectedIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length)), []);
  const next = useCallback(() => setSelectedIndex((i) => (i === null ? null : (i + 1) % photos.length)), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedIndex, close, prev, next]);

  const selected = selectedIndex !== null ? photos[selectedIndex] : null;

  return (
    <>
      <AnimatedSection className="py-20 px-6 bg-[#e9e9e9]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-5">
            Galeria de Fotos
          </h2>
          <p className="text-center text-gray-700 text-base md:text-lg mb-1 max-w-3xl mx-auto font-medium">
            Conheça a estrutura da sala por diferentes ângulos e detalhes do ambiente.
          </p>
          <p className="text-center text-gray-500 text-[14px] mb-10 max-w-4xl mx-auto leading-relaxed">
            Imagens ilustrativas de alta qualidade que demonstram{" "}
            <strong>possibilidades de layout, ambientação e uso do espaço</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <button
              type="button"
              onClick={() => setSelectedIndex(0)}
              className="group relative overflow-hidden rounded-[22px] shadow-sm md:col-span-2 hover:-translate-y-1 transition-transform duration-300"
            >
              <img
                src={photos[0].src}
                alt={photos[0].alt}
                className="w-full h-[320px] md:h-[460px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
                <p className="text-white text-sm md:text-[15px] font-semibold text-center leading-snug">
                  {photos[0].title}
                </p>
              </div>
            </button>

            <div className="grid grid-cols-1 gap-5">
              {photos.slice(1).map((photo, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setSelectedIndex(index + 1)}
                  className="group relative overflow-hidden rounded-[22px] shadow-sm hover:-translate-y-1 transition-transform duration-300"
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-[220px] md:h-[218px] object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute inset-x-0 bottom-0 px-4 py-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent">
                    <p className="text-white text-sm md:text-[15px] font-semibold text-center leading-snug">
                      {photo.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <p className="text-justify text-gray-500 text-[14px] mt-8 max-w-6xl mx-auto leading-relaxed">
            🚨 <strong>Atenção:</strong> o mobiliário apresentado nas imagens não fazem parte da decoração do espaço.
            Ele sendo utilizado como referência para o potencial de organização, iluminação e identidade que a sala pode alcançar.
          </p>
        </div>
      </AnimatedSection>

      {selected && (
        <div
          className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            className="absolute top-5 right-5 md:top-8 md:right-8 text-white/80 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 transition-all"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <img
            src={selected.src}
            alt={selected.alt}
            className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 transition-all"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {photos.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => { e.stopPropagation(); setSelectedIndex(i); }}
                className={`w-2 h-2 rounded-full transition-all ${i === selectedIndex ? "bg-white scale-125" : "bg-white/40 hover:bg-white/70"}`}
              />
            ))}
          </div>

          <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center whitespace-nowrap">
            {selected.title}
          </p>
        </div>
      )}
    </>
  );
};

export default GallerySection;
