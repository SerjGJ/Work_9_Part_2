export const editedTodoTextReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_EDITED_TODO_TEXT':
			return action.payload;
		default:
			return state;
	}
};
