import { useState } from "react";
export default function PracticalExperience() {
  const [companyName, setCompanyName] = useState("DAT HUNG");
  const [positionTitle, setPositionTitle] = useState("Software engineer");
  const [mainResponsibilities, setMainResponsibilities] = useState(
    "front-end developer"
  );
  const [isActive, setIsActive] = useState(true);

  function changeState() {
    isActive ? setIsActive(false) : setIsActive(true);
  }
  return (
    <div className="GeneralInformation">
      <p>
        {"General Information"}
        <button onClick={changeState}> {isActive ? "save" : "edit"}</button>
      </p>
      <SubSection
        title={"companyName"}
        content={companyName}
        isActive={isActive}
        hook={setCompanyName}
      ></SubSection>

      <SubSection
        title={"positionTitle"}
        content={positionTitle}
        isActive={isActive}
        hook={setPositionTitle}
      ></SubSection>

      <SubSection
        title={"mainResponsibilities"}
        content={mainResponsibilities}
        isActive={isActive}
        hook={setMainResponsibilities}
      ></SubSection>
    </div>
  );
}

function SubSection({ title, content, isActive, hook }) {
  return (
    <div className={title}>
      <p>{title} </p>{" "}
      <span>
        {isActive ? (
          <input
            type="text"
            name={title}
            value={content}
            onChange={(e) => {
              hook(e.target.value);
            }}
          />
        ) : (
          <span>{content}</span>
        )}
      </span>
    </div>
  );
}
