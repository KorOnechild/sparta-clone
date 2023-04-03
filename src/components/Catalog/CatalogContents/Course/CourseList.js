import React from "react";

import Course from "./Course";

import "./CourseList.css";

const CatalogList = (props) => {
    const contents = props.data.contents;

    return (
        <div className="category-list">
            {
                contents.map(content =>
                    <Course
                        key={content.title}
                        image={content.image}
                        title={content.title}
                        desc={content.desc}
                        time={content.time}
                        lang={content.lang}
                        tag={content.tag}
                        category={content.category}
                        price={content.price}
                    />)
            }
        </div>

    );
};

export default CatalogList;