import React from "react";
import "./MainBlockTitle.css";
import { AiOutlineRight } from "react-icons/ai";

const MainBlockTitle = (props) => {
  return (
    <div className="tastesblock__titles">
      <h4>{props.title}</h4>
      <p>
        전체 보기
        <AiOutlineRight />
      </p>
    </div>
  );
};
export default MainBlockTitle;
