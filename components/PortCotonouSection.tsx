"use client";

import Image from "next/image";

export default function PortCotonouSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Installation d&apos;un pèse-essieux mobile au{" "}
          <span className="text-[#00bbf0]">Port Autonome de Cotonou au Bénin</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Dans le cadre de l’optimisation des opérations logistiques, nous avons réalisé l’installation 
          d’un pèse-essieux mobile au Port Autonome de Cotonou, au Bénin. 
          Cet équipement flexible et performant permet un contrôle précis des chargements directement sur site, 
          facilitant ainsi la gestion des flux de marchandises.
        </p>
      </div>

      {/* Galerie d'images */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Image
            src="/images/cotonou1.png"
            alt="Port Cotonou - Image 1"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
          <Image
            src="/images/cotonou2.png"
            alt="Port Cotonou - Image 2"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}