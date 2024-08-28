import { FC, useState } from "react";
import { Title } from "../Title";
import { PlusCircle } from "../../svg/PlusCircle";
import { countries } from "../../dummyData";
import { Arrow } from "../../svg/Arrow";
import { TwoDotsVertical } from "../../svg/TwoDotsVertical";
import { formatNumberWithCommas } from "../../helpers/helpers";
import { ContainerBorderRounded } from "../ContainerBorderRounded";
import { cn } from "../../utils/utils";

export interface IDashboardTopCountries {}

export const DashboardTopCountries: FC<IDashboardTopCountries> = () => {
  const [showAll, setShowAll] = useState(false);

  const displayedCountries = showAll ? countries : countries.slice(0, 4);

  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <ContainerBorderRounded className="max-w-[550px] flex flex-col">
      <div className="flex-items-center justify-between">
        <div>
          <Title title="Top Countries" />
          {!showAll && <div className="text-brandTextGray">Favorites</div>}
        </div>

        <PlusCircle
          width={20}
          height={20}
          strokeColor="var(--clr-text-grey)"
          fill="#333"
        />
      </div>

      <ul className="overflow-y-auto mt-4 max-h-[300px] h-full">
        {displayedCountries.map((country, index) => (
          <li className={cn("my-4", showAll && "mr-3")} key={country.country}>
            <div className="flex-items-center justify-between text-brandTextGray">
              <div className="flex-items-center gap-2.5">
                <span>{index + 1}</span>

                <div className="w-8 h-8 rounded-full overflow-hidden">
                  <img src={`countries/${country.imgSrc}`} alt="" />
                </div>

                <span className="text-brandTextGray">{country.country}</span>
              </div>

              <div className="flex-items-center gap-2">
                <span>{formatNumberWithCommas(country.price)}</span>

                <Arrow
                  width={16}
                  height={16}
                  strokeColor={
                    country.price < 15000
                      ? "var(--clr-red)"
                      : "var(--clr-green)"
                  }
                  className={country.price < 15000 ? "rotate-180" : ""}
                />

                <TwoDotsVertical
                  width={12}
                  height={12}
                  strokeColor="var(--clr-text-grey)"
                  className="mt-1.5"
                />
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div
        className="grid place-content-center text-brandTextGray mt-auto cursor-pointer"
        onClick={handleToggle}
      >
        {showAll ? "Show Less" : "Show All"}
      </div>
    </ContainerBorderRounded>
  );
};
