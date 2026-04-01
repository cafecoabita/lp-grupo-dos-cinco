import HeaderSection from "@/components/landing/HeaderSection"; // 1. Header
import HeroSection from "@/components/landing/HeroSection";     // 2. Hero
import PromoSection from "@/components/landing/PromoSection";     // 3. Promo
import GallerySection from "@/components/landing/GallerySection"; // 4. Gallery
import DescriptionSection from "@/components/landing/DescriptionSection"; // 5. Description
import IdealSection from "@/components/landing/IdealSection";     // 6. Ideal
import ReviewsSection from "@/components/landing/ReviewsSection"; // 7. Review
import LocationSection from "@/components/landing/LocationSection"; // 8. Location
import FooterCTASection from "@/components/landing/FooterCTASection"; // 9. FooterCTA
import WhatsAppFloat from "@/components/landing/WhatsAppFloat";     // 10. WhatsApp

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* 1. Banner de Topo / Header */}
      <HeaderSection />

      {/* 2. Seção de Impacto */}
      <HeroSection />

      {/* 3. Tabela de Preços e Plano Anual */}
      <PromoSection />

      {/* 4. Grade de Fotos da Galeria */}
      <GallerySection />

      {/* 5. Texto Descritivo com as 2 Imagens */}
      <DescriptionSection />

      {/* 6. Itens Inclusos e Diferenciais */}
      <IdealSection /> 

      {/* 7. Depoimentos dos Clientes */}
      <ReviewsSection />

      {/* 8. Endereço e Acesso */}
      <LocationSection />

      {/* 9. Rodapé Institucional */}
      <FooterCTASection />

      {/* 10. Botão Flutuante */}
      <WhatsAppFloat />
    </div>
  );
}