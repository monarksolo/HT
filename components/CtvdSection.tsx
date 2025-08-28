"use client";

import Image from "next/image";

export default function CtvdSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Installation d&apos;un pèse-essieux au{" "}
          <span className="text-[#00bbf0]">
            Centre de Traitement et de Valorisation des Déchets (CTVD) à Ouaga
          </span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Dans le cadre de l&apos;optimisation des opérations de gestion des déchets, nous avons procédé à l’installation 
          d’un pèse-essieux au Centre de Traitement et de Valorisation des Déchets (CTVD) à Ouaga. 
          Cet équipement de pesage permet un contrôle précis et rapide des chargements entrants et sortants, 
          contribuant ainsi à une gestion plus efficace et sécurisée des flux.
        </p>
      </div>

      {/* Galerie d'images */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Image
            src="/images/ctvd1.png"
            alt="CTVD Ouaga - Image 1"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
          <Image
            src="/images/ctvd2.png"
            alt="CTVD Ouaga - Image 2"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}