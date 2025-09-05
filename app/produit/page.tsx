import ProduitBlock from "@/components/ProduitBlock";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits | Hilary Tech",
  description:
    "Hilary Tech propose une large sélection de solutions de pesage industriel et technologique, incluant ponts bascules, pèses essieux et outils spécialisés, pour améliorer la précision, la sécurité et l’efficacité des entreprises.",
  keywords: [
    "produits Hilary Tech",
    "équipements professionnels",
    "solutions technologiques",
    "matériel spécialisé",
    "Hilary Tech",
    "innovation industrielle",
    "outils professionnels", "ponts bascules", "pèses essieux", "pesage industriel", "équipements de contrôle",
  ],
  openGraph: {
    title: "Nos Produits | Hilary Tech",
    description:
      "Hilary Tech propose une large sélection de solutions de pesage industriel et technologique, incluant ponts bascules, pèses essieux et outils spécialisés, pour améliorer la précision, la sécurité et l’efficacité des entreprises.",
    url: "https://Hilary-Tech.com/produit", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://Hilary-Tech.com/images/roue-sur-pese-essieu.png", // image représentative
        width: 1200,
        height: 630,
        alt: "Produits et solutions professionnelles Hilary Tech",
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

export default function ProduitPage() {
  return (
    <>
          <AOSWrapper />
            <Header />
    <div className="bg-[#00204a] text-white">

      {/* Introduction */}
      <section className="py-[90px]" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Nos <span className="text-[#00bbf0]">Produits</span></h2>
          <p className="max-w-3xl mx-auto">
            Chez Hilary Tech, nous mettons à votre disposition une gamme rigoureusement sélectionnée d’équipements, 
            de solutions technologiques et de matériels spécialisés, conçus pour répondre aux besoins des professionnels dans divers secteurs d’activité.
          </p>
        </div>
      </section>

      {/* Pèse-Essieux */}
      <div className="bg-[#eff2f5]">
      <ProduitBlock
        index={1}
        titre="Pèse-Essieux"
        description="Les pèse-essieux conformes à la norme UEMOA R14 permettent de contrôler la charge exercée sur chaque essieu des véhicules lourds. 
            Ils sont essentiels pour prévenir les surcharges, protéger les routes et respecter les limites fixées par la réglementation 
            sous-régionale. Simples d’utilisation, ils assurent un pesage précis, fixe ou mobile, à des fins de contrôle ou de gestion logistique."
        image="/images/roue-sur-pese-essieu.png"
        fichier="/fichiers/bpxl-giropes-fr.pdf"
      />
      </div>

      {/* Pont Bascule */}
      <ProduitBlock
        index={2}
        titre="Pont Bascule Métallo-Béton BPPSE EVO & EVO XC (3m)"
        description="Le BPPSE EVO & EVO XC est un pont bascule de 3 mètres de largeur développé par Giropes, conçu pour offrir une solution robuste, 
            précise et durable pour le pesage de véhicules lourds dans les environnements industriels et logistiques. 
            Sa structure modulaire en acier galvanisé ou peint garantit une excellente résistance aux conditions climatiques 
            extrêmes et à l'usure due à un usage intensif. Il est disponible en version hors sol ou encastrée, 
            s’adaptant ainsi à différents types d’installations. Ce pont bascule est compatible avec les capteurs numériques de haute 
            précision et peut être intégré facilement à des systèmes d’automatisation, notamment avec le logiciel GESTRUCK. 
            Il représente une solution idéale pour les industries, carrières, exploitations agricoles ou tout site nécessitant 
            une gestion fiable et efficace du pesage des camions."
        image="/images/BPPCE EVO.png"
        fichier="/fichiers/bp-gc-2024-fr-export-v-1-np.pdf"
        ordreImageDroite
      />

      {/* Gestruck */}
      <div className="bg-[#eff2f5]">
      <ProduitBlock
        index={3}
        titre="GESTRUCK - Logiciel de Gestion des Ponts Bascules"
        description="GESTRUCK est un logiciel de gestion conçu spécialement pour les ponts bascules et systèmes de pesage industriels. 
              Développé par Giropes, il permet d’automatiser et de centraliser les opérations de pesage des véhicules, 
              offrant ainsi un gain de temps considérable et une réduction des erreurs humaines. Grâce à son interface conviviale et modulaire, 
              GESTRUCK permet la gestion des entrées/sorties de camions, le suivi des poids bruts et nets, l’émission de tickets de pesée, 
              et l’intégration avec des dispositifs automatiques tels que barrières, capteurs RFID, lecteurs de plaques ou feux tricolores. 
              Il est parfaitement adapté aux besoins des industries, sites logistiques, ou décharges, 
              et peut être personnalisé selon les flux de travail du client. 
              GESTRUCK assure une traçabilité complète des données et contribue à une gestion optimisée des flux logistiques."
        image="/images/gestruck2-pc-banner.png"
        fichier="/fichiers/gestruck-fr.pdf"
      />
      </div>

      {/* Indicateur GI400LCD */}
      <ProduitBlock
        index={4}
        titre="Indicateur GI400LCD BAT LI ION"
        description="L’indicateur GI400LCD BAT LI-ION de Giropes est un terminal de pesage compact, précis et polyvalent, 
            conçu pour une utilisation mobile ou stationnaire. Il se distingue par son écran LCD rétroéclairé, 
            qui offre une excellente lisibilité dans toutes les conditions de luminosité, ainsi que par sa batterie lithium-ion intégrée 
            assurant une autonomie prolongée, idéale pour les applications sans alimentation électrique permanente. Robuste et intuitif, 
            il convient aussi bien aux balances industrielles qu’aux systèmes de pesage embarqués. Il permet également la connexion à divers 
            capteurs et offre des fonctions avancées telles que la tare, le comptage ou le totalisateur."
        image="/images/gi400-gi400i-lcd-bat-li-ion-edit.png"
        fichier="/fichiers/indicateurs-2025-fr-v2-np.pdf"
        ordreImageDroite
      />

      {/* SC-A1 CRT */}
      <div className="bg-[#eff2f5]">
      <ProduitBlock
        index={5}
        titre="SC-A1 CRT"
        description="Le SC-A1 CRT est un système de contrôle d’accès par lecture de cartes RFID, conçu pour sécuriser et automatiser 
            l’accès aux installations industrielles, notamment les ponts bascules, les centres logistiques ou les zones de pesée. 
            Doté d’un lecteur de cartes robuste, d’un écran CRT pour l’affichage des informations et d’un boîtier renforcé 
            adapté aux environnements extérieurs, il permet une identification rapide et fiable des utilisateurs. 
            Grâce à son intégration facile avec les logiciels de gestion (comme Gestruck), il assure un suivi précis des opérations, 
            limite les accès non autorisés, et automatise les flux de véhicules ou de marchandises. Le SC-A1 CRT améliore ainsi la sécurité, 
            la traçabilité et l’efficacité des processus de pesage et de gestion logistique."
        image="/images/SCA1_01-I-LED.png"
        fichier="/fichiers/2 SC-A1 CRT.pdf"
      />
      </div>

      {/* Capteur G8R */}
      <ProduitBlock
        index={6}
        titre="Capteur G8R"
        description="Le G8R de Giropes est un capteur de force de type pont de jauge conçu pour les systèmes de pesage industriels de haute précision. 
              Fabriqué en acier inoxydable, il est particulièrement adapté aux environnements exigeants 
              grâce à sa robustesse et sa résistance à la corrosion. Le G8R est souvent utilisé dans les plateformes de pesée, 
              les balances industrielles et les systèmes de contrôle de processus. Il offre une excellente stabilité à long terme, 
              une précision fiable même sous des charges élevées, et est disponible en plusieurs capacités allant de quelques centaines de kilos 
              à plusieurs tonnes."
        image="/images/capteur-de-pesage-de-compression-g8r-cp-016316166-product.png"
        fichier="/fichiers/1 Capteur g8r-fr-2020-np.pdf"
        ordreImageDroite
      />

      {/* SENSOCAR SP-DC */}
      <div className="bg-[#eff2f5]">
      <ProduitBlock
        index={7}
        titre="SENSOCAR SP-DC"
        description="Le Sensocar SP-DC est un capteur de pesage numérique de haute précision, spécialement conçu pour les applications industrielles 
              exigeantes telles que les ponts bascules, les systèmes de pesage embarqués ou les installations automatisées. 
              Fabriqué en acier inoxydable, il garantit une excellente résistance mécanique et une longue durée de vie, 
              même dans des environnements humides, poussiéreux ou corrosifs. Grâce à sa technologie numérique, 
              il offre une transmission fiable des données, une réduction des interférences et permet une calibration plus simple et rapide. 
              Le SP-DC est également reconnu pour sa stabilité à long terme, sa précision constante et sa compatibilité avec les 
              indicateurs et logiciels de gestion modernes. Il est un choix privilégié pour les installations nécessitant fiabilité, 
              performance et intégration intelligente."
        image="/images/SP-DC.png"
        fichier="/fichiers/2 SP-DC.pdf"
      />
      </div>

    </div>
            <InfoFooterSection />
    </>
  );
}