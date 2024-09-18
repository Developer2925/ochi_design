import React from "react";

const Cards = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className=" w-full h-screen px-[4vw] py-[7vw] bg-[#F6F6F6] rounded-t-3xl"
      >
        <div className=" flex gap-4 h-[64%] font-['Neue_Montreal_light']">
          <div className="bg-[#004D43] relative w-1/2 rounded-xl overflow-hidden flex items-center justify-center">
            <h1 className="absolute z-[998] uppercase bottom-7 left-7 border border-[#CDEA67] rounded-full px-3 py-1 text-sm text-[#CDEA67] ">
              &copy;2019-2022
            </h1>
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
              alt=""
              className="h-16"
            />
          </div>
          <div className="bg-[#212121] relative w-1/4 rounded-xl overflow-hidden flex items-center justify-center">
            <a
              href="https://clutch.co/profile/ochi-design-presentation-design-agency#summary"
              target="_blank"
              className="absolute z-[998] uppercase bottom-7 left-7 flex items-center border border-[#F1F1F1] rounded-full px-3 py-1 text-sm text-[#F1F1F1] duration-500 hover:text-[#212121] hover:bg-[#F1F1F1]"
            >
              rating 5.0 on clutch
            </a>
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
              alt=""
              className="h-20"
            />
          </div>
          <div className="bg-[#212121] relative w-1/4 rounded-xl overflow-hidden flex items-center justify-center">
            <a
              href="https://thefutur.com/alumni"
              target="_blank"
              className="absolute z-[998] uppercase bottom-7 left-7 flex items-center border border-[#F1F1F1] rounded-full px-3 py-1 text-sm text-[#F1F1F1] duration-500 hover:text-[#212121] hover:bg-[#F1F1F1]"
            >
              business bootcamp alumini
            </a>
            <img
              src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
              alt=""
              className="h-28"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
