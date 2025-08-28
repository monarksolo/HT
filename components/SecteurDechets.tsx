"use client";

import Image from "next/image";

export default function SecteurDechets() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center">
          <span className="text-[#00bbf0]">Déchets</span>
        </h2>
        <p className="text-lg max-w-5xl mx-auto pt-4 pb-[90px] text-center">
          La gestion efficace des déchets est un enjeu majeur pour les entreprises et collectivités. Grâce à nos solutions de pesage
          et d&apos;automatisation, nous aidons les acteurs du secteur à optimiser la collecte, le tri et la valorisation des déchets,
          tout en respectant les normes environnementales.
        </p>
      </div>

      <div className="space-y-24">
        {/* Bloc 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-4 py-24">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Systèmes de <span className="text-[#00bbf0]">pesage</span> pour bennes à ordures et camions de collecte
            </h3>
            <p className="text-gray-700">
              Nos systèmes de pesage embarqués permettent de mesurer précisément la quantité de déchets collectés par les camions. Ils garantissent
              un suivi rigoureux des volumes et facilitent la facturation au poids, améliorant ainsi la transparence et l&apos;efficacité des opérations.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/pesage_benne_ordure.png"
              alt="Pesage benne à ordures"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="h-3 bg-gray-300 my-8 w-full"></div>

        {/* Bloc 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-4 py-24">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-center">
              <span className="text-[#00bbf0]">Ponts bascules</span> pour centres de tri et décharges
            </h3>
            <p className="text-gray-700">
              Nous installons des ponts bascules robustes et fiables pour les centres de tri, stations de transfert et sites d’enfouissement.
              Ils permettent de contrôler précisément les quantités de déchets entrants et sortants, contribuant à une meilleure gestion
              logistique et environnementale.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/centre_tri.png"
              alt="Centre de tri"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}