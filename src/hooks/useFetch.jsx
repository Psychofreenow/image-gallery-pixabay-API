import { useState, useEffect } from 'react';

function useFetch(url) {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch(url);
				if (!response.ok) {
					throw new Error(`An error occurred: ${response.status}`);
				}
				const data = await response.json();
				setData(data);
				setLoading(false);
			} catch (error) {
				setError(error);
				setLoading(false);
			}
		}
		fetchData();
	}, [url]);

	return { data, error, loading };
}

export default useFetch;
