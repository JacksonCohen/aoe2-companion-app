import React, { useEffect, useState } from "react";
import CivilizationsList from "../CivilizationsList";

const App = () => {
  const [civilizations, setCivilizations] = useState([]);

  useEffect(() => {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`
    )
      .then(res => res.json())
      .then(({ civilizations }) => {
        setCivilizations(civilizations);
      });
  });

  return (
    <div>
      <CivilizationsList data={civilizations} />
    </div>
  );
};

export default App;
