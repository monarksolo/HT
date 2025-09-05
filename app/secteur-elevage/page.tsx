import ElevageSection from "@/components/ElevageSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Élevage | Hilary Tech",
  description:
    "Pour le secteur de l’élevage, Hilary Tech fournit des équipements de pesage fiables et précis, permettant un contrôle rigoureux des poids, la sécurité sanitaire et l’optimisation des pratiques d’élevage et de commercialisation.",
  keywords: [
    "Hilary Tech",
    "secteur élevage",
    "pesage animaux",
    "élevage bovins",
    "élevage ovins",
    "élevage porcins",
    "élevage avicoles",
    "gestion sanitaire",
    "alimentation animaux",
    "reproduction animale",
    "commercialisation", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Élevage | Hilary Tech",
    description:
      "Pour le secteur de l’élevage, Hilary Tech fournit des équipements de pesage fiables et précis, permettant un contrôle rigoureux des poids, la sécurité sanitaire et l’optimisation des pratiques d’élevage et de commercialisation.",
    url: "https://Hilary-Tech.com/secteur-elevage", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/élevage.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions de pesage pour le secteur de l'élevage Hilary Tech",
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

export default function ElevagePage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <ElevageSection />
    <InfoFooterSection />
    </>
  )
}