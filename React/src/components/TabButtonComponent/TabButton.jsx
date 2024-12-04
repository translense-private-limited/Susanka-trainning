import React from "react";
import "./TabButton.css";

const TabButton = ({ children, isSelected, onClick }) => {
  return (
    <li className="menu" onClick={onClick}>
      <button>{children}</button>
    </li>
  );
};

export default TabButton;
