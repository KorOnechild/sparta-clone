import React from "react";
import "./TastesBlock.css";
import FreeCouseContents from "./FreeCouseContents";
import { AiOutlineRight } from "react-icons/ai";

const TastesBlock = (props) => {
  const filteredCourseList = props.contents.filter((content) => {
    return content.tag === "new";
  });
  return (
    <div className="tastesblock__wrap">
      <div className="tastesblock__titles">
        <h4>스파르타코딩클럽 맛보기</h4>
        <p>
          전체 보기
          <AiOutlineRight />
        </p>
      </div>
      <FreeCouseContents contents={filteredCourseList} />
    </div>
  );
};

export default TastesBlock;
