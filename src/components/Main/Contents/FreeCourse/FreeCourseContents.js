import React from "react";
import "./FreeCourseContents.css";
import FreeCourseList from "./FreeCourseList";

const FreeCourseContents = (props) => {
  return (
    <div className="freecoursecontents__contents">
      <img src="img/course/course-chatgpt.png" alt="course-chatgpt" />

      <div className="freecoursecontents__popular-free-contents">
        <p className="freecoursecontents__popular-free-contents-title">
          인기 <br />
          무료 강의
        </p>
        <ul>
          {props.contents.map((content) => (
            <FreeCourseList
              key={content.title}
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

export default FreeCourseContents;
