/** @format */

import Filter from "../../../assets/svg/filter.svg";
import Search from "../../../assets/svg/search.svg";

export const MobileSearch = () => {
	return (
		<div className='mx-auto'>
			<div className='flex flex-row gap-x-4 justify-between px-2 w-full'>
				<div className='relative flex flex-row justify-between w-full'>
					<input
						type='search'
						placeholder='Search'
						name=''
						id=''
						className='py-3 w-full bg-gray-200 border-0 rounded-md focus:border-atoll focus:ring-atoll text-atoll'
					/>

					<div className='absolute right-0 flex flex-row justify-between mr-3 w-16 mt-2'>
						<div className=''>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-4 h-4 mt-2'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</div>

						<div className='text-2xl font-thin text-gray-300'>|</div>

						<div className=''>
							<Search className='w-4 h-4 mt-2' />
						</div>
					</div>
				</div>

				<div className='px-3 py-3 border rounded-md shadow-md'>
					<Filter className='w-5 h-5 text-atoll fill-current' />
				</div>
			</div>
		</div>
	);
};
