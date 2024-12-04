import React, { useState } from "react";

const Player = ({ names, symbol, iSActive }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(names);

  const handleClick = () => {
    setIsEdit((prev) => !prev);
  };

  const handleOnChange = (e) => {
    setName(e.target.value);
  };

  return (
    <li className={iSActive ? "active" : undefined}>
      <span className="player">
        {isEdit ? (
          <input type="text" required value={name} onChange={handleOnChange} />
        ) : (
          <span className="player-name">{name}</span>
        )}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleClick}>{isEdit ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
};

export default Player;
