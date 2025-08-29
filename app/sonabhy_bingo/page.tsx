import SonabhyBingoSection from "@/components/SonabhyBingoSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux | Dépôt SONABHY Bingo - Hilary Tech",
  description:
    "Hilary Tech a installé un pèse-essieux au dépôt de la SONABHY à Bingo, permettant un contrôle précis du poids des véhicules, une gestion optimisée des flux et une sécurité renforcée lors des opérations de chargement.",
  keywords: [
    "pèse-essieux",
    "SONABHY",
    "Bingo",
    "Hilary Tech",
    "pesage industriel",
    "gestion des flux",
    "sécurité chargement",
    "contrôle poids véhicules",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux au dépôt SONABHY | Hilary Tech",
    description:
      "Projet réussi : installation d’un pèse-essieux au dépôt de la SONABHY à Bingo pour un contrôle précis des poids, une meilleure gestion des flux et une sécurité renforcée.",
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