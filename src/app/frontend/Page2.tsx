"use client";

import React, { useEffect } from "react";
import gsap from "gsap";

const insights = [
  {
    title: "How AI is Revolutionizing PDF Insights and Content Creation?",
    image:
      "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
  {
    title: "How to Leverage AI for Effortless Content Creation?",
    image:
      "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
  {
    title: "How AI are Changing the Game for Content Creators?",
    image:
      "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
  {
    title: "The PDF Interaction: Using AI to Unlock Hidden Insights",
    image:
      "https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65c5011d306a52274ebea027_cover.webp",
  },
];

const Page2 = () => {
  useEffect(() => {
    const elems = document.querySelectorAll(".right-elem");

    elems.forEach((el) => {
      const elem = el as HTMLElement;
      const image = elem.querySelector("img") as HTMLElement | null;
      if (!image) return;

      const handleEnter = () => {
        gsap.to(image, { opacity: 1, scale: 1 });
      };

      const handleLeave = () => {
        gsap.to(image, { opacity: 0, scale: 0 });
      };

      const handleMove = (e: MouseEvent) => {
        const bounds = elem.getBoundingClientRect();
        gsap.to(image, {
          x: e.clientX - bounds.left - 90,
          y: e.clientY - bounds.top - 180,
        });
      };

      elem.addEventListener("mouseenter", handleEnter);
      elem.addEventListener("mouseleave", handleLeave);
      elem.addEventListener("mousemove", handleMove);

      // Clean up
      return () => {
        elem.removeEventListener("mouseenter", handleEnter);
        elem.removeEventListener("mouseleave", handleLeave);
        elem.removeEventListener("mousemove", handleMove);
      };
    });
  }, []);

  return (
    <div className="h-screen w-full bg-[#111] px-[10.5vw] pb-[8vw] flex items-center justify-between border-t border-[#333]">
      <div className="h-full w-[40%] flex flex-col justify-between py-[3vw]">
        <p className="text-[0.8vw] text-white">
        Unlock the Future of AI-Powered<br /> Content & PDF Interaction
        </p>
        <h5 className="text-white font-normal text-[1.1vw] w-[75%]">
        As a platform revolutionizing the way users interact with PDFs and generate content, 
        we pride ourselves on sharing valuable insights, tips, 
        and techniques for maximizing the potential of AI in content creation and document analysis.
        </h5>
      </div>

      <div className="h-full w-[50%]">
        {insights.map((item, index) => (
          <div
            key={index}
            className="right-elem relative py-[2vw] pb-[5vw] border-b border-[#333] text-white cursor-pointer"
          >
            <h2 className="text-[1.4vw] font-normal">{item.title}</h2>
            <img
              src={item.image}
              alt="Insight"
              className="h-[7vw] w-[7vw] rounded-full object-cover opacity-0 scale-0 absolute pointer-events-none"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page2;
