import React from 'react';
import history from '../history';
const Card = ({ children, styles, route }) => {
	return (
		<div
			className={`bg-white shadow rounded-md w-3/12 p-10 ${styles}`}
			onClick={() => {
				history.push(route);
			}}
		>
			{children}
		</div>
	);
};

export default Card;
