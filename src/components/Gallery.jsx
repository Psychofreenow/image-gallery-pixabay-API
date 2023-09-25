import Photo from './Photo';
import Button from './Button';
import { useInfinitePagesFullData } from '../context/InfinitePagesContext';
import Search from './Search';
import FilterCategory from './FilterCategory';
import { useState, useEffect } from 'react';
import FilterLang from './FilterLang';

function Gallery() {
	const [dataSearch, setDataSearch] = useState('');
	const [dataFilterCategory, setDataFilterCategory] = useState('');

	const { infinitePages, handleLoadMore, updateSearch, changeLang } =
		useInfinitePagesFullData();

	useEffect(() => {
		if (!dataSearch || !dataFilterCategory) return;

		updateSearch(dataSearch, dataFilterCategory);
	}, [dataSearch, dataFilterCategory]);

	return (
		<>
			<main className='container m-auto'>
				<header className='p-5 flex justify-center items-center gap-4'>
					<Search setDataSearch={setDataSearch} />
					<FilterCategory setDataFilterCategory={setDataFilterCategory} />
					<FilterLang changeLang={changeLang} />
				</header>
				<div className='container flex flex-wrap justify-center gap-2'>
					{infinitePages &&
						infinitePages.map(el => <Photo key={el.id} elements={el} />)}
				</div>
				<div className='container flex justify-center gap-5'>
					<Button onClick={handleLoadMore}>CARGAR MÁS RESULTADOS</Button>
				</div>
			</main>
		</>
	);
}

export default Gallery;
