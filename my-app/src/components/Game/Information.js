// Information.js
import React from 'react';
import PropTypes from 'prop-types';
import InformationLayout from './InformationLayout';
import styles from '../../App.module.css';

export const Information = ({ currentPlayer, isGameEnded, isDraw }) => {
	let status = '';
	if (isDraw) {
		status = 'Ничья';
	} else if (isGameEnded) {
		status = `Победа: ${currentPlayer}`;
	} else {
		status = `Ходит: ${currentPlayer}`;
	}

	return (
		<InformationLayout>
			<div className={styles.information}>{status}</div>
		</InformationLayout>
	);
};

Information.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};
