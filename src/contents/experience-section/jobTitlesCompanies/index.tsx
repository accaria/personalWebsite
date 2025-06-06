"use client"
import { useState } from "react";
import NCJJob from "./netChartJapan";
import JSJob from "./jakartaShimbun";
export default function JobTitlesSection(){
    const [activeContent,setActiveContent] = useState('JS');
    const contentList={
        JS:<JSJob/>,
        NCJ:<NCJJob/>
    };
    const [activeHeader,setActiveHeader]= useState('JSH');
    const headerList={
        JSH: <p>Jakarta Shimbun</p>,
        NCJH: <p>Net Chart Japan</p>,
    };

    return(
         <>
        <h1 className="text-center font-bold text-2xl lg:text-4xl ">PAST PROFESSIONAL EXPERIENCES</h1>
        <div className="flex flex-col items-center justify-center mt-5">
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-center mb-5 ">
        <div className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('JS');setActiveHeader('JSH');}}>JAKARTA SHIMBUN</button></div>
        <div className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('NCJ');setActiveHeader('NCJH');}}>NET CHART JAPAN</button></div>
        </div>
        <div className="font-bold text-3xl items-center justify-center">{headerList[activeHeader]}</div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC]">{contentList[activeContent]}</div>
        </div>
        </>
    )
}

/*
 <>
        <h1 className="text-center font-bold text-2xl lg:text-4xl ">PAST PROFESSIONAL EXPERIENCES</h1>
        <div className="lg:hidden flex flex-col items-center justify-center mt-5">
        <div className="flex flex-col gap-5 items-center justify-center mb-5 ">
        <div className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('JS');setActiveHeader('JSH');}}>JAKARTA SHIMBUN</button></div>
        <div className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white"><button onClick={()=>{setActiveContent('NCJ');setActiveHeader('NCJH');}}>NET CHART JAPAN</button></div>
        </div>
        <div className="font-bold text-3xl items-center justify-center">{headerList[activeHeader]}</div>
        <div className="w-1/1 lg:w-full p-4 ml-4 bg-[#F5F5DC]">{contentList[activeContent]}</div>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:justify-center lg:items-center">
        <div className="text-center border-4 w-1/2">
        <JSJob/>
        </div>
        <div className="text-center border-4 w-1/2">
        <NCJJob/>
        </div>
        </div>
        </>
*/