export const searchTermReducer = (state = '', action) => {
	switch (action.type) {
		case 'SET_SEARCH_TERM':
			return action.payload;
		case 'SEARCH_TODO':
			return action.payload;
		default:
			return state;
	}
};
