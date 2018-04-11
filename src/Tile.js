import React from "react";
import PropTypes from "prop-types";

function Tile(props) {
  const { id, backgroundColor, status, revealTile } = props;
  const style = {
    backgroundColor: status === "notShowing" ? "gray" : backgroundColor
  };

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
