import React from "react";

import Course from "./Course";

import styles from "./CourseList.module.css";

const CatalogList = (props) => {
    return (
        <div className={styles["category-list"]}>
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