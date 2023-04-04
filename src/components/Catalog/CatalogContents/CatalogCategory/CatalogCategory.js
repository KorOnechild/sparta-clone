import React from "react";

import Category from "./Category";

import styles from "./CatalogCategory.module.css";
const CatalogCategory = (props) => {

    const categoryEditHandler = (clickedCate) => {
        props.onFilterWithCategory(clickedCate);
    };

    return (
        <div className={styles["catalog-category"]}>
            <Category category="all" clickedCate={props.clickedCate} onCategoryEditHandler={categoryEditHandler}>전체</Category>
            <Category category="free" clickedCate={props.clickedCate} onCategoryEditHandler={categoryEditHandler}>무료</Category>
            <Category category="it" clickedCate={props.clickedCate} onCategoryEditHandler={categoryEditHandler}>IT 직장인</Category>
            <Category category="junior" clickedCate={props.clickedCate} onCategoryEditHandler={categoryEditHandler}>주니어 개발자</Category>
            <Category category="game" clickedCate={props.clickedCate} onCategoryEditHandler={categoryEditHandler}>게임 메이커</Category>
        </div >
    );
};

export default CatalogCategory;