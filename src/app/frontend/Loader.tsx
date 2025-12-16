'use client';
import { useEffect } from 'react';

export default function Loader() {
  useEffect(() => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
      if (loader) loader.style.top = '-100%';
    }, 4200);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes load {
          0% {
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }

        #loader {
          height: 100%;
          width: 100%;
          background-color: #000;
          position: fixed;
          z-index: 999;
          top: 0;
          transition: top 0.5s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        #loader h1 {
          font-size: 4vw;
          color: transparent;
        background: linear-gradient(90deg,rgba(225, 224, 228, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          position: absolute;
          opacity: 0;
          animation-name: load;
          animation-duration: 1s;
          animation-timing-function: linear;
          animation-fill-mode: forwards;
        }

        #loader h1:nth-child(1) {
          animation-delay: 1s;
        }

        #loader h1:nth-child(2) {
          animation-delay: 2s;
        }

        #loader h1:nth-child(3) {
          animation-delay: 3s;
        }

        @media (max-width: 600px) {
          #loader h1 {
            font-size: 9vw;
          }
        }
      `}</style>

      <div id="loader">
        <h1>CONTENT CREATION</h1>
        <h1>USER EXPERIENCE</h1>
        <h1>AI CHAT</h1>
      </div>
    </>
  );
}
