"use client"
import { useState } from "react";
import Marketing from "./marketing";
import NetworkEngineer from "./networkEngineer";

type ContentKey = 'M' | 'ME';
type HeaderKey = 'MH' | 'NEH';
export default function ResponSection(){
    const [activeContent,setActiveContent] = useState<ContentKey>('M');
    const contentList:Record<ContentKey, React.ReactNode>={
        M:<Marketing/>,
        NE:<NetworkEngineer/>
    };
    const [activeHeader,setActiveHeader]= useState<HeaderKey>('MH');
    const headerList: Record<HeaderKey, React.ReactNode>={
        MH: <p className="text-2xl text-center">MARKETING RESPONSIBILITIES</p>,
        NEH: <p className="text-2xl text-center">NETWORK ENGINEER RESPONSIBILITIES</p>,
    };

    return(
         <>
        <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center mb-5 ">
        <div className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('M');setActiveHeader('MH');}}>MARKETING</button></div>
        <div className=" border-pink-500 border-4 w-50 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('NE');setActiveHeader('NEH');}}>NETWORK ENGINEER</button></div>
        </div>
        <div className="font-bold text-3xl items-center justify-center">{headerList[activeHeader]}</div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC]">{contentList[activeContent]}</div>
        </div>
        </>
    )
}