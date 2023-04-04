import React from "react";

import './CatalogBanner.css';

const catalogBannerImg = "https://spartacodingclub.kr/v5/images/catalog/banners/V2/chatgpt.png";

const CatalogBanner = () => {

    return (
        <div className="catalog-banner">
            <div className="catalog-banner__contents">
                <div className="catalog-banner__desc">
                    <p className="title">chatGPT로 10분 만에 웹사이트 만들기</p>
                    <p className="desc">1시간만에 완성! 선착순 무료예요.</p>
                    <div className="catalog-banner__button">더 알아보기</div>
                </div>
                <img src={catalogBannerImg}
                    alt="chatGPT" />
            </div>
        </div >
    );
};

export default CatalogBanner;
