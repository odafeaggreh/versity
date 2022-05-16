export default function ReportCard() {
	return (
		<div className='p-6 border rounded-md'>
			<div className='delay-10 flex flex-row justify-center px-8 py-3 text-red-500 hover:text-white hover:bg-red-500 border-2 border-red-500 rounded-sm cursor-pointer hover:transform-gpu hover:scale-x-90 transition duration-500 ease-in-out'>
				<div className='mr-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='my-auto w-6 h-6'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path
							fillRule='evenodd'
							d='M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z'
							clipRule='evenodd'
						/>
					</svg>
				</div>

				<div className='ml-2'>Report Ad</div>
			</div>
		</div>
	);
}
