import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".1" className="w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="border-t-2 border-b-2 border-zinc-300 overflow-hidden">
        <motion.div
        // whileHover={{ animationPlayState: "paused" }}
          className="flex w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 15,
            repeat: Infinity,
          }}
        >
          <h1 className='text-[19vw] leading-none font-["Founders Grotesk"] uppercase font-bold pr-[10vw]'>
            We are Ochi
          </h1>
          <h1 className='text-[19vw] leading-none font-["Founders Grotesk"] uppercase font-bold pr-[10vw]'>
            We are Ochi
          </h1>
          <h1 className='text-[19vw] leading-none font-["Founders Grotesk"] uppercase font-bold pr-[10vw]'>
            We are Ochi
          </h1>
          <h1 className='text-[19vw] leading-none font-["Founders Grotesk"] uppercase font-bold pr-[10vw]'>
            We are Ochi
          </h1>
        </motion.div>
      </div>
    </div>
  );
}

export default Marquee;
