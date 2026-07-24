'use client';

import CustomCursor from '@/components/CustomCursor';
import SmoothScroll from '@/components/SmoothScroll';
import FuturisticCanvas from '@/components/FuturisticCanvas';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#030408] text-white overflow-hidden">
          <FuturisticCanvas />
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
