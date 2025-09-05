import SecteurInformatique from "@/components/SecteurInformatique";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Informatique | Hilary Tech",
  description:
    "Pour le secteur informatique, Hilary Tech fournit des solutions complètes de gestion et de sécurité des systèmes, garantissant efficacité, fiabilité et optimisation des opérations industrielles et commerciales.",
  keywords: [
    "Hilary Tech",
    "secteur informatique",
    "gestion SI",
    "sécurité informatique",
    "optimisation systèmes",
    "infrastructure matérielle",
    "logiciels métiers",
    "efficacité informatique",
    "fiabilité systèmes", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Informatique | Hilary Tech",
    description:
      "Pour le secteur informatique, Hilary Tech fournit des solutions complètes de gestion et de sécurité des systèmes, garantissant efficacité, fiabilité et optimisation des opérations industrielles et commerciales.",
    url: "https://Hilary-Tech.com/secteur-informatique", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/informatique.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions informatiques Hilary Tech",
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

export default function SecteurInformatiquePage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <SecteurInformatique />
    <InfoFooterSection />
    </>
  )
}