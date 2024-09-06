import { FC } from "react";

export interface INavCardBgSvg {}

export const NavCardBgSvg: FC<INavCardBgSvg> = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="216"
      height="104"
      viewBox="0 0 216 104"
      fill="none"
    >
      <g clipPath="url(#clip0)">
        <rect width="216" height="104" fill="#2C2C2D" />
        <circle
          cx="236.5"
          cy="-23.25"
          r="44.75"
          stroke="#262627"
          strokeWidth="4"
        />
        <circle
          cx="236.5"
          cy="-23.25"
          r="59.75"
          stroke="#262627"
          strokeWidth="4"
        />
        <circle
          cx="236.5"
          cy="-23.25"
          r="78.5"
          stroke="#262627"
          strokeWidth="4"
        />
        <circle
          cx="236.5"
          cy="-23.25"
          r="96"
          stroke="#262627"
          strokeWidth="4"
        />
      </g>
      <defs>
        <clipPath id="clip0">
          <rect width="216" height="104" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};
