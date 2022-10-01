const todoReducer = (state = { todos: [] }, action) => {
	switch (action.type) {
		case 'ADD_TODO':
			const { id, data } = action.payload;
			return {
				...state,
				todos: [...state.todos, { id, data }],
			};
		case 'DELETE_TODO':
			return {
				...state,
				todos: state.todos.filter((item) => item.id !== action.payload),
			};
		default:
			return state;
	}
};

export default todoReducer;
