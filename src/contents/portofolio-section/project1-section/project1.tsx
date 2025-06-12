"use client";
import { useState } from "react";
import Project1Action from "./action"
import Project1Result from "./result"
import Project1Situation from "./situation"
import Project1Task from "./task"
import Link from "next/link";

type SectionKey = 'situation' | 'task' | 'action' | 'result';
export default function Project1(){
    const [visibleSection,setVisibleSection] = useState<Record<SectionKey, boolean>>({
        situation:false,
        task:false,
        action:false,
        result:false,
    });
    const toggleInvi=(key: SectionKey)=>{
        setVisibleSection((prev)=>({
            ...prev,
            [key]:!prev[key],
        }));
    };
    return (
        <div className="flex flex-col justify-center items-center border-4 p-6 space-y-4">
        <div className="text-3xl font-bold text-amber-600 text-center">
            Recycling Shop Project
            <img src="/project1.png" alt="Recycle Shop" />
        </div>
        <div><button onClick={()=>toggleInvi("situation")} className="border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white">Situation</button></div>
        {visibleSection.situation && (<div><Project1Situation/></div>)}
        <div><button onClick={()=>toggleInvi("task")} className="border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white">Task</button></div>
        {visibleSection.task && (<div><Project1Task/></div>)}
        <div><button onClick={()=>toggleInvi("action")} className="border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white">Action</button></div>
        {visibleSection.action && (<div><Project1Action/></div>)}
        <div><button onClick={()=>toggleInvi("result")} className="border-pink-500 border-4 w-30 text-center hover:bg-pink-600 hover:text-white">Result</button></div>
        {visibleSection.result && (<div><Project1Result/></div>)}
        <div className="flex flex-row gap-5">
        <Link href="/projects/project2" >
        <div className="border-pink-500 text-center  hover:bg-pink-600 hover:text-white bottom-0 text-2xl border-2">Anime Shop Project</div>
        </Link>
        <Link href="/projects/project3" >
        <div className="border-pink-500 text-center  hover:bg-pink-600 hover:text-white bottom-0 text-2xl border-2">Sake Shop Project</div>
        </Link>
        </div>
        </div>
    )
}