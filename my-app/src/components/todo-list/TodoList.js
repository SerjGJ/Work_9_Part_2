import React from 'react';
import styles from '../../App.module.css';
import { TodoItem } from '../todo-item/TodoItem';
import { useSelector } from 'react-redux';

export const TodoList = () => {
	const todos = useSelector((state) => state.todos);
	const searchTerm = useSelector((state) => state.searchTerm);
	const sortByAlphabet = useSelector((state) => state.sortByAlphabet);

	let filteredAndSortedTodos = [...todos];

	if (searchTerm.trim() !== '') {
		filteredAndSortedTodos = filteredAndSortedTodos.filter((todo) => todo.text.toLowerCase().includes(searchTerm.toLowerCase()));
	}

	if (sortByAlphabet) {
		filteredAndSortedTodos = filteredAndSortedTodos.sort((a, b) => {
			const textA = a.text.toLowerCase();
			const textB = b.text.toLowerCase();
			return textA.localeCompare(textB);
		});
	}

	return (
		<ul className={styles.todoList}>
			{filteredAndSortedTodos.map((todo) => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	);
};
