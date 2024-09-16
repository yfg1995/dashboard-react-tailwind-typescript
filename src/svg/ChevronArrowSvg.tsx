import { FC } from "react";
import { cn } from "../utils/utils";

export interface IChevronArrowSvg {
  width?: string;
  height?: string;
  strokeColor?: string;
  strokeWidth?: string;
  className?: string;
}

export const ChevronArrowSvg: FC<IChevronArrowSvg> = ({
  width = "16",
  height = "16",
  strokeColor = "var(--clr-charcoal-grey)",
  strokeWidth = "1.5",
  className,
}) => {
  return (
    <svg
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      className={cn(className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m8.25 4.5 7.5 7.5-7.5 7.5"
      />
    </svg>
  );
};
