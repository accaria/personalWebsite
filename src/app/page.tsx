import Image from "next/image";
import HeroSection from "./hero-section/page";
import AboutMeSection from "./aboutMe-section/page";
import SkillsSection from "./skills-section/page";
export default function Home() {
  return (
    <div>
    <HeroSection/>
    <AboutMeSection/>
    <SkillsSection/>
    </div>
  );
}
