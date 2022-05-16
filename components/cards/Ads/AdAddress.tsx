export default function AdAddress() {
	return (
		<div className='p-4 w-full border border-gray-300 rounded-sm'>
			<div className='-mt-8 px-2 w-28 text-xl bg-white'>
				<div className="flex flex-row justify-between">
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
							/>
						</svg>
					</div>

					<div>Address</div>
				</div>
			</div>

			<div className='px-4 py-2 mt-2 leading-relaxed capitalize text-lg'>
				25, Unilag Road, Abule-Oja Bus-Stop, Yaba, Lagos.
			</div>
		</div>
	);
}
