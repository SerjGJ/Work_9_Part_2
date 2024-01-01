import React from 'react';
import styles from './App.module.css';
import { TodoInput } from './components/todo-input/TodoInput';
import { TodoList } from './components/todo-list/TodoList';
import { AppProvider, useAppContext } from './components/AppTodoContext';

export const App = () => {
	return (
		<AppProvider>
			<AppContent />
		</AppProvider>
	);
};

const AppContent = () => {
	const {
		newTodo,
		setNewTodo,
		setSearchTerm,
		handleSearch,
		setSortByAlphabet,
		sortedTodos,
		editableTodoId,
		editedTodoText,
		deleteTodo,
		startEdit,
		saveEdit,
		setEditedTodoText,
	} = useAppContext();

	return (
		<div className={styles.app}>
			<h1 className={styles.title}>Список задач</h1>
			<TodoInput
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				setSearchTerm={setSearchTerm}
				handleSearch={handleSearch}
				setSortByAlphabet={() => setSortByAlphabet((currentSort) => !currentSort)}
			/>
			<TodoList
				sortedTodos={sortedTodos}
				editableTodoId={editableTodoId}
				editedTodoText={editedTodoText}
				deleteTodo={deleteTodo}
				startEdit={startEdit}
				saveEdit={saveEdit}
				setEditedTodoText={setEditedTodoText}
			/>
		</div>
	);
};
