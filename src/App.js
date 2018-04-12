import React, { Component } from "react";
import Header from "./Header";
import GameBoard from "./GameBoard";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // tile status sets its background color
    // notShowing: grey
    // isShowing: backgroundColor
    // matched: backgroundColor
    this.state = {
      board: [
        { id: 0, status: "notShowing", backgroundColor: "blue" },
        { id: 1, status: "notShowing", backgroundColor: "blue" },
        { id: 2, status: "notShowing", backgroundColor: "orange" },
        { id: 3, status: "notShowing", backgroundColor: "orange" },
        { id: 4, status: "notShowing", backgroundColor: "yellow" },
        { id: 5, status: "notShowing", backgroundColor: "yellow" },
        { id: 6, status: "notShowing", backgroundColor: "red" },
        { id: 7, status: "notShowing", backgroundColor: "red" },
        { id: 8, status: "notShowing", backgroundColor: "green" },
        { id: 9, status: "notShowing", backgroundColor: "green" },
        { id: 10, status: "notShowing", backgroundColor: "purple" },
        { id: 11, status: "notShowing", backgroundColor: "purple" },
        { id: 12, status: "notShowing", backgroundColor: "brown" },
        { id: 13, status: "notShowing", backgroundColor: "brown" },
        { id: 14, status: "notShowing", backgroundColor: "cyan" },
        { id: 15, status: "notShowing", backgroundColor: "cyan" }
      ]
    };
  }

  componentDidMount() {
    this.initializeBoard();
  }

  initializeBoard = () => {
    const { board } = this.state;
    board.map(tile => (tile.status = "notShowing"));
    this.shuffleCards(board);
  };

  shuffleCards = board => {
    for (let i = board.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [board[i], board[j]] = [board[j], board[i]];
    }
    this.setState({ board });
  };

  revealTile = (id, color) => {
    const board = this.state.board.map(square => {
      if (square.id === id && square.status === "notShowing") {
        square.status = "isShowing";
      }
      return square;
    });
    this.setState({ board });
    // counts number of clicked tiles
    const clickedTiles = board.filter(tile => tile.status === "isShowing");
    // when 2 tiles have been clicked check for a match
    clickedTiles.length === 2 && this.checkForMatch(board, color);
  };

  checkForMatch = (board, color) => {
    // find all tiles with the same color that have been clicked
    const matchingColors = board.filter(
      tile => tile.backgroundColor === color && tile.status !== "notShowing"
    );
    // 2 tiles of the same color have been clicked
    // so set those tiles statuses to "matched"
    if (matchingColors.length > 1) {
      const setMatchingTiles = this.state.board.filter(
        tile =>
          tile.backgroundColor === color && tile.status === "isShowing"
            ? (tile.status = "matched")
            : tile
      );
      this.setState({ board: setMatchingTiles });
    }
    // otherwise turn the clicked tiles back to grey after 1s
    setTimeout(() => {
      const newBoard = board.filter(
        tile =>
          tile.status === "isShowing" ? (tile.status = "notShowing") : tile
      );
      this.setState({ board: newBoard });
    }, 1000);
  };

  render() {
    return (
      <div className="App">
        <Header initializeBoard={this.initializeBoard} />
        <GameBoard
          board={this.state.board}
          revealTile={this.revealTile}
          shuffleCards={this.shuffleCards}
        />
      </div>
    );
  }
}

export default App;
