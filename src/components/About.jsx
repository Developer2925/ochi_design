import React from "react";

const About = () => {
  return (
    <>
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-.1"
        className="overflow-hidden rounded-3xl"
      >
        <div className="w-full px-[4vw] py-[2vw] bg-[#CEEA67] font-['Neue_Montreal']">
          <h1 className=" text-[3.5vw] text-[#212121] font-normal leading-none my-10 w-[85%]">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to <a className=" underline">raise funds</a>,{" "}
            <a className=" underline">sell prod­ucts</a>,{" "}
            <a className=" underline">ex­plain com­plex ideas</a>, and{" "}
            <a className=" underline">hire great peo­ple</a>.
          </h1>
        </div>
        <div className="w-full h-[25vw] font-['Neue_Montreal'] flex justify-between px-[4vw] py-[1vw] bg-[#CEEA67] border-t-[1px] border-[#99AE53] text-[#212121]">
          <h1 className=" font-light w-[50%]">What can you expect:</h1>
          <div className=" font-light flex w-[50%] gap-40">
            <div className="flex flex-col gap-10 w-[45%]">
              <h1 className="w-full">
                We create tailored presentations to help you persuade your
                colleagues, clients, or investors. Whether it's live or digital,
                delivered for one or a hundred people.
              </h1>
              <h1 className="w-full">
                We believe the mix of strategy and design (with a bit of coffee)
                is what makes your message clear, convincing, and captivating.
              </h1>
            </div>
            <div className="flex flex-col gap-10 w-[45%] items-center justify-center">
              <h1 className="w-full">S:</h1>
              <div className="w-full flex flex-col gap-1">
                <a
                  href=""
                  className="leading-5 border-b-[0.5px] w-fit border-[#212121]"
                >
                  Instagram
                </a>
                <a
                  href=""
                  className="leading-5 border-b-[0.5px] w-fit border-[#212121]"
                >
                  Behance
                </a>
                <a
                  href=""
                  className="leading-5 border-b-[0.5px] w-fit border-[#212121]"
                >
                  Facebook
                </a>
                <a
                  href=""
                  className="leading-5 border-b-[0.5px] w-fit border-[#212121]"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[35vw] font-['Neue_Montreal'] px-[4vw] pt-[1vw] pb-[3vw] bg-[#CEEA67] border-t-[1px] border-[#99AE53] flex">
          <div className="w-[50%]">
            <h1 className=" text-[3.5vw] text-[#212121] font-normal leading-10">
              Our approach:
            </h1>
            <button className=" uppercase px-6 py-4 bg-[#212121] w-fit rounded-full mt-6 text-sm font-light flex gap-8 items-center">
              <h1>read more</h1>
              <div className="h-2 w-2 bg-white rounded-full" />
            </button>
          </div>
          <div
            className="w-[50%] bg-[url('https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg')]
         bg-cover bg-center rounded-xl"
          />
        </div>
      </div>
    </>
  );
};

export default About;
