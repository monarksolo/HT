import MinistereRoutesSenegalSection from "@/components/MinistereRoutesSenegalSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux fixe | Ministère des Routes Sénégal - Hilary Tech",
  description:
    "Hilary Tech a installé un pèse-essieux fixe performant à Thillé Boubacar, offrant une solution fiable pour mesurer le poids des véhicules, prévenir la surcharge et assurer la conformité réglementaire en matière de transport routier.",
  keywords: [
    "pèse-essieux fixe",
    "ministère des Routes Sénégal",
    "Thillé Boubacar",
    "Hilary Tech",
    "sécurité routière",
    "contrôle poids véhicules",
    "infrastructures", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux fixe pour le ministère des Routes du Sénégal | Hilary Tech",
    description:
      "Hilary Tech a installé un pèse-essieux fixe performant à Thillé Boubacar, offrant une solution fiable pour mesurer le poids des véhicules, prévenir la surcharge et assurer la conformité réglementaire en matière de transport routier.",
    url: "https://Hilary-Tech.com/minister_routes_senegal", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/routes2.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Installation d’un pèse-essieux fixe à Thillé Boubacar",
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
        <MinistereRoutesSenegalSection />
        <InfoFooterSection />
    </>
  )
  
}