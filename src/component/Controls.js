import React from 'react';

import classes from '../styles/Control.module.css';
import Slider from './Slider';
import Button from './Button';

{
	/* <div>
			<button>
				<i className='fas fa-fast-backward'></i>
			</button>
			<button>
				<i className='fas fa-step-backward'></i>
			</button>
			<button onClick={play}>
				<i className='fas fa-play-circle'></i>
			</button>
			<button onClick={pause}>
				<i className='fas fa-pause-circle'></i>
			</button>
			<button onClick={stop}>
				<i className='fas fa-stop'></i>
			</button>
			<button>
				<i className='fas fa-step-forward'></i>
			</button>
			<button>
				<i className='fas fa-forward'></i>
			</button>
			<button>
				<i className='fas fa-undo'></i>
			</button>
		</div> */
}

const Controls = ({ btnList }) => {
	return (
		<div className={classes.controlContainer}>
			<Slider />
			<div className={classes.buttonGroup}>
				{btnList.map((btn) => {
					return <Button key={btn.id} action={btn.action} icon={btn.icon} />;
				})}
			</div>
		</div>
	);
};

export default Controls;
