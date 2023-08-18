import useFetch from '../hooks/useFetch';
import { API_KEY } from '../API_KEY';
import Photo from './Photo';
import { useEffect, useState } from 'react';
import Button from './Button';

function Gallery() {
	const [search, setSearch] = useState('cats');
	const perPage = 10;
	const [page, setPage] = useState(1);
	const [infinitePages, setInfinitePages] = useState([]);

	const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&page=${page}&per_page=${perPage}`;
	const { data, error, loading } = useFetch(URL);

	const handleClick = () => {
		setPage(page + 1);
	};

	useEffect(() => {
		console.log('ejecucion');
		if (data !== null) {
			setInfinitePages(prevPages => [...prevPages, ...data.hits]);
		}
	}, [data]);

	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error: {error.message}</div>;

	console.log(infinitePages);
	return (
		<>
			<main className='container m-auto'>
				<div className='container flex flex-wrap justify-center gap-2'>
					{infinitePages.map(el => (
						<Photo key={el.id} elements={el} />
					))}
				</div>
				<div className='container flex justify-center gap-5'>
					<Button onClick={handleClick}>CARGAR MÁS RESULTADOS</Button>
				</div>
			</main>
		</>
	);
}

export default Gallery;
