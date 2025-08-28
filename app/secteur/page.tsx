
import SecteurBlock from "@/components/SecteurBlock";
import AOSWrapper from "@/components/AOSWrapper";
import Header from "@/components/Header";
import InfoFooterSection from "@/components/InfoFooterSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteurs d'activité | Hilary Tech",
  description:
    "Hilary Tech accompagne différents secteurs d’activité – logistique, industrie, carrières, élevage, agriculture, gestion des déchets et informatique – avec des solutions innovantes et fiables pour optimiser leurs opérations.",
  keywords: [
    "Hilary Tech",
    "secteurs d'activité",
    "logistique",
    "industrie",
    "carrières d'arides",
    "élevage",
    "agriculture",
    "gestion des déchets",
    "informatique",
    "solutions industrielles",
    "optimisation des opérations",
  ],
  openGraph: {
    title: "Secteurs d'activité | Hilary Tech",
    description:
      "Découvrez les secteurs d’activité couverts par Hilary Tech et comment nos solutions innovantes et fiables aident à transformer et optimiser les opérations de nos clients.",
    url: "https://ton-site.com/secteurs", // remplace par ton vrai lien
    siteName: "Hilary Tech",
    images: [
      {
        url: "https://ton-site.com/images/secteurs-hilarytech.jpg", // image représentative
        width: 1200,
        height: 630,
        alt: "Secteurs d'activité accompagnés par Hilary Tech",
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

export default function SecteurPage() {
  return (
        <>
      <AOSWrapper />
    <div className="min-h-screen flex flex-col">
        <Header />
    <main className="flex-grow bg-white text-black">
      {/* En-tête Secteurs */}
      <section className="py-[90px] bg-[#00204a] text-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold"><span className="text-[#00bbf0]">Secteurs</span></h2>
          </div>
          <p className="text-lg text-center max-w-3xl mx-auto leading-relaxed">
            Notre expertise s’étend sur plusieurs secteurs d’activité, chacun avec ses besoins spécifiques et ses défis techniques. 
            Grâce à des solutions innovantes, adaptées et fiables, nous accompagnons nos clients dans la transformation et 
            l’optimisation de leurs opérations. Que ce soit dans la logistique, l’industrie, les carrières d’arides, l’élevage, l’agriculture, 
            la gestion des déchets ou le secteur informatique, nous mettons notre savoir-faire au service de votre performance.
          </p>
        </div>
      </section>

      {/* Blocs Secteurs */}
      <SecteurBlock
        titre="Logistique"
        image="/images/Logistique.png"
        icone="/images/camion-de-livraison.png"
        href="/secteur-logistique"
        description="Nous accompagnons les acteurs de la logistique en leur fournissant des solutions fiables pour le suivi, 
            la gestion et la traçabilité des marchandises. Nos équipements et logiciels assurent un contrôle optimal des flux 
            et facilitent la gestion des opérations de transport et de stockage."
      />
      <div className="h-3 bg-gray-300 my-12 rounded"></div>

      <SecteurBlock
        titre="Industrie"
        image="/images/industrie.png"
        icone="/images/pouvoir-nucleaire.png"
        href="/secteur-industrie"
        description="Dans le secteur industriel, nous proposons des équipements robustes adaptés aux environnements exigeants. 
            De la pesée industrielle à l'automatisation, nous aidons les entreprises à optimiser leurs processus de production 
            avec précision et efficacité."
      />
      <div className="h-3 bg-gray-300 my-12 rounded"></div>

      <SecteurBlock
        titre="Arides"
        image="/images/arides.png"
        icone="/images/cactus.png"
        href="/secteur-arides"
        description="Nous offrons des solutions spécialement conçues pour les carrières, sablières et autres sites de production d’arides. 
            Grâce à des systèmes de pesage performants et des logiciels de gestion dédiés, nous facilitons le suivi des matériaux 
            et le contrôle des chargements."
      />
      <div className="h-3 bg-gray-300 my-12 rounded"></div>

      <SecteurBlock
        titre="Élevage"
        image="/images/élevage.png"
        icone="/images/cow.png"
        href="/secteur-elevage"
        description="Nous apportons aux éleveurs des outils modernes pour la gestion du bétail, incluant des systèmes de pesée animale, 
            de suivi et de contrôle. Nos solutions permettent une meilleure maîtrise des performances et de la rentabilité de l’élevage."
      />
      <div className="h-3 bg-gray-300 my-12 rounded"></div>

      <SecteurBlock
        titre="Agricole"
        image="/images/Agricole.png"
        icone="/images/agricoleicon.png"
        href="/secteur-agricole"
        description="Nos équipements accompagnent les agriculteurs dans leurs activités quotidiennes : pesée de récoltes, 
            gestion des intrants et automatisation des tâches. Nous contribuons à améliorer la productivité et la qualité de la gestion agricole."
      />
      <div className="h-3 bg-gray-300 my-12 rounded"></div>

      <SecteurBlock
        titre="Déchets"
        image="/images/Déchet.png"
        icone="/images/corbeille.png"
        href="/secteur-dechets"
        description="Nous proposons des solutions pour la gestion et le traitement des déchets, intégrant des systèmes de pesée et de contrôle. 
            Nos outils permettent une traçabilité précise, essentielle pour les entreprises de collecte et de recyclage."
      />
      <div className="h-3 bg-gray-300 my-12 rounded"></div>

      <SecteurBlock
        titre="Informatique"
        image="/images/informatique.png"
        icone="/images/assurance-informatique.png"
        href="/secteur-informatique"
        description="Nous intervenons dans la mise en place de solutions informatiques adaptées : réseaux, maintenance, 
            logiciels professionnels et services bureautiques. Notre objectif est de fournir aux entreprises une infrastructure numérique stable, 
            sécurisée et évolutive."
      />
     </main>
      <InfoFooterSection />
   </div>
        </>
  );
}