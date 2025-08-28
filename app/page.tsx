// app/page.tsx
"use client";

import { useEffect } from "react";
import Loader from "@/components/Loader";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SliderSection from "@/components/SliderSection";
import ServiceSection from "@/components/ServiceSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import InfoFooterSection from "@/components/InfoFooterSection";
import AOSWrapper from "@/components/AOSWrapper";

export default function HomePage() {
  useEffect(() => {
    const handleScroll = () => {
      const parallaxSections = document.querySelectorAll(".parallax");
      parallaxSections.forEach((section) => {
        const speed = 0.5;
        const offset = window.pageYOffset;
        (section as HTMLElement).style.backgroundPositionY = -(offset * speed) + "px";
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <AOSWrapper />
      <Loader />
      <div className="hero_area">
        <Hero />
        <Header />
        <SliderSection />
      </div>
        <ServiceSection />
        <AboutSection />
        <WhySection />
        <InfoFooterSection />
    </>
  );
}
