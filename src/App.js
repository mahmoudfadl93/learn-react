import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import UserItem from "./components/users/UserItem"
//import React, { Component, Fragment } from "react";
import "./App.css";

class App extends Component {
  render() {
    //8. Intro To JSX & Fragments
    // return (
    //   <Fragment>
    //     <h1>Hello From React</h1>
    //   </Fragment>
    // );
    // return (
    //   <div className="App">
    //     <h1>Hello From {name}</h1>
    //   </div>
    // );

    // return React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hello From React")
    // );

    // 9. Expressions & Conditionals In JSX

    // const name = "mahmoud";
    // const loading = false;
    // const showName = false;
    // return (
    //   <div className="App">
    //     {loading ? (
    //       <h4>loading.....</h4>
    //     ) : (
    //       <h1>Hello From {showName && name}</h1>
    //     )}
    //   </div>
    // );

    return(
      <div className="App">
        <Navbar title="Github Finder" icon="fab fa-github"/>
        <UserItem />
      </div>
    );
  }
}

export default App;
