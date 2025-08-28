import SecteurDechets from "@/components/SecteurDechets";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Déchets | Hilary Tech",
  description:
    "Hilary Tech propose des solutions de pesage et d'automatisation pour la gestion efficace des déchets, optimisant la collecte, le tri et la valorisation tout en respectant les normes environnementales.",
  keywords: [
    "Hilary Tech",
    "secteur déchets",
    "gestion des déchets",
    "pesage déchets",
    "automatisation",
    "collecte déchets",
    "tri déchets",
    "valorisation déchets",
    "normes environnementales",
  ],
  openGraph: {
    title: "Secteur Déchets | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur des déchets : optimisation de la collecte, du tri et de la valorisation, avec respect des normes environnementales.",
    url: "https://ton-site.com/dechets", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/dechets-hilarytech.jpg", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions pour le secteur des déchets Hilary Tech",
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

export default function SecteurDechetsPage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <SecteurDechets />
    <InfoFooterSection />
    </>
  ) 
}