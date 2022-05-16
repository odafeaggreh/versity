import ReactSlider from "react-slider";
import { useState } from "react";

export default function AdForm() {
	const [value, setValue] = useState(0);

	return (
		<div className='w-[1400px] mx-auto px-4 py-10 border rounded-md shadow-lg'>
			<div className='flex flex-row justify-between mb-6'>
				<div className='ml-14 text-2xl font-medium'>Ad Details</div>

				<div className='mr-14 text-atoll text-2xl font-medium'>
					Clear Fields
				</div>
			</div>

			<div className='w-full'>
				<Details />
			</div>

			<div className='flex flex-row justify-between my-6'>
				<div className='ml-14 text-gray-400 text-lg font-medium'>
					Optional Details
				</div>

				{/* <div className="text-2xl font-medium mr-14 text-atoll">Clear Fields</div> */}
			</div>

			<div className='my-6'>
				<Optional />
			</div>

			<div className='my-10'>
				<Description />
			</div>

			<div className='my-10'>
				<PriceAddDelivery value={value} setValue={setValue} />
			</div>
		</div>
	);
}

function Details() {
	return (
		<div className='flex flex-wrap gap-4 justify-center w-full'>
			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<input
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					type='text'
					placeholder='school'
					name='school'
					id=''
				/>
			</div>

			<div className='w-[620px]'>
				<input
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					type='text'
					placeholder='school'
					name='school'
					id=''
				/>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>
		</div>
	);
}

function Optional() {
	return (
		<div className='flex flex-wrap gap-4 justify-center w-full'>
			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>

			<div className='w-[620px]'>
				<select
					className='px-3 py-5 w-full focus:border-atoll rounded-md focus:ring-atoll'
					name='category'
					id='category'
				>
					<option value='laptops'>Laptops</option>
					<option value='phones'>Phones</option>
				</select>
			</div>
		</div>
	);
}

function Description() {
	return (
		<div className='relative px-14'>
			<label
				htmlFor='description'
				className='absolute -mt-3 ml-4 px-2 text-atoll text-lg bg-white'
			>
				Description
			</label>
			<textarea
				name='description'
				id='description'
				rows={8}
				className='w-full focus:border-atoll rounded-md resize-y focus:ring-atoll-500'
			/>
		</div>
	);
}

function PriceAddDelivery({ value, setValue }) {
	return (
		<div className='flex flex-wrap gap-x-4 gap-y-10 px-14'>
			<div className='flex rounded-sm'>
				<span className='inline-flex items-center px-3 py-4 text-2xl bg-gray-300 border border-r-0 border-gray-300 rounded-l-md'>
					₦
				</span>
				<input
					type='number'
					name='price'
					id='price'
					className='w-[550px] placeholder-gray-500 block flex-1 text-xl focus:border-atoll border-gray-300 rounded-none rounded-r-md focus:ring-atoll'
					placeholder='Price'
				/>
			</div>

			<div>
				<input
					type='text'
					name='address'
					id='address'
					className='w-[590px] placeholder-gray-500 block flex-1 px-6 py-5 text-xl focus:border-atoll border-gray-300 rounded-md focus:ring-atoll'
					placeholder='Address (Optional)'
				/>
			</div>

			<div className='mr-1 my-auto px-5'>
				<div className='w-[550px] flex flex-row gap-x-24 text-lg'>
					<div>Delivery:</div>

					<div>
						<label htmlFor='delivery-yes' className='mr-4 my-auto'>
							Yes
						</label>
						<input
							type='radio'
							id='delivery-yes'
							name='delivery'
							className='my-auto text-atoll focus:ring-atoll'
							value='Yes'
						/>
					</div>

					<div>
						<label htmlFor='delivery-no' className='mr-4 my-auto'>
							No
						</label>

						<input
							type='radio'
							id='delivery-no'
							name='delivery'
							className='my-auto text-atoll focus:ring-atoll'
							value='No'
						/>
					</div>
				</div>
			</div>

			<div className='flex rounded-sm'>
				<span className='inline-flex items-center px-3 py-4 text-2xl bg-gray-300 border border-r-0 border-gray-300 rounded-l-md'>
					₦
				</span>
				<input
					type='number'
					name='delivery-fee'
					id='delivery-fee'
					className='w-[550px] placeholder-gray-500 block flex-1 text-xl focus:border-atoll border-gray-300 rounded-none rounded-r-md focus:ring-atoll'
					placeholder='Delivery Fee'
				/>
			</div>

			<div className='flex flex-col w-full'>
				<div className='flex flex-row justify-between'>
					<div>Delivery Time</div>

					<div>{value} day(s)</div>
				</div>

				<div className='w-full'>
					<ReactSlider
						step={1}
						min={0}
						max={30}
						minDistance={100}
						className='my-4 pr-2 w-full h-2 bg-gray-200 rounded-md cursor-pointer'
						trackClassName='bg-atoll-500'
						thumbClassName='absolute w-5 -mt-1 h-5 cursor-grab bg-atoll rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-atoll -top-2px'
						value={value}
						onChange={(value: any) => {
							setValue(value);
						}}
					/>
				</div>
			</div>

			<div className='flex flex-col gap-y-4'>
				<div className='text-gray-400'>
					Add Photo (.jpg, .png, and .gif only). Each photo must not
					exceed 5 mb
				</div>

				<div className="p-4 bg-atoll w-[60px] rounded-md cursor-pointer">
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='w-6 h-6 m-auto font-extrabold'
						fill='none'
						viewBox='0 0 24 24'
						stroke='#fff'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth={2}
							d='M12 6v6m0 0v6m0-6h6m-6 0H6'
						/>
					</svg>
				</div>
			</div>

			<div className="w-full">
				<button className="bg-atoll rounded-md text-white w-full py-4">Post Ad</button>
			</div>
		</div>
	);
}
