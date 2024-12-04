import React from "react";
import { useState } from "react";
import TabButton from "../TabButtonComponent/TabButton";
import { DESCRIPTIONS } from "../../data";
import Tabs from "../TabButtonComponent/Tabs";

const Examples = () => {
  const [selectedTab, setSelectedTab] = useState(null);
  function handleSelect(selectedButton) {
    setSelectedTab(selectedButton);
  }
  return (
    <div className="example-container">
      <h1 className="heading">Examples</h1>
      <Tabs
        buttons={
          <div>
            <ul className="button-contianer">
              <TabButton
                isSelected={selectedTab === "components"}
                onClick={() => handleSelect("components")}
              >
                Components
              </TabButton>
              <TabButton
                isSelected={selectedTab === "jsx"}
                onClick={() => handleSelect("jsx")}
              >
                JSX
              </TabButton>
              <TabButton
                isSelected={selectedTab === "props"}
                onClick={() => handleSelect("props")}
              >
                Props
              </TabButton>
              <TabButton
                isSelected={selectedTab === "state"}
                onClick={() => handleSelect("state")}
              >
                State
              </TabButton>
            </ul>
          </div>
        }
      >
        {selectedTab && (
          <div className="desc-container">
            <p className="description">{DESCRIPTIONS[selectedTab]}</p>
          </div>
        )}
      </Tabs>
    </div>
  );
};

export default Examples;
