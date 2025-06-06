export default function DevOpsSection(){
    return(
         <>
        <div className="flex flex-col justify-center items-center">
        <div className="font-bold text-2xl lg:text-4xl text-center "><h1>These are the main tools that I use for my development</h1></div>
        <div className="grid grid-cols-1 lg:flex lg:flex-row w-55 lg:w-1/1 lg:mt-10 gap-5 lg:place-items-center">
        <div className="mt-5"><img src="/awsLogo.webp" alt="awsLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">Amazon Web Service</h2></div>
        <div><img className="ml-1 lg:ml-0 lg:w-200" src="/docker-mark-blue.png" alt="dockerLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">Docker</h2></div>
        <div><img src="/gitLogo.jpg" alt="gitLogo" />
        <h2 className="text-center text-2xl font-bold mt-5">Git</h2></div>
        </div>
        </div>
        </>
    )
}