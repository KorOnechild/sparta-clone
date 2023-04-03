import React from "react";

import "./CatalogFilter.css";
const CatalogFilter = () => {
    return (
        <div className="catalog-filter">
            <div className="catalog-filter__button">전체</div>
            <div className="catalog-filter__button">HTML · CSS</div>
            <div className="catalog-filter__button">Flutter</div>
            <div className="catalog-filter__button">SQL</div>
            <div className="catalog-filter__button">Spring</div>
            <div className="catalog-filter__button">Python</div>
            <div className="catalog-filter__button">JavaScript</div>
            <div className="catalog-filter__button">Java</div>
            <div className="catalog-filter__button">C++</div>
            <div className="catalog-filter__button">Unity</div>
            <div className="catalog-filter__button">No-code</div>
        </div>
    );
};

export default CatalogFilter;