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
    return(
        
    )
}




/*
<div className="flex flex-col lg:items-baseline sm:items-center lg:justify-self sm:justify-center p-8 ">
        <div className="font-bold text-3xl">
            Hi, my name is <span className="text-amber-500 text-5xl">Muhammad Anugerah</span>
        </div>
        <div className="font-bold text-2xl flex items-center justify-between ">
            <div className="w-1/2">I'm a Junior Full-Stack Web Developer</div>
            <div className="w-1/2 justify-end"><img className="lg:w-100 sm:w-50" src="/fotoAga.jpg" alt="fotoAga" /></div>
        </div>
        <div className="font-bold text-4xl">
            ABOUT
        </div>
        <div className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Neque totam sunt velit ea nesciunt sequi enim. Qui soluta, quaerat illum magni praesentium explicabo tenetur cum sequi, fuga ut cupiditate asperiores?
        </div>
        <div className="flex items-center">
        <div className="font-bold text-4xl flex justify-center ">
            CONTACT ME
        </div>
        <div className="flex justify-between items-center w-200 h-50 bg-gray-400 gap-4">
        <div className="w-60 h-10 bg-amber-300 p-4 justify-end">dummyemail@gmail.com</div>
        <div className=" bg-amber-300 p-4">021-090xxxx</div>
        <div className=" bg-amber-300 p-4">Placeholder Information</div>
        </div>
        </div>
        </div>
        */