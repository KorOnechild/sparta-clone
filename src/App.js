import React from "react";

import Catalog from "./components/Catalog/Catalog";

import contents from "./data/data.json";
import creations from "./data/creations.json";

function App() {
  const dummyData = {
    contents: contents,
    creations: creations
  };

  return (
    <div className="App">
      <Catalog data={dummyData.contents.contents} />
    </div>
  );
}

export default App;
