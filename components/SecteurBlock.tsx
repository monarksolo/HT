import Link from "next/link";
import Image from "next/image";

interface SecteurBlockProps {
  titre: string;
  image: string;
  description: string;
  href: string;
  icone?: string;
}

export default function SecteurBlock({ titre, image, description, href, icone }: SecteurBlockProps) {
  return (
    <section className="py-[90px]" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center justify-center gap-3">
            {icone && (
              <Image
                src={icone}
                alt={`Logo ${titre}`}
                width={50}
                height={50}
                className="inline-block"
              />
            )}
            <span>{titre}</span>
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <div className="text-lg text-justify leading-relaxed">
              <p className="mb-6">{description}</p>
              <Link href={href} className="inline-block px-6 py-2.5 bg-[#00bbf0] text-white rounded hover:bg-[#007fa4] transition">
                Plus de Détails
              </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <Image
              src={image}
              alt={titre}
              width={500}
              height={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}