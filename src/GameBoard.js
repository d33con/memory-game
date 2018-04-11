import React from "react";
import PropTypes from "prop-types";
import Tile from "./Tile";

function GameBoard(props) {
  const { board, revealTile } = props;
  const gameBoard = board.map(square => (
    <Tile
      id={square.id}
      key={square.id}
      backgroundColor={square.backgroundColor}
      status={square.status}
      revealTile={revealTile}
    />
  ));
  return <div className="board">{gameBoard}</div>;
}

GameBoard.propTypes = {
  board: PropTypes.array.isRequired,
  revealTile: PropTypes.func.isRequired
};

export default GameBoard;
