interface Props {
	info?: object;
}

const test = {
    "Type": 'One man room',
    "Study Room": 'Yes',
    "Bedrooms": 1,
    "TV Room": 'Yes',
    "Bathrooms": 1,
    "Wi-Fi": 'No',
    "Toilets": 1,
    "Furnished": 'No',
    "Generator": 'Yes',
    "Air Condition": 'Yes',
    "Test": "Yes"
}

export default function AdDetails({info = test}: Props) {

	return (
		<div className='w-full border border-gray-300 rounded-sm'>
			<div className='-mt-4 ml-4 px-2 w-28 text-xl bg-white font-Dubai'>
				Ad Details
			</div>

			<div className='flex flex-wrap py-4 font-light'>
				{Object.keys(test).map((item) => (
					<div className='w-[500px] flex flex-row justify-between mx-auto my-4 p-2 border-b border-dashed border-gray-300'>
						<div className='text-gray-500 capitalize'>{item}</div>
						<div className='font-medium capitalize'>{test[item]}</div>
					</div>
				))}
			</div>
		</div>
	);
}
