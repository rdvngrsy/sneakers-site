import React, { useState } from 'react'
import CommentCard from '../../components/CommentCard/CommentCard';

type Props = {}
const users = [
  {
    id: 0,
    logo: "../../../public/assets/Zoomer.png",
    logoName: "Zoomer",
    cardText:
      "Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.",
    userImg: "../../../public/assets/User Thumb.png",
    userName: "Hellen Jummy",
    userTitle: "Team Lead",
  },
  {
    id: 1,
    logo: "../../../public/assets/Shells.png",
    logoName: "SHELLS",
    cardText:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImg: "../../../public/assets/User Thumb2.png",
    userName: "Hellena John",
    userTitle: "Co-founder",
  },
  {
    id: 2,
    logo: "../../../public/assets/ArtVenue.png",
    logoName: "ArtVenue",
    cardText:
      "A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.",
    userImg: "../../../public/assets/User Thumb3.png",
    userName: "David Oshodi",
    userTitle: "Manager",
  },
  {
    id: 3,
    logo: "../../../public/assets/Waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "../../../public/assets/User Thumb.png",
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
  {
    id: 4,
    logo: "../../../public/assets/Waves.png",
    logoName: "WAVES",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "../../../public/assets/User Thumb2.png",
    userName: "Charolette Hanlin",
    userTitle: "CEO",
  },
  {
    id: 5,
    logo: "../../../public/assets/Waves.png",
    logoName: "THY",
    cardText:
      "Magna integer non. Sed diam enim nibh sit. nteger non. Sed diam nteger non. Sed diam Aliquam laoreet aenean metus nibh eu scelerisque.",
    userImg: "../../../public/assets/User Thumb.png",
    userName: "Ayşe Ev",
    userTitle: "Developer",
  },
  {
    id: 6,
    logo: "../../../public/assets/Waves.png",
    logoName: "BAYKAR",
    cardText:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean.enim nibh sit. Aliquam laoreet aenean.",
    userImg: "../../../public/assets/User Thumb4.png",
    userName: "Ahmet Kuzu",
    userTitle: "Developer",
  },
  {
    id: 7,
    logo: "../../../public/assets/Shells.png",
    logoName: "TUSAŞ",
    cardText:
      "Aliquet vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.lectus sed ornare quam nulla",
    userImg: "../../../public/assets/User Thumb2.png",
    userName: "Esat Yıldırım",
    userTitle: "IT",
  },
  {
    id: 8,
    logo: "../../../public/assets/Shells.png",
    logoName: "SHELLS",
    cardText:
      "Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.",
    userImg: "../../../public/assets/User Thumb2.png",
    userName: "Hellena John",
    userTitle: "Co-founder",
  },
];
function FourthPage(props: Props) {
  const [current, setCurrent] = useState(0);
  const length = users.length;

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
    <div className="min-h-[732px]  gap-[80px]">
        <div className="flex justify-between items-center px-[80px] pt-[80px]">
          <h2 className="font-extrabold  text-[56px] text-main-color-3 leading-6 tracking-[0.5px]">
            Because they love us
          </h2>
          <div className="flex">
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

        <div className="relative ">
          <div className="flex justify-center min-h-[421px] bg-[#FDE68A] mt-[40px] mx-[40px] ">
            <div className=" absolute flex mt-10 space-x-6" style={{ transform: `translateX(-${current * (100 / length)}%)`, transition: "transform 1s cubic-bezier(0.4, 0, 0.2, 1)" }}>
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