import React, { useState } from "react";

import CatalogFilterItem from "./CatalogFilterItem";

import "./CatalogFilter.css";
const CatalogFilter = props => {
    const clickedLang = props.clickedLang;

    const clickLangHandler = (clickedLang) => {
        props.onFilterClickHander(clickedLang);
    };

    const CategoryFilterHandler = (filterKey) => {
        props.onFilterWithCategoryFilter(filterKey, props.data);
    };

    const sortAllHandler = () => {
        props.onSortAllHandler(props.data);
    };

    return (
        <div className="catalog-filter">
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={sortAllHandler}>전체</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["html", "css"])}>HTML · CSS</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["flutter"])}>Flutter</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["sql"])}>SQL</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["spring"])}>Spring</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["python"])}>Python</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["javascript"])}>JavaScript</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["java"])}>Java</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["c++"])}>C++</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["unity"])}>Unity</CatalogFilterItem>
            <CatalogFilterItem clickedLang={clickedLang} onClickLangHandler={clickLangHandler} onClick={() => CategoryFilterHandler(["nocode"])}>No-code</CatalogFilterItem>
        </div >
    );
};

export default CatalogFilter;