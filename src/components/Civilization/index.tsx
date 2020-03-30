import React from "react";
import "./_Civilization.scss";

const Civilization = ({
  id,
  name,
  coat,
  checked,
  handleChange
}: {
  id: number;
  name: string;
  coat: string;
  checked: boolean;
  handleChange: Function;
}) => {
  return (
    <div className="civilization col-2">
      <input
        className="checkbox"
        type="checkbox"
        checked={checked}
        id={name}
        onChange={() => handleChange(id)}
      />
      <span className="checkmark"></span>
      <label htmlFor={name}>
        <img className="" src={coat} alt={`${name} logo`} />
        {name}
      </label>
    </div>
  );
};

export default Civilization;
