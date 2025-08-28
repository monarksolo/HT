"use client";

import Link from "next/link";
import Image from "next/image";

interface ReussiteItem {
  image: string;
  titre: string;
  lien: string;
}

const reussites: ReussiteItem[] = [
  {
    image: "/images/entrepot.png",
    titre: "Installation de ponts bascules pour Lomé Container Terminal (LCT)",
    lien: "/ltc",
  },
  {
    image: "/images/usine.png",
    titre: "Ponts bascules automatisés à l'usine CDS au Sénégal",
    lien: "/cds",
  },
  {
    image: "/images/coton.png",
    titre: "Montage d'un pont bascule à l'usine SOCOMA à Ouargaya",
    lien: "/socoma",
  },
  {
    image: "/images/granite.png",
    titre: "Pont bascule à la carrière de granite EKS à Ipelcé",
    lien: "/eks",
  },
  {
    image: "/images/immobilier.png",
    titre: "Étalonnage d'un pont bascule à CGE",
    lien: "/cge",
  },
  {
    image: "/images/huile.png",
    titre: "Pèse-essieux au dépôt SONABHY Bobo à Péni",
    lien: "/sonabhy_peni",
  },
  {
    image: "/images/huile.png",
    titre: "Pèse-essieux au dépôt SONABHY à Bingo",
    lien: "/sonabhy_bingo",
  },
  {
    image: "/images/traitement.png",
    titre: "Pèse-essieux au CTVD à Ouaga",
    lien: "/ctvd",
  },
  {
    image: "/images/robot.png",
    titre: "Pèse-essieux mobile au Port Autonome de Cotonou",
    lien: "/port_cotonou",
  },
  {
    image: "/images/route.png",
    titre: "Pèse-essieux pour le ministère des Routes du Sénégal",
    lien: "/minister_routes_senegal",
  },
];

export default function ReussiteSection() {
  return (
    <section className=" bg-white text-gray-900" data-aos="fade-up">
      <div>
        {/* Introduction */}
        <div className="text-center mb-16 bg-[#00204a] text-white py-[90px]">
          <h2 className="text-3xl font-bold mb-4">
            Nos <span className="text-[#00bbf0]">Réussites</span>
          </h2>
          <p className="max-w-2xl mx-auto">
            Chez Hilary Tech, nous croyons que la réussite de nos clients est le reflet de notre engagement et de notre expertise.
            À travers chaque projet, nous apportons des solutions innovantes et adaptées.
          </p>
        </div>

        {/* Description */}
        <div className="text-center mb-10 max-w-7xl mx-auto px-4">
          <p className="max-w-3xl mx-auto text-gray-700">
            Découvrez comment Hilary Tech a su répondre aux besoins variés de ses clients grâce à des solutions innovantes et sur mesure.
          </p>
        </div>

        {/* Réussites */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto px-4 mb-4">
          {reussites.map((item, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden transition hover:scale-[1.02]">
              <div className="w-full h-[300px] relative bg-gray-100">
                <Image
                  src={item.image}
                  alt={item.titre}
                  layout="fill"
                  objectFit="contain" // anciennement "cover"
                  className="rounded-t-lg p-4"
                />
              </div>
              <div className="p-6">
                <h5 className="text-lg font-semibold mb-4">{item.titre}</h5>
                <Link
                  href={item.lien}
                  className="inline-block bg-[#00bbf0] text-white px-5 py-2 rounded hover:bg-[#007fa4] transition"
                >
                  Voir Plus
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}