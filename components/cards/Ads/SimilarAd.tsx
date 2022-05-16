export default function SimilarAd() {
	return (
		<div className='p-6 border rounded-md'>
			<div className='delay-10 flex flex-row justify-center px-8 py-3 text-atoll-500 hover:text-white hover:bg-atoll-500 border-2 border-atoll-500 rounded-sm cursor-pointer hover:transform-gpu hover:scale-x-90 transition duration-500 ease-in-out'>
				<div className='mr-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='my-auto w-6 h-6'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z'
							clipRule='evenodd'
						/>
					</svg>
				</div>

				<div className='ml-2'>Post Ad Like This</div>
			</div>
		</div>
	);
}
