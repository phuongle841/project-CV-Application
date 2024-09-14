import { useState } from "react";
import { Structure } from "./components/structure";

import "./App.css";
import CustomSection from "./components/CustomSection";

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

function DisplayStructure({ structure }) {
  return (
    <>
      {structure.map((section, index) => {
        return <DisplayPanel section={section} key={index}></DisplayPanel>;
      })}
    </>
  );
}

function DisplayPanel({ section }) {
  return (
    <div className="section">
      <h2 className="title">{section.title}</h2>
      {Object.keys(section.content).map((panel, j) => {
        const contents = section.content[j];
        return <DisplayContents contents={contents} key={j}></DisplayContents>;
      })}
    </div>
  );
}

function DisplayContents({ contents }) {
  return (
    <div className="content">
      {Object.keys(contents).map((content, id) => (
        <p key={id}>{contents[content]}</p>
      ))}
    </div>
  );
}

export default App;
