import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import GeneralInformation from "./components/generalInformation";
import EducationalExperience from "./components/educationalExperience";
import PracticalExperience from "./components/practicalExperience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GeneralInformation></GeneralInformation>
    <EducationalExperience></EducationalExperience>
    <PracticalExperience></PracticalExperience>
  </StrictMode>
);
