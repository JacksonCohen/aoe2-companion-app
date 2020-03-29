import React, { Component } from "react";
import Civilizations from "../Civilizations/";

class App extends Component {
  constructor(props: any) {
    super(props);

    this.state = {};
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
        <Civilizations data={this.state.civilizations} />
      </div>
    );
  }
}

export default App;
