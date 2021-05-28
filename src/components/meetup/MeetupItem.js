import React, { useContext } from 'react';

import classes from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

const MeetupItem = ({ image, title, address, description, id }) => {
	const favoritesCtx = useContext(FavoritesContext);
	const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

	const toggleStatusFavoriteHandler = () => {
		if (itemIsFavorite) {
			favoritesCtx.removeFavorite(id);
		} else {
			favoritesCtx.addFavorite({
				id,
				title,
				image,
				description,
				address,
			});
		}
	};

	return (
		<li className={classes.item}>
			<Card>
				<div className={classes.image}>
					<img src={image} alt={title} />
				</div>
				<div className={classes.content}>
					<h3>{title}</h3>
					<address>{address}</address>
					<p>{description}</p>
				</div>
				<div className={classes.actions}>
					<button onClick={toggleStatusFavoriteHandler}>
						{itemIsFavorite ? 'Remove from Favorites' : 'To Favorites'}
					</button>
				</div>
			</Card>
		</li>
	);
};

export default MeetupItem;
