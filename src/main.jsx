import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import EducationalExperience from "./components/educationalExperience";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App></App>
    <EducationalExperience></EducationalExperience>
  </StrictMode>
);
