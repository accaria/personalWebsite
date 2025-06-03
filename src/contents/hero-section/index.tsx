import { useState } from "react"
import IntroSection from "./intro-section";
import AboutSection from "./about-section";
import ContactSection from "./contact-section";
export default function ContentHeroIntroduction(){
    const [activeContent,setActiveContent] = useState('intro');
    const contentList={
        intro: <IntroSection/>,
        about: <AboutSection/>,
        contact: <ContactSection/>,
    };
}




