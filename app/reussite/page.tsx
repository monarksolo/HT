import ReussiteSection from "@/components/ReussiteSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réussites | Hilary Tech",
  description:
    "Hilary Tech met en avant ses projets réussis dans le domaine du pesage industriel, offrant des solutions sur mesure, fiables et performantes, adaptées aux besoins spécifiques de chaque client.",
  keywords: [
    "Hilary Tech",
    "réussites",
    "projets réussis",
    "expertise",
    "solutions innovantes",
    "clients satisfaits",
    "innovation industrielle",
    "projets professionnels", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Nos Réussites | Hilary Tech",
    description:
      "Hilary Tech met en avant ses projets réussis dans le domaine du pesage industriel, offrant des solutions sur mesure, fiables et performantes, adaptées aux besoins spécifiques de chaque client.",
    url: "https://Hilary-Tech.com/reussite", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/ouargaye1.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Nos réussites chez Hilary Tech",
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

export default function Page() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <ReussiteSection />
    <InfoFooterSection />
    </>
  ) 
}