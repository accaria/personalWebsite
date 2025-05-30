export default function AboutMePageView(){
    return (
        //This is for the whole page
        <div className="flex flex-col items-center justify-center">
        <div className="lg:w-300 p-7 sm:w-200">
        <div className="font-bold text-4xl border-4 flex items-center justify-center">
            ABOUT ME
        </div>
        <div className="border-1 mt-10 font-small text-1xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
            Quibusdam voluptatibus velit molestiae fuga harum amet ea, error ipsam sapiente cum! Perspiciatis veniam ea odio natus blanditiis soluta esse eum cupiditate.
        </div>
        </div>


        <div className="lg:w-300 sm:w-200 p-7">
        <div className="font-medium text-3xl border-4 flex items-center justify-center">
            MY SKILLS
        </div>
        <div className="grid grid-cols-2 w-200">
        <div><img src="/html5Logo.png" alt="HTML5 LOGO" /></div>
        <div><img src="/javascriptLogo.png" alt="Javascript Logo" /></div>
        <div className=""><img src="/tailwindcssLogo.svg" alt="tailwindcss Logo" /></div>
        <div>日本語 (JAPANESE LANGUAGE)</div>
        </div>
        </div>


        <div className="lg:w-300 sm:w-200 p-7">
        <div className="font-bold text-3xl border-4 flex items-center justify-center">WORK PRINCIPLES</div>
        <div className="font-medium text-2xl flex items-center justify-center">These are the principles that I always go with when I work on a project</div>
        <div className="font-small text-1xl mt-10">
        <p><span className="font-semibold text-2xl">WORK ON TIME</span> Delivering assigned tasks before the assumed deadline schedule</p>
        <p><span className="font-semibold text-2xl">STANDARD PRACTICE</span> Executing the project within the given standard practice </p>
        <p><span className="font-semibold text-2xl">TIMELY UPDATE</span> Updating everyone else of own's progress to keep track of the project as a whole</p>
        </div>
        </div>
        </div>
    );
}