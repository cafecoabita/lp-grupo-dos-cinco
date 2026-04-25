import AnimatedSection from "./AnimatedSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Car } from "lucide-react";

const PHONE = "553121158984";

const WA_ANUAL = `https://wa.me/${PHONE}/?text=${encodeURIComponent("Olá, vi seu anúncio no Google e gostaria de saber mais sobre o plano de 1 ano da sala Grupo dos Cinco")}`;
const WA_BIENAL = `https://wa.me/${PHONE}/?text=${encodeURIComponent("Olá, vi seu anúncio no Google e gostaria de saber mais sobre o plano de 2 anos da sala Grupo dos Cinco")}`;

const StarIcon = () => <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />;

const PromoSection = () => (
  <AnimatedSection className="py-20 md:py-28 px-6 bg-background">
    <div className="max-w-4xl mx-auto text-center">

      <Badge className="mb-6 bg-primary text-primary-foreground text-sm px-4 py-1.5">
        Não perca essa oportunidade
      </Badge>

      <h2 className="text-2xl md:text-4xl font-bold mb-4 text-foreground">
        Garanta sua sala com desconto na entrada
      </h2>

      <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Condição especial para empresas que querem estrutura profissional, pronta para operação imediata.
      </p>

      {/* CARDS */}
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch">

        {/* PLANO ANUAL */}
        <Card className="relative border-2 border-black bg-background max-w-sm w-full mx-auto shadow-sm rounded-xl flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="secondary" className="flex items-center gap-1 text-xs font-bold px-3 whitespace-nowrap border border-black">
              <StarIcon /> PLANO 1 ANO <StarIcon />
            </Badge>
          </div>

          <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col flex-1">

            <p className="text-sm text-muted-foreground mb-2">1º mês por</p>
            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-5xl font-bold text-foreground">R$ 1.000</p>
            </div>

            <p className="text-sm text-muted-foreground mb-2">+ 11 meses por</p>
            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-4xl md:text-5xl font-bold text-foreground">R$ 1.850</p>
            </div>

            <p className="text-xs text-muted-foreground mb-6 whitespace-nowrap">
              *Válida para contratos fechados até 17 de abril de 2.026.
            </p>

            <div className="mt-auto">
              <a
                href={WA_ANUAL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-primary-foreground px-6 py-3 font-bold uppercase text-sm tracking-widest border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary transition-all rounded-[15px]"
              >
                Quero o Plano 1 Ano
              </a>
            </div>

          </CardContent>
        </Card>

        {/* PLANO BIENAL */}
        <Card className="relative border-2 border-black bg-background max-w-sm w-full mx-auto shadow-sm rounded-xl flex flex-col">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <Badge variant="secondary" className="flex items-center gap-1 text-xs font-bold px-3 whitespace-nowrap border border-black">
              <StarIcon /> PLANO 2 ANOS <StarIcon />
            </Badge>
          </div>

          <CardContent className="pt-8 pb-8 px-6 text-center flex flex-col flex-1">

            <p className="text-sm text-muted-foreground mb-2">1ª entrada por</p>
            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-5xl font-bold text-foreground">R$ 1.000</p>
            </div>

            <p className="text-sm text-muted-foreground mb-2">+ 23 meses por</p>
            <div className="rounded-lg border border-border bg-secondary px-4 py-4 mb-4">
              <p className="text-4xl md:text-5xl font-bold text-foreground">R$ 1.750</p>
            </div>

            <p className="text-xs text-muted-foreground mb-6 whitespace-nowrap">
              *Válida para contratos fechados até 17 de abril de 2.026.
            </p>

            <div className="mt-auto">
              <a
                href={WA_BIENAL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-primary-foreground px-6 py-3 font-bold uppercase text-sm tracking-widest border-2 border-transparent hover:bg-white hover:text-primary hover:border-primary transition-all rounded-[15px]"
              >
                Quero o Plano 2 Anos
              </a>
            </div>

          </CardContent>
        </Card>

      </div>

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
