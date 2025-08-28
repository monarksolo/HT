"use client";

import Image from "next/image";

export default function SecteurAridesSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
<div className="bg-[#00204a] text-white">
  <h2 className="text-3xl font-bold pt-16 pb-6 text-center">
    <span className="text-[#00bbf0]">Arides</span>
  </h2>
  <p className="text-lg max-w-5xl mx-auto pb-16 text-center">
    Notre entreprise propose des solutions robustes et performantes pour optimiser l’extraction,
    le transport et la gestion des matériaux, même dans des environnements difficiles et poussiéreux.
  </p>
</div>

      {/* Section 1 */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-10">
          Installation de <span className="text-[#00bbf0]">ponts bascules</span> pour carrières
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Nous installons des ponts bascules spécialement conçus pour supporter les conditions extrêmes des sites d&apos;extraction.
              Nos équipements assurent une pesée fiable et précise des camions transportant des charges lourdes telles que le sable,
              le gravier ou la roche, contribuant à une meilleure gestion des flux de matériaux.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/installation_pont_bascule.png"
              alt="Pont bascule"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-3 bg-gray-300 my-12 w-full"></div>

      {/* Section 2 */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-10">
          Automatisation du <span className="text-[#00bbf0]">pesage</span> dans les sites d&apos;extraction
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Nous proposons des solutions d&apos;automatisation du pesage permettant d’accélérer les opérations tout en réduisant les risques
              d’erreurs humaines. Grâce à des systèmes de gestion intelligents et à des interfaces simples d’utilisation,
              vos chargements et vos pesées deviennent plus fluides et plus sûrs.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/Automatisation du pesage.png"
              alt="Automatisation"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-3 bg-gray-300 my-12 w-full"></div>

      {/* Section 3 */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-10">
          Maintenance et <span className="text-[#00bbf0]">étalonnage</span> des équipements
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Nos équipes techniques interviennent régulièrement pour l&apos;entretien, la vérification et l&apos;étalonnage de vos équipements de pesage.
              Nous veillons à garantir leur précision et leur bon fonctionnement, même dans des environnements poussiéreux, humides
              ou soumis à de fortes variations de température.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/maintenance et etalonage.png"
              alt="Étalonnage"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="h-3 bg-gray-300 my-12 w-full"></div>

      {/* Section 4 */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <h2 className="text-center text-2xl font-bold mb-10">
          Gestion <span className="text-[#00bbf0]">intelligente</span> des flux de matériaux
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Grâce à nos logiciels de gestion dédiés, vous pouvez suivre en temps réel les volumes extraits, gérer vos stocks,
              éditer des rapports et optimiser votre logistique. Notre objectif est de vous fournir une vision claire de votre activité
              pour prendre des décisions plus rapides et plus efficaces.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/logiciel.png"
              alt="Logiciel"
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}