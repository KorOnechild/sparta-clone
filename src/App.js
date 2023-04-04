import React from "react";
import Main from "./components/Main/Main";

import Catalog from "./components/Catalog/Catalog";

import contents from "./data/data.json";
import creations from "./data/creations.json";
import service from "./data/service.json";

function App() {
  const dummyData = {
    contents: contents,
    creations: creations,
    service: service,
  };

  return (
    <div className="App">
      <Catalog data={dummyData.contents.contents} />
      <Main
        contents={dummyData.contents.contents}
        creations={dummyData.creations.creations}
        service={dummyData.service.service}
      />
    </div>
  );
}

export default App;
