"use client";

import Image from "next/image";

export default function ProposSection() {
  return (
    <section className="bg-white text-gray-900" data-aos="fade-up">
      <div>
        <div className="bg-[#00204a] text-white py-[90px]">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold">
              Qui <span className="text-[#00bbf0]">sommes-nous ?</span>
            </h2>
          </div>
          <p className="max-w-4xl mx-auto text-center mb-24 text-lg leading-relaxed">
            Hilary Tech est une entreprise spécialisée dans les solutions technologiques, industrielles et commerciales. 
            Depuis notre création, nous nous engageons à fournir des produits et services de haute qualité, 
            adaptés aux besoins variés de nos clients, tout en garantissant un accompagnement personnalisé et un service après-vente 
            irréprochable.
          </p>
        </div>

        <div className="space-y-24">
          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Notre <span className="text-[#00bbf0]">Mission</span></h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700 leading-relaxed">
              Notre mission est de simplifier et optimiser les opérations de nos clients grâce à des technologies de pointe et des équipements 
              fiables. Nous visons à améliorer l&apos;efficacité, la productivité et la sécurité dans les secteurs de l&apos;industrie, de la logistique, 
              de l&apos;agriculture, de l&apos;élevage et de la gestion des déchets.
            </p>
          </div>
          <div className="h-3 w-full bg-gray-300/80 my-12 rounded transition-all duration-300"></div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Nos <span className="text-[#00bbf0]">Valeurs</span></h2>
            <div className="max-w-3xl mx-auto space-y-6 text-gray-700">
              <div>
                <h4 className="font-bold text-[#00bbf0]">- Innovation</h4>
                <p>Nous restons à l&apos; affût des dernières technologies pour proposer des solutions performantes.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#00bbf0]">- Fiabilité</h4>
                <p>Nous sélectionnons des équipements robustes et durables.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#00bbf0]">- Proximité</h4>
                <p>Nous privilégions un contact direct et personnalisé avec chacun de nos clients.</p>
              </div>
              <div>
                <h4 className="font-bold text-[#00bbf0]">- Qualité de service</h4>
                <p>Nous mettons un point d&apos;honneur à garantir un service après-vente réactif et efficace.</p>
              </div>
            </div>
          </div>
          <div className="h-3 w-full bg-gray-300/80 my-12 rounded transition-all duration-300"></div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Notre <span className="text-[#00bbf0]">Équipe</span></h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700">
              Une équipe qualifiée et dynamique, composée d’experts techniques, d’ingénieurs et de conseillers expérimentés, 
              est à votre service pour répondre à toutes vos attentes. Chacun de nos collaborateurs est formé pour vous accompagner dans le choix, 
              l&apos;installation et la maintenance de vos équipements.
            </p>
          </div>
          <div className="h-3 w-full bg-gray-300/80 my-12 rounded transition-all duration-300"></div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Nos <span className="text-[#00bbf0]">Partenaires</span></h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700 mb-6">
              Nous travaillons avec des marques reconnues mondialement pour garantir des produits de haute qualité. 
              Notre réseau de partenaires nous permet de vous proposer les meilleures solutions du marché.
            </p>
            <div className="flex justify-center">
              <Image src="/images/partenaire.png" alt="Partenaires" width={800} height={500} />
            </div>
          </div>
          <div className="h-3 w-full bg-gray-300/80 my-12 rounded transition-all duration-300"></div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Engagement <span className="text-[#00bbf0]">Environnemental</span></h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700">
              Conscients de l&apos;importance de l&apos;environnement, nous nous engageons à proposer des équipements et des solutions respectueuses de 
              l&apos;écosystème, notamment dans les secteurs de l&apos;agriculture et de la gestion des déchets.
            </p>
          </div>
          <div className="h-4 w-full bg-gray-300/80 my-12 rounded transition-all duration-300"></div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Pourquoi <span className="text-[#00bbf0]">nous choisir ?</span></h2>
            <ul className="list-disc max-w-2xl mx-auto text-gray-700 space-y-3 pl-6">
              <li>Une expertise éprouvée dans divers secteurs.</li>
              <li>Des solutions sur mesure pour chaque projet.</li>
              <li>Un suivi client rigoureux et un service après-vente réactif.</li>
              <li>Des équipements de qualité, certifiés et durables.</li>
            </ul>
          </div>
          <div className="h-3 w-full bg-gray-300/80 my-12 rounded transition-all duration-300"></div>

          <div className="max-w-7xl mx-auto px-4 py-24">
            <h2 className="text-center text-2xl font-bold mb-4">Contactez<span className="text-[#00bbf0]">-nous</span></h2>
            <p className="max-w-3xl mx-auto text-center text-gray-700">
              Pour toute information complémentaire ou pour discuter de vos besoins, n&apos;hésitez pas à nous contacter. 
              Notre équipe se tient prête à vous accompagner dans vos projets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}