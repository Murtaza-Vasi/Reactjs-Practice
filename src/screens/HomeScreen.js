import React, { useState, useRef } from 'react';

import classes from '../styles/HomeScreen.module.css';
import Controls from '../component/Controls';

const BUTTONS = [
	{
		id: 'loop',
		icon: 'fas fa-undo',
		action: () => {},
	},
	{
		id: 'fast-backward',
		icon: 'fas fa-fast-backward',
		action: () => {},
	},
	{
		id: 'step-backward',
		icon: 'fas fa-step-backward',
		action: () => {},
	},
	{
		id: 'play',
		icon: 'fas fa-play-circle',
		action: () => {},
	},
	{
		id: 'pause',
		icon: 'fas fa-pause-circle',
		action: () => {},
	},
	{
		id: 'stop',
		icon: 'fas fa-stop',
		action: () => {},
	},
	{
		id: 'step-forward',
		icon: 'fas fa-step-forward',
		action: () => {},
	},
	{
		id: 'forward',
		icon: 'fas fa-forward',
		action: () => {},
	},
	{
		id: 'mute',
		icon: 'fas fa-volume-mute',
		action: () => {},
	},
	{
		id: 'volume-down',
		icon: 'fas fa-volume-down',
		action: () => {},
	},
	{
		id: 'mute',
		icon: 'fas fa-volume-up',
		action: () => {},
	},
];

const HomeScreen = () => {
	const audioRef = useRef();
	const [currentTime, setCurrentTime] = useState(0);

	const play = () => {
		console.log(audioRef.current.audioTracks);
		audioRef.current.play();
	};

	const pause = () => {
		if (audioRef.current.paused) {
			audioRef.current.play();
		} else {
			audioRef.current.pause();
		}
	};

	const stop = () => {
		audioRef.current.pause();
		audioRef.current.currentTime = 0;
	};

	const seek = (e) => {
		audioRef.current.fastSeek(e.target.value);
		setCurrentTime(e.target.value);
	};

	return (
		<main className={classes.main}>
			<img src='images/music.png' alt='music' className={classes.image} />
			<p className={classes.songName}>Name of the Song</p>
			<audio ref={audioRef}>
				<source src='audio/maa_ka_phone.mp3' type='audio/mp3' />
				Your browser doesn't support audio tags
			</audio>
			<Controls btnList={BUTTONS} />
		</main>
	);
};

export default HomeScreen;
