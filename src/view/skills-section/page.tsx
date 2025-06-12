"use client"
import { useState } from "react";
import BackEndSection from "@/contents/skills-section/backEnd-skills";
import DevOpsSection from "@/contents/skills-section/devOps-skills";
import FrontEndSection from "@/contents/skills-section/frontEnd-skills";

type ContentKey = 'front' | 'back' | 'devOp';
type HeaderKey = 'frontHeader' | 'backHeader' | 'devOpHeader';
export default function SkillsPageView(){
    const [activeContent,setActiveContent] = useState<ContentKey>('front');
    const contentList: Record<ContentKey, React.ReactNode>={
        front: <FrontEndSection/>,
        back:<BackEndSection/>,
        devOp:<DevOpsSection/>,
    };
    const [activeHeader,setActiveHeader] = useState<HeaderKey>('frontHeader');
    const headerList: Record<HeaderKey, React.ReactNode>={
        frontHeader: <p>FRONT-END</p>,
        backHeader: <p>BACK-END</p>,
        devOpHeader: <p>DEV-OPS</p>,
    };

    return (
        <div className="w-11/12 md:w-4/5 lg:w-7/8 lg:h-7/8 mx-auto mt-5">
        <div className="flex flex-col items-center justify-center p-8">
        {/*Header*/}
        <div className="flex flex-col font-bold text-3xl lg:text-4xl items-center justify-center ml-5 lg:ml-0">{headerList[activeHeader]}</div>
        {/*NavBar*/}
        <div className="flex lg:p-4 lg:w-7/8 w-full">
        <div className="hidden lg:flex flex-col gap-10 lg:gap-20 items-center justify-center ">
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('front');setActiveHeader('frontHeader');}}>FRONT-END</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('back');setActiveHeader('backHeader');}}>BACK-END</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('devOp');setActiveHeader('devOpHeader');}}>DEV-OPS</button></div>
        </div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC] border-pink-500 border-4">{contentList[activeContent]}</div>
        </div>
        {/*NavBar for SM*/}
        <div className="flex flex-row w-full gap-3 ml-6 mt-4 items-center justify-center lg:hidden">
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('front');setActiveHeader('frontHeader');}}>FRONT-END</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('back');setActiveHeader('backHeader');}}>BACK-END</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('devOp');setActiveHeader('devOpHeader');}}>DEV-OPS</button></div>
        </div>
        </div>
        </div>
    );
}