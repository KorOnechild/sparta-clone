import React from "react";

import CatalogCategory from "./CatalogCategory/CatalogCategory";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import CourseList from "./Course/CourseList";

import "./CatalogContents.css";

const CatalogContents = (props) => {
    return (
        <div className="catalog-contents">
            <CatalogCategory />
            <div className="catalog-contents__right">
                <CatalogFilter />
                <CourseList data={props.data} />
            </div>

        </div>
    );
};

export default CatalogContents;