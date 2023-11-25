import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Information } from './Information';
import { Field } from './Field';
import GameLayout from './GameLayout';
import styles from '../../App.module.css';

const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));

	const handleCellClick = (index) => {
		if (!field[index] && !isGameEnded) {
			const newField = [...field];
			newField[index] = currentPlayer;
			setField(newField);

			if (checkWinner(newField, currentPlayer)) {
				setIsGameEnded(true);
			} else if (newField.every((cell) => cell !== '')) {
				setIsDraw(true);
				setIsGameEnded(true);
			} else {
				setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
			}
		}
	};

	const handleRestart = () => {
		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
		setField(Array(9).fill(''));
	};

	const checkWinner = (currentField, player) => {
		return WIN_PATTERNS.some((pattern) => pattern.every((index) => currentField[index] === player));
	};

	return (
		<GameLayout>
			<Information currentPlayer={currentPlayer} isGameEnded={isGameEnded} isDraw={isDraw} />
			<Field field={field} onCellClick={handleCellClick} />
			<div className={styles.restartButton}>
				<button onClick={handleRestart}>Начать заново</button>
			</div>
		</GameLayout>
	);
};

Game.propTypes = {
	currentPlayer: PropTypes.string,
	isGameEnded: PropTypes.bool,
	isDraw: PropTypes.bool,
};

export default Game;
