import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    let counters = this.state.counters.map(c => {
      if (c.id == counter.id) {
        c.value++;
        return c;
      }
      return c;
    });
    this.setState({ counters });
  };

  handleReset = () => {
    let counters = this.state.counters.map(counter => {
      counter.value = 0;
      return counter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <React.Fragment>
        <NavBar counters={this.state.counters} />
        <Counters
          onDelete={this.handleDelete}
          onReset={this.handleReset}
          onIncrement={this.handleIncrement}
          counters={this.state.counters}
        />
      </React.Fragment>
    );
  }
}

export default App;
