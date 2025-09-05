import Link from "next/link";
import Image from "next/image";

export default function InfoFooterSection() {
  return (
    <>
      {/* Info Section */}
      <div data-aos="fade-up">
      <section className="relative py-[75px] bg-[#00204a] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-10 md:space-y-0">

            {/* Contact Info */}
            <div className="md:w-1/3">
              <div className="mb-6">
                <h4 className="text-xl font-bold mb-4">Adresses</h4>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <i className="fa fa-phone" aria-hidden="true"></i>
                    <span className="group-hover:translate-x-1 group-hover:text-[#77B5FE] transition-all duration-200">Tel : +226 65190708 / 78268201 / 71976627</span>
                  </div>
<a
  href="mailto:contact@hilary-tech.com"
  className="flex items-center space-x-2 group transition-all duration-200"
>
  <i className="fa fa-envelope group-hover:text-[#77B5FE] transition"></i>
  <span className="group-hover:translate-x-1 group-hover:text-[#77B5FE] transition-all duration-200">
    contact@hilary-tech.com
  </span>
</a>

<a
  href="mailto:support@hilary-tech.com"
  className="flex items-center space-x-2 group transition-all duration-200"
>
  <i className="fa fa-envelope group-hover:text-[#77B5FE] transition"></i>
  <span className="group-hover:translate-x-1 group-hover:text-[#77B5FE] transition-all duration-200">
    support@hilary-tech.com
  </span>
</a>
                </div>
              </div>
<div className="flex space-x-4 mt-4">
<a
  href="https://wa.me/22665190708"
  className="flex items-center space-x-2 group transition-all duration-200"
  target="_blank" 
  rel="noopener noreferrer"
>
  <i className="fa fa-whatsapp fa-2x transition-all group-hover:text-green-500 group-hover:scale-110"></i>
  <span className="hidden md:inline group-hover:translate-x-1 group-hover:text-green-500 transition-all duration-200 font-medium">
    Écrivez-nous
  </span>
</a>
</div>
            </div>

            {/* Liens rapides */}
            <div className="md:w-1/4">
              <h4 className="text-xl font-bold mb-4">Liens</h4>
              <div className="flex flex-col space-y-2">
                <Link href="/" className="hover:text-[#77B5FE] transition-all duration-300 hover:translate-x-1">Accueil</Link>
                <Link href="/produit" className="hover:text-[#77B5FE] transition-all duration-300 hover:translate-x-1">Produits</Link>
                <Link href="/secteur" className="hover:text-[#77B5FE] transition-all duration-300 hover:translate-x-1">Secteurs</Link>
                <Link href="/reussite" className="hover:text-[#77B5FE] transition-all duration-300 hover:translate-x-1">Réussites</Link>
                <Link href="/propos" className="hover:text-[#77B5FE] transition-all duration-300 hover:translate-x-1">A Propos</Link>
              </div>
            </div>

            {/* Logo/Image */}
<div className="md:w-1/3 flex justify-center md:justify-end">
  <div className="transition-transform duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1">
    <Image
      src="/images/MPS.png"
      alt="Icône footer"
      width={400}
      height={300}
      className="h-auto w-full max-w-[400px] md:max-w-[600px] lg:max-w-[700px] object-contain rounded-2xl"
    />
  </div>
</div>

          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#00bbf0] to-[#77B5FE] animate-pulse" />
      </section>

      {/* Footer */}
      
      <section className="py-4 text-center border-t border-gray-600" >
        <div className="max-w-7xl mx-auto px-4">
          <p>
            &copy; <span>{new Date().getFullYear()}</span> All Rights Reserved
          </p>
        </div>
      </section>
      </div>
    </>
  );
}