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
            className="text-4xl md:text-4xl font-semibold text-foreground text-center mb-4 tracking-tight"
          >
            Um escritório privativo que combina estrutura e performance.
          </motion.h2>

          {/* Subtítulo fora do quadro */}
          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-lg md:text-xl text-center mb-10 italic"
          >
            Mais do que uma sala, um espaço para fazer sua empresa acontecer.
          </motion.p>

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
                    src="/lp-grupo-dos-cinco/images/sala-grupo-dos-5-01.webp"
                    alt="Layout Personalizado"
                    className="w-full h-[320px] md:h-[420px] object-contain bg-white rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                  />

                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors duration-300 rounded-xl" />

                  <div className="absolute inset-x-0 bottom-0 px-5 py-4 bg-gradient-to-t from-black/70 via-black/25 to-transparent rounded-b-xl">
                    <p className="text-white text-sm md:text-[15px] font-semibold text-center leading-snug">
                      Layout Personalizável
                    </p>
                  </div>
                </button>
              </div>

              {/* Texto dentro do quadro */}
              <div>
                <motion.div
                  variants={fadeUp}
                  className="text-gray-800 leading-relaxed"
                >
                  {/* Texto principal */}
                  <p className="text-[16px] mb-4 text-justify">
                    Com <strong>18,5 m²</strong>, a sala privativa Grupo dos Cinco já vem mobiliada com{" "}
                    <strong>duas estações de trabalho</strong>,{" "}
                    <strong>mesa ampla para reuniões</strong>,{" "}
                    <strong>cadeiras ergonômicas</strong> e um{" "}
                    <strong>cantinho dedicado ao café</strong>. 
                    <br />
                    <br />
                    Em seu ambiente climatizado e totalmente funcional, acomoda{" "}
                    <strong>até 6 pessoas com conforto</strong>, podendo atingir lotação máxima de {" "}
                    <strong>8 pessoas</strong>.
                  </p>

                  {/* Personalização */}
                  <p className="text-[16px] text-gray-600 leading-relaxed text-justify">
                    O layout foi projetado para oferecer{" "}
                    <strong>organização</strong>, <strong>conforto</strong> e{" "}
                    <strong>eficiência</strong>, mas também pode ser{" "}
                    <strong>adaptado conforme a necessidade da sua operação</strong>.
                    <br />
                    <br />
                    A disposição das estações, mobiliário e uso do espaço podem ser
                    ajustados para atender melhor o seu time — seja para uma
                    operação mais colaborativa, foco individual ou configuração
                    híbrida.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Atenção embaixo, dentro do quadro */}
            <motion.p
              variants={fadeUp}
              className="text-justify text-gray-600 text-[14px] mt-8 leading-relaxed"
            >
              ⚠️ <strong>Atenção:</strong> qualquer personalização deve ser avaliada previamente. Consulte com a nossa equipe para verificar as{" "}
              <strong>possibilidades</strong>, <strong>ajustes viáveis</strong> e a{" "}
              <strong>adequação do layout</strong> ao seu modelo de trabalho.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.button
              type="button"
              className="absolute top-5 right-5 md:top-8 md:right-8 text-white/80 hover:text-white"
              onClick={() => setOpen(false)}
            >
              <X className="w-8 h-8" />
            </motion.button>

            <motion.img
              src="/lp-grupo-dos-cinco/images/sala-grupo-dos-5-01.webp"
              alt="Layout Personalizado ampliado"
              className="max-w-[90vw] max-h-[88vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.97, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DescriptionSection;