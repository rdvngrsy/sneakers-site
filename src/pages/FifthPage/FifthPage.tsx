import React from "react";
import "./FifthPage.css";
type Props = {};

function FifthPage({}: Props) {
  return (
    <div className="min-h-[996px] flex flex-col ">
      <div className="pt-20 px-20 grid gap-8 pb-20">
        <h2 className="text-[56px] font-extrabold text-main-color-3 leading-[61.6px]">
          Grow your collection
        </h2>
        <p className="text-[18px] font-normal text-main-color-3 leading-[28.8px]">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="relative flex justify-center">
        <div className="absolute  min-h-[556px]  mx-20">
          <div className="flex">
            <div className="flex flex-col items-start min-w-[270px] space-y-4">
              <button className="flex items-center py-4  text-main-color-3 button-shadow w-full">
                <img
                  className="ms-4"
                  src="../../../public/assets/search.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Bibendum tellus
                </p>
                <img
                  className="me-4"
                  src="../../../public/assets/arrow-right.png"
                  alt=""
                />
              </button>
              <button className="flex items-center py-4  text-main-color-3 w-full">
                <img
                  className="ms-4"
                  src="../../../public/assets/shield-check.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Cras eget
                </p>
              </button>
              <button className="flex items-center py-4  text-main-color-3 w-full">
                <img
                  className="ms-4"
                  src="../../../public/assets/rocket.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Dolor pharetra
                </p>
              </button>
              <button className="flex items-center py-4  text-main-color-3 w-full">
                <img
                  className="ms-4"
                  src="../../../public/assets/screen.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Amet, fringilla
                </p>
              </button>
              <button className="flex items-center py-4  text-main-color-3 w-full">
                <img
                  className="ms-4"
                  src="../../../public/assets/podcast.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Amet nibh
                </p>
              </button>
              <button className="flex items-center py-4  text-main-color-3 w-full">
                <img
                  className="ms-4"
                  src="../../../public/assets/settings-alt.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Sed velit
                </p>
              </button>
            </div>

            <div>
              <img
                className="ps-20"
                src="../../../public/assets/Col.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="min-w-[1440px] w-full"
          src="../../../public/assets/Bg-Waves.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default FifthPage;
