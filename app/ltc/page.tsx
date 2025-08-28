import LctSection from "@/components/LctSection";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Installation de ponts bascules | Lomé Container Terminal - Hilary Tech",
  description:
    "Hilary Tech a installé des ponts bascules modernes au Lomé Container Terminal (LCT), optimisant le contrôle des flux de marchandises et renforçant l’efficacité des opérations portuaires.",
  keywords: [
    "ponts bascules",
    "Lomé Container Terminal",
    "LCT",
    "Hilary Tech",
    "pesage industriel",
    "flux de marchandises",
    "port",
    "opérations portuaires",
  ],
  openGraph: {
    title: "Installation de ponts bascules au Lomé Container Terminal | Hilary Tech",
    description:
      "Projet réussi : installation de ponts bascules modernes au LCT pour un contrôle précis des flux de marchandises et une meilleure efficacité des opérations portuaires.",
    url: "https://ton-site.com/lct-lome", // à remplacer par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/lct-pont-bascule.jpg", // image représentative du projet
        width: 1200,
        height: 630,
        alt: "Installation de ponts bascules au Lomé Container Terminal",
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

export default function LctPage() {
  return (
    <>
        <AOSWrapper />
        <Header />
        <LctSection />;
        <InfoFooterSection />
    </>
  )
}