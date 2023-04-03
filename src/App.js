import React from "react";
import Header from "./components/Main/Header";

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
      <Header />
    </div>
  );
}

export default App;
