import React from "react";
import { CORE_CONCEPTS } from "../../data";
import CoreConcept from "./CoreConcept";

const CoreConcepts = () => {
  return (
    <div>
      <ul className="core">
        {CORE_CONCEPTS.map((item, index) => (
          <CoreConcept key={index} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default CoreConcepts;
