import React from "react";

const Civilization = ({
  id,
  name,
  coat,
  handleClick
}: {
  id: number;
  name: string;
  coat: string;
  handleClick: Function;
}) => {
  return (
    <div className="civilization">
      <input type="checkbox" id={name} onClick={() => handleClick(id)} />
      <label htmlFor={name}>
        <img src={coat} alt={`${name} logo`} />
        {name}
      </label>
    </div>
  );
};

export default Civilization;
