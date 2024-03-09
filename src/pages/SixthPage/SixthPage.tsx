import React from "react";

type Props = {};

const SixthPage = (props: Props) => {
  return (
    <div className="min-h-[717px] bg-[#78350F] mt-[-1px] xl:py-[42px] xl:px-[196px]">
      <div className="relative flex xs:justify-center ms-[21px]">
        <img
          className="absolute mt-[-40px] ms-[12px] md:mt-[-45px] md:ms-[-740px]"
          src="../../../assets/mapShoes.png"
          alt=""
        />
        <div className="flex xs:justify-center">
          <img className="w-[1049px] h-[633px] flex-shrink-0 xs:object-cover object-cover object-left" src="../../../assets/chart.png" alt="" />
          <img
            className="absolute w-[724px] h-[456px] mt-[65px] ms-[212px] md:mt-[65px] md:ms-[88px] flex-shrink-0 xs:object-cover object-cover object-left"
            src="../../../assets/Ellipses.png"
            alt=""
          />
          <div className="absolute text-[#FFFBEB] text-center px-[50px] py-[276px] md:py-[228.5px]">
            <h1 className="text-[48px] font-extrabold leading-[52.8px] md:text-[96px] md:font-extrabold md:leading-[105.6px] ">
              11,658,467{" "}
            </h1>
            <p className="text-[32px] font-bold leading-[35.2px] md:text-[56px] md:font-extrabold md:leading-[61.6px]">
              Shoes Collected
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SixthPage;
