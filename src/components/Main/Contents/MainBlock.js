import React from "react";
import "./MainBlock.css";
import FreeCourseContents from "./FreeCourse/FreeCourseContents";
import MainBlockTitle from "./MainBlockTitle";
import ShortCourseContents from "./ShortCourse/ShortCourseContents";

const MainBlock = (props) => {
  const filteredFreeCourseList = props.contents.filter((content) => {
    return content.category === "free";
  });

  const filteredPopularCourseList = props.contents.filter((content) => {
    return content.tag === "popular";
  });
  return (
    <div className="tastesblock__wrap">
      <MainBlockTitle title={"스파르타코딩클럽 맛보기"} />
      <FreeCourseContents contents={filteredFreeCourseList} />

      <div className="tastesblock__line" />

      <MainBlockTitle title={"단기 완성 코스 인기 강의"} />
      <ShortCourseContents contents={filteredPopularCourseList} />

      <div className="tastesblock__line" />
    </div>
  );
};

export default MainBlock;
