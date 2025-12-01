
"use client";

import Image from 'next/image'
import Navbar from "@/src/Navbar";
import Footer from "@/src/Footer";
import HeroSection from "@/src/HeroSection";
import FocusSection from "@/src/FocusSection";
import PlansSection from "@/src/PlansSection";
import BlogSection from "@/src/BlogSection";
import ContactGeoSection from "@/src/ContactGeoSection";
import AboutSection from "@/src/AboutSection";

export default function HomePage() {
  return (
    <div className = "min-h-screen bg-white text-slate-50 bg-[url('/fondo2.png')] bg-cover bg-center bg-no-repeat">
      <Navbar />
      <main className = "mx-auto max-w-6xl px-4 pb-16 pt-10 space-y">
      
      

        <HeroSection />
        <FocusSection />
        <PlansSection />
        <BlogSection />
        <ContactGeoSection />
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}
