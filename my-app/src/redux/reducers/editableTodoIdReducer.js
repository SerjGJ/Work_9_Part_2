export const editableTodoIdReducer = (state = null, action) => {
	switch (action.type) {
		case 'SET_EDITABLE_TODO_ID':
			return action.payload;
		default:
			return state;
	}
};
