import React from "react";
import "./CoreConcepts.css";

const CoreConcept = ({ image, title, description }) => {
  return (
    <>
      <div className="core-container">
        <img src={image} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </>
  );
};

export default CoreConcept;
