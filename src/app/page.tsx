import {
  Footer,
  SectionCaracteristica,
  SectionDescargar,
  SectionDescripcion,
  SectionHero,
  SectionSliderImagen,
} from "@/widgets";

export default function LottoLatinaLanding() {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <SectionHero />

      <SectionCaracteristica />

      <SectionSliderImagen />

      <SectionDescripcion />

      <SectionDescargar />

      <Footer/>
    </div>
  );
}
