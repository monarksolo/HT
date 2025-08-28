"use client";

import Image from "next/image";

export default function CdsSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Installation de ponts bascules automatisés pour le chargement en vrac de ciment à{" "}
          <span className="text-[#00bbf0]">l&apos;usine des Ciments du Sahel (CDS) au Sénégal</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Nous avons conduit avec succès l’installation de ponts bascules automatisés dédiés au chargement en vrac de ciment à l’usine 
          des Ciments du Sahel (CDS) au Sénégal. Cette solution innovante permet d’assurer une pesée précise et rapide, tout en optimisant 
          la productivité et la sécurité des opérations.
        </p>
      </div>

      {/* Images */}
      <div className="py-24 max-w-7xl mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/CDS1.png" alt="CDS 1" width={500} height={500} className="rounded-lg" />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image src="/images/CDS2.png" alt="CDS 2" width={500} height={500} className="rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}