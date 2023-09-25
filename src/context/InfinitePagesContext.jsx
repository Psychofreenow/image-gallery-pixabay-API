import { createContext, useState, useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { API_KEY } from '../API_KEY';

const pages = createContext();

export function useInfinitePagesFullData() {
	return useContext(pages);
}

export function InfinitePagesContext({ children }) {
	const [search, setSearch] = useState(null);
	const [category, setCategory] = useState(null);
	const [lang, setLang] = useState('es');
	const [page, setPage] = useState(1);
	const [infinitePages, setInfinitePages] = useState([]);
	const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&lang=${lang}&category=${category}&page=${page}&per_page=${10}`;
	const { data, error, loading } = useFetch(URL);

	useEffect(() => {
		if (!data) return;
		setInfinitePages(prevPages => prevPages.concat(data.hits));
	}, [data]);

	const handleLoadMore = () => setPage(page + 1);

	const updateSearch = (newSearch, searchCategory) => {
		if (!infinitePages) return;
		// Actualiza la busqueda y hace la solicitud a la API
		setSearch(newSearch);
		setPage(1);
		setInfinitePages([]);

		// cambiar categoria y hacer busqueda
		setCategory(searchCategory);
	};

	const changeLang = newLang => {
		setLang(newLang);
		setPage(1);
		setInfinitePages([]);
	};

	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<pages.Provider
			value={{
				infinitePages,
				handleLoadMore,
				updateSearch,
				changeLang,
			}}
		>
			{children}
		</pages.Provider>
	);
}
