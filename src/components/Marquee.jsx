import { motion } from "framer-motion";
import React from "react";

const Marquee = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.01"
        className="w-full h-[30vw] py-10 bg-[#004D43] rounded-t-3xl text-white flex items-center"
      >
        <div className="border-t-[0.5px] border-b-[0.5px] border-zinc-300 font-['Test_Founders_Grotesk_X-Condensed'] flex justify-center whitespace-nowrap overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className=" text-[20vw] uppercase leading-none -mt-12 -mb-4 pr-20"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className=" text-[20vw] uppercase leading-none -mt-12 -mb-4 pr-20"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className=" text-[20vw] uppercase leading-none -mt-12 -mb-4 pr-20"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className=" text-[20vw] uppercase leading-none -mt-12 -mb-4 pr-20"
          >
            We are ochi
          </motion.h1>
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              ease: "linear",
              repeat: Infinity,
              duration: 5,
            }}
            className=" text-[20vw] uppercase leading-none -mt-12 -mb-4 pr-20"
          >
            We are ochi
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default Marquee;
