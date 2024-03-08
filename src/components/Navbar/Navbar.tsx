import { useState } from "react";

type Props = {};

const Navbar = (props: Props) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className="h-[96px] px-[20px] xs:px-[80px] py-[24px] sticky z-50">
      <div className="">
        <div className="flex items-center justify-between flex-row-reverse ">
          <div
            className={` lg:hidden cursor-pointer transition ease-in duration-300 ${
              isMenuOpen ? "rotate-0" : "rotate-180"
            }`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <div className="max-w-[24px] max-h-[24px] ">
                <img src="../../../public/assets/x-mark-24.png" />
              </div>
            ) : (
              <img src="../../../public/assets/menu-scale.png" />
            )}
          </div>
          <div className="lg:hidden p-1  ">
            <div className="w-[102px] h-[35px]">
              <h2 className="text-main-color-2 text-[32px] font-bold ">
                Collers
              </h2>
            </div>
          </div>
        </div>
        <div
          className={`lg:block ${isMenuOpen ? "block" : "hidden"}`}
          id="menu"
        >
          <div className="flex justify-between">
            <div className="lg:w-[102px] lg:h-[35px] hidden lg:block">
              <h2 className="text-main-color-2 text-[32px] font-bold ">
                Collers
              </h2>
            </div>
            <div className="lg:w-[631px] lg:h-[48px] w-full">
              <div className="flex-col pb-5 text-center lg:flex-row border-2 border-main-color-2 border-t-0 bg-main-color-1 lg:flex lg:justify-between lg:border-0  gap-[16px]">
                <div className="gap-[8px] px-[8px] py-[12px]">
                  <p className=" font-medium  text-[16px] leading-6 tracking-[0.5px] text-main-color-2">
                    Products
                  </p>
                </div>
                <div className="gap-[8px] px-[8px] py-[12px]">
                  <p className=" font-medium  text-[16px] leading-6 tracking-[0.5px] text-main-color-2">
                    Solutions
                  </p>
                </div>
                <div className="gap-[8px] px-[8px] py-[12px]">
                  <p className=" font-medium  text-[16px] leading-6 tracking-[0.5px] text-main-color-2">
                    Pricing
                  </p>
                </div>
                <div className="gap-[8px] px-[8px] py-[12px]">
                  <p className=" font-medium  text-[16px] leading-6 tracking-[0.5px] text-main-color-2">
                    Resources
                  </p>
                </div>
                <div className="gap-[8px] px-[8px] py-[12px]">
                  <p className=" font-medium  text-[16px] leading-6 tracking-[0.5px] text-main-color-2">
                    Log In
                  </p>
                </div>
                <div className="gap-[8px] ">
                  <button className=" font-medium  text-[16px] leading-6 tracking-[0.5px] p-3 ring-[2px] rounded-lg ring-main-color-2">
                    <p className="px-4 text-main-color-2">Sign up now</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
