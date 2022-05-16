interface Props {
    index: number;
    setIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function FeedbackNav({index, setIndex}: Props) {
	return (
		<div className='flex flex-row justify-around w-full border border-gray-200 rounded-t-md shadow-md overflow-hidden'>
			<button onClick={() => setIndex(0)} className={`my-auto hover:text-atoll text-lg hover:border-b-2 py-3 hover:border-atoll cursor-pointer w-full + ${index ===  0 && 'border-b-2 border-atoll text-atoll'}`}>
				Sent Feedbacks (2)
			</button>

			<div className='my-auto text-gray-200 text-2xl font-light'>|</div>

			<button onClick={() => setIndex(1)} className={`my-auto hover:text-atoll text-lg hover:border-b-2 py-3 hover:border-atoll cursor-pointer w-full + ${index ===  1 && 'border-b-2 border-atoll text-atoll'}`}>
				Received Feedbacks (1)
			</button>
		</div>
	);
}
