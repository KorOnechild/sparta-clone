import React from "react";

import './CatalogFilterItem.css';

const CatalogFilterItem = props => {
    const filterItemClickHandler = () => {
        console.log(props.clickedLang)
        props.onClick();
        props.onClickLangHandler(props.children);
    };

    return (
        <div className={`catalog-filter__button ${props.clickedLang === props.children ? "clicked" : ""}`} onClick={filterItemClickHandler}>{props.children}</div>
    );
};

export default CatalogFilterItem;