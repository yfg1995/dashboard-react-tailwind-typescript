import { FC, PropsWithChildren } from "react";
import { cn } from "../utils/utils";

export interface IContainerBorderRounded extends PropsWithChildren {
  className?: string;
}

export const ContainerBorderRounded: FC<IContainerBorderRounded> = ({
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center border rounded-[12px] overflow-hidden w-full",
        className
      )}
    >
      {children}
    </div>
  );
};
