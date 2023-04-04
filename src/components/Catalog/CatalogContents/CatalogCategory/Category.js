import React from "react";

import "./Category.css";

const Category = props => {

    const categoryClickHandler = () => {
        props.onCategoryEditHandler(props.category);
    };

    return (
        <div className={`catalog-category__item ${props.clickedCate === props.category ? "clicked" : ""}`}
            onClick={categoryClickHandler}
        > {props.children} </div>
    );
};

export default Category;