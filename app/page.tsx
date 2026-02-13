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
import { Hero } from "@/components/Hero";
import { Foots } from "@/components/Foots";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-indigo-100">
      <Navbar />

      <main className="flex flex-col">
        {/* Hero usually handles its own height/padding for visual impact */}
        <Hero />

        {/* Wrapping sections in a flex container with a gap 
            OR applying consistent padding to each block.
            Using 'space-y' or consistent 'py' (vertical padding) is best.
        */}
        <div className="space-y-20 md:space-y-32 mb-20 md:mb-32">
          
          <section className="px-4 sm:px-6 lg:px-8">
            <AboutSection />
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <TeamSection />
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <ServicesGrid />
          </section>

          {/* Some sections like Booking might look better with full-width backgrounds */}
          <section className="py-20 md:py-32">
                <BookingSection />
          </section>

          <section >
            <Testimonials />
          </section>

          <section >
            <WorkShowcase />
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <ProcessTimeline />
          </section>

          <section>
            <StatsSection />
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <NetworkMap />
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <BlogSection />
          </section>

          <section className="px-4 sm:px-6 lg:px-8">
            <ContactSection />
          </section>
          
        </div>
      </main>

      <Foots />
      <BackToTop />
    </div>
  );
}