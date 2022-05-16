// TEMP PAGE MADE TO SHOW HOW A FILTER PAGE WOULD LOOK LIKE

import React from "react";
import { MobileCategoriesCard } from "../components/cards";
import MobileLayout from "../components/mobile/layout";

export default function TopicUpload() {
	return (
		<MobileLayout subcategory='New Post'>
			<div className='flex flex-col gap-y-4 mt-32 px-8'>
				<div className='w-full'>
					<input
						type='text'
						name=''
						id=''
						className='py-4 w-full focus:border-atoll-500 border-gray-400 rounded-sm focus:ring-atoll-500'
						placeholder='Title'
					/>
				</div>

				<div className='w-full'>
					<textarea
						rows={6}
						name=''
						id=''
						className='py-4 w-full focus:border-atoll-500 border-gray-400 rounded-sm resize-none focus:ring-atoll-500'
						placeholder='Body (Optional)'
					/>
				</div>

				<div>
					<span className='font-semibold'>Attachments: </span> Each
					picture or video should not exceed 5mb.
				</div>

				<div className='flex flex-col gap-y-6'>
					<div className='flex flex-row gap-x-4'>
						<div className='my-auto'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 h-8 text-atoll'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>

						<div className='my-auto'>Add Media File</div>
					</div>

					{/* ============Others============= */}
					<div className='flex flex-row gap-x-4'>
						<div className='my-auto'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 h-8 text-atoll'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>

						<div className='my-auto'>Add Media File</div>
					</div>

					<div className='flex flex-row gap-x-4'>
						<div className='my-auto'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 h-8 text-atoll'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>

						<div className='my-auto'>Add Media File</div>
					</div>

					<div className='flex flex-row gap-x-4'>
						<div className='my-auto'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 h-8 text-atoll'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>

						<div className='my-auto'>Add Media File</div>
					</div>

					<div className='flex flex-row gap-x-4'>
						<div className='my-auto'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='w-8 h-8 text-atoll'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
								/>
							</svg>
						</div>

						<div className='my-auto'>Add Media File</div>
					</div>
				</div>

				<div className='mt-6'>
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

                <div className='py-6'>
					<button className='py-4 w-full text-white text-lg bg-atoll rounded-md'>
						Post
					</button>
				</div>
			</div>
		</MobileLayout>
	);
}
