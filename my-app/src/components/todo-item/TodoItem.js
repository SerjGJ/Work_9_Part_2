import React from 'react';
import styles from '../../App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, editTodo } from '../../redux/actions';

export const TodoItem = ({ todo }) => {
	const editableTodoId = useSelector((state) => state.editableTodoId);
	const editedTodoText = useSelector((state) => state.editedTodoText);
	const dispatch = useDispatch();

	const startEdit = (id, text) => {
		dispatch({ type: 'SET_EDITABLE_TODO_ID', payload: id });
		dispatch({ type: 'SET_EDITED_TODO_TEXT', payload: text });
	};

	const saveEdit = () => {
		dispatch(editTodo(todo.id, editedTodoText));
		dispatch({ type: 'SET_EDITABLE_TODO_ID', payload: null });
		dispatch({ type: 'SET_EDITED_TODO_TEXT', payload: '' });
	};

	return (
		<li key={todo.id}>
			{editableTodoId === todo.id ? (
				<>
					<input
						type="text"
						value={editedTodoText}
						onChange={(event) => dispatch({ type: 'SET_EDITED_TODO_TEXT', payload: event.target.value })}
						className={styles.inputField}
					/>
					<button onClick={saveEdit} className={styles.showButton}>
						Сохранить
					</button>{' '}
				</>
			) : (
				<>
					{todo.text}
					<button onClick={() => dispatch(deleteTodo(todo.id))} className={styles.showButton}>
						Удалить
					</button>{' '}
					<button onClick={() => startEdit(todo.id, todo.text)} className={styles.showButton}>
						Изменить
					</button>{' '}
				</>
			)}
		</li>
	);
};
