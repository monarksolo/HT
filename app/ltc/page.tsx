import LctSection from "@/components/LctSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation de ponts bascules | Lomé Container Terminal - Hilary Tech",
  description:
    "Au Lomé Container Terminal (LCT), Hilary Tech a déployé des ponts bascules robustes et fiables, garantissant un pesage précis, une gestion fluide des cargaisons et une productivité renforcée dans les opérations portuaires.",
  keywords: [
    "ponts bascules",
    "Lomé Container Terminal",
    "LCT",
    "Hilary Tech",
    "pesage industriel",
    "flux de marchandises",
    "port",
    "opérations portuaires", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Installation de ponts bascules au Lomé Container Terminal | Hilary Tech",
    description:
      "Au Lomé Container Terminal (LCT), Hilary Tech a déployé des ponts bascules robustes et fiables, garantissant un pesage précis, une gestion fluide des cargaisons et une productivité renforcée dans les opérations portuaires.",
    url: "https://Hilary-Tech.com/lct", // à remplacer par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/Pont_bascule_LTC.png", // image représentative du projet
        width: 1200,
        height: 630,
        alt: "Installation de ponts bascules au Lomé Container Terminal",
      },
    ],
    locale: "fr_FR",
    type: "article",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function LctPage() {
  return (
    <>
        <AOSWrapper />
        <Header />
        <LctSection />;
        <InfoFooterSection />
    </>
  )
}