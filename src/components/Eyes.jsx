import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let currentX = e.clientX;
      let currentY = e.clientY;

      let differenceX = currentX - window.innerWidth / 2;
      let differenceY = currentY - window.innerHeight / 2;

      var angle = Math.atan2(differenceY, differenceX) * (180 / Math.PI);

      setRotate(angle + 90);
    });
  });
  return (
    <>
      <div className="eyes w-full h-screen overflow-hidden">
        <div
          data-scroll
          data-scroll-section
          data-scroll-speed="-.7"
          className="w-full h-full relative bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] bg-cover bg-center"
        >
          <div className="absolute w-1/2 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-10">
            <div
              data-scroll
              data-scroll-section
              data-scroll-speed=".1"
              className="eye w-[12vw] h-[12vw] bg-[#F4F4F4] rounded-full flex items-center justify-center"
            >
              <div className="relative w-[7.5vw] h-[7.5vw] bg-[#212121] rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-5 h-full"
                >
                  <div className="w-full h-5 bg-[#F4F4F4] rounded-full" />
                </div>
              </div>
            </div>
            <div
              data-scroll
              data-scroll-section
              data-scroll-speed=".1"
              className="eye w-[12vw] h-[12vw] bg-[#F4F4F4] rounded-full flex items-center justify-center"
            >
              <div className="relative w-[7.5vw] h-[7.5vw] bg-[#212121] rounded-full">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-5 h-full"
                >
                  <div className="w-full h-5 bg-[#F4F4F4] rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eyes;
