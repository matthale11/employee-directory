import React, { Component } from "react";
import "./App.css";
import Table from "react-bootstrap/Table";
import Search from "./components/Search";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      displayedUsers: [],
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterNames = this.filterNames.bind(this);
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

  filterNames = () => {
    const displayedUsers = this.state.users.filter((user) =>
      user.name.first.toLowerCase().includes(this.state.value.toLowerCase())
    );
    this.setState({ displayedUsers });
  };

  handleChange(event) {
    this.setState({ value: event.target.value }, () => {
      this.filterNames();
    });
  }

  render() {
    return (
      <div className="App">
        <Search value={this.state.value} handleChange={this.handleChange} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th onClick={() => this.sortUsers("name", "first")}>
                First (sort)
              </th>
              <th onClick={() => this.sortUsers("name", "last")}>
                Last (sort)
              </th>
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
