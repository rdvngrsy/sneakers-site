import FirstPage from "../../pages/FirstPage/FirstPage";
import SecondPage from "../../pages/SecondPage/SecondPage";
import ThirdPage from "../../pages/ThirdPage/ThirdPage";

import "./Dashboard.css";
type Props = {};

const Dashboard = (props: Props) => {
  return (
    <>
      <FirstPage />
      <SecondPage />
      <ThirdPage />
      <div className="min-h-[732px]  gap-[80px]">
        <div className="flex justify-between items-center px-[80px] pt-[80px]">
          <h2 className="font-extrabold  text-[56px] text-main-color-3 leading-6 tracking-[0.5px]">Because they love us</h2>
          <div className="flex">
          <button>
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_1_1221)">
                <rect
                  x="4"
                  y="3"
                  width="46"
                  height="46"
                  rx="23"
                  stroke="#78350F"
                  stroke-width="2"
                />
                <path
                  d="M33.5 26H21H33.5ZM21 26L27 20L21 26ZM21 26L27 32L21 26Z"
                  fill="#78350F"
                />
                <path
                  d="M21 26L27 32M33.5 26H21H33.5ZM21 26L27 20L21 26Z"
                  stroke="#78350F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_1_1221"
                  x="0"
                  y="0"
                  width="54"
                  height="54"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1221"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_1_1221"
                    result="effect2_dropShadow_1_1221"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1_1221"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          <button>
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_dd_1_1222)">
                <rect
                  x="4"
                  y="3"
                  width="46"
                  height="46"
                  rx="23"
                  stroke="#78350F"
                  stroke-width="2"
                />
                <path
                  d="M21 26H33.5H21ZM33.5 26L27.5 20L33.5 26ZM33.5 26L27.5 32L33.5 26Z"
                  fill="#78350F"
                />
                <path
                  d="M33.5 26L27.5 32M21 26H33.5H21ZM33.5 26L27.5 20L33.5 26Z"
                  stroke="#78350F"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_dd_1_1222"
                  x="0"
                  y="0"
                  width="54"
                  height="54"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="1" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_1222"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.5" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="effect1_dropShadow_1_1222"
                    result="effect2_dropShadow_1_1222"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect2_dropShadow_1_1222"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </button>
          </div>
        </div>

        <div className="min-h-[421px] bg-[#FDE68A] mt-[40px] mx-[40px]">

        </div>
      </div>
    </>
  );
};

export default Dashboard;
