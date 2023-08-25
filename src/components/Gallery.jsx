import Photo from './Photo';
import Button from './Button';
import { useInfinitePagesFullData } from '../context/InfinitePagesContext';
import Search from './Search';

function Gallery() {
	const { infinitePages, handleLoadMore } = useInfinitePagesFullData();

	return (
		<>
			<main className='container m-auto'>
				<header className='p-5'>
					<Search />
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
