import React from "react";

import styles from "./Category.module.css";

const Category = props => {

    const isClicked = props.clickedCate === props.category;

    const categoryClickHandler = () => {
        props.onCategoryEditHandler(props.category);
    };

    return (
        <div className={`${styles["catalog-category__item"]} ${isClicked && styles.clicked}`}
            onClick={categoryClickHandler}
        > {props.children} </div>
    );
};

export default Category;