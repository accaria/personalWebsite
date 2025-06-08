import Link from "next/link"
export default function Portofolio(){
    return(
        <>
        <div className="w-11/12 md:w-4/5 lg:w-7/8 lg:h-7/8 mx-auto mt-5 border-4">
        <h1 className="text-3xl font-bold text-center">Portofolio</h1>
        <h2 className="text-2xl font-bold text-center">Click on Image for details</h2>
        <div className="flex flex-col lg:flex-row justify-center items-center ">
        <Link href="/projects/project1">
        <div className="group"><img src="project1.png" alt="Recycle Shop" />
        <div className=""><p className="hidden text-center text-black group-hover:block text-3xl font-bold">Recycling Shop Project</p></div>
        </div>
        </Link>
        <Link href="/projects/project2">
        <div className="group">
        <div className=""><img src="project2.png" alt="Anime Shop" /></div>
        <div className=""><p className="hidden text-center text-black group-hover:block text-3xl font-bold">Anime Shop Project</p></div>
        </div>
        </Link>
        <Link href="/projects/project3">
        <div className="group">
        <div className=""><img src="project3.png" alt="Sake Shop" /></div>
        <div className=""><p className="hidden text-center text-black group-hover:block text-3xl font-bold">Sake Shop Project</p></div>
        </div>
        </Link>
        </div>
        </div>
        </>
    )
}