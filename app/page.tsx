"use client";

import { AboutSection } from "@/components/AboutUsSection";
import { BackToTop } from "@/components/BackToTop";
import { BlogSection } from "@/components/BlogSection";
import { BookingSection } from "@/components/BookingSection";
import { ContactSection } from "@/components/ContactSection";
import { Navbar } from "@/components/navigation";
import { NetworkMap } from "@/components/NetworkMap";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ServicesGrid } from "@/components/ServicesGrid";
import { StatsSection } from "@/components/StatsSection";
import { TeamSection } from "@/components/TeamSection";
import { Testimonials } from "@/components/Testimonials";
import { WorkShowcase } from "@/components/WorkShowcase";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      <Navbar />

      <main>
        <Hero />

        <AboutSection />

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

        <ContactSection />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}