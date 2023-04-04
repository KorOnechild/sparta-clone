import React from "react";
import "./ShortCourseCard.css";
import { BsPlayBtn } from "react-icons/bs";

const ShortCourseCard = (props) => {
  return (
    <div
      className="shortcoursecard__card-box"
      onClick={() => window.open(props.link)}>
      <img src={props.img} alt={props.title} />
      <div className="shortcoursecard__contents">
        <div className="shortcoursecard__content-box">
          <div className="shortcoursecard__title">{props.title}</div>
          <div className="shortcoursecard__desc">{props.desc}</div>
          <div className="shortcoursecard__time">
            <BsPlayBtn /> {props.time}
          </div>
        </div>
        <div className="shortcoursecard__price">{props.price}</div>
      </div>
    </div>
  );
};

export default ShortCourseCard;
