"use client"

import HeroSection from "./hero-section/page";
import AboutMeSection from "./aboutMe-section/page";
import SkillsSection from "./skills-section/page";
import TestimonialsSection from "./testimonials-section/page";
import ContactMeSection from "./contactMe-section/page";
import PortofolioSection from "./portofolio-section/page";
import ExperienceSection from "./experience-section/page";
import BottomPageView from "@/view/navbar/bottompage/page";


export default function Home() {
  return (
    <div>
    <HeroSection/>
    <AboutMeSection/>
    <SkillsSection/>
    <PortofolioSection/>
    <ExperienceSection/>
    <TestimonialsSection/>
    <ContactMeSection/>
    <BottomPageView/>
    </div>
  )
}
