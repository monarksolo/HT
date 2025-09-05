import SonabhyBingoSection from "@/components/SonabhyBingoSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux | Dépôt SONABHY Bingo - Hilary Tech",
  description:
    "Hilary Tech a équipé le dépôt SONABHY à Bingo d’un pèse-essieux performant, garantissant précision, sécurité et efficacité pour le contrôle des poids et la gestion logistique des véhicules.",
  keywords: [
    "pèse-essieux",
    "SONABHY",
    "Bingo",
    "Hilary Tech",
    "pesage industriel",
    "gestion des flux",
    "sécurité chargement",
    "contrôle poids véhicules", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux au dépôt SONABHY | Hilary Tech",
    description:
      "Hilary Tech a équipé le dépôt SONABHY à Bingo d’un pèse-essieux performant, garantissant précision, sécurité et efficacité pour le contrôle des poids et la gestion logistique des véhicules.",
    url: "https://Hilary-Tech.com/sonabhy_bingo", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/bingo2.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Installation d’un pèse-essieux au dépôt de la SONABHY à Bingo",
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
        <SonabhyBingoSection />
        <InfoFooterSection />
    </>
  )
  
}