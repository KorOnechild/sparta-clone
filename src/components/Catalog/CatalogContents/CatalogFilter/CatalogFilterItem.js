import React from "react";

import styles from './CatalogFilterItem.module.css';

const CatalogFilterItem = props => {
    const isClicked = props.children === props.clickedLang;

    const filterItemClickHandler = () => {
        props.onClick();
        props.onClickLangHandler(props.children);
    };

    return (
        <div className={`${styles["catalog-filter__button"]} ${isClicked && styles.clicked}`}
            onClick={filterItemClickHandler}
        >{props.children}</div>
    );
};

export default CatalogFilterItem;