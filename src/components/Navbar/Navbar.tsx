type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="h-[96px] px-[80px] py-[24px]">
      <div className="flex justify-between">
        <div className="w-[102px] h-[35px]">
          <h2 className="text-main-color-2 text-[32px] font-bold ">Collers</h2>
        </div>
        <div className="w-[631px] h-[48px] ">
          <div className="flex   gap-[16px]">
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
  );
};

export default Navbar;
