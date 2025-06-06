import { useSlidingImages} from "@/hooks/use-state";
const slidingImages = [
    `/html5Logo.png`,
    `javascriptLogo.png`,
    `reactLogo.svg`
];
export default function CoreSkillsSection(){
    return(
        <>
        <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="font-bold text-2xl lg:text-4xl text-center ">Here are my core skills</div>
        <div className="grid grid-cols-2 w-55 lg:ml-10">
        <div><img src="/html5Logo.png" alt="html5Logo" /></div>
        <div><img src="/javascriptLogo.png" alt="JSLogo" /></div>
        <div><img src="/reactLogo.svg" alt="reactLogo" /></div>
        <div><img src="/pythonLogo.png" alt="pythonLogo" /></div>
        <div><img src="/godotLogo.png" alt="godotLogo" /></div>
        <div><img src="/unityLogo.jpg" alt="unityLogo" /></div>
        </div>
        </div>
        </>
    )
}


/*
"use state"

import { useState, useEffect } from "react";
const slidingImages = [
    `/html5Logo.png`,
    `javascriptLogo.png`,
    `reactLogo.svg`
];
export default function CoreSkillsSection(){
    const [currentImg, setCurrentImg] = useState(0);
        useEffect(()=>{
            const interval = setInterval(()=>{
                setCurrentImg((prev)=> (prev+1)% slidingImages.length);
            },3000);
            return ()=>clearInterval(interval);
        },[]);
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        {slidingImages.map((image,index)=>(
            <div key={index}
            className={`absolute inset-0 transition-opacity duration-1000
            ${index===currentImg?'opacity-100' :'opacity-0'}`}>
            <img src={image} alt={`Slide ${index+1}`} className="w-full h-64 object-cover" />
            </div>
        ))}
        </div>
        </>
    )
}*/