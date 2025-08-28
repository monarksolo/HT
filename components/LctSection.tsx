"use client";

import Image from "next/image";

export default function LctSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <div className="text-center pt-[90px] pb-[40px]">
          <h2 className="text-3xl font-bold">
            Installation de ponts bascules pour{" "}
            <span className="text-[#00bbf0]">Lomé Container Terminal (LCT)</span>
          </h2>
        </div>
        <p className="text-lg max-w-5xl mx-auto text-center pb-[90px]">
          Dans le cadre de notre engagement à fournir des solutions industrielles fiables et performantes,
          nous avons réalisé avec succès l’installation de ponts bascules modernes au Lomé Container Terminal (LCT).
          Ces équipements essentiels optimisent le contrôle des flux de marchandises et renforcent l’efficacité des opérations portuaires.
        </p>
      </div>

      <div className="space-y-24 max-w-7xl mx-auto px-4 py-24">
        {/* Bloc 1 - 2 images */}
        <div className="flex flex-col md:flex-row justify-center gap-10">
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/pesage_pour_entrepot.png"
              alt="Pesage Entrepôt"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/Pont_bascule_LTC.png"
              alt="Pont bascule LCT"
              width={500}
              height={500}
              className="rounded"
            />
          </div>
        </div>

        <div className="h-2 bg-gray-300 w-full rounded"></div>

        {/* Bloc 2 - 1 image */}
        <div className="flex justify-center">
          <Image
            src="/images/Pont_bascule_LTC1.png"
            alt="Pont bascule LCT complément"
            width={500}
            height={500}
            className="rounded"
          />
        </div>
      </div>
    </section>
  );
}