import React from "react";
import Header from "./BagicEle/Header";
import Banner from "./BagicEle/Banner/Banner";
import MainBlock from "./Contents/MainBlock";
import Footer from "./BagicEle/Footer";

const Main = (props) => {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainBlock contents={props.contents} />
      <Footer />
    </div>
  );
};

export default Main;
