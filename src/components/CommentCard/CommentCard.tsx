import "./CommentCard.css";
type Props = {
  userInfo: {
    logo?: string | undefined;
    logoName?: string | undefined;
    cardText?: string | undefined;
    userImg?: string | undefined;
    userName?: string | undefined;
    userTitle?: string | undefined;
  };
};

const CommentCard = (props: Props) => {
  return (
    <div className="xs:min-h-[430px] min-h-[296px] bg-white max-w-[384px] rounded-[20px] comment-card-shadow shrink-0">
      <div className="flex flex-col p-6 xs:p-8 space-y-4">
        <div className="flex items-center py-4 space-x-2">
          <img
            className=""
            src={props.userInfo.logo}
            alt=""
          />
          <h6 className="text-main-color-4 xs:text-[20px] text-[24px] leading-[26.4px] font-bold ">
            {props.userInfo.logoName}
          </h6>
        </div>
        <div>
          <p className="text-black font-normal xs:text-[24px] xs:leading-[38.4px] text-[16px] leading-[22.4px]">
            {props.userInfo.cardText}
          </p>
        </div>
        <div className="flex xs:pt-4 space-x-4 items-center">
          <img
            className="rounded-full h-[64px] w-[64px]"
            src={props.userInfo.userImg}
            alt=""
          />
          <div className="flex flex-col">
            <p className="text-black font-normal text-[18px] leading-[28.8px]">
              {props.userInfo.userName}
            </p>
            <p className="text-main-color-4 font-normal text-[16px] leading-[22.4px]">
              {props.userInfo.userTitle}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentCard;
