import React, { useState } from "react";
import "./FifthPage.css";
type Props = {};

function FifthPage({}: Props) {
  const [activeTab, setActiveTab] = useState("Bibendum tellus");
  return (
    <div className="xs:min-h-[996px] flex flex-col ">
      <div className="pt-12 px-4 md:pt-20 md:px-20 grid gap-8 pb-8 xs:pb-20">
        <h2 className="text-[32px] xs:text-[56px] md:text-start text-center font-extrabold text-main-color-3 leading-[35.2px] xs:leading-[61.6px]">
          Grow your collection
        </h2>
        <p className="text-[16px] xs:text-[18px] md:text-start text-center font-normal text-main-color-3 leading-[22.4px] xs:leading-[28.8px]">
          Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh
          amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames
          sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat
          proin neque placerat at bibendum quam tellus.
        </p>
      </div>

      <div className="relative flex justify-center ">
        <div className="absolute  min-h-[556px]  mx-20">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-row  md:flex-col items-start max-w-[270px] md:min-w-[270px] text-nowrap md:space-y-4 md:space-x-0 space-x-4 ">
              <button
                className={`flex items-center py-4 min-w-[240px] text-main-color-3  w-full ${
                  activeTab === "Bibendum tellus"
                    ? "button-shadow justify-between"
                    : ""
                } `}
                onClick={() => setActiveTab("Bibendum tellus")}
              >
                <img
                  className="ms-4"
                  src="../../../public/assets/search.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Bibendum tellus
                </p>
                {activeTab === "Bibendum tellus" ? (
                  <img
                    className="me-4 md:block hidden"
                    src="../../../public/assets/arrow-right.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
              <button
                className={`flex items-center py-4 text-main-color-3  w-full ${
                  activeTab === "Cras eget"
                    ? "button-shadow justify-between"
                    : ""
                } `}
                onClick={() => setActiveTab("Cras eget")}
              >
                <img
                  className="ms-4"
                  src="../../../public/assets/shield-check.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Cras eget
                </p>
                {activeTab === "Cras eget" ? (
                  <img
                    className="me-4 md:block hidden"
                    src="../../../public/assets/arrow-right.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
              <button
                className={`flex items-center py-4  text-main-color-3  w-full ${
                  activeTab === "Dolor pharetra"
                    ? "button-shadow justify-between"
                    : ""
                } `}
                onClick={() => setActiveTab("Dolor pharetra")}
              >
                <img
                  className="ms-4"
                  src="../../../public/assets/rocket.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Dolor pharetra
                </p>
                {activeTab === "Dolor pharetra" ? (
                  <img
                    className="me-4 md:block hidden"
                    src="../../../public/assets/arrow-right.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
              <button
                className={`flex items-center py-4  text-main-color-3  w-full ${
                  activeTab === "Amet, fringilla"
                    ? "button-shadow justify-between"
                    : ""
                } `}
                onClick={() => setActiveTab("Amet, fringilla")}
              >
                <img
                  className="ms-4"
                  src="../../../public/assets/screen.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Amet, fringilla
                </p>
                {activeTab === "Amet, fringilla" ? (
                  <img
                    className="me-4 md:block hidden"
                    src="../../../public/assets/arrow-right.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
              <button
                className={`flex items-center py-4  text-main-color-3  w-full ${
                  activeTab === "Amet nibh"
                    ? "button-shadow justify-between"
                    : ""
                } `}
                onClick={() => setActiveTab("Amet nibh")}
              >
                <img
                  className="ms-4"
                  src="../../../public/assets/podcast.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Amet nibh
                </p>
                {activeTab === "Amet nibh" ? (
                  <img
                    className="me-4 md:block hidden"
                    src="../../../public/assets/arrow-right.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
              <button
                className={`flex items-center py-4  text-main-color-3  w-full ${
                  activeTab === "Sed velit"
                    ? "button-shadow justify-between"
                    : ""
                } `}
                onClick={() => setActiveTab("Sed velit")}
              >
                <img
                  className="ms-4"
                  src="../../../public/assets/settings-alt.png"
                  alt=""
                />
                <p className="px-4 text-[20px] font-medium leading-[24px] tracking-[0.5px]">
                  Sed velit
                </p>
                {activeTab === "Sed velit" ? (
                  <img
                    className="me-4 md:block hidden"
                    src="../../../public/assets/arrow-right.png"
                    alt=""
                  />
                ) : (
                  ""
                )}
              </button>
            </div>

            <div>
              <img
                className="min-h-[259px] min-w-[361px] md:ps-20 mt-8 xs:mt-0"
                src="../../../public/assets/Col.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <img
          className="min-w-[1440px] w-full "
          src="../../../public/assets/Bg-Waves.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default FifthPage;
