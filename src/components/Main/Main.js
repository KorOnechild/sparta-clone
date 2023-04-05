import React from "react";

import Header from "./BagicEle/Header";
import Banner from "./BagicEle/Banner/Banner";
import MainBlock from "./Contents/MainBlock";
import Catalog from "../Catalog/Catalog";
import Footer from "./BagicEle/Footer";

export const Main = (props) => {
  return (
    <div className="App">
      <Header
        onClickChange={props.onClickChange}
        onClickNotChange={props.onClickNotChange}
      />
      <Banner />
      <MainBlock
        contents={props.contents}
        service={props.service}
        creations={props.creations}
        onClickChange={props.onClickChange}
      />
      <Footer />
    </div>
  );
};

export const MainCatalog = (props) => {
  return (
    <div className="App">
      <Header
        onClickChange={props.onClickChange}
        onClickNotChange={props.onClickNotChange}
      />
      <Catalog data={props.contents} />
      <Footer />
    </div>
  );
};

export default Main;
