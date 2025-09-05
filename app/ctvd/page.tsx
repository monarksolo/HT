import CtvdSection from "@/components/CtvdSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux | CTVD Ouagadougou - Hilary Tech",
  description:
    "Hilary Tech a installé un pèse-essieux performant au Centre de Traitement et de Valorisation des Déchets (CTVD) à Ouagadougou, garantissant un pesage rapide, précis et sécurisé des flux entrants et sortants.",
  keywords: [
    "pèse-essieux",
    "CTVD Ouaga",
    "Hilary Tech",
    "gestion des déchets",
    "contrôle des flux",
    "pesage industriel",
    "optimisation déchets", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux au CTVD Ouagadougou | Hilary Tech",
    description:
      "Hilary Tech a installé un pèse-essieux performant au Centre de Traitement et de Valorisation des Déchets (CTVD) à Ouagadougou, garantissant un pesage rapide, précis et sécurisé des flux entrants et sortants.",
    url: "https://Hilary-Tech.com/ctvd", // à remplacer par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/ctvd2.png", // ajoute une image représentative du projet
        width: 1200,
        height: 630,
        alt: "Installation d’un pèse-essieux au CTVD Ouagadougou",
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

export default function Page() {
  return (
    <>
        <AOSWrapper />
        <Header />
        <CtvdSection />
        <InfoFooterSection />
    </>
  )
}