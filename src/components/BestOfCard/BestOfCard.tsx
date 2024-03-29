import "./BestOfCard.css";
type Props = {};

function BestOfCard({}: Props) {
  return (
    <div className="min-h-[472px] gap-8 lg:gap-[48px] flex flex-col items-center lg:flex-row justify-center">
      <div className="absolute rotate-90  me-[0px] mt-[140px] xs:me-[40px] lg:me-[0px] min-w-[1012px] lg:max-w-[1356px] lg:rotate-0 lg:mt-[-31px]  z-0">
        <img className=" " src="../../assets/Backlights.png" alt="" />
      </div>
      <div className="grid grid-cols-1 max-w-[394px] bg-main-color-3 text-white rounded-[10px] card-shadow z-10 ">
        <div className="min-h-[220px]">
          <img
            className="rounded-t-[10px]"
            src="../../../assets/best1.png"
            alt="rectangle"
          />
        </div>
        <div className="px-8 pt-8 space-y-4">
          <h3 className="font-bold text-[24px] leading-[26.4px]">Title</h3>
          <p className="font-normal text-[18px] leading-[28.8px]">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
        </div>
        <div className="p-8">
          <button className="flex justify-center w-full font-medium  text-[16px] leading-6 tracking-[0.5px] px-6 py-4 ring-[2px] rounded-lg ring-white">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3333 20C9.80287 20 9.29417 19.7893 8.91909 19.4142C8.54402 19.0391 8.33331 18.5304 8.33331 18C8.33331 17.4696 8.54402 16.9609 8.91909 16.5858C9.29417 16.2107 9.80287 16 10.3333 16C10.8637 16 11.3724 16.2107 11.7475 16.5858C12.1226 16.9609 12.3333 17.4696 12.3333 18C12.3333 18.5304 12.1226 19.0391 11.7475 19.4142C11.3724 19.7893 10.8637 20 10.3333 20ZM17.3333 20C16.8029 20 16.2942 19.7893 15.9191 19.4142C15.544 19.0391 15.3333 18.5304 15.3333 18C15.3333 17.4696 15.544 16.9609 15.9191 16.5858C16.2942 16.2107 16.8029 16 17.3333 16C17.8637 16 18.3724 16.2107 18.7475 16.5858C19.1226 16.9609 19.3333 17.4696 19.3333 18C19.3333 18.5304 19.1226 19.0391 18.7475 19.4142C18.3724 19.7893 17.8637 20 17.3333 20ZM4.29531 5.923C4.04567 5.91495 3.80895 5.81012 3.6352 5.63068C3.46146 5.45125 3.36432 5.21127 3.36432 4.9615C3.36432 4.71173 3.46146 4.47175 3.6352 4.29232C3.80895 4.11288 4.04567 4.00805 4.29531 4H5.44631C6.34831 4 7.12831 4.626 7.32431 5.506L8.57731 11.148C8.77331 12.028 9.55331 12.654 10.4553 12.654H17.9673L19.4093 6.884H10.0643C9.81702 6.87272 9.5836 6.76654 9.41259 6.58755C9.24159 6.40857 9.14616 6.17055 9.14616 5.923C9.14616 5.67545 9.24159 5.43743 9.41259 5.25845C9.5836 5.07946 9.81702 4.97328 10.0643 4.962H19.4093C19.7016 4.96191 19.9901 5.02848 20.2529 5.15663C20.5156 5.28479 20.7457 5.47116 20.9256 5.70158C21.1055 5.93201 21.2305 6.20041 21.2911 6.4864C21.3517 6.77238 21.3463 7.06842 21.2753 7.352L19.8333 13.12C19.7294 13.5362 19.4892 13.9057 19.1511 14.1697C18.813 14.4337 18.3963 14.5771 17.9673 14.577H10.4553C9.5801 14.5771 8.73103 14.2787 8.04832 13.7311C7.36561 13.1835 6.89009 12.4194 6.70031 11.565L5.44631 5.923H4.29531Z"
                fill="white"
              />
            </svg>

            <p className="px-4 text-white font-medium text-[20px] leading-[24px] tracking-[0.5px]">
              Buy now
            </p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 max-w-[394px] bg-main-color-3 text-white rounded-[10px] card-shadow z-10">
        <div className="min-h-[220px] ">
          <img
            className="rounded-t-[10px]"
            src="../../../assets/best2.png"
            alt="rectangle"
          />
        </div>
        <div className="px-8 pt-8 space-y-4">
          <h3 className="font-bold text-[24px] leading-[26.4px]">Title</h3>
          <p className="font-normal text-[18px] leading-[28.8px]">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
        </div>
        <div className="p-8">
          <button className="flex justify-center w-full font-medium  text-[16px] leading-6 tracking-[0.5px] px-6 py-4 ring-[2px] rounded-lg ring-white">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3333 20C9.80287 20 9.29417 19.7893 8.91909 19.4142C8.54402 19.0391 8.33331 18.5304 8.33331 18C8.33331 17.4696 8.54402 16.9609 8.91909 16.5858C9.29417 16.2107 9.80287 16 10.3333 16C10.8637 16 11.3724 16.2107 11.7475 16.5858C12.1226 16.9609 12.3333 17.4696 12.3333 18C12.3333 18.5304 12.1226 19.0391 11.7475 19.4142C11.3724 19.7893 10.8637 20 10.3333 20ZM17.3333 20C16.8029 20 16.2942 19.7893 15.9191 19.4142C15.544 19.0391 15.3333 18.5304 15.3333 18C15.3333 17.4696 15.544 16.9609 15.9191 16.5858C16.2942 16.2107 16.8029 16 17.3333 16C17.8637 16 18.3724 16.2107 18.7475 16.5858C19.1226 16.9609 19.3333 17.4696 19.3333 18C19.3333 18.5304 19.1226 19.0391 18.7475 19.4142C18.3724 19.7893 17.8637 20 17.3333 20ZM4.29531 5.923C4.04567 5.91495 3.80895 5.81012 3.6352 5.63068C3.46146 5.45125 3.36432 5.21127 3.36432 4.9615C3.36432 4.71173 3.46146 4.47175 3.6352 4.29232C3.80895 4.11288 4.04567 4.00805 4.29531 4H5.44631C6.34831 4 7.12831 4.626 7.32431 5.506L8.57731 11.148C8.77331 12.028 9.55331 12.654 10.4553 12.654H17.9673L19.4093 6.884H10.0643C9.81702 6.87272 9.5836 6.76654 9.41259 6.58755C9.24159 6.40857 9.14616 6.17055 9.14616 5.923C9.14616 5.67545 9.24159 5.43743 9.41259 5.25845C9.5836 5.07946 9.81702 4.97328 10.0643 4.962H19.4093C19.7016 4.96191 19.9901 5.02848 20.2529 5.15663C20.5156 5.28479 20.7457 5.47116 20.9256 5.70158C21.1055 5.93201 21.2305 6.20041 21.2911 6.4864C21.3517 6.77238 21.3463 7.06842 21.2753 7.352L19.8333 13.12C19.7294 13.5362 19.4892 13.9057 19.1511 14.1697C18.813 14.4337 18.3963 14.5771 17.9673 14.577H10.4553C9.5801 14.5771 8.73103 14.2787 8.04832 13.7311C7.36561 13.1835 6.89009 12.4194 6.70031 11.565L5.44631 5.923H4.29531Z"
                fill="white"
              />
            </svg>

            <p className="px-4 text-white font-medium text-[20px] leading-[24px] tracking-[0.5px]">
              Buy now
            </p>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 max-w-[394px] bg-main-color-3 text-white rounded-[10px] card-shadow z-10">
        <div className="min-h-[220px]">
          <img
            className="rounded-t-[10px]"
            src="../../../assets/best3.png"
            alt="rectangle"
          />
        </div>
        <div className="px-8 pt-8 space-y-4">
          <h3 className="font-bold text-[24px] leading-[26.4px]">Title</h3>
          <p className="font-normal text-[18px] leading-[28.8px]">
            Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.
          </p>
        </div>
        <div className="p-8">
          <button className="flex justify-center w-full font-medium  text-[16px] leading-6 tracking-[0.5px] px-6 py-4 ring-[2px] rounded-lg ring-white">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3333 20C9.80287 20 9.29417 19.7893 8.91909 19.4142C8.54402 19.0391 8.33331 18.5304 8.33331 18C8.33331 17.4696 8.54402 16.9609 8.91909 16.5858C9.29417 16.2107 9.80287 16 10.3333 16C10.8637 16 11.3724 16.2107 11.7475 16.5858C12.1226 16.9609 12.3333 17.4696 12.3333 18C12.3333 18.5304 12.1226 19.0391 11.7475 19.4142C11.3724 19.7893 10.8637 20 10.3333 20ZM17.3333 20C16.8029 20 16.2942 19.7893 15.9191 19.4142C15.544 19.0391 15.3333 18.5304 15.3333 18C15.3333 17.4696 15.544 16.9609 15.9191 16.5858C16.2942 16.2107 16.8029 16 17.3333 16C17.8637 16 18.3724 16.2107 18.7475 16.5858C19.1226 16.9609 19.3333 17.4696 19.3333 18C19.3333 18.5304 19.1226 19.0391 18.7475 19.4142C18.3724 19.7893 17.8637 20 17.3333 20ZM4.29531 5.923C4.04567 5.91495 3.80895 5.81012 3.6352 5.63068C3.46146 5.45125 3.36432 5.21127 3.36432 4.9615C3.36432 4.71173 3.46146 4.47175 3.6352 4.29232C3.80895 4.11288 4.04567 4.00805 4.29531 4H5.44631C6.34831 4 7.12831 4.626 7.32431 5.506L8.57731 11.148C8.77331 12.028 9.55331 12.654 10.4553 12.654H17.9673L19.4093 6.884H10.0643C9.81702 6.87272 9.5836 6.76654 9.41259 6.58755C9.24159 6.40857 9.14616 6.17055 9.14616 5.923C9.14616 5.67545 9.24159 5.43743 9.41259 5.25845C9.5836 5.07946 9.81702 4.97328 10.0643 4.962H19.4093C19.7016 4.96191 19.9901 5.02848 20.2529 5.15663C20.5156 5.28479 20.7457 5.47116 20.9256 5.70158C21.1055 5.93201 21.2305 6.20041 21.2911 6.4864C21.3517 6.77238 21.3463 7.06842 21.2753 7.352L19.8333 13.12C19.7294 13.5362 19.4892 13.9057 19.1511 14.1697C18.813 14.4337 18.3963 14.5771 17.9673 14.577H10.4553C9.5801 14.5771 8.73103 14.2787 8.04832 13.7311C7.36561 13.1835 6.89009 12.4194 6.70031 11.565L5.44631 5.923H4.29531Z"
                fill="white"
              />
            </svg>

            <p className="px-4 text-white font-medium text-[20px] leading-[24px] tracking-[0.5px]">
              Buy now
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default BestOfCard;
