import PortCotonouSection from "@/components/PortCotonouSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux mobile | Port Autonome de Cotonou - Hilary Tech",
  description:
    "Hilary Tech a installé un pèse-essieux mobile au Port Autonome de Cotonou (Bénin), permettant un contrôle précis des chargements sur site et facilitant la gestion efficace des flux de marchandises.",
  keywords: [
    "pèse-essieux mobile",
    "Port Autonome de Cotonou",
    "Bénin",
    "Hilary Tech",
    "gestion des flux",
    "pesage industriel",
    "logistique portuaire",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux mobile au Port Autonome de Cotonou | Hilary Tech",
    description:
      "Projet réussi : installation d’un pèse-essieux mobile au Port Autonome de Cotonou, pour un contrôle précis des chargements et une gestion optimisée des flux de marchandises.",
    url: "https://ton-site.com/pese-essieux-cotonou", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/pese-essieux-cotonou.jpg", // image représentative
        width: 1200,
        height: 630,
        alt: "Installation d’un pèse-essieux mobile au Port Autonome de Cotonou",
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
        <PortCotonouSection />
        <InfoFooterSection />
    </>
  )
}