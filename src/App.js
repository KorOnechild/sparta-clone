import React from "react";

import contents from "./data/data.json";
import creations from "./data/creations.json";

function App() {
  const dummyData = {
    contents: contents,
    creations: creations
  };

  console.log(dummyData);

  return (
    <div className="App">
      Hi
    </div>
  );
}

export default App;
