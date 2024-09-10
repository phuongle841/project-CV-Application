import { useState } from "react";
import { Structure } from "./components/structure";
import "./App.css";

function App() {
  const content = Structure[1].content[0];
  const title = Structure[1].title;

  const [defaultData, setDefaultData] = useState(content);
  const [isActive, setIsActive] = useState(false);

  return (
    <div id={title}>
      <h3>{title}</h3>
      <CustomSection list={Structure[1].content}></CustomSection>
    </div>
  );
}
function CustomSection({ list }) {
  // is open is for differ education experience {use number}
  const [isOpen, setIsOpen] = useState(true);
  const [defaultData, setDefaultData] = useState(list);
  console.log(defaultData);
  return (
    <div>
      {list.map((content, index) => {
        return (
          <div key={index}>
            <p>{index} content</p>
            <ModifyPanel
              childId={index}
              defaultData={defaultData}
              hook={setDefaultData}
            ></ModifyPanel>
            <TitlePanel childId={index} defaultData={defaultData}></TitlePanel>
          </div>
        );
      })}
    </div>
  );
}

function TitlePanel({ childId, defaultData }) {
  const contents = defaultData[childId];
  return (
    <div>
      {Object.keys(contents).map((content, id) => {
        return <p key={id}>{contents[content]}</p>;
      })}
    </div>
  );
}

function ModifyPanel({ childId, defaultData, hook }) {
  const contents = defaultData[childId];
  return (
    <div>
      {Object.keys(contents).map((content, id) => {
        return (
          <input
            key={id}
            type="text"
            value={contents[content]}
            onChange={(e) => {
              console.log(content);

              const newObject = {
                ...defaultData[childId],
                [content]: e.target.value,
              };

              const newData = [...defaultData.toSpliced(childId, 1, newObject)];

              console.log(newData);
              hook(newData);

              // const newObject = { ...contents, [`${content}`]: e.target.value };
              // hook(newObject);
            }}
          />
        );
      })}
    </div>
  );
}

export default App;
