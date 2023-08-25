import './App.css';
import Gallery from './components/Gallery';
import { InfinitePagesContext } from './context/InfinitePagesContext';

function App() {
	return (
		<>
			<InfinitePagesContext>
				<Gallery />
			</InfinitePagesContext>
		</>
	);
}

export default App;
