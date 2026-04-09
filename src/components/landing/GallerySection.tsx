import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { fadeUp, stagger } from "./AnimatedSection";

const photos = [
  {
    src: "/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-03.webp",
    alt: "Layout da Sala Grupo dos Cinco",
    title: "Vista geral do ambiente",
    size: "large",
  },
  {
    src: "/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-04.webp",
    alt: "Vista interna da Sala Grupo dos Cinco",
    title: "Ambiente climatizado e mobiliado",
    size: "small",
  },
  {
    src: "/lp-grupo-dos-cinco/images/sala-grupo-dos-cinco-05.webp",
    alt: "Estrutura da Sala Grupo dos Cinco",
    title: "Mesa de reunião e estações de trabalho",
    size: "small",
  },
];

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const close = useCallback(() => setSelectedIndex(null), []);

  const prev = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  }, []);

  const next = useCallback(() => {
    setSelectedIndex((i) => (i === null ? null : (i + 1) % photos.length));
  }, []);

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
      <motion.section
        className="py-20 px-6 bg-[#e9e9e9]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto">
          {/* Título */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-center text-black mb-5"
          >
            Galeria de Fotos
          </motion.h2>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="text-center text-gray-700 text-base md:text-lg mb-1 max-w-3xl mx-auto font-medium"
          >
            Conheça a estrutura da sala por diferentes ângulos e detalhes do ambiente.
          </motion.p>

          {/* Texto de apoio */}
          <motion.p
            variants={fadeUp}
            className="text-center text-gray-500 text-[14px] mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Imagens ilustrativas de alta qualidade que demonstram{" "}
            <strong>possibilidades de layout, ambientação e uso do espaço</strong>.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Imagem principal */}
            <motion.button
              type="button"
              variants={fadeUp}
              onClick={() => setSelectedIndex(0)}
              whileHover={{ y: -3 }}
              className="group relative overflow-hidden rounded-[22px] shadow-sm md:col-span-2"
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
            </motion.button>

            {/* Coluna direita com 2 imagens */}
            <div className="grid grid-cols-1 gap-5">
              {photos.slice(1).map((photo, index) => (
                <motion.button
                  key={index}
                  type="button"
                  variants={fadeUp}
                  onClick={() => setSelectedIndex(index + 1)}
                  whileHover={{ y: -3 }}
                  className="group relative overflow-hidden rounded-[22px] shadow-sm"
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
                </motion.button>
              ))}
            </div>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-justify text-gray-500 text-[14px] mt-8 max-w-6xl mx-auto leading-relaxed">
            🚨 <strong>Atenção:</strong> o mobiliário apresentado nas imagens não fazem parte da decoração do espaço.
            Ele sendo utilizado como referência para o potencial de organização, iluminação e identidade que a sala pode alcançar.
          </motion.p>
        </div>
      </motion.section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            {/* Fechar */}
            <motion.button
              type="button"
              onClick={close}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-white/80 hover:text-white z-10"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            {/* Seta anterior */}
            <motion.button
              type="button"
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            {/* Imagem */}
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedIndex}
                src={selected.src}
                alt={selected.alt}
                className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
              />
            </AnimatePresence>

            {/* Seta próxima */}
            <motion.button
              type="button"
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white z-10 p-2 rounded-full bg-black/30 hover:bg-black/60 transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Indicador de posição */}
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

            {/* Legenda */}
            <p className="absolute bottom-14 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center whitespace-nowrap">
              {selected.title}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
