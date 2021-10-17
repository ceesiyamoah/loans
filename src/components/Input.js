import React from 'react';
const Input = ({ label, type = 'text', id, value, onChange, rest }) => {
	return (
		<div className='flex flex-col w-full'>
			<label htmlFor={id}>{label}</label>
			<input
				type={type}
				id={id}
				value={value}
				onChange={onChange}
				{...rest}
				className='border-transparent focus:outline-none border-gray-600 border-2 bg-gray-200 rounded p-1'
			/>
		</div>
	);
};

export default Input;
