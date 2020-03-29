import React from "react";

const Civilization = ({ civ }: any) => {
  return (
    <div className="civ">
      <input type="checkbox" id={civ} />
      <label htmlFor={civ}>{civ}</label>
    </div>
  );
};

export default Civilization;
