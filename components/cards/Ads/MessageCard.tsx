export default function MessageCard() {
	return (
		<div className='flex flex-col p-6 border rounded-md'>
			<div className='mb-4'>
				<textarea
					name='message'
					id='message'
					// cols='32'
					rows={6}
					placeholder='Type your message...'
					className='placeholder-gray-200 w-full border-gray-200 rounded-sm resize-none ring-atoll-500'
				></textarea>
			</div>

			<div className='delay-10 flex flex-row justify-center px-8 py-3 text-atoll-500 hover:text-white hover:bg-atoll-500 border-2 border-atoll-500 rounded-sm cursor-pointer hover:transform-gpu hover:scale-x-90 transition duration-500 ease-in-out'>
				<div className='mr-2'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='my-auto w-6 h-6'
						viewBox='0 0 20 20'
						fill='currentColor'
					>
						<path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
						<path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
					</svg>
				</div>

				<div className='ml-2'>Message</div>
			</div>
		</div>
	);
}
