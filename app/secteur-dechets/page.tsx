import SecteurDechets from "@/components/SecteurDechets";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Déchets | Hilary Tech",
  description:
    "Pour le secteur des déchets, Hilary Tech propose des équipements de pesage et des solutions automatisées, garantissant précision, efficacité et conformité dans la collecte, le tri et la valorisation des déchets.",
  keywords: [
    "Hilary Tech",
    "secteur déchets",
    "gestion des déchets",
    "pesage déchets",
    "automatisation",
    "collecte déchets",
    "tri déchets",
    "valorisation déchets",
    "normes environnementales", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Déchets | Hilary Tech",
    description:
      "Pour le secteur des déchets, Hilary Tech propose des équipements de pesage et des solutions automatisées, garantissant précision, efficacité et conformité dans la collecte, le tri et la valorisation des déchets.",
    url: "https://Hilary-Tech.com/secteur-dechets", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/Déchet.png", // image représentative
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