import { useState } from "react";
import { Structure } from "./structure";
import { SubSection } from "./practicalExperience";
export default function GeneralInformation({ id = 0 }) {
  const content = Structure[id].content;
  const [isActive, setIsActive] = useState(false);
  function changeState() {
    isActive ? setIsActive(false) : setIsActive(true);
  }
  return (
    <div className="GeneralInformation">
      <p>
        {"General Information"}{" "}
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
