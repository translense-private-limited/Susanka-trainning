import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
    >
      {children}
    </button>
  );
};

export default Button;
