'use client';

import dynamic from 'next/dynamic';
import Preloader from '@/components/Preloader';
import SmoothScroll from '@/components/SmoothScroll';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AchievementsSection from '@/components/AchievementsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

// Dynamic non-blocking imports for heavy scripts & interactive widgets
const FuturisticCanvas = dynamic(() => import('@/components/FuturisticCanvas'), { ssr: false });
const CustomCursor = dynamic(() => import('@/components/CustomCursor'), { ssr: false });
const AIChatbot = dynamic(() => import('@/components/AIChatbot'), { ssr: false });
const LaptopTransition = dynamic(() => import('@/components/LaptopTransition'), { ssr: false });

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <AIChatbot />
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#030408] text-white overflow-hidden">
          <FuturisticCanvas />
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <LaptopTransition />
            <AboutSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <AchievementsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
