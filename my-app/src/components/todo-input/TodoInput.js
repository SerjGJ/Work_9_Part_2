import React, { useState } from 'react';
import styles from '../../App.module.css';
import { useDispatch } from 'react-redux';
import { addTodo, setSortByAlphabet, searchTodo } from '../../redux/actions';

export const TodoInput = () => {
	const [newTodo, setNewTodo] = useState('');
	const [searchTerm, setSearchTermLocal] = useState('');
	const dispatch = useDispatch();

	const handleAddTodo = () => {
		dispatch(addTodo(newTodo));
		setNewTodo('');
	};

	const handleSearch = () => {
		dispatch(searchTodo(searchTerm.toLowerCase()));
	};

	return (
		<div className={styles.inputContainer}>
			<input type="text" value={newTodo} onChange={(event) => setNewTodo(event.target.value)} placeholder="Новая задача" className={styles.inputField} />
			<button onClick={handleAddTodo} className={styles.showButton}>
				Добавить
			</button>{' '}
			<input
				type="text"
				value={searchTerm}
				onChange={(event) => setSearchTermLocal(event.target.value)}
				placeholder="Поиск"
				className={styles.inputField}
			/>
			<button onClick={handleSearch} className={styles.showButton}>
				Поиск
			</button>{' '}
			<button onClick={() => dispatch(setSortByAlphabet())} className={styles.showButton}>
				Сортировать по алфавиту
			</button>{' '}
		</div>
	);
};
