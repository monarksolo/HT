"use client";

import Image from "next/image";

export default function ElevageSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white pt-[90px] pb-16 px-4">
        <h2 className="text-3xl font-bold text-center">
          <span className="text-[#00bbf0]">Élevage</span>
        </h2>
        <p className="text-lg max-w-5xl mx-auto pt-8 text-center">
          Dans le secteur de l’élevage, un suivi précis du poids des animaux est essentiel pour la gestion sanitaire, l&apos;alimentation,
          la reproduction et la commercialisation. Nous proposons des solutions de pesage adaptées aux élevages bovins, ovins,
          porcins et avicoles, garantissant confort, fiabilité et efficacité pour les éleveurs.
        </p>
      </div>

      {/* Section 1 */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center"><span className="text-[#00bbf0]">Installation de systèmes de pesage</span> pour animaux</h2>
            <p className="text-gray-700 leading-relaxed">
              Nous installons des balances adaptées à chaque type d’élevage (balances pour bétail, cages de pesée, plateformes de pesage).
              Nos équipements sont conçus pour minimiser le stress des animaux et permettre des mesures précises et rapides.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/pesage_animaux.png"
              alt="Pesage pour animaux"
              width={500}
              height={500}
              className="rounded-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="h-3 bg-gray-300 my-12 w-full"></div>

      {/* Section 2 */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center">Suivi de <span className="text-[#00bbf0]">croissance</span> et gestion <span className="text-[#00bbf0]">sanitaire</span></h2>
            <p className="text-gray-700 leading-relaxed">
              Grâce à nos solutions de pesage connectées, vous pouvez suivre l’évolution du poids de vos animaux,
              détecter rapidement d’éventuels problèmes de santé, ajuster l&apos;alimentation et optimiser vos rendements d’élevage.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/cage_check_croissance.png"
              alt="Suivi de croissance"
              width={500}
              height={500}
              className="rounded-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}