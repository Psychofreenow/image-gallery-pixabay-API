import { useState } from 'react';
import { useInfinitePagesFullData } from '../context/InfinitePagesContext';

function Search() {
	const { updateSearch } = useInfinitePagesFullData();
	const [searchBar, setSearchBar] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		updateSearch(searchBar);
	};

	const handleChange = e => {
		setSearchBar(e.target.value);
	};

	console.log(searchBar);

	return (
		<form
			action=''
			className='container flex justify-center'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				className='border-white border-solid border-2 text-white'
				value={searchBar}
				onChange={handleChange}
			/>
			<button className='text-black bg-white p-4 rounded-full'>BUSCAR</button>°
		</form>
	);
}

export default Search;
