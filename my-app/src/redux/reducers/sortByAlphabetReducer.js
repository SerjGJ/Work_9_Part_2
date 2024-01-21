export const sortByAlphabetReducer = (state = false, action) => {
	switch (action.type) {
		case 'SET_SORT_BY_ALPHABET':
			return !state;
		default:
			return state;
	}
};
