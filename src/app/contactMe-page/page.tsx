import ContactSection from "@/contents/hero-section/contact-section";
import TopPageView from "@/view/navbar/toppage/page";

export default function ContactMePage(){
    return(
        <>
        <TopPageView/>
        <div className="w-11/12 md:w-4/5 lg:w-7/8 lg:h-7/8 mx-auto mt-5 border-4">
        <div className="flex flex-col items-center justify-center p-8">
        <ContactSection/>
        </div>
        </div>
        </>
    )
}