import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import axios from "axios";

class App extends Component {
  constructor() {
    super();

    this.state = {
      lebron: ""
    }
  }

  componentDidMount() {
    axios.get("https://www.balldontlie.io/api/v1/players/237").then(res => {
      this.setState ({
        lebron: res.data
      })
    })
  }

  render() {
    return (
      <div className = "App">
        <h1> First Name: {this.state.lebron.first_name} </h1>
        <h1> Last Name: {this.state.lebron.last_name} </h1>
        <h1> Position: {this.state.lebron.position} </h1>
        <h1> Weight: {this.state.lebron.weight_pounds} </h1>

      </div>
    )
  }
}

export default App;
