import React, { Component } from "react";
import Tile from "./Tile";

class GameBoard extends Component {
  constructor(props) {
    super(props);

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
    this.shuffleCards(this.state.board);
  }

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
    const clickedTiles = board.filter(tile => tile.status === "isShowing");
    clickedTiles.length === 2 && this.checkForMatch(this.state.board, color);
  };

  checkForMatch = (board, color) => {
    const colors = board.filter(
      tile => tile.backgroundColor === color && tile.status !== "notShowing"
    );
    if (colors.length > 1) {
      const matchingTiles = this.state.board.filter(
        tile =>
          tile.backgroundColor === color && tile.status === "isShowing"
            ? (tile.status = "matched")
            : tile
      );
      this.setState({ board: matchingTiles });
    }

    setTimeout(() => {
      // set isShowing's to notShowing
      const showingTiles = board.filter(
        tile =>
          tile.status === "isShowing" ? (tile.status = "notShowing") : tile
      );
      this.setState({ board: showingTiles });
    }, 1000);
  };

  render() {
    const board = this.state.board.map(square => (
      <Tile
        id={square.id}
        key={square.id}
        backgroundColor={square.backgroundColor}
        status={square.status}
        revealTile={this.revealTile}
      />
    ));
    return <div className="board">{board}</div>;
  }
}

export default GameBoard;
