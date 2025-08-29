import SocomaSection from "@/components/SocomaSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montage d'un pont bascule | Usine SOCOMA Ouargaya - Hilary Tech",
  description:
    "Hilary Tech a réalisé le montage d’un pont bascule performant pour l’usine SOCOMA à Ouargaya, assurant une pesée précise et sécurisée et optimisant les opérations logistiques sur site.",
  keywords: [
    "pont bascule",
    "usine SOCOMA",
    "Ouargaya",
    "Hilary Tech",
    "pesage industriel",
    "logistique",
    "gestion des flux",
    "sécurité industrielle",
  ],
  openGraph: {
    title: "Montage d'un pont bascule à l'usine SOCOMA | Hilary Tech",
    description:
      "Projet réussi : montage d’un pont bascule robuste pour l’usine SOCOMA à Ouargaya, garantissant précision, sécurité et optimisation des opérations logistiques.",
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