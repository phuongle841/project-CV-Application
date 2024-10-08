import { useState } from "react";
import { Structure } from "./components/structure";

import "./App.css";
import CustomSection from "./components/CustomSection";
import DisplayStructure from "./components/DisplayStructure";

function App() {
  const [structures, setStructure] = useState(Structure);
  return (
    <div id="container">
      <div id="modifyPanel">
        {structures.map((structure, id) => (
          <div key={id}>
            <h3>{structure.title}</h3>
            <CustomSection
              list={structures[id].content}
              structure={structures}
              setStructure={setStructure}
              parentIndex={id}
            ></CustomSection>
          </div>
        ))}
      </div>

      <div key={crypto.randomUUID()} id="displayPanel">
        <DisplayStructure structure={structures}></DisplayStructure>
      </div>
    </div>
  );
}

export default App;
