import React, { useEffect, useState } from 'react'

function Eyes() {
  const [rotate, setRotate] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2

      const deltaX = mouseX - centerX
      const deltaY = mouseY - centerY

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI)
      setRotate(angle - 180)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full bg-cover bg-center bg-[url("public/image/eye-img.jpg")]'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-evenly w-1/2'>

          {/* Left Eye */}
          <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
            <div className='w-1/2 h-1/2 bg-black rounded-full relative'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='absolute top-1/2 left-1/2 w-full h-6'
              >
                <div className="size-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Right Eye */}
          <div className='w-[15vw] h-[15vw] flex justify-center items-center rounded-full bg-zinc-100'>
            <div className='w-1/2 h-1/2 bg-black rounded-full relative'>
              <div
                style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
                className='absolute top-1/2 left-1/2 w-full h-6'
              >
                <div className="size-5 bg-zinc-100 rounded-full"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Eyes
