import React from "react";
import BestOfCard from "../../components/BestOfCard/BestOfCard";

type Props = {};

function SecondPage({}: Props) {
  return (
    <div className="bg-main-color-3 z-0 min-h-[776px] p-[80px] gap-[80px] ">
      <div className="space-y-[80px]">
        <div className="flex justify-between items-center">
          <h2 className="text-[56px] font-extrabold leading-[61.6px] text-white">
            The best of the best
          </h2>
          <div className="">
            <button className=" font-medium  text-[16px] leading-6 tracking-[0.5px] px-6 py-5 ring-[2px] rounded-lg ring-white">
              <p className="px-6 text-white font-semibold text-[24px] leading-[24px]">
                Sign up now
              </p>
            </button>
          </div>
        </div>

        <div className="">
          <BestOfCard />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
