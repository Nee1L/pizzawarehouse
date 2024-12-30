import React from "react";
import SpecialistCard from "../specialistsCard/SpecialistCard";

import "./specialistsList.css";

const SpecialistsList = ({ specialists }) => (
  <div className="specialists-list">
    {specialists.map((specialist, index) => (
      <SpecialistCard key={index} specialists={specialist} />
    ))}
  </div>
);

export default SpecialistsList;
