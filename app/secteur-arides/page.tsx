import SecteurAridesSection from "@/components/SecteurAridesSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteur Arides | Hilary Tech",
  description:
    "Hilary Tech propose des solutions robustes et performantes pour le secteur des arides, optimisant l’extraction, le transport et la gestion des matériaux même dans des environnements difficiles.",
  keywords: [
    "Hilary Tech",
    "secteur arides",
    "extraction matériaux",
    "transport arides",
    "gestion matériaux",
    "solutions industrielles",
    "environnements difficiles",
    "performance industrielle",
  ],
  openGraph: {
    title: "Secteur Arides | Hilary Tech",
    description:
      "Découvrez les solutions de Hilary Tech pour le secteur des arides : extraction, transport et gestion des matériaux optimisés même dans des environnements difficiles.",
    url: "https://ton-site.com/arides", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/arides-hilarytech.jpg", // image représentative
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