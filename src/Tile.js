import React from "react";
import PropTypes from "prop-types";

const Tile = props => {
  const style = {
    backgroundColor: ""
  };
  if (props.status === "notShowing") {
    style.backgroundColor = "gray";
  } else {
    style.backgroundColor = props.backgroundColor;
  }

  return (
    <div
      className="tile"
      id={props.id}
      style={style}
      onClick={() => props.revealTile(props.id, props.backgroundColor)}
    />
  );
};

Tile.propTypes = {
  id: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  revealTile: PropTypes.func.isRequired
};

export default Tile;
