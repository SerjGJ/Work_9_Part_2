export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const SET_SEARCH_TERM = 'SET_SEARCH_TERM';
export const SET_SORT_BY_ALPHABET = 'SET_SORT_BY_ALPHABET';
export const SEARCH_TODO = 'SEARCH_TODO';

export const addTodo = (text) => ({ type: ADD_TODO, payload: text });
export const deleteTodo = (id) => ({ type: DELETE_TODO, payload: id });
export const editTodo = (id, text) => ({ type: EDIT_TODO, payload: { id, text } });
export const setSearchTerm = (term) => ({ type: SET_SEARCH_TERM, payload: term });
export const setSortByAlphabet = () => ({ type: SET_SORT_BY_ALPHABET });
export const searchTodo = (term) => ({ type: SEARCH_TODO, payload: term });
