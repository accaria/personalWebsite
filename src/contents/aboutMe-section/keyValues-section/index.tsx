export default function KeyValuesSection(){
    return(
        <>
        <div className="flex flex-col items-center justify-center">
        <div className="lg:w-300 sm:w-200 p-7">
        <div className="font-bold text-2xl lg:text-3xl flex items-center justify-center text-center text-amber-500">WORK PRINCIPLES</div>
        <div className="font-medium text-2xl flex items-center justify-center">These are the principles that I always go with when I work on a project</div>
        <div className="hidden lg:block font-small text-2xl mt-10">
        <p><span className="font-semibold text-3xl">WORK ON TIME</span> Delivering assigned tasks before the assumed deadline schedule</p>
        <p><span className="font-semibold text-3xl">STANDARD PRACTICE</span> Executing the project within the given standard practice </p>
        <p><span className="font-semibold text-3xl">TIMELY UPDATE</span> Updating everyone else of own's progress to keep track of the project as a whole</p>
        </div>
        <div className="flex flex-col font-small text-1xl mt-5 lg:hidden">
        <div className="font-semibold text-3xl text-center">WORK ON TIME</div>
        <div className="text-center">Delivering assigned tasks before the assumed deadline schedule</div>
        <div className="font-semibold text-3xl text-center mt-5">STANDARD PRACTICE</div>
        <div className="text-center">Executing the project within the given standard practice</div>
        <div className="font-semibold text-3xl text-center mt-5">TIMELY UPDATE</div>
        <div className="text-center">Updating everyone else of own's progress to keep track of the project as a whole in a timely manner</div>
        </div>
        </div>
        </div>
        </>
    )
}