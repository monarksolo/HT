import ReussiteSection from "@/components/ReussiteSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Réussites | Hilary Tech",
  description:
    "Découvrez les réussites de Hilary Tech : des projets innovants et adaptés aux besoins de nos clients, reflétant notre expertise et notre engagement.",
  keywords: [
    "Hilary Tech",
    "réussites",
    "projets réussis",
    "expertise",
    "solutions innovantes",
    "clients satisfaits",
    "innovation industrielle",
    "projets professionnels",
  ],
  openGraph: {
    title: "Nos Réussites | Hilary Tech",
    description:
      "Explorez les projets réussis de Hilary Tech, illustrant notre expertise et notre engagement à fournir des solutions innovantes et adaptées à chaque client.",
    url: "https://ton-site.com/reussites", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/reussites-hilarytech.jpg", // image représentative
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