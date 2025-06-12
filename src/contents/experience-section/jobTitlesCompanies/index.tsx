"use client"
import { useState } from "react";
import NCJJob from "./netChartJapan";
import JSJob from "./jakartaShimbun";


type ContentKey = 'JS' | 'NCJ';
type HeaderKey = 'JSH' | 'NCJH';

export default function JobTitlesSection() {
  const [activeContent, setActiveContent] = useState<ContentKey>('JS');
  const contentList: Record<ContentKey, React.ReactNode> = {
    JS: <JSJob />,
    NCJ: <NCJJob />,
  };

  const [activeHeader, setActiveHeader] = useState<HeaderKey>('JSH');
  const headerList: Record<HeaderKey, React.ReactNode> = {
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
*/