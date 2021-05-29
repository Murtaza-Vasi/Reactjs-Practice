import React from 'react';

import classes from '../styles/Slider.module.css';

const Slider = ({ min, max, value, onChangeHandler }) => {
	return (
		<div className={classes.sliderContainer}>
			<input
				type='range'
				min={min}
				max={max}
				value={value}
				className={classes.slider}
				onChange={onChangeHandler}
			/>
		</div>
	);
};

Slider.defaultProps = {
	min: 0,
	max: 0,
	value: 0,
};

export default Slider;
