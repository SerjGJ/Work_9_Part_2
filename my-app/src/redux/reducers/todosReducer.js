export const todosReducer = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TODO':
			return [...state, { id: state.length + 1, text: action.payload }];
		case 'DELETE_TODO':
			return state.filter((todo) => todo.id !== action.payload);
		case 'EDIT_TODO':
			return state.map((todo) => (todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo));
		default:
			return state;
	}
};
