export default function BackEndSection(){
    return(
         <>
        <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl lg:text-4xl text-center "><h1>&lt;h1&gt;Now these are my back-end capabilities!&lt;/h1&gt;</h1></div>
        <div className="grid grid-cols-1 lg:flex lg:flex-row w-55 lg:w-1/1 lg:mt-10 gap-5 lg:place-items-center">
        <div className="mt-5"><img src="/expressjsLogo.webp" alt="expressJSLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">ExpressJS</h2></div>
        <div><img src="/djangoLogo1.png" alt="djangoLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">Django</h2></div>
        <div><img src="/nodejsLogo.png" alt="nodeJSLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">NodeJS</h2></div>
        </div>
        </div>
        </>
    )
}