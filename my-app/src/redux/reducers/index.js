import { combineReducers } from 'redux';
import { todosReducer } from './todosReducer';
import { searchTermReducer } from './searchTermReducer';
import { sortByAlphabetReducer } from './sortByAlphabetReducer';
import { newTodoReducer } from './newTodoReducer';
import { editableTodoIdReducer } from './editableTodoIdReducer';
import { editedTodoTextReducer } from './editedTodoTextReducer';

export const rootReducer = combineReducers({
	todos: todosReducer,
	searchTerm: searchTermReducer,
	sortByAlphabet: sortByAlphabetReducer,
	newTodo: newTodoReducer,
	editableTodoId: editableTodoIdReducer,
	editedTodoText: editedTodoTextReducer,
});
