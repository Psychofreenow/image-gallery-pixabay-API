import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import PlaceholderImage from '../assets/Placeholder.png';

function Photo({ elements }) {
	const { tags, webformatURL } = elements;
	return (
		<>
			<div className='w-40 h-40'>
				<LazyLoadImage
					src={webformatURL}
					alt={`This image represents the following tags: ${tags}`}
					className='w-40 h-40 object-cover'
					effect='blur'
					placeholderSrc={PlaceholderImage}
				/>
			</div>
		</>
	);
}

export default Photo;
