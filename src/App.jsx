import { useState } from "react";
import { Structure } from "./components/structure";

import "./App.css";
import CustomSection from "./components/CustomSection";

function App() {
  const [structure, setStructure] = useState(Structure);
  return (
    <div id="container">
      <div>
        <h3>{Structure[0].title}</h3>
        <CustomSection
          list={Structure[0].content}
          structure={structure}
          setStructure={setStructure}
          parentIndex={0}
        ></CustomSection>
        <CustomSection
          list={Structure[1].content}
          structure={structure}
          setStructure={setStructure}
          parentIndex={1}
        ></CustomSection>
      </div>

      <div>
        <DisplayStructure structure={structure}></DisplayStructure>
      </div>
    </div>
  );
}

function DisplayStructure({ structure }) {
  return (
    <div>
      {structure.map((section, index) => {
        return (
          <div key={index}>
            <DisplayPanel section={section}></DisplayPanel>
          </div>
        );
      })}
    </div>
  );
}

function DisplayPanel({ section }) {
  return (
    <div className="section">
      {section.title}
      {Object.keys(section.content).map((panel, j) => {
        const contents = section.content[j];

        return <DisplayContents contents={contents} key={j}></DisplayContents>;
      })}
    </div>
  );
}

function DisplayContents({ contents }) {
  console.log(contents);

  return (
    <>
      {Object.keys(contents).map((content, id) => (
        <div key={id}>
          <p>
            {content}:{contents[content]}
          </p>
        </div>
      ))}
    </>
  );
}

export default App;
