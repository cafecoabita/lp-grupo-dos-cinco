// src/components/landing/FooterCTASection.tsx
import { MapPin, Clock } from "lucide-react";

const FooterCTASection = () => (
  <footer className="py-12 px-6 border-t border-border bg-background">
    <div className="max-w-3xl mx-auto text-center font-body text-sm text-muted-foreground space-y-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <p className="flex items-center gap-2">
          <MapPin className="w-4 h-4 text-primary" />
          Av. José Faria da Rocha, 5614 — Eldorado, Contagem
        </p>
        <p className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-primary" />
          Seg a Sex, 7h às 19h
        </p>
      </div>
      <p className="pt-6 text-muted-foreground/40 border-t border-border/50">
        © {new Date().getFullYear()} Café Coabita Coworking.
      </p>
    </div>
  </footer>
);

export default FooterCTASection;