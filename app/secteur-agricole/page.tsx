import SecteurAgricoleSection from "@/components/SecteurAgricoleSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Agricole | Hilary Tech",
  description:
    "Hilary Tech fournit des solutions fiables pour le secteur agricole, incluant le pesage, l’automatisation et la gestion des exploitations, pour optimiser les récoltes et le suivi de la production.",
  keywords: [
    "Hilary Tech",
    "secteur agricole",
    "agriculture",
    "pesage agricole",
    "automatisation agricole",
    "gestion exploitation",
    "optimisation récoltes",
    "suivi production",
    "solutions agricoles",
  ],
  openGraph: {
    title: "Secteur Agricole | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur agricole : équipements fiables pour optimiser les récoltes, automatiser les processus et gérer efficacement les exploitations.",
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