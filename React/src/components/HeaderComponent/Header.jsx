import React from "react";
import "./Header.css";

function randomGenerate(max) {
  return Math.floor(Math.random() * max);
}

const corewords = ["Fundamental", "Core", "Crucial"];

const Header = () => {
  const randomWord = corewords[randomGenerate(corewords.length)];
  return (
    <div>
      <h1 className="HeaderHeading">React Essentials</h1>
      <p>
        {randomWord} Concepts you will need for almost any app you are going to
        build!
      </p>
    </div>
  );
};

export default Header;
