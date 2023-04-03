import React from "react";
import "./Banner.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const DUMMY = {
  image: "img/banner/banner-img-1.png",
  title: "내일배움캠프는<br/>취업까지 자신있습니다.",
  desc: "전액 국비지원으로 시작하는 웹개발자 취업",
  buttonName: "참가 신청하기",
};
const Banner = () => {
  return (
    <div className="banner__wrap">
      <div className="banner__moving-banner">
        <div className="banner__moving-banner-contents">
          <div
            className="banner__moving-banner-contents-title"
            dangerouslySetInnerHTML={{ __html: DUMMY.title }}></div>
          <div className="banner__moving-banner-contents-desc">
            {DUMMY.desc}
          </div>
          <button>{DUMMY.buttonName}</button>
        </div>

        <img src={DUMMY.image} alt="banner-img-1" />
      </div>
      <div className="banner__moving-button">
        <div className="banner__moving-button-contents">
          <AiOutlineLeft className="icons" />
          <div>1 / 9</div>
          <AiOutlineRight className="icons" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
