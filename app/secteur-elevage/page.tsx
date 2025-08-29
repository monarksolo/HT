import ElevageSection from "@/components/ElevageSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Élevage | Hilary Tech",
  description:
    "Hilary Tech fournit des solutions de pesage adaptées aux élevages bovins, ovins, porcins et avicoles, assurant un suivi précis du poids des animaux pour la gestion sanitaire, l'alimentation, la reproduction et la commercialisation.",
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
    "commercialisation",
  ],
  openGraph: {
    title: "Secteur Élevage | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur de l’élevage : pesage précis et fiable pour bovins, ovins, porcins et avicoles, optimisant la gestion sanitaire, l’alimentation et la commercialisation.",
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