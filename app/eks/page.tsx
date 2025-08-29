import EksSection from "@/components/EksSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Montage d'un pont bascule | Carrière EKS Ipelcé - Hilary Tech",
  description:
    "Hilary Tech a réalisé le montage d’un pont bascule à la carrière de granite EKS à Ipelcé, assurant un contrôle précis des chargements et une gestion optimisée des flux de matériaux.",
  keywords: [
    "pont bascule",
    "carrière EKS",
    "Ipelcé",
    "Hilary Tech",
    "gestion des flux",
    "pesage industriel",
    "matériaux extraits",
  ],
  openGraph: {
    title: "Montage d'un pont bascule à la carrière de granite EKS | Hilary Tech",
    description:
      "Projet réussi : montage d’un pont bascule à la carrière de granite EKS à Ipelcé, pour un contrôle rigoureux des chargements et une gestion optimisée des matériaux extraits.",
    url: "https://Hilary-Tech.com/eks", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/EKS1.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Montage d’un pont bascule à la carrière de granite EKS à Ipelcé",
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
        <EksSection />
        <InfoFooterSection />
    </>
  )
}