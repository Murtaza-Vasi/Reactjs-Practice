import React from 'react';

import classes from '../styles/Button.module.css';

const Button = ({ action, icon }) => {
	return (
		<button onClick={action} className={classes.btn}>
			<i className={icon} />
		</button>
	);
};

export default Button;
