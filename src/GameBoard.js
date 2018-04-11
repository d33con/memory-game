import React, { Component } from "react";
import Tile from "./Tile";

class GameBoard extends Component {
  componentDidMount() {
    this.props.shuffleCards(this.props.board);
  }

  render() {
    const board = this.props.board.map(square => (
      <Tile
        id={square.id}
        key={square.id}
        backgroundColor={square.backgroundColor}
        status={square.status}
        revealTile={this.props.revealTile}
      />
    ));
    return <div className="board">{board}</div>;
  }
}

export default GameBoard;
