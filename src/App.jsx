import { useState } from "react";
import { Structure } from "./components/structure";
import "./App.css";

function App() {
  const content = Structure[1].content;
  const [defaultData, setDefaultData] = useState(content);

  return (
    <>
      <ModifyPanel contents={defaultData} hook={setDefaultData}></ModifyPanel>
      <div id="content" style={{ border: "2px solid black" }}>
        <ContentPanel contents={defaultData}></ContentPanel>
        <TitlePanel contents={defaultData}></TitlePanel>
      </div>
    </>
  );
}

function TitlePanel({ contents }) {
  return (
    <div>
      {Object.keys(contents).map((content, id) => {
        return <p key={id}>{contents[content]}</p>;
      })}
    </div>
  );
}
function ContentPanel({ contents }) {
  return (
    <div>
      {Object.keys(contents).map((content, id) => {
        return <p key={id}>{content}</p>;
      })}
    </div>
  );
}
function ModifyPanel({ contents, hook }) {
  return (
    <div>
      {Object.keys(contents).map((content, id) => {
        return (
          <input
            key={id}
            type="text"
            value={contents[content]}
            onChange={(e) => {
              const newObject = { ...contents, [`${content}`]: e.target.value };
              hook(newObject);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
