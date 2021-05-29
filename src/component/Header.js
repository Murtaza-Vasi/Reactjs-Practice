import React from 'react';

import classes from '../styles/Header.module.css';

const Header = () => {
	return (
		<header className={classes.header}>
			<h2 className={classes.brand}>My Music Player</h2>
		</header>
	);
};

export default Header;
