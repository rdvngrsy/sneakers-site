import React from "react";

type Props = {};

const SixthPage = (props: Props) => {
  return (
    <div className="min-h-[717px] bg-[#78350F] mt-[-1px] py-[42px] px-[196px]">
      <div className="relative flex justify-center">
        <img
          className="absolute mt-[-45px] ms-[-740px]"
          src="../../../public/assets/mapShoes.png"
          alt=""
        />
        <div className="flex justify-center">
          <img src="../../../public/assets/chart.png" alt="" />
          <img
            className="absolute mt-[65px] ms-[88px]"
            src="../../../public/assets/Ellipses.png"
            alt=""
          />
          <div className="absolute text-[#FFFBEB] text-center py-[228.5px]">
            <h1 className="text-[96px] font-extrabold leading-[105.6px] ">
              11,658,467{" "}
            </h1>
            <p className="text-[56px] font-extrabold leading-[61.6px]">
              Shoes Collected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
