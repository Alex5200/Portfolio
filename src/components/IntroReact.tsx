import {animate, motion} from 'framer-motion'

export default function IntroReact(){
    return(
        
    <motion.div
    animate={{opacity: 1, y: 0}}
    initial={{opacity: 0, y: -25}}
    className=" mx-12 flex flex-col items-center justify-center ">
        <h1 className="font-bold relative  text-2xl text-center border-x-2 p-6  border-blue-600/20 ">Hi my name is Alex me 
            <span className="static  text-blue-800"> Developer  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 absolute top-2 right-2 text-blue-800 ">
                    <path className="color-blue" stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
            </span>    
        </h1>
    </motion.div>
    )
}