import React from "react";

function Loader() {
  return (
    <>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }

          .loader {
            width: 100px;
            height: 100px;
            margin: 110px auto 0;
            border: solid 10px #334155;
            border-radius: 50%;
            border-right-color: transparent;
            border-bottom-color: transparent;
            animation: rotate 1.0s linear infinite;
          }
        `}
      </style>
      <div className="loader"></div>
    </>
  );
}

export default Loader;
