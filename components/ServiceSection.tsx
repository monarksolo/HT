import Link from "next/link";

export default function ServiceSection() {
  return (
    <section className="relative py-[90px]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Titre Section */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="relative font-bold text-3xl mb-2">
            Nos <span className="text-[#00bbf0]">Services</span>
          </h2>
          <p className="mt-2 max-w-2xl">
            Découvrez l’ensemble de nos prestations conçues pour répondre efficacement à vos
            besoins en matière de technologies, équipements professionnels et solutions commerciales.
            Nous vous accompagnons avec expertise, fiabilité et réactivité.
          </p>
        </div>

        {/* Services */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          
          {/* Service 1 */}
          <div className="flex-1 mt-11 bg-[#f8f8f9] text-center p-5 rounded">
            <div className="flex justify-center items-start w-[125px] h-[75px] mx-auto mb-4">
              <img src="/images/support-informatique.png" alt="" className="max-w-full max-h-full transition-all duration-300" />
            </div>
            <h5 className="font-bold uppercase mb-4">
              PRESTATIONS DE SERVICES INFORMATIQUE BUREAUTIQUE ET CONSOMMABLES
            </h5>
            <p>
              Nous proposons une large gamme de services en informatique et bureautique,
              allant de la configuration de vos systèmes à leur maintenance, en passant par
              la fourniture de consommables de qualité. Que vous soyez une entreprise ou un
              particulier, nous vous garantissons des solutions adaptées à vos besoins
              technologiques quotidiens.
            </p>
          </div>

          {/* Service 2 */}
          <div className="flex-1 mt-11 bg-[#f8f8f9] text-center p-5 rounded">
            <div className="flex justify-center items-start w-[125px] h-[75px] mx-auto mb-4">
              <img src="/images/service-dassistance.png" alt="" className="max-w-full max-h-full transition-all duration-300" />
            </div>
            <h5 className="font-bold uppercase mb-4">
              FOURNITURE, INSTALLATION, MAINTENANCE D&apos;EQUIPEMENTS DE PESAGE
            </h5>
            <p>
              Spécialisés dans les solutions de pesage industriel et commercial, nous assurons
              la fourniture d’équipements performants, leur installation professionnelle,
              ainsi qu’un service de maintenance réactif. Nous vous aidons à garantir
              précision et fiabilité dans toutes vos opérations de mesure.
            </p>
          </div>

          {/* Service 3 */}
          <div className="flex-1 mt-11 bg-[#f8f8f9] text-center p-5 rounded">
            <div className="flex justify-center items-start w-[125px] h-[75px] mx-auto mb-4">
              <img src="/images/panier.png" alt="" className="max-w-full max-h-full transition-all duration-300" />
            </div>
            <h5 className="font-bold uppercase mb-4">COMMERCE GÉNÉRAL</h5>
            <p>
              Grâce à notre activité de commerce général, nous mettons à votre disposition une
              sélection variée de produits et équipements. Nous nous engageons à offrir des
              articles de qualité, à des prix compétitifs, pour répondre aux besoins de divers
              secteurs d’activité.
            </p>
          </div>
        </div>

        {/* Bouton Voir Tout */}
        <div className="flex justify-center mt-11">
          <Link
            href="/secteur"
            className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition"
          >
            Voir Tout
          </Link>
        </div>

      </div>
    </section>
  );
}