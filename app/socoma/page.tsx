import SocomaSection from "@/components/SocomaSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montage d'un pont bascule | Usine SOCOMA Ouargaya - Hilary Tech",
  description:
    "Hilary Tech a installé un pont bascule robuste à l’usine SOCOMA à Ouargaya, garantissant précision, fiabilité et sécurité pour toutes les opérations de pesage et la gestion logistique des matières.",
  keywords: [
    "pont bascule",
    "usine SOCOMA",
    "Ouargaya",
    "Hilary Tech",
    "pesage industriel",
    "logistique",
    "gestion des flux",
    "sécurité industrielle", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Montage d'un pont bascule à l'usine SOCOMA | Hilary Tech",
    description:
      "Hilary Tech a installé un pont bascule robuste à l’usine SOCOMA à Ouargaya, garantissant précision, fiabilité et sécurité pour toutes les opérations de pesage et la gestion logistique des matières.",
    url: "https://Hilary-Tech.com/socoma", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/ouargaye1.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Montage d’un pont bascule à l’usine SOCOMA à Ouargaya",
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
        <SocomaSection />
        <InfoFooterSection />
    </>
  )
}