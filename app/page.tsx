"use client";

import { BackToTop } from "@/components/BackToTop";
import { BlogSection } from "@/components/BlogSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { FooterSections } from "@/components/FooterSections";
import { HeroSection } from "@/components/HeroSection";
import { Navbar } from "@/components/navigation";
import { NetworkMap } from "@/components/NetworkMap";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { StatsSection } from "@/components/StatsSection";
import { TeamSection } from "@/components/TeamSection";
import { Testimonials } from "@/components/Testimonials";
import { WorkShowcase } from "@/components/WorkShowcase";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />
      
      <main>
        <HeroSection />
        
        {/* About & Services Summary */}
        <ServicesGrid />

        {/* The Quote/Opportunity Form Section */}
        <BookingSection />

        <Testimonials />

        <WorkShowcase />

        <ProcessTimeline />

        <TeamSection />

        <StatsSection />

        <NetworkMap />
        
        <BlogSection />

        <FooterSections />

        <ContactSection />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}