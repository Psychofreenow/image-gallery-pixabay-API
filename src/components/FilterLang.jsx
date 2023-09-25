import { useState } from 'react';

function FilterLang({ changeLang }) {
	const [newLang, setNewLang] = useState('');

	const handleChange = e => {
		const selectedLang = e.target.value;
		setNewLang(selectedLang);
		changeLang(selectedLang);
	};

	return (
		<label htmlFor='lang' className='text-white'>
			Selecciona un idioma:
			<select
				name='selectLang'
				id='lang'
				className='border-white border-solid border-2 text-white p-2'
				value={newLang}
				onChange={handleChange}
			>
				<option value='es'>ES</option>
				<option value='en'>EN</option>
			</select>
		</label>
	);
}

export default FilterLang;
