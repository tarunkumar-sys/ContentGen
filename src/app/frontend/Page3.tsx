'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Play } from "lucide-react";

// Correct type for video and page3Center references
const Page3 = () => {
  const page3CenterRef = useRef<HTMLDivElement | null>(null); // type for div element
  const videoRef = useRef<HTMLVideoElement | null>(null); // type for video element
  const sectionsRef = useRef<HTMLDivElement[]>([]); // type for an array of div elements

  useEffect(() => {
    const page3Center = page3CenterRef.current;
    const video = videoRef.current;

    if (!page3Center || !video) return; // Ensure elements are available before adding event listeners

    // Handle center click to play the video
    const handlePage3CenterClick = () => {
      video.play();
      gsap.to(video, {
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        borderRadius: 0,
      });
    };

    page3Center.addEventListener("click", handlePage3CenterClick);

    // Handle video click to pause it and reset animation
    const handleVideoClick = () => {
      video.pause();
      gsap.to(video, {
        scaleX: 0.7,
        scaleY: 0,
        opacity: 0,
        borderRadius: "30px",
      });
    };

    video.addEventListener("click", handleVideoClick);

    // Handle mouse enter and leave for sections
    const handleSectionEnter = (elem: HTMLDivElement) => {
      const videoInSection = elem.querySelector("video");
      if (videoInSection) {
        videoInSection.style.opacity = "1";
        videoInSection.play();
      }
    };

    const handleSectionLeave = (elem: HTMLDivElement) => {
      const videoInSection = elem.querySelector("video");
      if (videoInSection) {
        videoInSection.style.opacity = "0";
        videoInSection.load();
      }
    };

    sectionsRef.current.forEach((elem: HTMLDivElement) => {
      elem.addEventListener("mouseenter", () => handleSectionEnter(elem));
      elem.addEventListener("mouseleave", () => handleSectionLeave(elem));
    });

    return () => {
      page3Center.removeEventListener("click", handlePage3CenterClick);
      video.removeEventListener("click", handleVideoClick);
      sectionsRef.current.forEach((elem: HTMLDivElement) => {
        elem.removeEventListener("mouseenter", () => handleSectionEnter(elem));
        elem.removeEventListener("mouseleave", () => handleSectionLeave(elem));
      });
    };
  }, []);

  return (
    <div
      id="page3"
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url('https://lazarev.kiev.ua/la24/reel-cover.webp')",
      }}
    >
      <video
        ref={videoRef}
        src="https://lazarev.kiev.ua/la24/la-reel--min.mp4"
        className="absolute top-0 left-0 w-full h-full object-cover"
        style={{
          transform: "scaleX(0.7) scaleY(0)",
          opacity: 0,
          borderRadius: "30px",
          zIndex: 99999,
        }}
      ></video>
      <div ref={page3CenterRef} className="page3-center group absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center  p-4  ">
        <div className="icon flex  items-center justify-center p-8 rounded-full bg-white">
          <Play className="text-black text-3xl" />
        </div>
        <h5 className="text-black bg-white rounded-full py-2 px-5 mt-2 text-sm font-sm opacity-0 transform translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
          Watch Showreel
        </h5>
      </div>
    </div>
  );
};

export default Page3;
