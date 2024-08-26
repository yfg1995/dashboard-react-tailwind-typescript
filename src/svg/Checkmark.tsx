import { FC } from "react";

export interface ICheckmark {
  width: number;
  height: number;
  fill: string;
  className?: string;
}

export const Checkmark: FC<ICheckmark> = ({
  width,
  height,
  fill,
  className,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="12" fill={fill} />
      <path
        d="M10.4168 13.5833L7.2502 10.4167L5.66687 12L10.4168 16.7499L18.3335 8.83333L16.7502 7.25L10.4168 13.5833Z"
        fill="white"
      />
    </svg>
  );
};
