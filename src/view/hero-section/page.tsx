"use client"
import { useState } from "react"
import IntroSection from "@/contents/hero-section/intro-section";
import AboutSection from "@/contents/hero-section/about-section";
import ContactSection from "@/contents/hero-section/contact-section";

export default function HeroPageView(){
    const [activeContent,setActiveContent] = useState('intro');
    const contentList={
        intro: <IntroSection/>,
        about: <AboutSection/>,
        contact: <ContactSection/>,
    };
    const [activeHeader,setActiveHeader] = useState('introHeader');
    const headerList={
        introHeader: <p>INTRODUCTION</p>,
        aboutHeader: <p>ABOUT ME</p>,
        contactHeader: <p>CONTACT ME</p>,
    };
    return (
        <div className="w-11/12 md:w-4/5 lg:w-7/8 lg:h-7/8 mx-auto mt-5">
        <div className="flex flex-col items-center justify-center p-8">
        {/*Header*/}
        <div className="flex flex-col font-bold text-3xl lg:text-4xl items-center justify-center ml-5 lg:ml-0">{headerList[activeHeader]}</div>
        {/*NavBar*/}
        <div className="flex lg:p-4 lg:w-7/8 w-full">
        <div className="hidden lg:flex flex-col gap-10 lg:gap-20 items-center justify-center ">
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('intro');setActiveHeader('introHeader');}}>INTRO</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('about');setActiveHeader('aboutHeader');}}>ABOUT</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('contact');setActiveHeader('contactHeader');}}>CONTACT</button></div>
        </div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC] border-pink-500 border-4">{contentList[activeContent]}</div>
        </div>
        {/*NavBar for SM*/}
        <div className="flex flex-row w-full gap-3 ml-6 mt-4 items-center justify-center lg:hidden">
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('intro');setActiveHeader('introHeader');}}>INTRO</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('about');setActiveHeader('aboutHeader');}}>ABOUT</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('contact');setActiveHeader('contactHeader');}}>CONTACT</button></div>
        </div>
        </div>
        </div>
    );
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