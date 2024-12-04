import React, { Children } from "react";

const Tabs = ({ buttons, children }) => {
  return (
    <>
      <menu>{buttons}</menu>
      <section>{children}</section>
    </>
  );
};

export default Tabs;
