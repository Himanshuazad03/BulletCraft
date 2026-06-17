import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import BeforeAfter from "./components/BeforeAfter";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import FinalCta from "./components/FinalCta";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Trust Section */}
        <Trust />

        {/* Features Section */}
        <Features />

        {/* How It Works Section */}
        <HowItWorks />

        {/* Before vs After Section */}
        <BeforeAfter />

        {/* Testimonials Section */}
        <Testimonials />

        {/* FAQ Section */}
        <Faq />

        {/* Final CTA Section */}
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
