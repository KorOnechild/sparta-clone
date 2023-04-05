import React, { useState } from "react";
import { Main, MainCatalog } from "./components/Main/Main";

import contents from "./data/data.json";
import creations from "./data/creations.json";
import service from "./data/service.json";

function App() {
  const dummyData = {
    contents: contents,
    creations: creations,
    service: service,
  };

  const [onClickChange, setOnClickChange] = useState(false);

  const startChangeingHandler = () => {
    setOnClickChange(true);
  };

  const stopChangeingHandler = () => {
    setOnClickChange(false);
  };

  return (
    <div className="App">
      {!onClickChange && (
        <Main
          contents={dummyData.contents.contents}
          creations={dummyData.creations.creations}
          service={dummyData.service.service}
          onClickChange={startChangeingHandler}
          onClickNotChange={stopChangeingHandler}
        />
      )}

      {onClickChange && (
        <MainCatalog
          contents={dummyData.contents.contents}
          creations={dummyData.creations.creations}
          service={dummyData.service.service}
          onClickChange={startChangeingHandler}
          onClickNotChange={stopChangeingHandler}
        />
      )}
    </div>
  );
}

export default App;
