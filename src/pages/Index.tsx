import HeaderSection from "@/components/landing/HeaderSection"; // 1. Header
import HeroSection from "@/components/landing/HeroSection";     // 2. Hero
import DescriptionSection from "@/components/landing/DescriptionSection"; // 3. Description
import GallerySection from "@/components/landing/GallerySection"; // 4. Gallery
import IdealSection from "@/components/landing/IdealSection";     // 5. Ideal
import PromoSection from "@/components/landing/PromoSection";     // 6. Promo
import ReviewsSection from "@/components/landing/ReviewsSection"; // 8. Review
import LocationSection from "@/components/landing/LocationSection"; // 9. Location
import FooterCTASection from "@/components/landing/FooterCTASection"; // 10. FooterCTA
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";     // 11. WhatsApp

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Banner de Topo / Header */}
      <HeaderSection />

      {/* 2. Seção de Impacto */}
      <HeroSection />

      {/* 3. Texto Descritivo com as 2 Imagens */}
      <DescriptionSection />

      {/* 4. Grade de Fotos da Galeria */}
      <GallerySection />

      {/* 5. Itens Inclusos e Diferenciais */}
      <IdealSection /> 

      {/* 6. Tabela de Preços e Plano Anual */}
      <PromoSection isBanner={false} />

      {/* 7. Primeiro Chamado para Ação */}


      {/* 8. Depoimentos dos Clientes */}
      <ReviewsSection />

      {/* 9. Endereço e Acesso */}
      <LocationSection />

      {/* 10. Rodapé Institucional */}
      <FooterCTASection />

      {/* 11. Botão Flutuante */}
      <WhatsAppFloat />
    </div>
  );
}