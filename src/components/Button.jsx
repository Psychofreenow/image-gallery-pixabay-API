function Button({ children, onClick }) {
	return (
		<button className='text-black bg-white p-4 rounded-full' onClick={onClick}>
			{children}
		</button>
	);
}

export default Button;
