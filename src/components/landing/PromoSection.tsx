import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Car } from "lucide-react";

const PromoSection = () => (

  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">

      <Badge className="mb-6 bg-primary text-primary-foreground text-sm px-4 py-1.5">
        Ganhe R$ 850 de desconto no 1º mês
      </Badge>

      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
        Garanta sua sala com desconto na entrada
      </h2>

      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Condição especial para empresas que querem estrutura profissional, pronta para operação imediata.
      </p>

      {/* CARD */}
      <Card className="relative border border-border bg-background max-w-fit mx-auto shadow-sm rounded-xl">
        
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="secondary" className="flex items-center gap-1 text-xs font-bold px-3">
            <Star className="h-3 w-3" /> PLANO ANUAL <Star className="h-3 w-3" />
          </Badge>
        </div>

        <CardContent className="pt-8 pb-8 px-6 text-center">

          <p className="text-sm text-muted-foreground mb-2">
            1º mês por
          </p>

          {/* 1º mês */}
          <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
            <p className="text-5xl font-bold text-foreground">R$ 1.000</p>
          </div>

          <p className="text-sm text-muted-foreground mb-2">
            + 11 meses por
          </p>

          {/* Restante */}
          <div className="rounded-lg border border-border bg-secondary px-4 py-4">
            <p className="text-4xl md:text-5xl font-bold text-foreground">
              R$ 1.850
            </p>
          </div>

          <p className="text-xs text-muted-foreground mt-4 mb-0 whitespace-nowrap">
            *Promoção válida para contratos fechados até o dia 10 de abril de 2.026.
          </p>

        </CardContent>
      </Card>

      {/* EXTRA */}
      <div className="mt-8 flex items-center justify-center gap-2 text-muted-foreground text-sm">
        <Car className="h-4 w-4" />
        <span>
          Vaga de garagem: <strong className="text-foreground">R$ 200/mês</strong>
        </span>
      </div>

    </div>
  </AnimatedSection>
);

export default PromoSection;