import React, { useRef, useState } from 'react'
import CommentCard from '../../components/CommentCard/CommentCard';

type Props = {}
const users = [
  {
    id: 0,
    logo: "../../../assets/Zoomer.png",
    logoName: "Zoomer",
    cardText:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    userImg: "../../../assets/User Thumb.png",
    userName: "Hellen Jummy",
    userTitle: "Team Lead",
  },
  {
    id: 1,
    logo: "../../../assets/Shells.png",
    logoName: "SHELLS",
    cardText:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImg: "../../../assets/User Thumb2.png",
    userName: "Hellena John",
    userTitle: "Co-founder",
  },
  {
    id: 2,
    logo: "../../../assets/ArtVenue.png",
    logoName: "ArtVenue",
    cardText:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    userImg: "../../../assets/User Thumb3.png",
    userName: "David Oshodi",
    userTitle: "Manager",
  },
  {
    id: 3,
    logo: "../../../assets/Waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "../../../assets/User Thumb.png",
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
  {
    id: 4,
    logo: "../../../assets/Waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "../../../assets/User Thumb2.png",
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
  {
    id: 5,
    logo: "../../../assets/Waves.png",
    logoName: "THY",
    cardText:
      "Magna integer non. Sed diam enim nibh sit. nteger non. Sed diam nteger non. Sed diam Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "../../../assets/User Thumb.png",
    userName: "Ayşe Ev",
    userTitle: "Developer",
  },
  {
    id: 6,
    logo: "../../../assets/Waves.png",
    logoName: "BAYKAR",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean.enim nibh sit. Aliquam laoreet aenean.",
    userImg: "../../../assets/User Thumb4.png",
    userName: "Ahmet Kuzu",
    userTitle: "Developer",
  },
  {
    id: 7,
    logo: "../../../assets/Shells.png",
    logoName: "TUSAŞ",
    cardText:
      "Aliquet vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.lectus sed ornare quam nulla",
    userImg: "../../../assets/User Thumb2.png",
    userName: "Esat Yıldırım",
    userTitle: "IT",
  },
  {
    id: 8,
    logo: "../../../assets/Shells.png",
    logoName: "SHELLS",
    cardText:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImg: "../../../assets/User Thumb2.png",
    userName: "Hellena John",
    userTitle: "Co-founder",
  },
];
function FourthPage(props: Props) {
  const [current, setCurrent] = useState(0);
  const length = users.length;
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      nextCard();
    }
    if (touchStartX.current - touchEndX.current < -50) {
      prevCard();
    }
  };

  const nextCard = () => {
    setCurrent((current + 1) % length);
  };

  const prevCard = () => {
    setCurrent((current - 1 + length) % length);
  };


  if (!Array.isArray(users) || users.length <= 0) {
    return null;
  }
  return (
    <div className="xs:min-h-[732px] min-h-[459px] gap-[80px]">
        <div className="flex justify-center lg:justify-between lg:items-center px-[16px] xs:px-[40px] md:px-[80px] pt-[48px]">
          <h2 className="md:font-extrabold  md:text-[56px]  text-main-color-3 md:leading-6 md:tracking-[0.5px] font-bold  text-[32px] leading-[35.2px]">
            Because they love us
          </h2>
          <div className="hidden lg:flex">
            <button onClick={prevCard}>
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
            <button onClick={nextCard}>
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

        <div className="relative "
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}>
          <div className="flex justify-center min-h-[277px] xs:min-h-[421px] bg-[#FDE68A] xs:mt-[40px] mt-[16px] lg:mx-[40px] ">
            <div className=" absolute flex mt-4 xs:mt-10 space-x-4 xs:space-x-6" style={{ transform: `translateX(-${current * (100 / length)}%)`, transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)" }}>
              {users.map((user, index) => (
                <CommentCard
                  key={user.id}
                  userInfo={users[(current + index) % length]}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
  )
}

export default FourthPage