import Link from "next/link";

export default function WhySection() {
  return (
    <section className="relative py-[90px]" data-aos="fade-right">
      <div className="max-w-7xl mx-auto px-4">

        {/* Titre */}
        <div className="flex flex-col items-center text-center mb-10">
          <h2 className="relative font-bold text-3xl mb-2">
            Pourquoi <span className="text-[#00bbf0]">Nous</span> Choisir ?
          </h2>
        </div>

        {/* Contenu */}
        <div className="flex flex-col md:flex-row md:space-x-6 items-center justify-center">

          {/* Bloc 1 */}
          <div className="flex-1 mt-11 text-center">
            <div className="flex justify-center items-center mb-6">
              <img src="/images/w1.png" alt="Expert en Management" className="w-[125px] h-[125px]" />
            </div>
            <h5 className="font-bold text-xl mb-4">Expert en Management</h5>
            <p>
              Forts d’une expérience reconnue, nous mettons à votre disposition une équipe compétente et rigoureuse dans la gestion de projets. 
              Notre savoir-faire en management nous permet de coordonner efficacement chaque étape, pour des résultats à la hauteur de vos attentes.
            </p>
          </div>

          {/* Bloc 2 */}
          <div className="flex-1 mt-11 text-center">
            <div className="flex justify-center items-center mb-6">
              <img src="/images/w2.png" alt="Investissement Sûr" className="w-[125px] h-[125px]" />
            </div>
            <h5 className="font-bold text-xl mb-4">Investissement Sûr</h5>
            <p>
              Choisir nos services, c’est faire le choix de la sécurité et de la fiabilité. Nous proposons des solutions durables, 
              avec un excellent rapport qualité-prix, qui garantissent un retour sur investissement mesurable et tangible.
            </p>
          </div>

          {/* Bloc 3 */}
          <div className="flex-1 mt-11 text-center">
            <div className="flex justify-center items-center mb-6">
              <img src="/images/w4.png" alt="Client Satisfait" className="w-[125px] h-[125px]" />
            </div>
            <h5 className="font-bold text-xl mb-4">Client Satisfait</h5>
            <p>
              La satisfaction de nos clients est notre plus grande réussite. Grâce à notre approche personnalisée et notre sens de l’écoute, 
              nous avons su fidéliser une clientèle exigeante, convaincue par notre professionnalisme et notre réactivité.
            </p>
          </div>

        </div>

        {/* Bouton */}
        <div className="flex justify-center mt-11">
          <Link href="/propos" className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition">
            Lire Plus
          </Link>
        </div>

      </div>
    </section>
  );
}