import React from "react";
import "./FreeCouseContents.css";
import FreeCourseList from "./FreeCourseList";

const FreeCouseContents = (props) => {
  return (
    <div className="tastesblock__contents">
      <img src="img/course/course-chatgpt.png" alt="course-chatgpt" />

      <div className="tastesblock__popular-free-contents">
        <p className="tastesblock__popular-free-contents-title">
          인기 <br />
          무료 강의
        </p>
        <ul>
          {props.contents.map((content) => (
            <FreeCourseList
              //   key={contents.id}
              img={content.image}
              title={content.title}
              desc={content.desc}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FreeCouseContents;
