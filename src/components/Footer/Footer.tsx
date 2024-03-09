

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div className="min-h-[464px] px-4 sm:px-20 bg-main-color-3">
      <div className="w-full py-12">
        <div className="grid grid-cols-1 gap-12 text-center sm:grid-cols-4 sm:text-start sm:gap-0">
          <div className="flex flex-col">
            <ul className="">
              <li className="text-white py-3 text-[16px] font-medium leading-[17.6px]">
                Product
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Pricing
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Overview
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Browse
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Accessibility
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Five
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="">
              <li className="text-white text-whitetext-[#E2E8F0]  py-3 text-[16px] font-medium leading-[17.6px]">
                Solutions
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Brainstorming
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Ideation
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Wireframing
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Research
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Design
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <ul className="">
              <li className="text-white py-3 text-[16px] font-medium leading-[17.6px]">
                Support
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Contact Us
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Developers
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Documentation
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Integrations
              </li>
              <li className="text-[#E2E8F0] py-3 text-[16px] font-normal leading-[17.6px]">
                Reports
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <ul className="">
              <li className="text-white py-3 text-[16px] font-medium leading-[17.6px]">
                Get the App
              </li>
              <li className="pt-3 mb-[11px] text-[16px] font-normal leading-[17.6px] flex justify-center sm:justify-start ">
                <img
                  src="../../../public/assets/App Store - Filled.png"
                  alt=""
                />
              </li>
              <li className=" text-[16px] font-normal leading-[17.6px] flex justify-center sm:justify-start">
                <img src="../../../public/assets/Google Play.png" alt="" />
              </li>
              <li className="text-[#E2E8F0] pt-12 mb-3 sm:mb-0 text-[16px] font-medium leading-[17.6px]">
                Follow Us
              </li>
              <li className="flex py-3 text-[16px] font-normal leading-[17.6px] space-x-4 ">
                <img src="../../../public/assets/youtube.png" alt="" />
                <img src="../../../public/assets/facebook.png" alt="" />
                <img src="../../../public/assets/twitter.png" alt="" />
                <img src="../../../public/assets/instagram.png" alt="" />
                <img src="../../../public/assets/linkedin.png" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-[#334155] w-full text-[#E2E8F0] py-[48px] gap-6 sm:gap-0 flex flex-col sm:flex-row justify-between items-center text-[16px] font-normal leading-[22.4px] ">
        <p>Collers @ 2023. All rights reserved.</p>
        <ul className="flex space-x-8 items-center">
          <li>
            <p>Terms</p>
          </li>
          <li>
            <p>Privacy</p>
          </li>
          <li>
            <p>Contact</p>
          </li>
          <li className="flex items-center space-x-2">
            <img src="../../../public/assets/world.png" alt="" />
            <div className="pt-1">
              <p>EN</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
