import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div className="App">
        <h3>Search by first name: </h3>
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
