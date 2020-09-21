import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import Search from "./components/users/Search";
import axios from "axios";

//import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    this.setState({
      loading: false,
      users: res.data.items,
    });
  };

  clearUsers = async () => {
    this.setState({
      users: [],
      loading: false,
    });
  };

  render() {
    const { users, loading } = this.state;

    return (
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github" />
        <div className="container">
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />{" "}
          <Users loading={loading} users={users} />{" "}
        </div>{" "}
      </div>
    );
  }
}

export default App;
