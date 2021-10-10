import React from 'react';
const Card = ({ children }) => {
	return (
		<div className='bg-white shadow rounded-md w-3/12 p-10'>{children}</div>
	);
};

export default Card;
