import React, { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);

	const numClick = (number) => {
		if (isResult) {
			setOperand1(number);
			setIsResult(false);
		} else {
			if (operator) {
				setOperand2(operand2 + number);
			} else {
				setOperand1(operand1 + number);
			}
		}
	};

	const operatorClick = (operation) => {
		if (operation === 'C') {
			setOperand1('');
			setOperand2('');
			setOperator('');
			setIsResult(false);
		} else if (operation === '=') {
			if (operator && operand2) {
				let result;
				if (operator === '+') {
					result = Number(operand1) + Number(operand2);
				} else if (operator === '-') {
					result = Number(operand1) - Number(operand2);
				}
				setOperand1(result.toString());
				setOperator('');
				setOperand2('');
				setIsResult(true);
			}
		} else {
			setOperator(operation);
			setIsResult(false);
		}
	};

	return (
		<div className={styles.calc}>
			<div className={`${styles.display} ${isResult ? styles.result : ''}`}>
				{operand1} {operator} {operand2}
			</div>
			{NUMS.map((num) => (
				<div key={num} className={styles.button} onClick={() => numClick(num)}>
					{num}
				</div>
			))}
			{['+', '-', '=', 'C'].map((operation) => (
				<div key={operation} className={styles.button} onClick={() => operatorClick(operation)}>
					{operation}
				</div>
			))}
		</div>
	);
};
