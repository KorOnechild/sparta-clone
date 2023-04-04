import React from "react";
import "./MainBlock.css";
import FreeCouseContents from "./FreeCouse/FreeCouseContents";
import MainBlockTitle from "./MainBlockTitle";
import ShortCouseContents from "./ShortCourse/ShortCouseContents";

const MainBlock = (props) => {
  const filteredCourseList = props.contents.filter((content) => {
    return content.tag === "new";
  });
  return (
    <div className="tastesblock__wrap">
      <MainBlockTitle title={"스파르타코딩클럽 맛보기"} />
      <FreeCouseContents contents={filteredCourseList} />

      <div className="tastesblock__line" />

      <MainBlockTitle title={"단기 완성 코스 인기 강의"} />
      <ShortCouseContents contents={filteredCourseList} />
    </div>
  );
};

export default MainBlock;
