import React from 'react';

import CatalogBanner from './CatalogBanner/CatalogBanner';
import CatalogContents from './CatalogContents/CatalogContents';

const Catalog = (props) => {
    return (
        <div>
            <CatalogBanner />
            <CatalogContents data={props.data} />
        </div>
    );
};

export default Catalog;