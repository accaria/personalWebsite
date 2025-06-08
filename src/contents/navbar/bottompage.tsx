"use client"
import React from "react"

export default function BottomPage(){
    const scrolltoTop = ()=>{
        window.scrollTo({top:0,behavior:"smooth"});
    }
    return(
        <div onClick={scrolltoTop} className="flex flex-row justify-center mt-10 border-pink-500 text-center text-black hover:bg-pink-600 hover:text-white bottom-0 text-3xl border-2 ">
        Back to Top
        </div>
    )
}
