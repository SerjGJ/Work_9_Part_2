import { useState, useEffect } from 'react';
import styles from './App.module.css';
import { TodoInput } from './components/TodoInput';
import { TodoList } from './components/TodoList';

export const App = () => {
	const [todos, setTodos] = useState([]);
	const [newTodo, setNewTodo] = useState('');
	const [searchTerm, setSearchTerm] = useState('');
	const [sortByAlphabet, setSortByAlphabet] = useState(false);
	const [sortedTodos, setSortedTodos] = useState([]);
	const [editableTodoId, setEditableTodoId] = useState(null);
	const [editedTodoText, setEditedTodoText] = useState('');

	useEffect(() => {
		fetch('http://localhost:3001/todos')
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => console.error(error));
	}, []);

	useEffect(() => {
		if (sortByAlphabet) {
			const sorted = [...todos].sort((a, b) => a.text.localeCompare(b.text));
			setSortedTodos(sorted);
		} else {
			setSortedTodos([...todos]);
		}
	}, [sortByAlphabet, todos]);

	const addTodo = () => {
		fetch('http://localhost:3001/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ text: newTodo }),
		})
			.then((response) => response.json())
			.then((data) => {
				setTodos([...todos, data]);
				setNewTodo('');
			})
			.catch((error) => console.error(error));
	};

	const deleteTodo = (id) => {
		fetch(`http://localhost:3001/todos/${id}`, {
			method: 'DELETE',
		})
			.then((response) => {
				if (response.ok) {
					const updatedTodos = todos.filter((todo) => todo.id !== id);
					setTodos(updatedTodos);
				}
			})
			.catch((error) => console.error(error));
	};

	const handleSearch = () => {
		fetch(`http://localhost:3001/todos?q=${searchTerm}`)
			.then((response) => response.json())
			.then((data) => setTodos(data))
			.catch((error) => console.error(error));
	};

	const startEdit = (id, text) => {
		setEditableTodoId(id);
		setEditedTodoText(text);
	};

	const saveEdit = () => {
		fetch(`http://localhost:3001/todos/${editableTodoId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({ text: editedTodoText }),
		})
			.then((response) => {
				if (response.ok) {
					const updatedTodos = todos.map((todo) => (todo.id === editableTodoId ? { ...todo, text: editedTodoText } : todo));
					setTodos(updatedTodos);
					setEditableTodoId(null);
					setEditedTodoText('');
				}
			})
			.catch((error) => console.error(error));
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.title}>Список задач</h1>
			<TodoInput
				newTodo={newTodo}
				setNewTodo={setNewTodo}
				addTodo={addTodo}
				setSearchTerm={setSearchTerm}
				handleSearch={handleSearch}
				setSortByAlphabet={() => setSortByAlphabet(!sortByAlphabet)}
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
