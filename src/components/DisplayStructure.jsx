export default function DisplayStructure({ structure }) {
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
    <div className="section" id={section.title}>
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
