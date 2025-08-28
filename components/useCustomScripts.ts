"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function useCustomScripts() {
  useEffect(() => {
    // Loader
    const loader = document.getElementById("loader");
    if (loader) {
      setTimeout(() => {
        loader.style.display = "none";
      }, 2000);
    }

    // Initialisation de AOS
    AOS.init({
      duration: 1000,
      once: false,
    });

    // Dropdown hover
    const dropdowns = document.querySelectorAll(".dropdown");
    dropdowns.forEach((dropdown) => {
      dropdown.addEventListener("mouseenter", () => {
        dropdown.classList.add("show");
        const menu = dropdown.querySelector(".dropdown-menu");
        if (menu) menu.classList.add("show");
      });

      dropdown.addEventListener("mouseleave", () => {
        dropdown.classList.remove("show");
        const menu = dropdown.querySelector(".dropdown-menu");
        if (menu) menu.classList.remove("show");
      });
    });

    // Nettoyage (important en React)
    return () => {
      dropdowns.forEach((dropdown) => {
        dropdown.replaceWith(dropdown.cloneNode(true));
      });
    };
  }, []);
}