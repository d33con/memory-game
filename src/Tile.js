import React from "react";
import PropTypes from "prop-types";

function Tile(props) {
  const { id, backgroundColor, status, revealTile } = props;
  const style = {
    backgroundColor: ""
  };
  if (status === "notShowing") {
    style.backgroundColor = "gray";
  } else {
    style.backgroundColor = backgroundColor;
  }

  return (
    <div
      className="tile"
      id={id}
      style={style}
      onClick={() => revealTile(id, backgroundColor)}
    />
  );
}

Tile.propTypes = {
  id: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  revealTile: PropTypes.func.isRequired
};

export default Tile;
