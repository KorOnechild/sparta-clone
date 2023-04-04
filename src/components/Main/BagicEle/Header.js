import React from "react";
import { MdPersonOutline } from "react-icons/md";
import "./Header.css";

const Header = () => {
  const urlHttp = "https://";
  const spartaUrl = "spartacodingclub.kr";
  return (
    <div className="header__wrap">
      <div className="header__contents">
        <img
          src="img/logo/sparta-logo.webp"
          alt="sparta-logo"
          className="header__img"
        />
        <div className="header__line"></div>
        <button>코딩 단기 완성</button>
        <button onClick={() => window.open(urlHttp + spartaUrl + "/nb")}>
          국비지원
        </button>
        <button onClick={() => window.open(urlHttp + "chang." + spartaUrl)}>
          직장인 IT 창업
        </button>
        <button onClick={() => window.open(urlHttp + "hanghae99." + spartaUrl)}>
          개발자 취업 캠프
        </button>
        <button onClick={() => window.open(urlHttp + "swcamp." + spartaUrl)}>
          IT 취업 캠프
        </button>
        <button
          onClick={() => window.open(urlHttp + "intellipick." + spartaUrl)}>
          채용 플랫폼
        </button>
      </div>
      <div className="header__contents">
        <button onClick={() => window.open(urlHttp + spartaUrl + "/b2b")}>
          기업교육
        </button>
        <div className="header__line"></div>
        <button onClick={() => window.open(urlHttp + spartaUrl + "/blog")}>
          블로그
        </button>
        <button
          onClick={() =>
            window.open(urlHttp + spartaUrl + "/community/freeboard/all")
          }>
          커뮤니티
        </button>
        <MdPersonOutline size={34} />
      </div>
    </div>
  );
};

export default Header;
