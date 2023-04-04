import React, { useState } from "react";

import CatalogCategory from "./CatalogCategory/CatalogCategory";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import CourseList from "./Course/CourseList";

import "./CatalogContents.css";

const CatalogContents = (props) => {
    const [clickedCate, setClickedCate] = useState("all");
    const [filteredCate, setFilteredCate] = useState(props.data);

    const filterWithCategory = (clickedCate) => {
        setClickedCate(clickedCate);

        clickedCate !== "all" ?
            setFilteredCate(props.data.filter(content => content.category === clickedCate)) :
            setFilteredCate(props.data)
    };

    const filterWithCatalogFilter = () => {

    };

    return (
        <div className="catalog-contents">
            <CatalogCategory clickedCate={clickedCate} onFilterWithCategory={filterWithCategory} />
            <div className="catalog-contents__right">
                <CatalogFilter onFilterWithCategoryFilter={filterWithCatalogFilter} />
                <CourseList data={filteredCate} />
            </div>

        </div>
    );
};

export default CatalogContents;