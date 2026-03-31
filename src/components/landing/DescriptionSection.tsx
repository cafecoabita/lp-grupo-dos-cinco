import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { fadeUp, stagger } from "./AnimatedSection";

const DescriptionSection = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.section
        className="py-20 md:py-28 px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={stagger}
      >
        <div className="max-w-6xl mx-auto">
          {/* Título fora do quadro */}
          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl font-semibold text-foreground text-center mb-10 tracking-tight"
          >
            Seu escritório privativo pronto para operar
          </motion.h2>

          {/* Quadro */}
          <motion.div
            variants={fadeUp}
            className="bg-gray-100 border border-gray-200 rounded-2xl p-6 md:p-8"
          >
            <div className="grid md:grid-cols-2 gap-10 items-center">
              {/* Imagem */}
              <div>
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="group relative w-full overflow-hidden rounded-xl text-left"
                >
                  <img
                    src="/images/sala-grupo-dos-cinco-01.png"
                    alt="Layout Personalizado"
                    className="w-full h-[320px] md:h-[420px] object-contain bg-white rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />

                  <div className="absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent rounded-b-xl">
                    <p className="text-white text-sm md:text-[15px] font-semibold text-center leading-snug">
                      Layout Personalizado
                    </p>
                  </div>
                </button>
              </div>

              {/* Texto dentro do quadro */}
              <div>
                <motion.p
                  variants={fadeUp}
                  className="text-muted-foreground text-lg leading-relaxed"
                >
                  A Sala Grupo dos Cinco é o espaço ideal: 19 m², mobiliada e
                  climatizada para até 6 pessoas.
                  <br />
                  <br />
                  O layout foi planejado para oferecer conforto, produtividade e
                  organização do espaço de trabalho, com estações bem distribuídas
                  e estrutura pronta para uso imediato.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.button
              type="button"
              className="absolute top-6 right-6 text-white"
              onClick={() => setOpen(false)}
            >
              <X className="w-7 h-7" />
            </motion.button>

            <motion.img
              src="/images/sala-grupo-dos-cinco-01.png"
              alt="Layout Personalizado ampliado"
              className="max-w-full max-h-[90vh] object-contain bg-white rounded-xl p-2"
              initial={{ scale: 0.98 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.98 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DescriptionSection;