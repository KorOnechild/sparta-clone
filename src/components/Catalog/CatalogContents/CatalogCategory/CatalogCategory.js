import React from "react";

import Category from "./Category";

import "./CatalogCategory.css";
const CatalogCategory = () => {
    return (
        <div className="catalog-category">
            <Category className="catalog-category__item">전체</Category>
            <Category className="catalog-category__item">무료</Category>
            <Category className="catalog-category__item">IT 직장인</Category>
            <Category className="catalog-category__item">주니어 개발자</Category>
            <Category className="catalog-category__item">게임 메이커</Category>
        </div>
    );
};

export default CatalogCategory;