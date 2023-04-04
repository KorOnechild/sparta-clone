import React, { useState } from "react";

import CatalogCategory from "./CatalogCategory/CatalogCategory";
import CatalogFilter from "./CatalogFilter/CatalogFilter";
import CourseList from "./Course/CourseList";

import styles from "./CatalogContents.module.css";

const CatalogContents = (props) => {
    // 원본 데이터 복사
    const data = [...props.data];

    const [clickedCate, setClickedCate] = useState("all");
    const [clickedLang, setClickedLang] = useState("전체");

    const [filteredData, setFilteredData] = useState(data);
    const [filteringData, setFilteringData] = useState(data);

    const filteringWithCategory = (clickedCate) => {
        const sortData = data.filter(content => content.category === clickedCate)

        // 클릭한 카테고리 값 갱신
        setClickedCate(clickedCate);
        setClickedLang("전체");

        // clickedCate를 통한 데이터 필터링
        if (clickedCate !== "all") {
            setFilteredData(sortData);
            setFilteringData(sortData);
        } else {
            setFilteredData(data);
            setFilteringData(data);
        }
    };

    const filterClickHander = (clickedLang) => {
        setClickedLang(clickedLang);
    };

    // CatalogFilter를 사용한 필터링
    const filteringWithCatalogFilter = (filterKey, filteringData) => {
        let arr = [];
        filterKey.forEach(key =>
            filteringData.forEach(data => data.lang !== null && data.lang.includes(key) ? arr.push(data) : ""));
        arr = new Set(arr);
        setFilteredData([...arr]);
    };

    // CatalogFilter 전체 선택 시
    const sortAllHandler = (allData) => {
        setFilteredData(allData);
    };

    return (
        <div className={styles["catalog-contents"]}>
            <CatalogCategory
                clickedCate={clickedCate}
                onFilterWithCategory={filteringWithCategory}
            />
            <div className={styles["catalog-contents__right"]}>
                <CatalogFilter
                    clickedLang={clickedLang}
                    data={filteringData}
                    onFilterClickHander={filterClickHander}
                    onFilterWithCategoryFilter={filteringWithCatalogFilter}
                    onSortAllHandler={sortAllHandler}
                />
                <CourseList data={filteredData} />
            </div>

        </div>
    );
};

export default CatalogContents;