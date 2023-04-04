import React from "react";

import Course from "./Course";

import "./CourseList.css";

const CatalogList = (props) => {
    return (
        <div className="category-list">
            {
                props.data.map(content =>
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