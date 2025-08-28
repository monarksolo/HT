import MinistereRoutesSenegalSection from "@/components/MinistereRoutesSenegalSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation d'un pèse-essieux fixe | Ministère des Routes Sénégal - Hilary Tech",
  description:
    "Hilary Tech a installé un pèse-essieux fixe pour le ministère des Routes du Sénégal à Thillé Boubacar, assurant un contrôle précis du poids des véhicules pour la sécurité routière et la durabilité des infrastructures.",
  keywords: [
    "pèse-essieux fixe",
    "ministère des Routes Sénégal",
    "Thillé Boubacar",
    "Hilary Tech",
    "sécurité routière",
    "contrôle poids véhicules",
    "infrastructures",
  ],
  openGraph: {
    title: "Installation d'un pèse-essieux fixe pour le ministère des Routes du Sénégal | Hilary Tech",
    description:
      "Projet réussi : installation d’un pèse-essieux fixe à Thillé Boubacar, permettant un contrôle précis des poids des véhicules et renforçant la sécurité et la durabilité des infrastructures routières.",
    url: "https://ton-site.com/pese-essieux-thille-boubacar", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/pese-essieux-thille.jpg", // image représentative
        width: 1200,
        height: 630,
        alt: "Installation d’un pèse-essieux fixe à Thillé Boubacar",
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
        <MinistereRoutesSenegalSection />
        <InfoFooterSection />
    </>
  )
  
}