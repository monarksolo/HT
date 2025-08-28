"use client";

import Image from "next/image";

export default function SonabhyBingoSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Installation d&apos;un pèse-essieux au dépôt de la{" "}
          <span className="text-[#00bbf0]">SONABHY à Bingo</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Nous avons réalisé avec succès l’installation d’un pèse-essieux au dépôt de la SONABHY à Bingo. 
          Cet équipement de haute précision permet de contrôler efficacement le poids des véhicules, 
          assurant une gestion optimisée des flux et une sécurité renforcée lors des opérations de chargement.
        </p>
      </div>

      {/* Images */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Image
            src="/images/bingo1.png"
            alt="Pèse-essieux SONABHY Bingo - Image 1"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
          <Image
            src="/images/bingo2.png"
            alt="Pèse-essieux SONABHY Bingo - Image 2"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}