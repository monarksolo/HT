import SecteurAridesSection from "@/components/SecteurAridesSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Arides | Hilary Tech",
  description:
    "Pour le secteur des arides, Hilary Tech propose des équipements de pesage et de contrôle fiables, garantissant précision, sécurité et efficacité dans la gestion des flux de matériaux lourds et abrasifs.",
  keywords: [
    "Hilary Tech",
    "secteur arides",
    "extraction matériaux",
    "transport arides",
    "gestion matériaux",
    "solutions industrielles",
    "environnements difficiles",
    "performance industrielle", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Secteur Arides | Hilary Tech",
    description:
      "Pour le secteur des arides, Hilary Tech propose des équipements de pesage et de contrôle fiables, garantissant précision, sécurité et efficacité dans la gestion des flux de matériaux lourds et abrasifs.",
    url: "https://Hilary-Tech.com/secteur-arides", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/arides.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Solutions pour le secteur des arides Hilary Tech",
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

export default function SecteurAridesPage() {
  return (
    <>
    <AOSWrapper />
    <Header />
    <SecteurAridesSection />
    <InfoFooterSection />
    </>
  )
}