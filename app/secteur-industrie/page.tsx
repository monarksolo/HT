import SecteurIndustrieSection from "@/components/SecteurIndustrieSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Industrie | Hilary Tech",
  description:
    "Pour le secteur industriel, Hilary Tech fournit des équipements de pesage fiables et durables, ainsi que des solutions d’automatisation et de contrôle qualité, garantissant performance, précision et productivité.",
  keywords: [
    "Hilary Tech",
    "secteur industrie",
    "pesage industriel",
    "automatisation industrielle",
    "contrôle qualité",
    "solutions industrielles",
    "équipements robustes", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Industrie | Hilary Tech",
    description:
      "Pour le secteur industriel, Hilary Tech fournit des équipements de pesage fiables et durables, ainsi que des solutions d’automatisation et de contrôle qualité, garantissant performance, précision et productivité.",
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