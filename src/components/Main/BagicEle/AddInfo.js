import React from "react";
import "./AddInfo.css";

const AddInfo = () => {
  return (
    <div
      className="addinfo__wrap"
      onClick={() =>
        window.open("https://spartacodingclub.kr/community/2022awards")
      }>
      <div className="addinfo__contents">
        <img
          src="https://spartacodingclub.kr/v5/images/home_v2/brand_web.png"
          alt="brand"
        />
        <div className="addinfo__texts">
          <h2>당신의 가능성에 코딩을 곱해보세요.</h2>
          <p>
            누구나 큰일 내는 세상을 위한, 모두를 위한 SW교육.
            <br />
            스파르타코딩클럽이 함께하겠습니다.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AddInfo;
