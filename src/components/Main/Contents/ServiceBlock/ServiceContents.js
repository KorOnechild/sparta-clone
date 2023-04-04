import React from "react";
import "./ServiceContents.css";
import ServiceCard from "./ServiceCard";

const ServiceContents = (props) => {
  return (
    <div className="shortcoursecontents__contents-box">
      {props.service.map((service) => (
        <ServiceCard
          key={props.name}
          logo={props.logo}
          title={props.title}
          subtitle={props.subtitle}
          desc={props.desc}
          subdesc={props.subdesc}
          link={props.link}
        />
      ))}
    </div>
  );
};

export default ServiceContents;
