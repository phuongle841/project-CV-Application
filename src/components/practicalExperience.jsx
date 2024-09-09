import { useState } from "react";
import { Structure } from "./structure";
export default function PracticalExperience({ id = 2 }) {
  const content = Structure[id].content;
  const [isActive, setIsActive] = useState(false);
  function changeState() {
    isActive ? setIsActive(false) : setIsActive(true);
  }
  return (
    <div className="GeneralInformation">
      <p>
        {"General Information"}
        <button onClick={changeState}> {isActive ? "save" : "edit"}</button>
      </p>
      {Object.keys(content).map((title, id) => {
        return (
          <SubSection
            key={title}
            title={title}
            content={content[title]}
            isActive={isActive}
          ></SubSection>
        );
      })}
    </div>
  );
}

export function SubSection({ title, content, isActive }) {
  const [newContent, SetNewContent] = useState(content);
  return (
    <div>
      <>
        {isActive ? (
          <p>
            {title}
            {": "}
          </p>
        ) : (
          <></>
        )}
      </>
      {isActive ? (
        <input
          type="text"
          value={newContent}
          onChange={(e) => {
            SetNewContent(e.target.value);
          }}
        />
      ) : (
        <span>{newContent}</span>
      )}
    </div>
  );
}
