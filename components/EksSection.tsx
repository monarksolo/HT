"use client";

import Image from "next/image";

export default function EksSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center max-w-5xl mx-auto">
          Montage d&apos;un pont bascule à la carrière de granite <span className="text-[#00bbf0]">EKS à Ipelcé</span>
        </h2>
        <p className="text-lg max-w-4xl mx-auto pt-4 pb-[90px] text-center">
          Nous avons mené à bien le montage d’un pont bascule à la carrière de granite EKS située à Ipelcé.
          Cet équipement de haute précision permet un contrôle rigoureux des chargements, 
          optimisant ainsi la gestion des flux de matériaux extraits.
        </p>
      </div>

      {/* Images */}
      <div className="py-24 max-w-7xl mx-auto px-4 space-y-16">
        <div className="flex flex-col md:flex-row justify-center items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/EKS1.png"
              alt="EKS Ipelcé 1"
              width={500}
              height={500}
              className="rounded-lg"
            />
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/images/EKS2.png"
              alt="EKS Ipelcé 2"
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