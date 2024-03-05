import React from 'react'
import "../../components/Dashboard/Dashboard.css";
type Props = {}

const FirstPage = (props: Props) => {
  return (
    <div className="rectangle-image ">
      <div className="p-[80px] gap-[80px] min-h-[583px]  flex justify-center items-center">
        <div className="grid gap-[48px] max-w-[714px] max-h-[257px]">
          <div className="text-[72px] font-extrabold leading-[79.2px] text-[#0F172A]">
            Collectible Sneakers
          </div>
          <div className="text-[18px] font-normal leading-[28.8px] text-[#0F172A]">
            Sit elit feugiat turpis sed integer integer accumsan turpis. Sed
            suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices
            amet.
          </div>
          <div className="flex">
            <button className=" font-medium  text-[16px] leading-6 tracking-[0.5px] p-3 ring-[2px] rounded-lg ring-main-color-2 me-3">
              <p className="px-4 text-main-color-2">Sign up now</p>
            </button>
            <button className="flex font-medium  text-[16px] leading-6 tracking-[0.5px] p-3  rounded-lg ring-main-color-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z"
                  fill="#78350F"
                />
              </svg>

              <p className="px-2 text-main-color-2"> Watch Demo</p>
            </button>
          </div>
        </div>

        <div className="bg-[#FBBF24] min-w-[367px] min-h-[372px] rounded-[50px] relative">
          <div className="absolute w-[486px] h-[388px] mt-[-48px] ms-[-50px]">
            <img src="/public/assets/sneaker.png" alt="sneaker" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 justify min-h-[365px] p-[80px] gap-[80px]">
        <div className="grid grid-col-1 gap-[10px] ">
          <div className="relative">
            <img src="/public/assets/cup.png" alt="cup" />
            <div className="size-[60px] absolute top-0 ms-7">
              <img src="/public/assets/Rectangle 25.png" alt="rectangle" />
            </div>
          </div>
          <div className="text-[20px] font-medium leading-[22px] text-[#0F172A] flex items-center">
            <p>Nibh viverra</p>
          </div>
          <div>
            <p className="text-[18px] font-normal leading-[28.8px] text-[#0F172A]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-col-1 gap-[10px] ">
          <div className="relative">
            <img className="size-[42.67px] mt-[10.67px] ms-[10.67px]" src="/public/assets/image2.png" alt="cup" />
            <div className="size-[60px] absolute top-0 ms-7">
              <img src="/public/assets/Rectangle 26.png" alt="rectangle" />
            </div>
          </div>
          <div className="text-[20px] font-semibold leading-[22px] text-[#0F172A] flex items-center">
            <p>Cursus amet</p>
          </div>
          <div>
            <p className="text-[18px] font-normal leading-[28.8px] text-[#0F172A]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </p>
          </div>
        </div>
        <div className="grid grid-col-1 gap-[10px] ">
          <div className="relative">
            <img className="size-[64px]" src="/public/assets/tv.png" alt="tv" />
            <div className="size-[45px] absolute top-0 ms-10">
              <img src="/public/assets/Rectangle 27.png" alt="rectangle" />
            </div>
          </div>
          <div className="text-[20px] font-semibold leading-[22px] text-[#0F172A] flex items-center">
            <p>Ipsum fermentum</p>
          </div>
          <div>
            <p className="text-[18px] font-normal leading-[28.8px] text-[#0F172A]">
              Sit bibendum donec dolor fames neque vulputate non sit aliquam.
              Consequat turpis natoque leo, massa.{" "}
            </p>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default FirstPage