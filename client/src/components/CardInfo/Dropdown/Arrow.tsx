import React from "react";

interface Props {
  className: string;
  width: string | number;
  fill: string;
}

const Arrow: React.FunctionComponent<Props> = ({className, width, fill}) => {
  return (
    <svg
      className={className}
      height="15"
      width={width}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 25 15"
    >
      <path
        fill={fill}
        d="M2.6635 0.859489L0.530579 3.00462L12.4605 14.9233L24.3904 2.99257L22.2575 0.859489L12.4605 10.6572L2.6635 0.859489Z"
      />
    </svg>
  );
}

export default Arrow;