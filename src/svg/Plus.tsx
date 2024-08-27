import { FC } from "react";

export interface IPlus {
  width: number;
  height: number;
  strokeColor: string;
  className?: string;
}

export const Plus: FC<IPlus> = ({ width, height, strokeColor, className }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={strokeColor}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 4.5v15m7.5-7.5h-15"
      />
    </svg>
  );
};
