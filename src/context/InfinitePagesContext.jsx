import { createContext, useState, useContext, useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { API_KEY } from '../API_KEY';

const pages = createContext();

export function useInfinitePagesFullData() {
	return useContext(pages);
}

export function InfinitePagesContext({ children }) {
	const initialSearch = 'Cat';
	const [search, setSearch] = useState(initialSearch);
	const [perPage, setPerPage] = useState(10);
	const [page, setPage] = useState(1);
	const [infinitePages, setInfinitePages] = useState([]);
	const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${search}&page=${page}&per_page=${perPage}`;
	const { data, error, loading } = useFetch(URL);

	useEffect(() => {
		if (data !== null) {
			setInfinitePages(prevPages => [...prevPages, ...data.hits]);
		}
	}, [data]);

	const handleLoadMore = () => setPage(page + 1);

	const updateSearch = newSearch => {
		setSearch(newSearch);
		setPage(1);
		setInfinitePages([]);
	};

	console.log(infinitePages);
	if (loading) return <div>Cargando...</div>;
	if (error) return <div>Error: {error.message}</div>;

	return (
		<pages.Provider value={{ infinitePages, handleLoadMore, updateSearch }}>
			{children}
		</pages.Provider>
	);
}
