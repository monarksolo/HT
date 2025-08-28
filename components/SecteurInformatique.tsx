"use client";

import Image from "next/image";

export default function SecteurInformatique() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      {/* En-tête */}
      <div className="bg-[#00204a] text-white">
        <h2 className="text-3xl font-bold pt-[90px] text-center">
          <span className="text-[#00bbf0]">Informatique</span>
        </h2>
        <p className="text-lg max-w-5xl mx-auto pt-4 pb-[90px] text-center">
          Dans un monde où la performance informatique est au cœur de chaque activité, nous proposons des services complets pour accompagner les entreprises dans la gestion, la sécurité et l’optimisation de leurs systèmes d&apos;information. De l’infrastructure matérielle aux logiciels métiers, nous intervenons à tous les niveaux pour garantir efficacité et fiabilité.
        </p>
      </div>

      <div className="space-y-24 py-24">

        {/* Bloc 1 */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-4">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Vente et installation de matériel <span className="text-[#00bbf0]">informatique et bureautique</span>
            </h3>
            <p className="text-gray-700">
              Nous vous accompagnons dans la fourniture et l’installation de votre parc informatique : ordinateurs, imprimantes, serveurs, périphériques réseaux, équipements bureautiques et solutions de sauvegarde. Notre expertise garantit une mise en place rapide, sécurisée et conforme aux exigences de votre environnement de travail.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/vente_equipement.png"
              alt="Vente matériel informatique"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="h-3 bg-gray-300 my-8 w-full"></div>

        {/* Bloc 2 */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-4">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-center">
              <span className="text-[#00bbf0]">Maintenance et assistance</span> technique
            </h3>
            <p className="text-gray-700">
              Afin d’assurer la continuité de vos activités, nous proposons des contrats de maintenance sur vos équipements informatiques. Nos techniciens interviennent sur site ou à distance pour diagnostiquer, résoudre les pannes, faire les mises à jour nécessaires et conseiller vos équipes sur les bonnes pratiques.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/assistance_technique.png"
              alt="Assistance technique"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>

        <div className="h-3 bg-gray-300 my-8 w-full"></div>

        {/* Bloc 3 */}
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-7xl mx-auto px-4">
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-4 text-center">
              Intégration de <span className="text-[#00bbf0]">logiciels de gestion</span> (ERP, CRM, etc.)
            </h3>
            <p className="text-gray-700">
              Optimisez la gestion de votre entreprise grâce à nos solutions logicielles intégrées. Nous installons et configurons des ERP pour gérer vos ressources (stocks, ventes, RH) ainsi que des CRM pour améliorer votre relation client. Nos services incluent également la formation des utilisateurs et l’assistance continue.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src="/images/logiciel_grestion.png"
              alt="Logiciel de gestion"
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}