import { motion } from 'framer-motion'
import { Power4 } from 'gsap'
import React, { useState } from 'react'


function Feature() {

    const [isHovering, setHovering] = useState(false)


    return (
        <div className='w-full py-10 mb-20'>
            <div className='w-full px-20 border-b border-zinc-500 pb-20'>
                <h1 className='text-8xl font-["Neue_Montreal"] tracking-tight '>Featured Project</h1>
            </div>
            <div className='px-20'>
                <div className='cards w-full flex gap-10 mt-10'>
                    {/* left card */}
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute left-full  flex overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter font-bold text-[#cdea68]'>
                            {"RAEES".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={isHovering ? { y: '0%' } : { y: '100%' }} transition={{ ease: [0.22,1,0.36,1]}}  className='inline-block' key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="/image/project-1.png" alt="" />
                        </div>
                    </div>
                    {/* right card */}
                    <div onMouseEnter={() => handleHover()} className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute right-full flex translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter font-bold text-[#cdea68] '>
                             {"RAEES".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={isHovering ? { y: '0%' } : { y: '100%' }} transition={{ ease: [0.22,1,0.36,1]}}  className='inline-block' key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="/image/project-2.png" alt="" />
                        </div>
                    </div>
                    {/* left card */}
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute left-full  flex overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter font-bold text-[#cdea68]'>
                            {"RAEES".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={isHovering ? { y: '0%' } : { y: '100%' }} transition={{ ease: [0.22,1,0.36,1]}}  className='inline-block' key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="/image/project-1.png" alt="" />
                        </div>
                    </div>
                    {/* right card */}
                    <div onMouseEnter={() => handleHover()} className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute right-full flex translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter font-bold text-[#cdea68] '>
                             {"RAEES".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={isHovering ? { y: '0%' } : { y: '100%' }} transition={{ ease: [0.22,1,0.36,1]}}  className='inline-block' key={index}>{item}</motion.span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="/image/project-2.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className='cards w-full flex gap-10 mt-10'>
                    {/* left card */}
                    <div className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter font-bold text-[#cdea68]'>
                            {"RAEES".split('').map((item, index) => <span key={index}>{item}</span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="/image/project-3.png" alt="" />
                        </div>
                    </div>
                    {/* right card */}
                    <div className='cardcontainer relative w-1/2 h-[75vh]'>
                        <h1 className='absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 text-7xl leading-none tracking-tighter font-bold text-[#cdea68] '>
                            {"VICE".split('').map((item, index) => <span key={index}>{item}</span>)}
                        </h1>
                        <div className='card w-full h-full rounded-xl overflow-hidden bg-green-500'>
                            <img className='size-full bg-cover' src="/image/project-4.png" alt="" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Feature