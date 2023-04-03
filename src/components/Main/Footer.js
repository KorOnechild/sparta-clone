import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer__wrap">
      <div className="footer__contents">
        <div className="footer__top-content">
          <div>
            <p>스파르타코딩클럽</p>
            <ul>
              <li>스파르타 온라인</li>
              <li>항해99</li>
              <li>
                {"{"} 창 {"}"}
              </li>
              <li>SW캠프</li>
              <li>국비지원교육</li>
              <li>기업교육</li>
              <li>인텔리픽</li>
            </ul>
          </div>

          <div>
            <p>ETC</p>
            <ul>
              <li>튜터</li>
              <li>채용</li>
              <li>SW사관학교 정글</li>
              <li>SeasyGPT</li>
            </ul>
          </div>

          <div className="footer__sns-icons">
            <img
              src="img/sns/sns-naverblog-logo.png"
              alt="sns-naverblog-logo"
            />
            <img src="img/sns/sns-tistory-logo.png" alt="sns-tistory-logo" />
            <img src="img/sns/sns-insta-logo.png" alt="sns-insta-logo" />
            <img src="img/sns/sns-youtube-logo.png" alt="sns-youtube-logo" />
          </div>
        </div>
      </div>
      <div className="footer__line"></div>
      <div className="footer__contents">
        <ul>
          <li>개인정보처리방침</li>
          <li>서비스 이용 약관</li>
          <li>환불 규정</li>
          <li>고객센터</li>
        </ul>
        <div className="footer__bottom-content">
          <div>
            <h4>팀스파르타(주) 사업자 정보</h4>
            <div>
              <p>
                대표자: 이범규 | 사업자 등록번호: 783-86-01715 | 통신판매업
                신고번호: 2020-서울강남-02300 | 평생교육시설 신고번호: 제 661호
              </p>
              <p>
                주소: 서울특별시 강남구 테헤란로44길 8 12층 | 이메일:
                contact@teamsparta.co | 전화: 1522-8016
              </p>
            </div>
          </div>
          <p>Copyright ©2022 TEAMSPARTA. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
