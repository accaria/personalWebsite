"use client"
import Link from "next/link";
export default function ContactMe(){

    return(
        <>
        <div className="lg:hidden">
        <div className="mt-7 flex flex-row items-center">
        <hr className="border-t-2 border-amber-600 w-full" />
        <p className="text-2xl font-bold text-center">CONTACT ME</p>
        <hr className="border-t-2 border-amber-600 w-full" />
        </div>
        <div className="flex flex-col items-center mt-5">
            <div className="flex flex-col justify-center items-center  w-7/8">
                <img className="w-40" src="/emailLogo.png" alt="Email Logo" />
                <p className="text-2xl text-center">dummyemail@gmail.com</p>
            </div>
            <div className="h-1.5 w-full bg-gray-600 my-5"></div>
             <div className="flex flex-col justify-center items-center w-7/8">
                <img className="w-20" src="/githubLogo.png" alt="Github Logo" />
                <p className="text-2xl text-center">https://github.com/dummy</p>
            </div>
            <div className="h-1.5 w-full bg-gray-600 my-5"></div>
             <div className="flex flex-col justify-center items-center w-7/8">
                <img className="w-20" src="/linkedinLogo.png" alt="Linkedin Logo" />
                <p className="text-xl text-center">https://www.linkedin.com/in/dummy</p>
            </div>
             <div className="h-1.5 w-full bg-gray-600 my-5"></div>
             <div className="text-3xl"> 
            <Link href="/hero-section">MESSAGE ME!</Link>
             </div>
        </div>
        </div>

        <div className="hidden lg:flex flex-col">
        <div className="mt-7 flex items-center">
        <hr className="border-t-2 border-amber-600 w-full" />
        <p className="text-4xl font-bold text-center">CONTACT ME</p>
        <hr className="border-t-2 border-amber-600 w-full" />
        </div>
        <div className="flex flex-row justify-center items-center ">
            <div className="flex flex-col justify-center items-center  w-1/2">
            <img className="w-40" src="/emailLogo.png" alt="Email Logo" />
            <p className="text-2xl text-center">dummyemail@gmail.com</p>
            </div>
            <div className="flex flex-col justify-center items-center  w-1/2">
            <img className="w-40" src="/githubLogo.png" alt="Github Logo" />
            <p className="text-2xl text-center">https://github.com/dummy</p>
            </div>
        </div>
        <hr className="border-t-2 border-amber-600 w-full my-10" />
        <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-center items-center  w-7/8">
            <img className="w-40" src="/linkedinLogo.png" alt="Linkedin Logo" />
            <p className="text-2xl text-center">https://www.linkedin.com/in/dummy</p>
            </div>
        </div>
        <div className="border-t-2 border-amber-600 w-full my-10"></div>
             <div className="text-3xl text-center"> 
            <Link href="/contactMe-page">MESSAGE ME!</Link>
             </div>
        </div>
        </>
    )
}