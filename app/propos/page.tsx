import ProposSection from "@/components/ProposSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Hilary Tech",
  description:
    "Spécialiste des solutions industrielles et technologiques, Hilary Tech propose des équipements de pesage précis, fiables et innovants, accompagnés d’un service sur mesure pour répondre aux besoins spécifiques de chaque client.",
  keywords: [
    "Hilary Tech",
    "à propos",
    "solutions technologiques",
    "solutions industrielles",
    "services commerciaux",
    "qualité",
    "accompagnement client",
    "service après-vente", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "À propos de Hilary Tech",
    description:
      "Spécialiste des solutions industrielles et technologiques, Hilary Tech propose des équipements de pesage précis, fiables et innovants, accompagnés d’un service sur mesure pour répondre aux besoins spécifiques de chaque client.",
    url: "https://Hilary-Tech.com/propos", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/a propos de nous.png", // image représentative
        width: 1200,
        height: 630,
        alt: "À propos de Hilary Tech",
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

export default function ProposPage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <ProposSection />
    <InfoFooterSection />
    </>
  ) 
}