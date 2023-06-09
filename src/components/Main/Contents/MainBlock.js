import React from "react";
import "./MainBlock.css";
import FreeCourseContents from "./FreeCourse/FreeCourseContents";
import { MainBlockTitle, MainBlockTitleWithout } from "./MainBlockTitle";
import ShortCourseContents from "./ShortCourse/ShortCourseContents";
import ServiceContents from "./ServiceBlock/ServiceContents";
import AddInfo from "../BagicEle/AddInfo";

const MainBlock = (props) => {
  const filteredFreeCourseList = props.contents.filter((content) => {
    return content.category === "free";
  });

  const filteredPopularCourseList = props.contents.filter((content) => {
    return content.tag === "popular";
  });
  return (
    <div className="mainblock__wrap">
      <div className="mainblock__margin" />
      <MainBlockTitle
        title={"스파르타코딩클럽 맛보기"}
        onClickChange={props.onClickChange}
      />
      <FreeCourseContents contents={filteredFreeCourseList} />

      <div className="mainblock__line" />

      <MainBlockTitle
        title={"단기 완성 코스 인기 강의"}
        onClickChange={props.onClickChange}
      />
      <ShortCourseContents contents={filteredPopularCourseList} />

      <div className="mainblock__line" />

      <MainBlockTitleWithout title={"창업・커리어 전환・개발자 채용"} />
      <ServiceContents service={props.service} />

      <div className="mainblock__line" />

      <AddInfo />
    </div>
  );
};

export default MainBlock;
