import SecteurLogistiqueSection from "@/components/SecteurLogistiqueSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Logistique | Hilary Tech",
  description:
    "Pour le secteur logistique, Hilary Tech propose des équipements modernes de pesage et de suivi des flux, garantissant performance, précision et sécurité dans la gestion des marchandises.",
  keywords: [
    "Hilary Tech",
    "secteur logistique",
    "gestion des marchandises",
    "transport",
    "stockage",
    "solutions logistiques",
    "optimisation logistique",
    "performance logistique", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Logistique | Hilary Tech",
    description:
      "Pour le secteur logistique, Hilary Tech propose des équipements modernes de pesage et de suivi des flux, garantissant performance, précision et sécurité dans la gestion des marchandises.",
    url: "https://Hilary-Tech.com/secteur-logistique", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/Logistique.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions logistiques Hilary Tech",
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

export default function SecteurLogistiquePage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <SecteurLogistiqueSection />
    <InfoFooterSection />
    </>
  ) 
}