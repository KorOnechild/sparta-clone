import React from "react";
import "./Banner.css";
import "./Banner.css";

const DUMMY = {
  image: "img/banner/banner-img-1.png",
  title: "내일배움캠프는<br/>취업까지 자신있습니다.",
  desc: "전액 국비지원으로 시작하는 웹개발자 취업",
  buttonName: "참가 신청하기",
};
const BannerImage = () => {
  return (
    <div className="banner__moving-banner">
      <div className="banner__moving-banner-contents">
        <div
          className="banner__moving-banner-contents-title"
          dangerouslySetInnerHTML={{ __html: DUMMY.title }}></div>
        <div className="banner__moving-banner-contents-desc">{DUMMY.desc}</div>
        <button>{DUMMY.buttonName}</button>
      </div>

      <img src={DUMMY.image} alt="banner-img-1" />
    </div>
  );
};

export default BannerImage;
