import SecteurLogistiqueSection from "@/components/SecteurLogistiqueSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Logistique | Hilary Tech",
  description:
    "Hilary Tech propose des solutions modernes pour optimiser la gestion, le transport et le stockage des marchandises, améliorant l’efficacité et la performance logistique.",
  keywords: [
    "Hilary Tech",
    "secteur logistique",
    "gestion des marchandises",
    "transport",
    "stockage",
    "solutions logistiques",
    "optimisation logistique",
    "performance logistique",
  ],
  openGraph: {
    title: "Secteur Logistique | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur logistique : optimisation de la gestion, du transport et du stockage des marchandises avec des solutions modernes et fiables.",
    url: "https://ton-site.com/logistique", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/logistique-hilarytech.jpg", // image représentative
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