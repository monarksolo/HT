"use client";

import Image from "next/image";

export default function SonabhyPeniSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Installation d&apos;un pèse-essieux au nouveau dépôt de la{" "}
          <span className="text-[#00bbf0]">SONABHY Bobo à Péni</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Dans le cadre de l’extension de ses infrastructures, la SONABHY nous a confié
          l’installation d’un pèse-essieux au nouveau dépôt situé à Bobo, Péni. Cet équipement
          permet un contrôle précis des chargements, optimisant la gestion logistique et renforçant
          la sécurité des opérations.
        </p>
      </div>

      {/* Images */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 justify-center">
          <Image
            src="/images/peni1.png"
            alt="Pèse-essieux SONABHY Péni - Image 1"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
          <Image
            src="/images/peni2.png"
            alt="Pèse-essieux SONABHY Péni - Image 2"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
}