import React from "react";
import "./FreeCourseList.css";

const FreeCourseList = (props) => {
  return (
    <div>
      <li className="freecourselist__contents">
        <div>
          <img
            src={props.img}
            alt={props.title}
            className="freecourselist__contents-img"
          />
        </div>

        <div className="freecourselist__texts">
          <h4>{props.title}</h4>
          <p>{props.desc}</p>
        </div>
      </li>
      <div className="freecourselist__line"></div>
    </div>
  );
};

export default FreeCourseList;
