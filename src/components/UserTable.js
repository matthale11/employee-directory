import React, { Component } from "react";
import Table from "react-bootstrap/Table";

class UserTable extends Component {
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

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
              <th>Email</th>
              <th>Country</th>
            </tr>
          </thead>
          <tbody>
            {this.state.displayedUsers.map((user) => {
              return (
                <tr>
                  <td>{user.name.first}</td>
                  <td>{user.name.last}</td>
                  <td>{user.login.username}</td>
                  <td>{user.email}</td>
                  <td>{user.location.country}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default UserTable;
