"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  return (
    <header className="py-4 bg-[#eef1f5] z-50 relative">
      <div className="w-full px-4 max-w-7xl mx-auto">
        <nav className="w-full">
          <div className="flex items-center justify-between flex-wrap lg:flex-nowrap w-full">

            {/* Logo */}
            <Link href="/" className="font-bold text-xl hover:scale-110 hover:text-[#77B5FE] transition-transform">
              Hilary <span className="text-[#77B5FE]">Tech</span>
            </Link>

            {/* Hamburger mobile */}
            <div className="block lg:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-[#77B5FE] hover:border-[#77B5FE]"
                aria-label="Toggle navigation"
              >
                <svg className="fill-current h-4 w-4" viewBox="0 0 20 20">
                  <path d="M0 3h20v2H0zM0 9h20v2H0zM0 15h20v2H0z" />
                </svg>
              </button>
            </div>

            {/* Menu principal */}
            <div className={`${menuOpen ? "block" : "hidden"} w-full lg:block lg:w-auto`}>
              <ul className="relative z-50 flex flex-col lg:flex-row lg:space-x-6 mt-4 lg:mt-0 uppercase font-bold">

                <li>
                  <Link href="/" className="hover:text-[#77B5FE] pl-3 border-l-4 border-transparent hover:border-[#77B5FE] transition-all duration-200">
                    Accueil
                  </Link>
                </li>

                {/* Dropdown Produits */}
                <li
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown("produits")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => toggleDropdown("produits")}
                >
                  <div className="flex items-center gap-1 cursor-pointer pl-3 border-l-4 border-transparent hover:border-[#77B5FE] hover:text-[#77B5FE] transition-all duration-200">
                    Produits
                    <svg className="w-4 h-4 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {openDropdown === "produits" && (
                    <div className="absolute left-0 top-full bg-[#00a3e0]/90 backdrop-blur-sm text-white p-6 z-50 w-72 flex flex-col shadow-lg space-y-2">
                      {[
                        ["Tous les produits", "/produit"],
                        ["Pèse-Essieux", "/fichiers/bpxl-giropes-fr.pdf"],
                        ["Pont Bascule Métallo-Béton", "/fichiers/bp-gc-2024-fr-export-v-1-np.pdf"],
                        ["GESTRUCK", "/fichiers/gestruck-fr.pdf"],
                        ["Indicateur GI400LCD", "/fichiers/indicateurs-2025-fr-v2-np.pdf"],
                        ["SC-A1 CRT", "/fichiers/2 SC-A1 CRT.pdf"],
                        ["Capteur G8R", "/fichiers/1 Capteur g8r-fr-2020-np.pdf"],
                        ["SENSOCAR SP-DC", "/fichiers/2 SP-DC.pdf"]
                        
                      ].map(([text, href], i) => (
                        <Link key={i} href={href} onClick={() => setOpenDropdown(null)} className="pl-3 border-l-4 border-transparent hover:border-white hover:translate-x-1 transition-all">
                          {text}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* Dropdown Secteurs */}
                <li
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown("secteurs")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => toggleDropdown("secteurs")}
                >
                  <div className="flex items-center gap-1 cursor-pointer pl-3 border-l-4 border-transparent hover:border-[#77B5FE] hover:text-[#77B5FE] transition-all duration-200">
                    Secteurs
                    <svg className="w-4 h-4 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {openDropdown === "secteurs" && (
                    <div className="absolute left-0 top-full bg-[#00a3e0]/90 backdrop-blur-sm text-white p-6 z-50 w-72 flex flex-col shadow-lg space-y-2">
                      {[
                        ["Tous les secteurs", "/secteur"],
                        ["Informatique", "/secteur-informatique"],
                        ["Logistique", "/secteur-logistique"],
                        ["Industrie", "/secteur-industrie"],
                        ["Arides", "/secteur-arides"],
                        ["Élevage", "/secteur-elevage"],
                        ["Agricole", "/secteur-agricole"],
                        ["Déchets", "/secteur-dechets"]
                        
                      ].map(([text, href], i) => (
                        <Link key={i} href={href} onClick={() => setOpenDropdown(null)} className="pl-3 border-l-4 border-transparent hover:border-white hover:translate-x-1 transition-all">
                          {text}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* Dropdown Réussites */}
                <li
                  className="relative group"
                  onMouseEnter={() => setOpenDropdown("reussites")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  onClick={() => toggleDropdown("reussites")}
                >
                  <div className="flex items-center gap-1 cursor-pointer pl-3 border-l-4 border-transparent hover:border-[#77B5FE] hover:text-[#77B5FE] transition-all duration-200">
                    Réussites
                    <svg className="w-4 h-4 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                  {openDropdown === "reussites" && (
                    <div className="absolute left-0 top-full bg-[#00a3e0]/90 backdrop-blur-sm text-white p-6 z-50 w-72 flex flex-col shadow-lg space-y-2">
                      {[
                        ["Toutes les réussites", "/reussite"],
                        ["LCT", "/ltc"],
                        ["CDS Sénégal", "/cds"],
                        ["SOCOMA Ouargaya", "/socoma"],
                        ["EKS Ipelcé", "/eks"],
                        ["CGE", "/cge"],
                        ["SONABHY Péni", "/sonabhy_peni"],
                        ["SONABHY Bingo", "/sonabhy_bingo"],
                        ["CTVD Ouaga", "/ctvd"],
                        ["Port Cotonou", "/port_cotonou"],
                        ["Ministère Sénégal", "/minister_routes_senegal"]
                        
                      ].map(([text, href], i) => (
                        <Link key={i} href={href} onClick={() => setOpenDropdown(null)} className="pl-3 border-l-4 border-transparent hover:border-white hover:translate-x-1 transition-all">
                          {text}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>

                {/* À propos */}
                <li>
                  <Link href="/propos" className="hover:text-[#77B5FE] pl-3 border-l-4 border-transparent hover:border-[#77B5FE] transition-all duration-200">
                    À Propos
                  </Link>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}