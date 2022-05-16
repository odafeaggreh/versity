// TEMP PAGE MADE TO SHOW HOW A FILTER PAGE WOULD LOOK LIKE

import MobileLayout from "../components/mobile/layout";

export default function Filter() {
	return (
		<MobileLayout subcategory='Filter'>
			<div className='flex flex-col justify-between h-screen'>
				<div className='flex flex-col gap-y-10 mt-32 px-8'>
					<div>
						<div className='relative'>
							<label
								htmlFor='topic'
								className='absolute -mt-3 ml-4 px-2 text-atoll text-lg bg-white'
							>
								Topic
							</label>
							<select
								name='topic'
								id='topic'
								className='py-4 w-full border focus:border-atoll border-gray-400 rounded-md resize-y focus:ring-atoll-500'
							>
								<option value='all'>All</option>
								<option value='other'>Other</option>
							</select>
						</div>
					</div>

					<div>
						<div className='relative'>
							<label
								htmlFor='order'
								className='absolute -mt-3 ml-4 px-2 text-atoll text-lg bg-white'
							>
								Sort Order
							</label>
							<select
								name='order'
								id='order'
								className='py-4 w-full border focus:border-atoll border-gray-400 rounded-md resize-y focus:ring-atoll-500'
							>
								<option value='all'>Highest Comments</option>
								<option value='other'>Other</option>
							</select>
						</div>
					</div>
				</div>

				<div className='px-8 py-6'>
					<button className='py-4 w-full text-white text-lg bg-atoll rounded-md'>
						Apply Filter
					</button>
				</div>
			</div>
		</MobileLayout>
	);
}
