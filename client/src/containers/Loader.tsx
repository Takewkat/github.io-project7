import React from "react";

const Loader: React.FunctionComponent = () => {
  return (    
    <div style={{ width: "30%", height: "30%" }}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
        className="lds-rolling"
        style={{ background: "none" }}>
        <circle
          cx="50"
          cy="50"
          fill="none"
          stroke="#FF6060"
          strokeWidth="10"
          r="35"
          strokeDasharray="164.93361431346415 56.97787143782138"
          transform="rotate(0 50 50)">
          <animateTransform
            attributeName="transform"
            type="rotate"
            repeatCount="indefinite"
            dur="1s"
            values="0 50 50;360 50 50"
            keyTimes="0;1" />
        </circle>
      </svg>
    </div>
  );
}

export default Loader;