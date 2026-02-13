import React from 'react'

function About() {
    return (
        <div className='w-full p-20 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl'>
            <h1 className='font-["Neue Montreal"] text-black text-[3vw] leading-[3.5vw] tracking-tight'>
                Ochi is stratgic partner for fast-growing texh bussiness that need to raise fund, sell products, explain complex ideas, and hire great people.
            </h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-20 mt-20 border-[#a1b562]'>
                <div className='w-1/2'>
                    <h1 className='text-7xl'>Our Approch:</h1>
                    <button className='flex cursor-pointer hover:bg-zinc-800 active:bg-zinc-900 items-center gap-5 text-xl font-semibold uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                        <div className='size-4 rounded-full bg-zinc-100'></div>
                    </button>
                </div>
                <div className='w-1/2 h-[70vh] rounded-3xl bg-[#66723d]'>

                </div>
            </div>
        </div>
    )
}

export default About