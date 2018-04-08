import React, { Component } from "react";
import Tile from "./Tile";
import PropTypes from "prop-types";

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
        { id: 15, status: "isShowing", backgroundColor: "cyan" }
      ]
    };
  }

  componentDidMount() {
    this.shuffleCards(this.state.board);
  }

  shuffleCards = array => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    this.setState({ board: array });
  };

  revealTile = id => {
    const board = this.state.board.map(square => {
      if (square.id === id && square.status === "notShowing") {
        square.status = "isShowing";
      }
    });

    this.setState({ ...board });
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

GameBoard.propTypes = {};

export default GameBoard;
