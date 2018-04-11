import React from "react";
import PropTypes from "prop-types";

function Header(props) {
  const { initializeBoard } = props;
  return (
    <header>
      <div>Memory Game</div>
      <div className="btn" onClick={initializeBoard}>
        New Game
      </div>
    </header>
  );
}

Header.propTypes = {
  initializeBoard: PropTypes.func.isRequired
};

export default Header;
