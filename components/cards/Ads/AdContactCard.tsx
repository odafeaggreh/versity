export default function AdContactCard() {
	return (
		<div className='flex flex-col pb-8 border rounded-md overflow-hidden'>
			<div className='py-6 w-full h-8 text-center text-white bg-atoll-500'>
				<div className='-mt-3'>{`\u20A6`} 700,000/Year</div>
			</div>

			<div className='flex flex-col px-6'>
				<div className='flex flex-col mt-4 text-center'>
					<div>Monica Lewinski</div>

					<div>@monicalewinski</div>
				</div>

				<hr className='my-4' />

				<div className='flex flex-row px-8 py-3 justify-around text-atoll-500 border-2 border-atoll-500 rounded-sm hover:bg-atoll-500 hover:text-white cursor-pointer'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 my-auto'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
						</svg>
					</div>

					<div>Show phone no.</div>
				</div>

				<hr className='my-4' />

				<div className='flex flex-row justify-around'>
					<div className='flex flex-col'>
						<div>Registered</div>

						<div className="text-sm text-gray-400">15 Jun 2021</div>
					</div>

					<div className='border border-gray-400'></div>

					<div className='flex flex-col'>
						<div>Last Seen</div>

						<div className="text-sm text-gray-400">4 hrs ago</div>
					</div>
				</div>

				<hr className='my-4' />

				<div className='flex flex-row px-8 py-3 justify-around text-atoll-500 border-2 border-atoll-500 rounded-sm hover:bg-atoll-500 hover:text-white cursor-pointer'>
					<div>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='w-6 h-6 my-auto'
							viewBox='0 0 20 20'
							fill='currentColor'
						>
							<path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
							<path
								fillRule='evenodd'
								d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
								clipRule='evenodd'
							/>
						</svg>
					</div>

					<div>View Seller's Profile</div>
				</div>
			</div>
		</div>
	);
}
