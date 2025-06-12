"use client"
import { useState,useEffect } from "react"

export default function ContactSection(){
const [setName,getName]=useState("");
const [setEmail,getEmail]=useState("");
const [setMessage,getMessage]=useState("");
const [setSubmit,updateSubmit]=useState(false);
const handleNameSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    getName(e.target.value);
};
const handleEmailSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    getEmail(e.target.value);
};
const handleMessageSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    getMessage(e.target.value);
};

useEffect(()=>{
    if (setSubmit){
        getName(""),
        getEmail(""),
        getMessage("");
    }
},[setSubmit]);

    return(
        <>
        <h1 className="text-center font-bold text-2xl lg:text-3xl mb-5">Send A Message to Start A Wonderful Work Relationship!</h1>
        <div className="flex flex-col lg:flex-row w-full justify-between items-center">
        <div className="flex flex-col">
        <p className=" font-medium ">YOUR NAME</p>
        <input 
        type="text"
        value={setName}
        onChange={handleNameSubmit}
        placeholder="Enter Your Name"
        className="border-b-2 border-black"/>
        </div>
        <div className="flex flex-col">
        <p className="font-medium">YOUR EMAIL</p>
        <input 
        type="text"
        value={setEmail}
        onChange={handleEmailSubmit}
        placeholder="Enter Your Email"
        className="border-b-2 border-black" />
        </div>
        <div className="lg:hidden">
        <p  className="font-medium">YOUR MESSAGE</p>
        <input 
        type="text"
        value={setMessage}
        onChange={handleMessageSubmit}
        placeholder="Enter Your Message"
        className="border-b-2 border-black lg:w-full"/>
        </div>
        </div>
        <div className="hidden lg:block lg:mt-6 lg:w-full">
        <p  className="font-medium">YOUR MESSAGE</p>
        <input 
        type="text"
        value={setMessage}
        onChange={handleMessageSubmit}
        placeholder="Enter Your Message"
        className="border-b-2 border-black lg:w-full"/>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
        <div>
        <button onClick={()=>updateSubmit(true)} className=" border-pink-500 border-4 w-40 text-center hover:bg-pink-600 hover:text-white">SUBMIT MESSAGE</button>
        </div>
        {setSubmit &&(
        <div className="">
        <h1>Message Submitted, Thank You!</h1>
        </div>
        )}
        </div>
        </>
    )
}