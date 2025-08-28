"use client";

import Image from "next/image";

export default function SecteurIndustrieSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
<section className="bg-white text-gray-900" data-aos="fade-up">
  {/* En-tête */}
  <div className="bg-[#00204a] text-white py-16">
    <h2 className="text-3xl font-bold text-center mb-6">
      <span className="text-[#00bbf0]">Industrie</span>
    </h2>
    <p className="text-lg max-w-5xl mx-auto text-center leading-relaxed">
      Nous intervenons auprès des industries pour fournir des équipements de pesage robustes,
      des solutions d’automatisation et des outils de contrôle qualité.
    </p>
  </div>
</section>

      {/* Bloc 1 */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">
            <span className="text-[#00bbf0]">Capteurs de force</span> pour machines industrielles
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Nous installons des capteurs de force précis et robustes pour vos équipements industriels
            afin de garantir la mesure fiable des charges, forces ou contraintes exercées sur vos machines.
            Nos solutions s’intègrent parfaitement dans les environnements exigeants, améliorant ainsi
            le contrôle qualité, la sécurité des opérations et la productivité de vos lignes de production.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/capteur-de-pesage-de-compression-g8r-cp-016316166-product.png"
            alt="Capteur de force"
            width={500}
            height={500}
            className="rounded-full object-contain"
          />
        </div>
      </div>

      {/* Bloc 2 */}
      <div className="h-3 bg-gray-300 my-12 w-full rounded"></div>
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h3 className="text-xl font-bold mb-4 text-center">
            <span className="text-[#00bbf0]">Maintenance des équipements de pesage</span> en environnement difficile
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Nos équipes assurent l&apos;entretien et la réparation des équipements de pesage utilisés
            dans des conditions extrêmes (poussière, humidité, températures élevées, etc.).
            Grâce à des interventions régulières et des protocoles adaptés, nous prolongeons la durée
            de vie de vos dispositifs tout en garantissant leur précision et leur conformité aux normes
            industrielles.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/images/maintenance equipement.png"
            alt="Maintenance en environnement difficile"
            width={500}
            height={500}
            className="rounded-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}