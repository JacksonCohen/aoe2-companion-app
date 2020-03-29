import React, { Component } from "react";
import Civilizations from "../Civilizations/";
import Civilization from "../../interfaces/Civilization.interface";

class App extends Component<{}, { civilizations: Civilization[] }> {
  constructor(props: any) {
    super(props);

    this.state = {
      civilizations: []
    };
  }

  componentDidMount() {
    fetch(
      `https://cors-anywhere.herokuapp.com/https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`
    )
      .then(res => res.json())
      .then(({ civilizations }) => {
        this.setState(
          {
            civilizations
          },
          () => console.log(this.state)
        );
      });
  }

  render() {
    return (
      <div>
        {this.state.civilizations && (
          <Civilizations data={this.state.civilizations} />
        )}
      </div>
    );
  }
}

export default App;
