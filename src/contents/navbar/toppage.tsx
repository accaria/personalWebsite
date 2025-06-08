"use client"
import { useState } from "react";
import Link from "next/link";

export default function TopPage(){
    return(
        <Link href="/" >
        <div className="flex flex-row justify-center mb-10 border-pink-500 text-center text-black hover:bg-pink-600 hover:text-white bottom-0 text-3xl border-2">Go to Home</div>
        </Link>
    )
}
