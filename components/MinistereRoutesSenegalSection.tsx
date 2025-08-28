"use client";

import Image from "next/image";

export default function MinistereRoutesSenegalSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto px-4">
          Installation d&apos;un pèse-essieux fixe pour{" "}
          <span className="text-[#00bbf0]">le ministère des Routes du Sénégal à Thillé Boubacar</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center px-4">
          Dans le cadre du renforcement des infrastructures de transport, nous avons procédé à l&apos;installation 
          d&apos;un pèse-essieux fixe pour le ministère des Routes du Sénégal, situé à Thillé Boubacar. 
          Cet équipement permet un contrôle précis du poids des véhicules, garantissant ainsi la sécurité routière 
          et la durabilité des infrastructures.
        </p>
      </div>

      {/* Images */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Image
            src="/images/routes1.png"
            alt="Installation pèse-essieux Thillé Boubacar"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
          <Image
            src="/images/routes2.png"
            alt="Pèse-essieux Ministère des Routes Sénégal"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}