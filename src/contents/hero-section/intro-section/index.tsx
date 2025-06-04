export default function IntroSection(){
    return(
        <>
        <div className="flex flex-col lg:flex-row justify-center items-center">
        <div className="gap-1 lg:w-1/3 flex flex-col items-center justify-center lg:gap-0">
        <div className="justify-end"><img className="w-50" src="/fotoAga.jpg" alt="fotoAga"/></div>
        <p>anugerahbarraqi1997@gmail.com</p>
        <p>Indonesia</p>
        <p>Looking to Work</p>
        <p>https://github.com/accaria</p>
        </div>
        <div className="font-extralight text-xl lg:text-2xl w-full lg:w-1/3 text-center lg:text-left">
            <p>Hi, my name is <span className="text-amber-500 text-3xl font-bold">Muhammad Anugerah Barraqi</span></p>
            <p>I'm a Junior Full-Stack Web Developer.</p>
            <p>I help business grow by crafting amazing web experiences.</p> 
            <p>If you're looking for a developer that will get stuff done,
            let's talk</p>
        </div>
        <div className="lg:w-1/3 flex flex-col font-medium text-1xl items-center justify-between text-center lg:gap-3">
            <p className="font-small lg:font-medium text-xl lg:text-3xl text-amber-500"><span className="font-bold">5</span>     Programming Language</p>
            <p className="font-small lg:font-medium text-xl lg:text-3xl text-amber-500"><span className="font-bold">3</span>     Spoken Languages</p>
            <p className="font-small lg:font-medium text-xl lg:text-3xl text-amber-500"><span className="font-bold">1</span>     Year of Experience</p>
        </div>
        </div>
        </>
    )
}