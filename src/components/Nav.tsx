import {animate, motion} from 'framer-motion'
import { useState } from 'react'
import  useMediaQuery  from '../util/useMediaQuery'

export default function Nav(){
    const [burger, setBurger] = useState(false)
    const matches = useMediaQuery("(min-width: 1280px)")
    console.log(matches)
    return(
        <nav className=' relative mx-8 mb-24 flex justify-between items-center py-12 pb-4 font-medium md:mx-16 lg:mx-32'>
          

            <p>

            </p>
            <p className='text-2xl font-bold'>
                <a href='/'> meAlex</a>
            </p>
            {
                matches && (
                <div className='flex gap-4'>
                    <a href='/'>Home</a>
                    <a href='/About'>About</a>
                    <a href='/Services'>Services</a>
                    <a href='/Contact'>Contact</a>
                </div>
                )
            }
           
            {!matches && (
            <div 
                onClick={() => setBurger(!burger)} 
                className='space-y-1 cursor-pointer xl:hidden z-50'
                > 
                
                <motion.div
                    animate={{opacity: 1, x: 0}}
                    initial={{opacity: 0, x: 25}}
                    className='space-y-1.5'>  
                        <motion.span
                            animate={{rotateZ: burger ? 45: 0, y: burger ? 8: 0}} 
                            className='block h-0.5 w-8 bg-[#1e40af]'
                        />

                        <motion.span
                        animate={{width: burger? 0 : 24}}
                         className='block h-0.5 w-6 bg-[#1e40af]'
                         />
                        <motion.span 
                        animate={{rotateZ: burger ? -45: 0, y: burger ? -8: 0, width: burger ? 32 : 16}} 
                        className='block h-0.5 w-4 bg-[#1e40af]'
                        />
                </motion.div>
                
 
            </div>)}
            {burger && !matches && (
                <motion.div 
                animate={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                 className='fixed z-10 flex bg-white bottom-0 left-0 w-full h-full items-center justify-center'>
                    <div className='flex flex-col gap-8 text-3xl'>
                        <motion.a 
                        animate={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -100}}
                        href='/'>Home</motion.a>
                        <motion.a
                        animate={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -75}}
                        
                        href='/About'>About</motion.a>
                        <motion.a
                        animate={{opacity: 1, x: 0}}
                        initial={{opacity: 0, x: -50}}
                        href='/Developedby'>Developed by</motion.a>
                       
                    </div>



               </motion.div>
            )}
        </nav>
    )
}