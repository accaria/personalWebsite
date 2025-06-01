export default function IntroSection(){
    return(
        <>
        <div className="flex flex-row justify-center items-center">
        <div className="w-1/3 flex flex-col items-center justify-center">
        <div className="justify-end"><img className="w-50" src="/fotoAga.jpg" alt="fotoAga"/></div>
        <p>anugerahbarraqi1997@gmail.com</p>
        <p>Indonesia</p>
        <p>Looking to Work</p>
        <p>https://github.com/accaria</p>
        </div>
        <div className="font-extralight text-1xl w-1/3">
            <p>Hi, my name is <span className="text-amber-500 text-3xl font-bold">Muhammad Anugerah Barraqi</span></p>
            <p>I'm a Junior Full-Stack Web Developer.</p>
            <p>I help business grow by crafting amazing web experiences.</p> 
            <p>If you're looking for a developer that will get stuff done
            Let's talk</p>
        </div>
        <div className="w-1/3 flex flex-col font-medium text-1xl items-center justify-between text-center gap-3">
            <p><span className="font-bold text-3xl">5</span>Programming Language</p>
            <p><span className="font-bold text-3xl">3</span>Spoken Languages</p>
            <p><span className="font-bold text-3xl">1</span>Year of Experience</p>
        </div>
        </div>
        </>
    )
}