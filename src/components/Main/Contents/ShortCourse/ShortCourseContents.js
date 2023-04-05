import React from "react";
import "./ShortCourseContents.css";
import ShortCouseCard from "./ShortCourseCard";

const ShortCourseContents = (props) => {
  return (
    <div className="shortcoursecontents__wrap">
      <div className="shortcoursecontents__contents-box">
        {props.contents.map(
          (content, i) =>
            i < 3 && (
              <ShortCouseCard
                key={content.title}
                img={content.image}
                title={content.title}
                desc={content.desc}
                time={content.time}
                price={content.price}
                link={content.link}
              />
            )
        )}
      </div>
      <img
        className="shortcoursecontents__last-box"
        src="/img/course/popular-last-card.png"
        alt="card"
        onClick={() => window.open("https://spartacodingclub.kr/nb")}
      />
    </div>
  );
};

export default ShortCourseContents;
