"use client";

import Image from "next/image";

export default function SecteurLogistiqueSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* Titre principal */}
      <div className="bg-[#00204a] text-white py-[90px]">
        <div className="text-center">
          <h2 className="text-3xl font-bold">
            <span className="text-[#00bbf0]">Logistique</span>
          </h2>
        </div>
        <p className="max-w-4xl mx-auto text-center mt-6 text-lg leading-relaxed">
          Optimiser la gestion, le transport et le stockage des marchandises grâce à nos solutions modernes.
        </p>
      </div>

      <div className="space-y-24">
        {/* Bloc 1 */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-center text-2xl font-bold mb-6">
            Installation de systèmes de <span className="text-[#00bbf0]">pesage </span>pour entrepôts
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-700">
                Nous assurons l&apos;installation professionnelle de systèmes de pesage adaptés aux besoins des entrepôts. 
                Que ce soit pour contrôler les flux de marchandises ou optimiser la gestion des stocks, 
                nos solutions garantissent précision, fiabilité et conformité aux normes en vigueur.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/pesage_pour_entrepot.png"
                alt="Pesage entrepôt"
                width={500}
                height={500}
                className="rounded-full mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-3 bg-gray-300 my-12 w-full rounded"></div>

        {/* Bloc 2 */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-center text-2xl font-bold mb-6">
            Maintenance des <span className="text-[#00bbf0]">équipements logistiques</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-700">
                Pour garantir la performance et la durabilité de vos installations, nous proposons des services de maintenance régulière et préventive. 
                Notre équipe intervient rapidement pour diagnostiquer, réparer et optimiser vos équipements logistiques, 
                limitant ainsi les arrêts d&apos;activité.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/maintenance_equipement_pesage.png"
                alt="Maintenance"
                width={500}
                height={500}
                className="rounded-full mx-auto"
              />
            </div>
          </div>
        </div>

        {/* Séparateur */}
        <div className="h-3 bg-gray-300 my-12 w-full rounded"></div>

        {/* Bloc 3 */}
        <div className="max-w-7xl mx-auto px-4 py-24">
          <h2 className="text-center text-2xl font-bold mb-6">
            Automatisation des <span className="text-[#00bbf0]">flux logistiques</span>
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <p className="text-gray-700">
                Grâce à nos solutions innovantes, nous vous aidons à automatiser vos processus logistiques. 
                De la gestion des pesées à la transmission automatique des données, nous vous permettons de fluidifier vos opérations, 
                de réduire les erreurs et d&apos;améliorer l&apos;efficacité globale de votre chaîne logistique.
              </p>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/automatisation_pesage.png"
                alt="Automatisation"
                width={500}
                height={500}
                className="rounded-full mx-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}