export const addTodo = (data) => {
	return {
		type: 'ADD_TODO',
		payload: {
			id: new Date().getTime().toString(),
			data,
		},
	};
};

export const deleteTodo = (id) => {
	return {
		type: 'DELETE_TODO',
		payload: id,
	};
};

export const deleteAllTodo = () => {
	return {
		type: {
			type: 'DELETE_ALL_TODO',
		},
	};
};
