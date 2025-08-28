import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="relative py-[90px] bg-[#00204a] text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">

        {/* Titre */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="relative font-bold text-3xl mb-2">
            A Propos de <span className="text-[#00bbf0]">Nous</span>
          </h2>
          <p className="mt-2 max-w-2xl">
            Depuis notre création, nous mettons notre expertise au service de la performance de nos
            clients. Notre engagement : fournir des solutions fiables, innovantes et adaptées à
            chaque besoin.
          </p>
        </div>

        {/* Contenu */}
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Image */}
          <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
            <img
              src="/images/a propos de nous.png"
              alt="À propos"
              className="rounded-full w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover"
            />
          </div>

          {/* Détails */}
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-bold mb-4">Nous Somme Hilary Tech</h3>
            <p className="mb-4">
              Notre entreprise est spécialisée dans plusieurs domaines complémentaires : les
              services informatiques et bureautiques, la fourniture et la maintenance
              d’équipements de pesage, ainsi que le commerce général.
            </p>
            <p className="mb-4">
              Grâce à une équipe qualifiée et dynamique, nous accompagnons les entreprises et
              institutions dans la gestion de leurs besoins techniques et logistiques.
            </p>
            <p className="mb-4">
              Nous plaçons la satisfaction client au cœur de notre démarche, en offrant un service
              personnalisé, une grande réactivité, et des produits soigneusement sélectionnés pour
              leur fiabilité.
            </p>
            <p className="mb-6">
              Avec une vision tournée vers l’avenir, nous innovons sans cesse pour vous offrir des
              solutions performantes et durables.
            </p>
            <Link
              href="/propos"
              className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition"
            >
              Lire Plus
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}