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
  <AnimatedSection className="bg-primary text-primary-foreground py-20 md:py-28 px-6">
    <div className="max-w-3xl mx-auto text-center">
      <p className="text-sm uppercase tracking-[0.25em] opacity-50 mb-6 font-medium">
       🔥 Prmoção Especial 🔥
      </p>
      <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
        Garanta sua sala com
        <span className="block">R$ 500 de desconto na entrada</span>
      </h2>
      <p className="text-lg opacity-60 mb-10 font-light">
        Agende uma visita e conheça a Sala Grupo dos Cinco pessoalmente.
      </p>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => {
          if (typeof window.gtagSendEvent === 'function') {
            window.gtagSendEvent(WHATSAPP_LINK);
          }
        }}
      >
        <Button size="lg" variant="secondary" className="text-base px-8 py-6 font-semibold group">
          Falar no WhatsApp
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Button>
      </a>

      <div className="mt-16 pt-8 border-t border-primary-foreground/10 text-sm opacity-40 space-y-1">
        <p className="tracking-[0.2em] uppercase font-medium">Café Coabita Coworking</p>
        <p>Todos os direitos reservados © {new Date().getFullYear()}</p>
      </div>
    </div>
  </AnimatedSection>
);

export default FooterCTA;