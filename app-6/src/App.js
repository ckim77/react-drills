import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDo from "./ToDo"

class App extends Component {
  constructor () {
    super();

    this.state = {
      list: [],
      input: ""
    }
    
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleInputChange(value) {
    this.setState ({ input: value });
  }

  handleAddTask() {
    this.setState ({
      list: [ ... this.state.list, this.state.input],
      input: ""
    })
  }

  render() {
    let list = this.state.list.map(el => {
      return <ToDo task = {el} />;
    })

    return (
      <div className = "App">
        <h1> My To-Do List: </h1>

        <div>
          <input value = {this.state.input} placeholder = "Enter Task" onChange = {el => this.handleInputChange(el.target.value)} />
          <button onClick = {this.handleAddTask}>Add</button>
        </div>

        <br />
        {list}


      </div>
    )
  }

}

export default App;
