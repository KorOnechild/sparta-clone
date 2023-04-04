import React from "react";

import styles from "./Course.module.css";

const Course = props => {
    const isFree = props.price === "0"

    return (
        <div className={styles["course__item"]}>
            <img src={props.image}
                alt="" />
            <div className={styles["course__contents"]}>
                <div className={styles["course__title"]}>{props.title}</div>
                <div className={styles["course__desc"]}>{props.desc}</div>
                <div className={styles["course__time"]}>{props.time}</div>
                {!isFree && <div className={styles["course__price"]}>{props.price}</div>}
                {isFree && <div className={styles["course__price"]}>무료</div>}
            </div>
        </div>
    );
}

export default Course;