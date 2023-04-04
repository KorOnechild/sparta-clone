import React from "react";
import "./ServiceCard.css";

const ServiceCard = (props) => {
  return (
    <div
      onClick={() => window.open(props.link)}
      className="servicecard__card-box">
      <div
        className="servicecard__card-box-img"
        style={{ backgroundColor: props.color }}>
        <img src={props.logo} alt={props.name} />
      </div>

      <div className="servicecard__contents">
        <div className="servicecard__content-box">
          <div className="servicecard__title">{props.title}</div>
          <div className="servicecard__subtitle">{props.subtitle}</div>
          <div
            className="servicecard__desc"
            dangerouslySetInnerHTML={{ __html: props.desc }}></div>
        </div>
        <div className="servicecard__subdesc">{props.subdesc}</div>
      </div>
    </div>
  );
};

export default ServiceCard;
