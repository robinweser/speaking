import React from "react";

export default function Loading({ size }) {
  return (
    <React.Fragment>
      <div className="scale" />
      <div className="scale scale2" />
      <style
        dangerouslySetInnerHTML={{
          __html: `
      @keyframes scale {
        0% {
          transform: scale(0.25,0.25);
          opacity: 1.0
        }

        50% {
          transform: scale(1, 1);
opacity: 0.5;
        }
        99% {
          transform: scale(0.25, 0.25);opacity: 1.0
        }
      }


      .scale {
        animation: scale 2000ms ease-in-out infinite;
        width: 50px; height: 50px;
        border-radius: 50%;
        transform-origin: 50% 50%;
        background-color: grey;
        margin: 25px 0 0 25px;
        transform: scale(0.25,0.25);
      }

      .scale2 {
        animation-delay: 1s;
        margin-top: -50px;
      }
    `
        }}
      />
    </React.Fragment>
  );
}
