import React, { Component } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      displayedUsers: [],
    };
  }

  componentDidMount() {
    fetch("https://randomuser.me/api/?results=50")
      .then((res) => res.json())
      .then((results) => {
        this.setState({
          users: results.results,
          displayedUsers: results.results,
        });
      });
  }

  sortUsers = (categorya, categoryb) => {
    const displayedUsers = this.state.users.sort((a, b) =>
      a[categorya][categoryb] > b[categorya][categoryb] ? 1 : -1
    );
    this.setState({ displayedUsers });
  };

    // TODO: Create search box and filter feature.

  render() {
    return (
      <div className="App">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => this.sortUsers("name", "first")}>First (sort)</th>
              <th onClick={() => this.sortUsers("name", "last")}>Last (sort)</th>
              <th onClick={() => this.sortUsers("location", "country")}>
                Country (sort)
              </th>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedUsers.map((user) => {
              return (
                <tr>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.location.country}</td>
                  <td>{user.login.username}</td>
                  <td>{user.email}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;
