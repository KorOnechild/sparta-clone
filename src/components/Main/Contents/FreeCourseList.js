import React from "react";
import "./FreeCourseList.css";

const FreeCourseList = (props) => {
  return (
    <li className="freecourselist__contents">
      <img src={props.img} alt={props.title} />
      <div className="freecourselist__texts">
        <h4>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
    </li>
  );
};

export default FreeCourseList;
