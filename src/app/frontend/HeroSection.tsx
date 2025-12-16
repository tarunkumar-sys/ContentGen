"use client";
import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-center relative bg-[#111] text-white overflow-hidden">
      <h1 className="text-[8.5vw] uppercase font-black leading-[8.5vw] text-center">
        AI & ML C
        <span className="inline-block align-middle">
          <svg
            className="h-[6vw] w-[6vw] rounded-full bg-purple-400 "
            fill="none"
            viewBox="0 0 131 136"
          >
            <path
              className="g-path"
              data-morph="end"
              fill="#fff"
              d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
            />
            <path
              className="g-path"
              data-morph="start"
              fill="#fff"
              d="M48 77.457v7.224h7.224l21.307-21.306-7.224-7.225L48 77.457Zm34.118-19.67a1.919 1.919 0 0 0 0-2.716l-4.508-4.508a1.919 1.919 0 0 0-2.716 0l-3.526 3.526 7.224 7.224 3.526-3.525Z"
            />
          </svg>
        </span>
        NTENT
      </h1>
      <h1 className="text-[8.5vw] uppercase font-black leading-[8.5vw] text-center">
        Forge SPACE
      </h1>
      <p className="text-center font-normal mt-[3vh] text-[1vw]">
        Effortlessly Generate High-Quality Content with AI in Minutes —creating
        everything
        <br />
        to D and beyond with our expertise in
      </p>

      <div className="flex items-center justify-center flex-wrap gap-2 mt-4">
        <h4 className="font-normal text-[1vw] lowercase px-[18px] py-[9px] border border-gray-400 rounded-full">
          Content Creation
        </h4>
        <h4 className="font-normal text-[1vw] lowercase px-[18px] py-[9px] border border-gray-400 rounded-full">
          User Experience
        </h4>
        <h4 className="font-normal text-[1vw] lowercase p-[2px]">and</h4>
        <h4 className="font-normal text-[1vw] lowercase px-[18px] py-[9px] border border-gray-400 rounded-full">
          AI Chat
        </h4>
      </div>

      <div className="mt-[10vh] absolute bottom-[3%] whitespace-nowrap px-[1.2vw] overflow-hidden w-[44%]">
        <div className="absolute top-0 left-0 h-full w-[20%] bg-gradient-to-r from-[#111] to-transparent z-20" />
        <div className="absolute top-0 right-0 h-full w-[20%] bg-gradient-to-l from-[#111] to-transparent z-20" />

        {[1, 2].map((_, index) => (
          <div
            key={index}
            className="inline-block animate-move"
            style={{
              animation: "mobe 9s linear infinite",
            }}
          >
            {[
              "forbes",
              "adweek",
              "pmi",
              "wf",
              "adweek",
              "rd",
              "pmi",
              "webby",
            ].map((logo, idx) => (
              <img
                key={idx}
                src={`https://lazarev.kiev.ua/la24/${logo}.svg`}
                alt={logo}
                className="h-[1vw] inline mx-[1.2vw] mb-5"
              />
            ))}
          </div>
        ))}
      </div>

      {/* Keyframes animation injected here for simplicity */}
      <style jsx>{`
        @keyframes mobe {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
