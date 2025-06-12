"use client"
import { useState } from "react";
import JobTitlesSection from "@/contents/experience-section/jobTitlesCompanies";
import ResponsibilitesSection from "@/contents/experience-section/responsibilities";
import TimelineSection from "@/contents/experience-section/timeline";

type ContentKey = 'jobTitle' | 'respon' | 'time';
type HeaderKey = 'jobHeader' | 'responHeader' | 'timeHeader';
export default function ExperiencePageView(){
    const [activeContent,setActiveContent] = useState<ContentKey>('jobTitle');
    const contentList: Record<ContentKey, React.ReactNode>={
        jobTitle:<JobTitlesSection/>,
        respon:<ResponsibilitesSection/>,
        time:<TimelineSection/>
    };
    const [activeHeader,setActiveHeader] = useState<HeaderKey>('jobHeader');
    const headerList: Record<HeaderKey, React.ReactNode>={
        jobHeader: <p>JOB AND TITLES</p>,
        responHeader: <p>RESPONSIBILITES</p>,
        timeHeader: <p>TIMELINE</p>,
    };

    return (
        <div className="w-11/12 md:w-4/5 lg:w-7/8 lg:h-7/8 mx-auto mt-5">
        <div className="flex flex-col items-center justify-center p-8">
        {/*Header*/}
        <div className="flex flex-col font-bold text-3xl lg:text-4xl items-center justify-center ml-5 lg:ml-0">{headerList[activeHeader]}</div>
        {/*NavBar*/}
        <div className="flex lg:p-4 lg:w-7/8 w-full">
        <div className="hidden lg:flex flex-col gap-10 lg:gap-20 items-center justify-center ">
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('jobTitle');setActiveHeader('jobHeader');}}>JOB AND TITLES</button></div>
        <div className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('respon');setActiveHeader('responHeader');}}>RESPONSIBILITES</button></div>
        <div className=" border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('time');setActiveHeader('timeHeader');}}>TIMELINE</button></div>
        </div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC] border-pink-500 border-4">{contentList[activeContent]}</div>
        </div>
        {/*NavBar for SM*/}
        <div className="flex flex-row w-full gap-3 ml-6 mt-4 items-center justify-center lg:hidden">
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('jobTitle');setActiveHeader('jobHeader');}}>JOB AND TITLES</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('respon');setActiveHeader('responHeader');}}>RESPONSIBILITES</button></div>
        <div className="text-sm font-bold border-pink-500 border-4 w-20 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('time');setActiveHeader('timeHeader');}}>TIMELINE</button></div>
        </div>
        </div>
        </div>
    );
}