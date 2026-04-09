import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

declare global {
  interface Window {
    gtagSendEvent?: (url: string) => void;
  }
}

const WHATSAPP_LINK = "https://wa.me/553121158984/?text=Olá!+Gostaria+de+agendar+uma+visita+para+sala+privativa+Grupos+dos+Cinco.+A+sala+ainda+está+disponível?+:-D";

const FooterCTA = () => (
  <AnimatedSection className="bg-primary text-primary-foreground pt-10 md:pt-14 pb-10 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <p className="font-body text-sm tracking-wide mb-4">
        <span className="font-semibold text-yellow-400">🔥 PROMOÇÃO POR TEMPO LIMITADO 🔥</span>
      </p>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
        Garanta sua sala com desconto na entrada
      </h2>
      <p className="text-sm opacity-60 mb-8 font-light">
        Agende uma visita e conheça a Sala Grupo dos Cinco pessoalmente.
      </p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window.gtagSendEvent === "function") {
            window.gtagSendEvent(WHATSAPP_LINK);
          }
        }}
      >
        <Button size="lg" variant="secondary" className="text-sm px-6 py-5 font-semibold group rounded-[15px]">
          Falar no WhatsApp
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </a>

      <div className="mt-8 pt-5 border-t border-primary-foreground/10 text-xs opacity-40 space-y-1">
        <p className="tracking-[0.15em] uppercase font-medium">Café Coabita Coworking — Todos os direitos reservados © {new Date().getFullYear()}</p>
      </div>
    </div>
  </AnimatedSection>
);

export default FooterCTA;