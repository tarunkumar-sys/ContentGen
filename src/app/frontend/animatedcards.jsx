'use client';

import { useRef, useEffect } from 'react';

export function AnimatedCards() {
  const cardRefs = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e, index) => {
      const card = cardRefs.current[index];
      if (!card) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Increased sensitivity (smaller denominator = more sensitive)
      const rotateX = Math.max(Math.min(-((y - centerY) / 6), 15), -15);
      const rotateY = Math.max(Math.min(((x - centerX) / 6), 15), -15);

      card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const handleMouseLeave = (index) => {
      const card = cardRefs.current[index];
      if (!card) return;
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    cardRefs.current.forEach((card, index) => {
      const moveHandler = (e) => handleMouseMove(e, index);
      const leaveHandler = () => handleMouseLeave(index);

      card.addEventListener('mousemove', moveHandler);
      card.addEventListener('mouseleave', leaveHandler);

      card._moveHandler = moveHandler;
      card._leaveHandler = leaveHandler;
    });

    return () => {
      cardRefs.current.forEach((card) => {
        card?.removeEventListener('mousemove', card._moveHandler);
        card?.removeEventListener('mouseleave', card._leaveHandler);
      });
    };
  }, []);

  const cards = [
    {
      title: 'Increased Efficiency',
      text: 'Automate complex workflows and streamline your operations to significantly boost productivity, minimize manual effort, and enhance overall performance.',
    },
    {
      title: 'Accelerated Growth',
      text: 'Harness cutting-edge technologies and intelligent tools to scale your content strategy, reach wider audiences, and drive sustainable business growth.',
    },
    {
      title: 'AI Powered',
      text: 'Generate high-impact, visually engaging content with the help of our advanced AI — fast, intuitive, and tailored to your unique needs.',
    },
  ];
  

  return (
    <div className="p-8 sm:py-28 select-none">
      <h2 className="text-3xl sm:text-3xl p-8 font-bold text-gray-900 leading-tight tracking-tight">
          Our Impact at a Glance
      </h2>
      <div className="mx-auto max-w-7xl px-8 lg:px-8">
      

      <div className="flex sm:flex-row justify-center gap-6 text-center perspective-1000">
          {cards.map((card, idx) => (
            <div
              key={idx}
              ref={(el) => (cardRefs.current[idx] = el)}
              className="animated-gradient h-[280px] w-full rounded-xl gap-5 max-w-sm text-white p-10 rounded-3xl shadow-xl transition-transform duration-200 ease-out will-change-transform transform-style-3d"
            >
              <h3 className="text-2xl select-none cursor-none sm:text-2xl font-extrabold">{card.title}</h3>
              <p className="text-sm select-none cursor-none font-normal text-white/90">{card.text}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .animated-gradient {
          background: linear-gradient(-45deg, #6B46C1, #805AD5, #4299E1, #6B46C1);
          background-size: 400% 400%;
          animation: fogGradient 12s ease infinite;
        }

        @keyframes fogGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .transform-style-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}
