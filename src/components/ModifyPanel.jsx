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
    <div className="modifyContent">
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
          onChangeStructure(constData);
          setIsActive(false);
        }
        function handleDelete(params) {
          const newData = [...defaultData.toSpliced(childId, 1)];
          hook(newData);
          onChangeStructure(newData);
        }
        return (
          <>
            {id === 0 && !isActive && (
              <span onClick={handleActive}>{contents[content]}</span>
            )}
            {isActive && (
              <div>
                <span key={id}>{content}: </span>
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
                <button onClick={handleDelete}>delete</button>
              </div>
            )}
          </>
        );
      })}
    </div>
  );
}
