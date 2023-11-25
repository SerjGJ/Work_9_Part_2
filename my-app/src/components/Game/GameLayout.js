import React from 'react';
import PropTypes from 'prop-types';

const GameLayout = ({ children }) => {
	return <div className="game-layout">{children}</div>;
};

GameLayout.propTypes = {
	children: PropTypes.node,
};

export default GameLayout;
