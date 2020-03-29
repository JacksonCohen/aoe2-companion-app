import React, { Component, useEffect, useState } from "react";
import Civilizations from "../Civilizations/";
import Civilization from "../../interfaces/Civilization.interface";

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
      <Civilizations data={civilizations} />
    </div>
  );
};

export default App;
