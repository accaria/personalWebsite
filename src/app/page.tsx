import Image from "next/image";
import HeroSection from "./hero-section/page";
import AboutMeSection from "./aboutMe-section/page";
export default function Home() {
  return (
    <div>
    <HeroSection/>
    <AboutMeSection/>
    </div>
  );
}
