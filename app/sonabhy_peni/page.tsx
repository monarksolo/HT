import SonabhyPeniSection from "@/components/SonabhyPeniSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux | Nouveau dépôt SONABHY à Bobo - Hilary Tech",
  description:
    "Hilary Tech a équipé le nouveau dépôt SONABHY à Bobo, Péni d’un pèse-essieux performant, garantissant contrôle précis, sécurité renforcée et efficacité dans la gestion des flux de véhicules.",
  keywords: [
    "pèse-essieux",
    "SONABHY",
    "Bobo",
    "Péni",
    "Hilary Tech",
    "pesage industriel",
    "gestion logistique",
    "sécurité chargement", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux au nouveau dépôt SONABHY à Bobo | Hilary Tech",
    description:
      "Hilary Tech a équipé le nouveau dépôt SONABHY à Bobo, Péni d’un pèse-essieux performant, garantissant contrôle précis, sécurité renforcée et efficacité dans la gestion des flux de véhicules.",
    url: "https://Hilary-Tech.com/sonabhy_peni", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/peni2.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Installation d’un pèse-essieux au nouveau dépôt de la SONABHY à Bobo",
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
        <SonabhyPeniSection />
        <InfoFooterSection />
    </>
  )
  
}