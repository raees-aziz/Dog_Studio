import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
 
    return (
        <div data-scroll data-scroll-section data-scroll-speed='-.1' className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-52 px-20">
                {["We Create", "Eye Opening", "Presentation"].map((item,index) => {
                    return (
                        <div key={index} className="masker">
                            <div className="w-full flex items-end">
                                {index==1 && <motion.div initial={{width:'0'}} animate={{width:'7vw'}} transition={{duration:'0.8'}} className=" w-[7vw] rounded-md h-[5vw] top-0 relative bg-green-500">
                                    </motion.div>}
                                <h1 className='uppercase text-[7.5vw] leading-[6vw] tracking-tighter font-["Founders Grotesk"] font-medium'>
                                    {item}
                                </h1>
                            </div>

                        </div>
                    );
                })}
            </div>
            <div className="border-t-[1px] mt-30 border-zinc-800 flex justify-between items-center py-5 px-20">
                {[
                    "For Public and Private Companies",
                    "From the first pitch to last IPO",
                ].map((item, index) => {
                    return (
                        <p className="tracking-light leading-none text-md font-light">
                            {item}
                        </p>
                    );
                })}
                <div className="start flex gap-1 items-center">
                    <div className="px-4 py-2 border-[2px] border-zinc-500 font-light text-md  rounded-full uppercase">
                        Start the project
                    </div>
                    <div className="size-10 border-[2px] border-zinc-500 rounded-full flex items-center justify-center">
                        <span className="rotate-[45deg]">
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
