'use client';

export default function Gooey() {
  return (
    <>
      <style jsx>{`
        #gooey {
          height: 25vw;
          width: 25vw;
          position: absolute;
          border-radius: 50%;
          background: linear-gradient(to top right, rgb(192 132 252), #E1E0E4);
          top:70%;
          left: -10%;
          filter: blur(40px);
          animation-name: gooey;
          animation-duration: 6s;
          animation-iteration-count: infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
          z-index: 0;
        }

        @keyframes gooey {
          from {
            filter: blur(30px);
            transform: translate(10%, -10%) skew(0);
          }
          to {
            filter: blur(40px);
            transform: translate(-10%, 10%) skew(-12deg);
          }
        }
      `}</style>

      <div id="gooey"></div>
    </>
  );
}
