"use client";

import Image from "next/image";

export default function SecteurAgricoleSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold py-16 text-center">
          <span className="text-[#00bbf0]">Agricole</span>
        </h2>
        <p className="text-lg max-w-5xl mx-auto pb-16 text-center">
          Le secteur agricole nécessite des équipements fiables pour optimiser les récoltes, améliorer la gestion des exploitations
          et assurer un suivi précis de la production. Nous proposons des solutions de pesage, d’automatisation et de gestion
          adaptées aux contraintes spécifiques du monde agricole.
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">
            Installation de systèmes de <span className="text-[#00bbf0]">pesage</span> pour récoltes et engins agricoles
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Nous proposons des systèmes de pesage embarqués et stationnaires conçus pour s&apos;adapter aux différents équipements
              agricoles tels que les moissonneuses-batteuses, les remorques et les bennes. Ces solutions permettent une mesure
              précise des récoltes directement sur le terrain, facilitant ainsi le suivi des rendements et l&apos;optimisation des opérations
              de récolte.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pesage_camion_agricol.png"
              alt="Pesage Agricole"
              width={500}
              height={500}
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Séparateur */}
      <div className="h-3 bg-gray-300 w-full"></div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">
            <span className="text-[#00bbf0]">Pesage</span> des remorques et des camions agricoles
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <p className="text-gray-700 leading-relaxed">
              Pour assurer le respect des charges maximales autorisées et optimiser le transport des produits agricoles,
              nous installons des systèmes de pesage pour remorques et camions. Ces dispositifs, qu&apos;ils soient embarqués ou stationnaires,
              offrent une pesée précise des véhicules chargés, contribuant ainsi à la sécurité routière et à la conformité réglementaire.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/images/pese-essieux-dynamique-agricole.png"
              alt="Pesage Remorque Agricole"
              width={500}
              height={500}
              className="rounded-full mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}