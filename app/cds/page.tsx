import CdsSection from "@/components/CdsSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation de ponts bascules automatisés | Ciments du Sahel - Hilary Tech",
  description:
    "Hilary Tech a réalisé l'installation de ponts bascules automatisés à l'usine des Ciments du Sahel (CDS) au Sénégal, optimisant la pesée, la sécurité et la productivité.",
  keywords: [
    "ponts bascules automatisés",
    "ciments du sahel",
    "CDS Sénégal",
    "pesée industrielle",
    "chargement en vrac",
    "Hilary Tech",
    "installation industrielle",
  ],
  openGraph: {
    title: "Installation de ponts bascules automatisés | Ciments du Sahel - Hilary Tech",
    description:
      "Projet réussi : installation de ponts bascules automatisés pour le chargement en vrac de ciment à l'usine des Ciments du Sahel (CDS) au Sénégal.",
    url: "https://ton-site.com/cds-senegal", // remplace par ton vrai domaine
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/cds-pont-bascule.jpg", // ajoute une image représentative
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