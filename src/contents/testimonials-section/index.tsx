import TestimonialsBox from "./testimonials"
export default function Testimonials(){
    return (
        <>
        <div className="flex flex-col justify-center items-center">
        <h1 className="text-amber-600 font-bold text-4xl mt-5">TESTIMONIALS</h1>
        <div className="w-1/2 h-px bg-gray-700 my-4"></div>
        <p className="font-semibold text-3xl mb-5">Those who I have worked with</p>
        <div className="flex flex-col lg:flex-row justify-center items-center">
        <TestimonialsBox/>
        </div>
        </div>
        </>
    )
}