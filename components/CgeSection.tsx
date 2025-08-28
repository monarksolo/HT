"use client";

import Image from "next/image";

export default function CgeSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Étalonnage d&apos;un pont bascule à <span className="text-[#00bbf0]">CGE après installation</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Dans le cadre de notre engagement envers la précision et la conformité industrielle, 
          nous avons réalisé l’étalonnage d’un pont bascule pour CGE après son installation. 
          Cette opération garantit une mesure exacte et fiable des charges, conforme aux normes internationales.
        </p>
      </div>

      {/* Image */}
      <div className="py-24 max-w-7xl mx-auto px-4">
        <div className="flex justify-center">
          <Image
            src="/images/CGE1.png"
            alt="Pont bascule CGE"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}