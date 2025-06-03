"use client"
import { useState } from "react"
export default function ContactSection(){
const [setName,getName]=useState("");
const [setEmail,getEmail]=useState("");
const [setMessage,getMessage]=useState("");
const handleNameSubmit = (e) => {
    getName(e.target.value);
};
const handleEmailSubmit = (e) => {
    getEmail(e.target.value);
};
const handleMessageSubmit = (e) => {
    getMessage(e.target.value);
};

    return(
        <>
        <h1 className="text-center font-bold text-3xl mb-5">Send A Message to Start A Wonderful Work Relationship!</h1>
        <div className="flex flex-row w-full justify-between items-center">
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
        </div>
        <div className="mt-6 w-full">
        <p >YOUR MESSAGE</p>
        <input 
        type="text"
        value={setMessage}
        onChange={handleMessageSubmit}
        placeholder="Enter Your Message"
        className="border-b-2 border-black w-full"/>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
        <div>
        <button>SUBMIT MESSAGE</button>
        </div>
        <div>
            <h1>Message Submitted, Thank You!</h1>
            <h2>Name:{setName}</h2>
            <h2>Email:{setEmail}</h2>
            <h2>Message:{setMessage}</h2>
        </div>
        </div>
        </>
    )
}