import React from "react";

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="presentation"
      {...props}
    >
      <path d="M2 2L20 20" stroke="black" strokeWidth="4" />
      <path d="M2 20L20 2" stroke="black" strokeWidth="4" />
    </svg>
  );
};

export default CloseIcon;
