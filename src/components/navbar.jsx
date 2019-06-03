import React, { Component } from "react";

class NavBar extends Component {
  render() {
    return <h1>{this.props.counters.filter(c => c.value > 0).length} Items</h1>;
  }
}

export default NavBar;
