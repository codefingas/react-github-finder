import React from "react";
import "./App.css";
import Navbar from "./layout/Navbar";
import UserItem from "./Users/UsersItem"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar icon="fab fa-github" title="Navbar" />
        <UserItem />
      </div>
    );
  }
}

export default App;
