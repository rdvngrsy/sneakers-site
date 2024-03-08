import BestOfCard from "../../components/BestOfCard/BestOfCard";

type Props = {};

function SecondPage({}: Props) {
  return (
    <div className="bg-main-color-3 z-0 min-h-[776px]  px-4 py-12 xs:p-[40px] sm:p-[80px] gap-[80px] ">
      <div className="lg:space-y-[80px]">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-center">
          <h2 className="text-[32px] lg:text-[56px] font-bold lg:font-extrabold leading-[35.2px] lg:leading-[61.6px] text-white">
            The best of the best
          </h2>
          <div className="">
            <button className=" font-medium  text-[16px] leading-6 tracking-[0.5px] px-6 py-5 ring-[2px] rounded-lg ring-white">
              <p className="px-6 text-white font-bold lg:font-semibold text-[24px] leading-[24px]">
                Sign up now
              </p>
            </button>
          </div>
        </div>

        <div className="mt-8 xs:mt-8 lg:mt-0">
          <BestOfCard />
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
