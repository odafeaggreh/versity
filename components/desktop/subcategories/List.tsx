import Link from "next/link";

export default function List({ data }) {
	return (
		<div className='flex flex-col mt-12 px-16 mb-64'>
			<div className='mb-6 text-gray-500 text-lg'>
				Select a Subcategory
			</div>

			<div className='flex flex-wrap gap-6'>
				{data.length > 0 ? (
					<>
						{data.map((subcategory) => (
							<CategoryPill name={subcategory.name} />
						))}
					</>
				) : (
					<div className='text-center text-atoll-500 text-2xl'>
						No Subcategory here! 😭
					</div>
				)}
			</div>

			{/* THIS COMPONENT WOULD STILL BE NEEDED FOR WHEN A USER WANTS TO MAKE A POST THE BACK AND CONTINUE BELOW ALSO */}

			{/* <div className='flex flex-row gap-x-10 justify-center mt-56 w-full'>
				<Link href='/'>
					<div className='flex flex-row gap-8 px-28 py-3 text-atoll-500 hover:text-white hover:bg-atoll-500 border border-atoll-500 rounded-md cursor-pointer'>
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
									d='M10 19l-7-7m0 0l7-7m-7 7h18'
								/>
							</svg>
						</div>

						<div>Back</div>
					</div>
				</Link>

				{data.length > 0 && (
					<div className='flex flex-row gap-8 px-28 py-3 text-atoll-500 hover:text-white hover:bg-atoll-500 border border-atoll-500 rounded-md cursor-pointer'>
						<div>Continue</div>

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
									d='M14 5l7 7m0 0l-7 7m7-7H3'
								/>
							</svg>
						</div>
					</div>
				)}
			</div>
			 */}
		</div>
	);
}

const CategoryPill = ({ name }) => (
	<div className='flex flex-row justify-between px-2 py-6 w-60 hover:bg-gray-200 border rounded-md cursor-pointer hover:border-gray-300'>
		<div className='my-auto text-gray-600 capitalize'>{name}</div>

		<div>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				className='my-auto w-6 h-6 text-gray-400'
				fill='none'
				viewBox='0 0 24 24'
				stroke='currentColor'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					strokeWidth={2}
					d='M9 5l7 7-7 7'
				/>
			</svg>
		</div>
	</div>
);
