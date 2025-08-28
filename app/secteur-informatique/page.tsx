import SecteurInformatique from "@/components/SecteurInformatique";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Informatique | Hilary Tech",
  description:
    "Hilary Tech accompagne les entreprises dans la gestion, la sécurité et l’optimisation de leurs systèmes d'information, de l’infrastructure matérielle aux logiciels métiers, pour garantir efficacité et fiabilité.",
  keywords: [
    "Hilary Tech",
    "secteur informatique",
    "gestion SI",
    "sécurité informatique",
    "optimisation systèmes",
    "infrastructure matérielle",
    "logiciels métiers",
    "efficacité informatique",
    "fiabilité systèmes",
  ],
  openGraph: {
    title: "Secteur Informatique | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur informatique : gestion complète des systèmes d’information, sécurité, optimisation et accompagnement personnalisé des entreprises.",
    url: "https://ton-site.com/informatique", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/informatique-hilarytech.jpg", // image représentative
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