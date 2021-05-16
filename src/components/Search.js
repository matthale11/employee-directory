import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div className="App">
        <h2>Search</h2>
        <input
          type="text"
          value= {this.props.value}
          onChange={this.props.handleChange}
        ></input>
      </div>
    );
  }
}

export default Search;
