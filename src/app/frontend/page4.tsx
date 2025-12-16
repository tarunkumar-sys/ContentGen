// components/Page4.tsx
'use client';

import React, { useEffect } from 'react';

const sectionsData = [
  {
    title: 'Accern. Rhea',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit inventore enim, quos, qui est id, architecto libero in esse vel officiis repellat alias maxime minima.',
    imgSrc:
      'https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65a93ac90b586168e5917ac8_Rhea%20-%20cover_horizontal_low.webp',
    videoSrc: 'https://lazarev.kiev.ua/cases/la24/accern-rhea-cover-small.mp4',
  },
  {
    title: 'AfroTech',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit inventore enim, quos, qui est id, architecto libero in esse vel officiis repellat alias maxime minima.',
    imgSrc:
      'https://assets-global.website-files.com/64a5e6675a4159253d0ee3e0/65cb66041ce86ac3784aaba1_Afrotech%20-%20cover_horizontal.webp',
    videoSrc:
      'https://lazarev.kiev.ua/cases/la24/afrotech-cover-big.mp4',
  },
];

const Page4 = () => {
  useEffect(() => {
    const sections = document.querySelectorAll('.sec-right');

    sections.forEach((elem) => {
      const video = elem.querySelector('video') as HTMLVideoElement;

      elem.addEventListener('mouseenter', () => {
        if (video) {
          video.style.opacity = '1';
          video.play();
        }
      });

      elem.addEventListener('mouseleave', () => {
        if (video) {
          video.style.opacity = '0';
          video.load();
        }
      });
    });
  }, []);

  return (
    <div className="w-full relative pb-[13vh] min-h-screen" id="page4">
      {sectionsData.map((section, idx) => (
        <div
          key={idx}
          className="section w-full h-[72vh] flex items-center justify-between px-[10vw] pt-[13vh] pb-0"
        >
          <div className="sec-left w-[25%] h-full pt-[3vh] border-t-2 border-black">
            <h2 className="text-[2.1vw] font-medium text-black">{section.title}</h2>
            <p className="text-black mt-[10vh] text-[1.2vw]">{section.description}</p>
          </div>
          <div className="sec-right w-[70%] h-full relative bg-blanchedalmond">
            <img
              src={section.imgSrc}
              alt={section.title}
              className="h-full w-full object-cover"
            />
            <video
              muted
              className="h-full w-full absolute top-0 left-0 object-cover opacity-0 transition-opacity duration-100"
              src={section.videoSrc}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page4;
