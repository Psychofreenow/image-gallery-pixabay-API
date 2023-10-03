import { useState } from 'react';

function Search({ setDataSearch, dataFilterCategory }) {
	const [searchBar, setSearchBar] = useState('');

	const handleSubmit = e => {
		e.preventDefault();
		setDataSearch(searchBar);
	};

	const handleChange = e => {
		setSearchBar(e.target.value);
	};

	return (
		<form action='' onSubmit={handleSubmit}>
			<input
				type='text'
				className={
					dataFilterCategory === ''
						? 'border-rose-500 border-solid border-2 text-white p-3'
						: 'border-white border-solid border-2 text-white p-3'
				}
				value={searchBar}
				onChange={handleChange}
			/>
			{dataFilterCategory === '' ? (
				<span className='text-rose-500'>Requiere una categoria</span>
			) : null}

			<button className='text-black bg-white p-4 rounded-full'>BUSCAR</button>
		</form>
	);
}

export default Search;
