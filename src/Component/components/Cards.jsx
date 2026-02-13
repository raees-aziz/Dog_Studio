import React from 'react'

function Cards() {
    return (
        <div className='w-full h-min-screen text-white bg-zinc-900 flex items-center px-32 gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2 '>
                <div className='card relative rounded-2xl flex items-center justify-evenly flex-col w-full h-full bg-[#004d43]'>
                    <img src="image/logo-1.svg" alt="" />
                    <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-0'>&copy; 2019 - 2025</button>
                </div>
            </div>
            <div className='cardcontainer h-[50vh] w-1/2 flex gap-5'>
                <div className='card  relative flex items-center justify-evenly flex-col w-1/2 h-full bg-amber-300 rounded-2xl'>
                <img src="image/logo-2.svg" alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-0'>&copy; 2019 - 2025</button></div>
                <div className='card  relative flex items-center justify-evenly flex-col w-1/2 h-full rounded-2xl'>
                <img src="image/logo-3.png" className='rounded-xl size-34' alt="" />
                <button className='absolute px-5 py-1 rounded-full border-2 left-10 bottom-0'>&copy; 2019 - 2025</button>
                </div>
                
            </div>
        </div>
    )
}

export default Cards