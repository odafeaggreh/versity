interface Props {
	index: number;
	setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function AdNav({index, setIndex}:Props) {
	return (
		<div className='flex flex-row justify-between w-full border border-gray-200 rounded-t-md shadow-md overflow-hidden'>
			<button onClick={() => setIndex(0)} className={`${index === 0 && 'border-b-2 border-atoll text-atoll'} my-auto hover:text-atoll text-lg hover:border-b-2 hover:border-atoll cursor-pointer py-3 w-full`}>
				Active Ads (12)
			</button>

			<div className='my-auto text-gray-200 text-2xl font-light'>|</div>

			<button onClick={() => setIndex(1)} className={`${index === 1 && 'border-b-2 border-atoll text-atoll'} my-auto hover:text-atoll text-lg hover:border-b-2 hover:border-atoll cursor-pointer py-3 w-full`}>
				Reviewing (1)
			</button>

			<div className='my-auto text-gray-200 text-2xl font-light'>|</div>

			<button onClick={() => setIndex(2)} className={`${index === 2 && 'border-b-2 border-atoll text-atoll'} my-auto hover:text-atoll text-lg hover:border-b-2 hover:border-atoll cursor-pointer py-3 w-full`}>
				Hidden Ads (2)
			</button>

			<div className='my-auto text-gray-200 text-2xl font-light'>|</div>

			<button onClick={() => setIndex(3)} className={`${index === 3 && 'border-b-2 border-atoll text-atoll'} my-auto hover:text-atoll text-lg hover:border-b-2 hover:border-atoll cursor-pointer py-3 w-full`}>
				Drafts (3)
			</button>

			<div className='my-auto text-gray-200 text-2xl font-light'>|</div>

			<button onClick={() => setIndex(4)} className={`${index === 4 && 'border-b-2 border-atoll text-atoll'} my-auto hover:text-atoll text-lg hover:border-b-2 hover:border-atoll cursor-pointer py-3 w-full`}>
				Declined (0)
			</button>
		</div>
	);
}
