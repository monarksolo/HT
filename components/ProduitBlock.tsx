
import Image from "next/image"; // ✅ Import nécessaire

interface ProduitBlockProps {
  titre: string;
  description: string;
  image: string;
  fichier: string;
  ordreImageDroite?: boolean;
  index: number;
}

export default function ProduitBlock({ index, titre, description, image, fichier, ordreImageDroite }: ProduitBlockProps) {
  return (
    <section className="py-[90px]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          
          {!ordreImageDroite && (
            <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
              <Image
                src={image}
                alt={titre}
                width={500} // ✅ Dimensions nécessaires
                height={500}
                className="rounded-full w-[300px] md:w-[500px] object-cover"
              />
            </div>
            
          )}

<div
  className={`md:w-1/2 md:pl-10 p-6 rounded-lg ${
    index % 2 === 0
      ? "text-white" // noir sur fond blanc
      : "text-black" // blanc sur fond bleu foncé
  }`}
>
  <h2 className="text-2xl md:text-3xl font-bold mb-4">{titre}</h2>
  <p className="mb-6">{description}</p>
  <a
    href={fichier}
    target="_blank"
    className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition"
  >
    Plus de Détails
  </a>
</div>

          {ordreImageDroite && (
            <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
              <Image
                src={image}
                alt={titre}
                width={500}
                height={500}
                className="rounded-full w-[300px] md:w-[500px] object-cover"
              />
            </div>
          )}

        </div>
      </div>
    </section>
  );
}