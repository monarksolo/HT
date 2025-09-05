import SecteurAgricoleSection from "@/components/SecteurAgricoleSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Agricole | Hilary Tech",
  description:
    "Pour le secteur agricole, Hilary Tech fournit des équipements de pesage fiables et des solutions d’automatisation, garantissant précision, traçabilité et productivité dans la gestion des exploitations.",
  keywords: [
    "Hilary Tech",
    "secteur agricole",
    "agriculture",
    "pesage agricole",
    "automatisation agricole",
    "gestion exploitation",
    "optimisation récoltes",
    "suivi production",
    "solutions agricoles", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Agricole | Hilary Tech",
    description:
      "Pour le secteur agricole, Hilary Tech fournit des équipements de pesage fiables et des solutions d’automatisation, garantissant précision, traçabilité et productivité dans la gestion des exploitations.",
    url: "https://Hilary-Tech.com/secteur-agricole", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/Agricole.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions agricoles Hilary Tech",
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

export default function SecteurAgricolePage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <SecteurAgricoleSection />
    <InfoFooterSection />
    </>
  )
}