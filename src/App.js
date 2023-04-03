import React from "react";
import Main from "./components/Main/Main";

import contents from "./data/data.json";
import creations from "./data/creations.json";

function App() {
  const dummyData = {
    contents: contents,
    creations: creations,
  };

  console.log(dummyData);

  return (
    <div className="App">
      <Main contents={dummyData.contents.contents} />
    </div>
  );
}

export default App;
