import { useState } from "react";
import { Structure } from "./structure";
import { SubSection } from "./practicalExperience";
export default function EducationalExperience({ id = 1 }) {
  const content = Structure[id].content;
  const [isActive, setIsActive] = useState(false);
  function changeState() {
    isActive ? setIsActive(false) : setIsActive(true);
  }
  return (
    <div className="EducationExperience">
      <p>
        {"Education Experience"}{" "}
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
