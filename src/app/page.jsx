"use client";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import CVSection from "../components/CVSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#4F6D7A]/20 ">
      <Header />
      <main className="p-10">
        <HeroSection />
        <AboutSection />
        <CVSection />
        <SkillsSection />
        <ProjectsSection />
        <TestimonialsSection />
        <BlogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
