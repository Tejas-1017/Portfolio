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
const ScrollProgress = dynamic(() => import('@/components/ScrollProgress'), { ssr: false });
const ClickBurst = dynamic(() => import('@/components/ClickBurst'), { ssr: false });
const MatrixStream = dynamic(() => import('@/components/MatrixStream'), { ssr: false });
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <>
      <Preloader />
      <CustomCursor />
      <AIChatbot />
      <ClickBurst />
      <ScrollProgress />
      <MatrixStream />
      <SmoothScroll>
        <div className="relative min-h-screen bg-[#030408] text-white overflow-hidden">
          <FuturisticCanvas />
          <Navbar />
          <main className="relative z-10">
            <HeroSection />
            <SectionDivider title="SYSTEM // INTERFACE UNFOLDING" />
            <LaptopTransition />
            <SectionDivider title="TELEMETRY // ENGINEER BIOGRAPHY" />
            <AboutSection />
            <SectionDivider title="NEURAL MATRIX // TECH STACK" />
            <SkillsSection />
            <SectionDivider title="CHRONICLE // CAREER TIMELINE" />
            <ExperienceSection />
            <SectionDivider title="DEPLOYMENTS // AI CODEBASES" />
            <ProjectsSection />
            <SectionDivider title="HONORS // RECOGNITION" />
            <AchievementsSection />
            <SectionDivider title="COMMUNICATION // NEURAL LINK" />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </SmoothScroll>
    </>
  );
}
