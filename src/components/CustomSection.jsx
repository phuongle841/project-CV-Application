import { useState } from "react";
import ModifyPanel from "./ModifyPanel";
import AddPanel from "./AddPanel";

export default function CustomSection({
  list,
  structure,
  setStructure,
  parentIndex,
}) {
  // is open is for differ education experience {use number}
  const [isOpen, setIsOpen] = useState(1);
  const [defaultData, setDefaultData] = useState(list);

  function onChangeStructure(content) {
    structure[parentIndex].content = content;
    let newStructure = [...structure];
    setStructure(newStructure);
  }
  return (
    <div>
      {defaultData.map((content, index) => {
        return (
          <div key={index}>
            <div>
              <ModifyPanel
                childId={index}
                defaultData={defaultData}
                hook={setDefaultData}
                onChangeStructure={onChangeStructure}
              ></ModifyPanel>
              <AddPanel
                defaultData={defaultData}
                hook={setDefaultData}
                onChangeStructure={onChangeStructure}
                parentIndex={parentIndex}
              ></AddPanel>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function DisplayPanel({ defaultData }) {
  const contents = defaultData[childId];
  return (
    <div>
      {Object.keys(contents).map((content, id) => {
        return <p key={id}>{contents[content]}</p>;
      })}
    </div>
  );
}
