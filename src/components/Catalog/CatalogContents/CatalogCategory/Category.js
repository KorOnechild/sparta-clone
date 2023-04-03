import React from "react";

import "./Category.css";

const Category = props => {
    const className = props.className;

    return (
        <div className={className}>{props.children}</div>
    );
};

export default Category;