import { useState } from 'react';

function FilterCategory({ setDataFilterCategory }) {
	const [categories, setCategories] = useState('');

	const handleChange = e => {
		const selectedCategory = e.target.value;
		setCategories(selectedCategory);
		setDataFilterCategory(selectedCategory);
	};

	return (
		<label htmlFor='categories' className='text-white'>
			Selecciona una categoria:
			<select
				name='SelectCategory'
				id='categories'
				className='border-white border-solid border-2 text-white p-2'
				value={categories}
				onChange={handleChange}
			>
				<option value='' disabled>
					Categorias
				</option>
				<option value='backgrounds'>backgrounds</option>
				<option value='fashion'>fashion</option>
				<option value='nature'>nature</option>
				<option value='science'>science</option>
				<option value='education'>education</option>
				<option value='feelings'>feelings</option>
				<option value='health'>health</option>
				<option value='people'>people</option>
				<option value='religion'>religion</option>
				<option value='places'>places</option>
				<option value='animals'>animals</option>
				<option value='industry'>industry</option>
				<option value='computer'>computer</option>
				<option value='food'>food</option>
				<option value='sports'>sports</option>
				<option value='ransportation'>ransportation</option>
				<option value='travel'>travel</option>
				<option value='buildings'>buildings</option>
				<option value='business'>business</option>
				<option value='music'>music</option>
			</select>
		</label>
	);
}

export default FilterCategory;
