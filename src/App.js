import React, { Component } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <GameBoard />
      </div>
    );
  }
}

export default App;