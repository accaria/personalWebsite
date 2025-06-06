"use client"
import { useState } from "react";
import KeyValuesSection from "@/contents/aboutMe-section/keyValues-section";
import BriefBioSection from "@/contents/aboutMe-section/briefBio-section";
import CoreSkillsSection from "@/contents/aboutMe-section/coreSkills-section";

export default function AboutMePageView(){
    const [activeContent,setActiveContent] = useState('bio');
    const contentList={
        bio: <BriefBioSection/>,
        key:<KeyValuesSection/>,
        core:<CoreSkillsSection/>
    };
    const [activeHeader,setActiveHeader] = useState('bioHeader');
    const headerList={
        bioHeader: <p>BRIEF BIO</p>,
        keyHeader: <p>KEY VALUES</p>,
        coreHeader: <p>CORE SKILLS</p>,
    };

    return (
        <div className="w-11/12 md:w-4/5 lg:w-7/8 lg:h-7/8 mx-auto mt-5">
        <div className="flex flex-col items-center justify-center p-8">
        {/*Header*/}
        <div className="flex flex-col font-bold text-3xl lg:text-4xl items-center justify-center ml-5 lg:ml-0">{headerList[activeHeader]}</div>
        {/*NavBar*/}
        <div className="flex lg:p-4 lg:w-7/8 w-full">
        <div className="hidden lg:flex flex-col gap-10 lg:gap-20 items-center justify-center ">
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('bio');setActiveHeader('bioHeader');}}>BRIEF BIO</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('key');setActiveHeader('keyHeader');}}>KEY VALUES</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('core');setActiveHeader('coreHeader');}}>CORE SKILLS</button></div>
        </div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC] border-pink-500 border-4">{contentList[activeContent]}</div>
        </div>
        {/*NavBar for SM*/}
        <div className="flex flex-row w-full gap-3 ml-6 mt-4 items-center justify-center lg:hidden">
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('bio');setActiveHeader('bioHeader');}}>BRIEF BIO</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('key');setActiveHeader('keyHeader');}}>KEY VALUES</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('core');setActiveHeader('coreHeader');}}>CORE SKILLS</button></div>
        </div>
        </div>
        </div>
    );
}


/*
  //This is for the whole page
        <div className="flex flex-col items-center justify-center">
        <div className="lg:w-300 p-7 sm:w-200">
        <div className="font-bold text-4xl border-4 flex items-center justify-center">
            ABOUT ME
        </div>
        <div className="border-1 mt-10 font-small text-1xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quibusdam voluptatibus velit molestiae fuga harum amet ea, error ipsam sapiente cum! Perspiciatis veniam ea odio natus blanditiis soluta esse eum cupiditate.
        </div>
        </div>


        <div className="lg:w-300 sm:w-200 p-7">
        <div className="font-medium text-3xl border-4 flex items-center justify-center">
            MY SKILLS
        </div>
        <div className="grid grid-cols-2 w-200">
        <div><img src="/html5Logo.png" alt="HTML5 LOGO" /></div>
        <div><img src="/javascriptLogo.png" alt="Javascript Logo" /></div>
        <div className=""><img src="/tailwindcssLogo.svg" alt="tailwindcss Logo" /></div>
        <div>日本語 (JAPANESE LANGUAGE)</div>
        </div>
        </div>


        <div className="lg:w-300 sm:w-200 p-7">
        <div className="font-bold text-3xl border-4 flex items-center justify-center">WORK PRINCIPLES</div>
        <div className="font-medium text-2xl flex items-center justify-center">These are the principles that I always go with when I work on a project</div>
        <div className="font-small text-1xl mt-10">
        <p><span className="font-semibold text-2xl">WORK ON TIME</span> Delivering assigned tasks before the assumed deadline schedule</p>
        <p><span className="font-semibold text-2xl">STANDARD PRACTICE</span> Executing the project within the given standard practice </p>
        <p><span className="font-semibold text-2xl">TIMELY UPDATE</span> Updating everyone else of own's progress to keep track of the project as a whole</p>
        </div>
        </div>
        </div>
        */
