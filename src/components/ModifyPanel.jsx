import { useState } from "react";

export default function ModifyPanel({
  childId,
  defaultData,
  hook,
  onChangeStructure = { onChangeStructure },
}) {
  const contents = defaultData[childId];
  const [constData, setConstData] = useState(defaultData);

  const [isActive, setIsActive] = useState(false);

  return (
    <div style={{ padding: "10px" }}>
      {Object.keys(contents).map((content, id) => {
        function handleActive() {
          isActive ? setIsActive(false) : setIsActive(true);
        }
        function swapContentCurrentChild(value) {
          const newObject = {
            ...defaultData[childId],
            [content]: value,
          };
          const newData = [...defaultData.toSpliced(childId, 1, newObject)];
          hook(newData);
          onChangeStructure(newData);
        }
        function handleInput(e) {
          swapContentCurrentChild(e.target.value);
        }
        function handleSave() {
          setConstData(defaultData);
          setIsActive(false);
        }
        function handleCancel() {
          hook(constData);
          setIsActive(false);
        }

        return (
          <div key={id} className="modifySection">
            {id === 0 && !isActive && (
              <button onClick={handleActive}>{`${contents[content]}`}</button>
            )}
            {isActive && (
              <div>
                <input
                  type="text"
                  value={contents[content]}
                  onChange={handleInput}
                />
              </div>
            )}
            {id === Object.keys(contents).length - 1 && isActive && (
              <div>
                <button onClick={handleSave}>save</button>
                <button onClick={handleCancel}>cancel</button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
