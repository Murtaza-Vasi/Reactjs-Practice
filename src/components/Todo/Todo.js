import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Todo.css';
import { addTodo, deleteTodo } from '../../actions/todoActions';

const Todo = () => {
	const [inputData, setInputData] = useState('');
	const dispatch = useDispatch();

	const todos = useSelector((state) => state.todo.todos);

	return (
		<>
			<div className='main-div'>
				<div className='child-div'>
					<figure>
						<figcaption>Add Your Todos Here</figcaption>
					</figure>
				</div>
				<div className='add-items'>
					<input
						type='text'
						placeholder='Add Todos ... '
						value={inputData}
						onChange={(e) => setInputData(e.target.value)}
					/>
					<i
						className='fa fa-plus add-btn'
						onClick={() => dispatch(addTodo(inputData), setInputData(''))}
					/>
				</div>
				<div className='showItems'>
					{todos.map((todo) => (
						<div className='eachItem' key={todo.id}>
							<h3>{todo.data}</h3>
							<i
								className='far fa-trash-alt delete-btn'
								onClick={() => dispatch(deleteTodo(todo.id))}
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Todo;
