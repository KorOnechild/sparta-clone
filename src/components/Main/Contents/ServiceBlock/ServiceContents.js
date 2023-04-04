import React from "react";
import "./ServiceContents.css";
import ServiceCard from "./ServiceCard";

const ServiceContents = (props) => {
  return (
    <div className="servicesecontents__contents-box">
      {props.service.map((service) => (
        <ServiceCard
          key={service.name}
          logo={service.logo}
          title={service.title}
          subtitle={service.subtitle}
          desc={service.desc}
          subdesc={service.subdesc}
          link={service.link}
          color={service.color}
        />
      ))}
    </div>
  );
};

export default ServiceContents;
