import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  return (
    <header>
      <div>Memory Game</div>
      <div className="btn" onClick={props.initializeBoard}>
        New Game
      </div>
    </header>
  );
};

Header.propTypes = {
  initializeBoard: PropTypes.func.isRequired
};

export default Header;
