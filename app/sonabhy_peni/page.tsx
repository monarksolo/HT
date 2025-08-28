import SonabhyPeniSection from "@/components/SonabhyPeniSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux | Nouveau dépôt SONABHY Bobo - Hilary Tech",
  description:
    "Hilary Tech a installé un pèse-essieux au nouveau dépôt de la SONABHY à Bobo, Péni, permettant un contrôle précis des chargements, une gestion logistique optimisée et une sécurité renforcée des opérations.",
  keywords: [
    "pèse-essieux",
    "SONABHY",
    "Bobo",
    "Péni",
    "Hilary Tech",
    "pesage industriel",
    "gestion logistique",
    "sécurité chargement",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux au nouveau dépôt SONABHY Bobo | Hilary Tech",
    description:
      "Projet réussi : installation d’un pèse-essieux au nouveau dépôt de la SONABHY à Bobo, Péni, pour un contrôle précis des chargements et une gestion logistique optimisée.",
    url: "https://ton-site.com/sonabhy-bobo", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/sonabhy-bobo-pese-essieux.jpg", // image représentative
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