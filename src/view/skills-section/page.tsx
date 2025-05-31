export default function SkillsPageView(){
    return(
        <div className="flex flex-col lg:items-baseline sm:items-center lg:justify-self sm:justify-center p-8 ">
        <div className="font-bold text-3xl">
            WEB-DEV RELATED SKILLS
        </div>
         <div className="font-medium text-3xl">Front-End Related</div>
        <div className="grid grid-cols-3 gap-3">
        <div><img className="w-32" src="/html5Logo.png" alt="html5 logo" /></div>
        <div><img className="w-32" src="/tailwindcssLogo.svg" alt="tailwind css logo" /></div>
        <div><img className="w-32" src="/javascriptLogo.png" alt="JS logo" /></div>
        </div>
        <div className="font-medium text-3xl">Back-End Related</div>
        <div className="grid grid-cols-2 gap-3">
        <div><img className="w-32" src="/next.svg" alt="next.js logo" /></div>
        <div><img className="w-32" src="/reactLogo.svg" alt="reactlogo" /></div>
        </div>
        </div>
    )
}