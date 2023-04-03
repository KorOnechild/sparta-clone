import React from "react";

import "./Course.css";

const Course = props => {
    return (
        <div className="course__item">
            <img src={props.image} />
            <div className="course__contents">
                <div className="course__title">{props.title}</div>
                <div className="course__desc">{props.desc}</div>
                <div className="course__time">{props.time}</div>
                {props.price !== "0" && <div className="course__price">{props.price}</div>}
                {props.price === "0" && <div className="course__price">무료</div>}
            </div>
        </div>
    );
}

export default Course;