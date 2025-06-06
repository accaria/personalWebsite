import { useState,useEffect } from "react";

export function useSlidingImages(images,interval = 3000){
const [currentImg, setCurrentImg] = useState(0);
        useEffect(()=>{
            const timer = setInterval(()=>{
                setCurrentImg((prev)=> (prev+1)% images.length);
            },interval);
            return ()=>clearInterval(timer);
        },[images.length,interval]);
        return currentImg;
}

export function useSlidingNames(names, interval=3000){
    const [currentName, setCurrentName] = useState(0);
    useEffect(()=>{
        const timer = setInterval(()=>{
            setCurrentName((prev)=>(prev+1)%names.length);
        },interval);
        return()=>clearInterval(timer);
    },[names.length,interval]);
    return currentName;
}