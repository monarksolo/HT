import SecteurIndustrieSection from "@/components/SecteurIndustrieSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Industrie | Hilary Tech",
  description:
    "Hilary Tech fournit aux industries des équipements de pesage robustes, des solutions d’automatisation et des outils de contrôle qualité pour optimiser les opérations industrielles.",
  keywords: [
    "Hilary Tech",
    "secteur industrie",
    "pesage industriel",
    "automatisation industrielle",
    "contrôle qualité",
    "solutions industrielles",
    "équipements robustes",
  ],
  openGraph: {
    title: "Secteur Industrie | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur industriel : équipements de pesage, automatisation et outils de contrôle qualité pour des opérations optimisées.",
    url: "https://Hilary-Tech.com/secteur-industrie", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/industrie.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions industrielles Hilary Tech",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SecteurIndustriePage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <SecteurIndustrieSection />
    <InfoFooterSection />
    </>
  )
  
}