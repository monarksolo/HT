import CdsSection from "@/components/CdsSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation de ponts bascules automatisés | Ciments du Sahel - Hilary Tech",
  description:
    "Boostez vos performances avec nos ponts bascules automatisés. Aux Ciments du Sahel (CDS) au Sénégal, Hilary Tech a installé des équipements de pesage industriel robustes, alliant précision, productivité et sécurité.",
  keywords: [
    "ponts bascules automatisés",
    "ciments du sahel",
    "CDS Sénégal",
    "pesée industrielle",
    "chargement en vrac",
    "Hilary Tech",
    "installation industrielle", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Installation de ponts bascules automatisés | Ciments du Sahel - Hilary Tech",
    description:
      "Boostez vos performances avec nos ponts bascules automatisés. Aux Ciments du Sahel (CDS) au Sénégal, Hilary Tech a installé des équipements de pesage industriel robustes, alliant précision, productivité et sécurité.",
    url: "https://Hilary-Tech.com/cds", // remplace par ton vrai domaine
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/CDS2.png", // ajoute une image représentative
        width: 1200,
        height: 630,
        alt: "Installation de ponts bascules automatisés aux Ciments du Sahel",
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
        <CdsSection />;
        <InfoFooterSection />
    </>
  )
}