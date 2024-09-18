import { motion } from "framer-motion";
import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
const Landing = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.3"
        className=" w-full h-screen pt-1 bg-[#212121]"
      >
        <div className="textStructure mt-[10vw] px-[4vw]">
          {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
            <>
              <div className="masker">
                <div className=" w-fit flex items-center">
                  {index === 1 && (
                    <motion.div
                      initial={{
                        width: 0,
                        opacity: 0,
                        marginRight: 0,
                      }}
                      animate={{
                        width: "9vw",
                        opacity: 1,
                        marginRight: "12px",
                      }}
                      transition={{
                        ease: [0.76, 0, 0.24, 1],
                        duration: 1,
                      }}
                      className="relative overflow-hidden rounded-lg w-[9vw] h-[5.7vw] top-[.5vw] mr-3 bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"
                    ></motion.div>
                  )}
                  <h1 className=" uppercase text-[9vw] leading-[7vw] font-['Test_Founders_Grotesk_X-Condensed'] tracking-normal">
                    {item}
                  </h1>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className=" font-['Neue_Montreal_light'] border-t border-zinc-800 mt-32 flex w-full justify-between px-[4vw] pt-4">
          {[
            "For public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p className=" text-sm font-light tracking-wider">{item}</p>
          ))}
          <div className="start flex gap-1 items-center">
            <div className=" text-sm font-light uppercase px-4 py-1 rounded-full border-[1px] border-zinc-500">
              Start the project
            </div>
            <div className="w-7 h-7 border-[1px] border-zinc-500 rounded-full flex items-center justify-center">
              <FiArrowUpRight className=" text-sm" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
