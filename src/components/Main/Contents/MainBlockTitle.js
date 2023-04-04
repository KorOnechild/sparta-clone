import React from "react";
import "./MainBlockTitle.css";
import { AiOutlineRight } from "react-icons/ai";

export const MainBlockTitle = (props) => {
  return (
    <div className="mainblocktitle_titles">
      <h4>{props.title}</h4>
      <p>
        전체 보기
        <AiOutlineRight />
      </p>
    </div>
  );
};

export const MainBlockTitleWithout = (props) => {
  return (
    <div className="mainblocktitle_titles">
      <h4>{props.title}</h4>
    </div>
  );
};
export default MainBlockTitle;
