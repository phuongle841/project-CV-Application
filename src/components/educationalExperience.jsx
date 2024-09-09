import { useState } from "react";

export default function EducationalExperience() {
  const [schoolName, setSchoolName] = useState("International University");
  const [Major, setMajor] = useState("Computer Science");
  const [dateStudy, setDateStudy] = useState("14/08/2020");
  return (
    <div className="EducationExperience">
      <p>Education Experience</p>
      <div className="schoolName">
        <p>school Name: </p>
        <p>{schoolName}</p>
      </div>
      <div className="Major">
        <p>Major: </p>
        <p>{Major}</p>
      </div>
      <div className="dateStudy">
        <p>date Study: </p>
        <p>{dateStudy}</p>
      </div>
    </div>
  );
}
