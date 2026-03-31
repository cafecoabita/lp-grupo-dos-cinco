import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { fadeUp, stagger } from "./AnimatedSection";

const photos = [
  {
    src: "/images/sala-grupo-dos-cinco-03.png",
    alt: "Layout da Sala Grupo dos Cinco",
    title: "Vista geral do ambiente",
    size: "large",
  },
  {
    src: "/images/sala-grupo-dos-cinco-04.png",
    alt: "Vista interna da Sala Grupo dos Cinco",
    title: "Ambiente climatizado e mobiliado",
    size: "small",
  },
  {
    src: "/images/sala-grupo-dos-cinco-05.png",
    alt: "Estrutura da Sala Grupo dos Cinco",
    title: "Mesa de reunião e estações de trabalho",
    size: "small",
  },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedAlt, setSelectedAlt] = useState("");

  const openImage = (src: string, alt: string) => {
    setSelectedImage(src);
    setSelectedAlt(alt);
  };

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
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-5xl font-bold text-center text-black mb-5"
          >
            Galeria de Fotos
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-center text-gray-600 text-base md:text-lg mb-14 max-w-3xl mx-auto"
          >
            Conheça a estrutura da sala por diferentes ângulos e detalhes do ambiente.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* Imagem principal */}
            <motion.button
              type="button"
              variants={fadeUp}
              onClick={() => openImage(photos[0].src, photos[0].alt)}
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
                  onClick={() => openImage(photo.src, photo.alt)}
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
        </div>
      </motion.section>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 md:top-8 md:right-8 text-white/90 hover:text-white"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt={selectedAlt}
              className="max-w-full max-h-[92vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;