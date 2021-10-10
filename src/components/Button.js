import React from 'react';
//!color must be a tailwind bg color

const Button = ({ text, onClick, color = 'green' }) => {
	return (
		<button
			onClick={onClick}
			className={`bg-${color}-300 rounded p-2 m-2 hover:bg-${color}-500`}
		>
			{text}
		</button>
	);
};

export default Button;
