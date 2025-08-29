import ProposSection from "@/components/ProposSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Hilary Tech",
  description:
    "Hilary Tech, spécialiste des solutions technologiques, industrielles et commerciales, s'engage à fournir des produits et services de haute qualité avec un accompagnement personnalisé.",
  keywords: [
    "Hilary Tech",
    "à propos",
    "solutions technologiques",
    "solutions industrielles",
    "services commerciaux",
    "qualité",
    "accompagnement client",
    "service après-vente",
  ],
  openGraph: {
    title: "À propos de Hilary Tech",
    description:
      "Découvrez Hilary Tech : entreprise spécialisée dans les solutions technologiques, industrielles et commerciales, offrant un service de qualité et un accompagnement personnalisé.",
    url: "https://Hilary-Tech.com/propos", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/a propos de nous.png", // image représentative
        width: 1200,
        height: 630,
        alt: "À propos de Hilary Tech",
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

export default function ProposPage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <ProposSection />
    <InfoFooterSection />
    </>
  ) 
}