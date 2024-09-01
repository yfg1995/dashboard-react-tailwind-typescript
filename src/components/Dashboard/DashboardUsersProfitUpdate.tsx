import { FC, HTMLAttributes } from "react";
import { cn } from "../../utils/utils";
import { EmblaOptionsType } from "embla-carousel";
import { CarouselAutoplay } from "../CarouselAutoplay";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { UsersProfitUpdate } from "../../dummyData";
import { StepsCompleted } from "../StepsCompleted";
import { Title } from "../Title";
import { Checkmark } from "../../svg/Checkmark";
import { Trending } from "../../svg/Trending";

export interface IDashboardUsersProfitUpdates
  extends HTMLAttributes<HTMLDivElement> {}

export const DashboardUsersProfitUpdates: FC<IDashboardUsersProfitUpdates> = (
  props
) => {
  const options: EmblaOptionsType = {
    loop: true,
  };

  return (
    <div {...props}>
      <CarouselAutoplay options={options}>
        {UsersProfitUpdate.map((user) => (
          <ContainerBorderRounded
            className="embla__slide w-full p-0 px-2 bg-brandCharcoalBlack select-none h-[var(--c-md-height)]"
            key={user.id}
          >
            <div className="flex items-center justify-between px-4 rounded-[12px] h-full">
              <div className="flex flex-col gap-2">
                <div className="flex items-center">
                  <div className="flex items-center overflow-hidden w-10 h-10 rounded-full mr-2">
                    <img
                      src={`users/${user.imgSrc}`}
                      alt={`User - ${user.profile.userName}`}
                    />
                  </div>

                  <div className="flex flex-col">
                    <div className="flex items-center">
                      <Title title={user.profile.userName} className="mr-2" />

                      {user.profile.verified && (
                        <Checkmark
                          className="mt-0.5"
                          width={14}
                          height={14}
                          fill="#2D44BC"
                        />
                      )}
                    </div>

                    <div className="text-brandTextGray text-sm">
                      {user.position}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <span className="text-brandTextGray text-sm">
                    {user.tasks.tasksCompleted} from {user.tasks.totalTasks}{" "}
                    tasks completed
                  </span>

                  <StepsCompleted completedTasks={user.tasks.tasksCompleted} />
                </div>
              </div>

              <div className="flex flex-col items-center">
                {user.profit.updatedProfit > 1500 ? (
                  <Trending width={30} height={30} strokeColor="#51b045" />
                ) : (
                  <Trending
                    width={30}
                    height={30}
                    strokeColor="#d42626"
                    className="-scale-y-100"
                  />
                )}

                <div
                  className={cn(
                    "font-bold",
                    user.profit.updatedProfit > 1500
                      ? "text-brandGreen"
                      : "text-brandRed"
                  )}
                >
                  ${user.profit.updatedProfit}
                </div>

                <div className="text-brandTextGray text-sm">
                  Last{" "}
                  {user.profit.lastUpdateNum === 12
                    ? 1
                    : user.profit.lastUpdateNum}{" "}
                  {user.profit.lastUpdateNum === 12 ? "year" : "months"}
                </div>
              </div>
            </div>
          </ContainerBorderRounded>
        ))}
      </CarouselAutoplay>
    </div>
  );
};
