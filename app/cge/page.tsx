import CgeSection from "@/components/CgeSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Étalonnage d'un pont bascule | CGE - Hilary Tech",
  description:
    "Hilary Tech a réalisé l’étalonnage d’un pont bascule à CGE, garantissant une précision optimale, une fiabilité totale et une conformité stricte aux standards du pesage industriel.",
  keywords: [
    "étalonnage pont bascule",
    "CGE",
    "Hilary Tech",
    "mesure industrielle",
    "précision",
    "normes internationales",
    "installation industrielle", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Étalonnage d'un pont bascule à CGE | Hilary Tech",
    description:
      "Hilary Tech a réalisé l’étalonnage d’un pont bascule à CGE, garantissant une précision optimale, une fiabilité totale et une conformité stricte aux standards du pesage industriel.",
    url: "https://Hilary-Tech.com/cge", // à remplacer par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/CGE1.png", // mets une image de ce projet
        width: 1200,
        height: 630,
        alt: "Étalonnage d’un pont bascule à CGE",
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
        <CgeSection />
        <InfoFooterSection />
    </>
  )
}