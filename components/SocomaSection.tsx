"use client";

import Image from "next/image";

export default function SocomaSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Montage d&apos;un pont bascule à <span className="text-[#00bbf0]">l&apos;usine SOCOMA à Ouargaya</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Nous avons réalisé le montage d’un pont bascule performant et robuste pour l’usine SOCOMA à Ouargaya. 
          Cet équipement, conçu pour supporter des charges importantes, garantit une pesée précise et sécurisée, 
          optimisant ainsi les opérations logistiques sur le site.
        </p>
      </div>

      {/* Images */}
      <div className="py-24 max-w-7xl mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/ouargaye1.png"
              alt="SOCOMA Ouargaya 1"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/ouargaye2.png"
              alt="SOCOMA Ouargaya 2"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}