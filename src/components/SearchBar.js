import React from 'react';
import search from '../svgs/search.svg';
const SearchBar = () => {
	return (
		<div className='flex border-2 border-black-300 focus:border-blue-300 p-1 rounded items-center m-2 shadow'>
			<img src={search} alt='' className='w-4 h-4 mr-2 text-blue-300' />
			<input
				placeholder='Search by Staff Id'
				className='w-full outline-none  '
			/>
		</div>
	);
};

export default SearchBar;
