export default function AddPanel({ defaultData, hook, onChangeStructure }) {
  const sampleIndex = 0;
  function onAdd() {
    const newObject = { ...defaultData[sampleIndex] };
    whiteningNewObject(newObject);
    defaultData.push(newObject);
    const newData = [...defaultData];
    hook(newData);
    onChangeStructure(newData);

    function whiteningNewObject(newObject) {
      Object.keys(newObject).map((attribute) => {
        newObject[attribute] = "new data";
      });
    }
  }
  return (
    <div>
      <button onClick={onAdd}>add more panel</button>
    </div>
  );
}
