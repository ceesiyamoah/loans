import React from 'react';
const Dropdown = ({ id, name, options, onChange }) => {
	return (
		<div className='flex flex-col'>
			<label htmlFor={id}>{name}</label>
			<select
				name={name}
				id={id}
				onChange={onChange}
				className='border-gray-600 border-2 bg-gray-200 rounded p-1'
			>
				<option value=''>None</option>
				{options.map((item) => (
					<option key={item} value={item.toLowerCase()}>
						{item}
					</option>
				))}
			</select>
		</div>
	);
};

export default Dropdown;
