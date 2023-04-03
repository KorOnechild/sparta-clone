import React from "react";
import Header from "./BagicEle/Header";
import Banner from "./BagicEle/Banner";
import TastesBlock from "./Contents/TastesBlock";
import Footer from "./BagicEle/Footer";

const Main = (props) => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <TastesBlock contents={props.contents} />
      <Footer />
    </div>
  );
};

export default Main;
