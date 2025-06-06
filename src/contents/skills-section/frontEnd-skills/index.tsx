export default function FrontEndSection(){
    return(
        <>
        <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl lg:text-4xl text-center "><h1>&lt;h1&gt;Take a look at my front-end capabilities!&lt;/h1&gt;</h1></div>
        <div className="grid grid-cols-1 lg:grid-cols-4 w-55 lg:w-1/1 lg:mt-10 gap-5 lg:place-items-center">
        <div className="mt-5"><img src="/html5Logo.png" alt="html5Logo" />
        <h2 className="text-center text-2xl font-bold mt-5">HTML5</h2></div>
        <div><img src="/javascriptLogo.png" alt="JSLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">JavaScript</h2></div>
        <div><img src="/reactLogo.svg" alt="reactLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">React</h2></div>
        <div><img className="lg:w-100" src="/tailwindcssLogo.svg" alt="tailwindCSSLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">Tailwind CSS</h2></div>
        </div>
        </div>
        </>
    )
}