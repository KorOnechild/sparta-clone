import React from "react";
import "./Banner.css";
import BannerImage from "./BannerImage";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Banner = () => {
  return (
    <div className="banner__wrap">
      <BannerImage />
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
