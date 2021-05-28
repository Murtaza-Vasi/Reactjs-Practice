import React, { useState, useEffect } from 'react';

import MeetupList from '../components/meetup/MeetupList';

const AllMeetUps = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [meetupData, setMeetupData] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		fetch('https://meetup-react-49311-default-rtdb.firebaseio.com/meetups.json')
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const meetups = [];

				for (const key in data) {
					const meetup = {
						id: key,
						...data[key],
					};
					meetups.push(meetup);
				}

				setIsLoading(false);
				setMeetupData(meetups);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading ...</p>
			</section>
		);
	}

	return (
		<section>
			<h1>All Meetups Page</h1>
			<MeetupList meetups={meetupData} />
		</section>
	);
};

export default AllMeetUps;
