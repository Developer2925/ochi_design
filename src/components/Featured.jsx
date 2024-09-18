import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

const Featured = () => {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];
  const handleAnimation = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleAnimationStop = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <>
      <div className="font-['Neue_Montreal'] py-[6vw] text-[#F6F6F6] bg-[#212121] rounded-t-3xl overflow-hidden">
        <div className="w-full rounded-t-3xl border-b-[0.5px] border-zinc-500 px-[4vw] pb-[3vw]">
          <h1 className="text-[3.5vw] text-[#F6F6F6] font-['Neue_Montreal']">
            Featured projects
          </h1>
        </div>
        <div className="cards w-full p-[4vw] grid grid-cols-2 gap-4 font-['Neue_Montreal_light']">
          <div className="card relative mb-[3vw]">
            <h1 className="z-[998] overflow-hidden font-['Test_Founders_Grotesk_X-Condensed'] absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-fit flex justify-center uppercase text-[#CDEA67] text-[8vw] font-bold text-nowrap">
              {"Cardboard spaceship".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                  className=""
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <h1 className=" uppercase font-light text-sm">
                Cardboard spaceship
              </h1>
            </div>
            <motion.div
              onHoverStart={() => handleAnimation(0)}
              onHoverEnd={() => handleAnimationStop(0)}
              className="mt-4 rounded-xl overflow-hidden duration-700 hover:scale-95"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-1326x1101.png"
                alt=""
                className="hover:scale-110 duration-1000"
              />
            </motion.div>
            <div className="buttons flex gap-2 mt-4 font-['Neue_Montreal_light']">
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">branded template</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">sales deck</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">social media templates</h1>
              </button>
            </div>
          </div>
          <div className="card relative mb-[3vw]">
            <h1 className="z-[998] overflow-hidden font-['Test_Founders_Grotesk_X-Condensed'] absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-fit flex justify-center uppercase text-[#CDEA67] text-[8vw] font-bold text-nowrap">
              {"ah2 & matt horn".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[1]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <h1 className=" uppercase font-light text-sm">Ah2 & matt horn</h1>
            </div>
            <motion.div
              onHoverStart={() => handleAnimation(1)}
              onHoverEnd={() => handleAnimationStop(1)}
              className="mt-4 rounded-xl overflow-hidden duration-700 hover:scale-95"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-1326x1101.png"
                alt=""
                className="hover:scale-110 duration-1000"
              />
            </motion.div>
            <div className="buttons flex gap-2 mt-4 font-['Neue_Montreal_light']">
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">pitch deck</h1>
              </button>
            </div>
          </div>
          <div className="card relative mb-[3vw]">
            <h1 className="z-[998] font-['Test_Founders_Grotesk_X-Condensed'] absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-fit overflow-hidden flex justify-center uppercase text-[#CDEA67] text-[8vw] font-bold text-nowrap">
              {"fyde".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[2]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <h1 className=" uppercase font-light text-sm">Fyde</h1>
            </div>
            <motion.div
              onHoverStart={() => handleAnimation(2)}
              onHoverEnd={() => handleAnimationStop(2)}
              className="mt-4 rounded-xl overflow-hidden duration-700 hover:scale-95"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png"
                alt=""
                className="hover:scale-110 duration-1000"
              />
            </motion.div>
            <div className="buttons flex gap-2 mt-4 font-['Neue_Montreal_light']">
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">audit</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">copywriting</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">sales deck</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">slides design</h1>
              </button>
            </div>
          </div>
          <div className="card relative mb-[3vw]">
            <h1 className="z-[998] font-['Test_Founders_Grotesk_X-Condensed'] absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-fit overflow-hidden flex justify-center uppercase text-[#CDEA67] text-[8vw] font-bold text-nowrap">
              {"vise".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[3]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <h1 className=" uppercase font-light text-sm">Vise</h1>
            </div>
            <motion.div
              onHoverStart={() => handleAnimation(3)}
              onHoverEnd={() => handleAnimationStop(3)}
              className="mt-4 rounded-xl overflow-hidden duration-700 hover:scale-95"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg"
                alt=""
                className="hover:scale-110 duration-1000"
              />
            </motion.div>
            <div className="buttons flex gap-2 mt-4 font-['Neue_Montreal_light']">
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">agency</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">company Presentation</h1>
              </button>
            </div>
          </div>
          <div className="card relative mb-[3vw]">
            <h1 className="z-[998] font-['Test_Founders_Grotesk_X-Condensed'] absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-fit overflow-hidden flex justify-center uppercase text-[#CDEA67] text-[8vw] font-bold text-nowrap">
              {"trawa".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[4]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <h1 className=" uppercase font-light text-sm">Trawa</h1>
            </div>
            <motion.div
              onHoverStart={() => handleAnimation(4)}
              onHoverEnd={() => handleAnimationStop(4)}
              className="mt-4 rounded-xl overflow-hidden duration-700 hover:scale-95"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-1326x1101.jpg"
                alt=""
                className="hover:scale-110 duration-1000"
              />
            </motion.div>
            <div className="buttons flex gap-2 mt-4 font-['Neue_Montreal_light']">
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">brand identity</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">design research</h1>
              </button>
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">investor deck</h1>
              </button>
            </div>
          </div>
          <div className="card relative mb-[3vw]">
            <h1 className="z-[998] font-['Test_Founders_Grotesk_X-Condensed'] absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 w-fit overflow-hidden flex justify-center uppercase text-[#CDEA67] text-[8vw] font-bold text-nowrap">
              {"premium blend".split("").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[5]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.05 }}
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-white" />
              <h1 className=" uppercase font-light text-sm">Premium blend</h1>
            </div>
            <motion.div
              onHoverStart={() => handleAnimation(5)}
              onHoverEnd={() => handleAnimationStop(5)}
              className="mt-4 rounded-xl overflow-hidden duration-700 hover:scale-95"
            >
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-1326x1101.png"
                alt=""
                className="hover:scale-110 duration-1000"
              />
            </motion.div>
            <div className="buttons flex gap-2 mt-4 font-['Neue_Montreal_light']">
              <button className="px-[1.5vw] py-[0.5vw] rounded-full border hover:bg-white hover:text-[#212121] duration-700">
                <h1 className="text-sm uppercase">branded template</h1>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full px-[4vw] flex justify-center">
          <button className=" bg-black px-[2vw] py-[1.2vw] w-fit rounded-full flex items-center gap-10">
            <h1 className=" uppercase font-light text-sm font-['Neue_Montreal_light']">
              view all case studies
            </h1>
            <div className="w-3 h-3 bg-white rounded-full" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Featured;
