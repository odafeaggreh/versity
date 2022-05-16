export default function Chat() {
	return (
		<div className='flex flex-col flex-grow w-full h-[700px] bg-white rounded-lg shadow-xl overflow-hidden'>
			<div className='flex flex-col flex-grow p-4 h-0 overflow-auto'>
				<div className='flex mt-2 w-full max-w-xs space-x-3'>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
					<div>
						<div className='p-3 bg-gray-300 rounded-bl-lg rounded-r-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
				</div>
				<div className='flex justify-end ml-auto mt-2 w-full max-w-xs space-x-3'>
					<div>
						<div className='p-3 text-white bg-atoll rounded-br-lg rounded-l-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod.
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
				</div>
				<div className='flex justify-end ml-auto mt-2 w-full max-w-xs space-x-3'>
					<div>
						<div className='p-3 text-white bg-atoll rounded-br-lg rounded-l-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet.
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
				</div>
				<div className='flex mt-2 w-full max-w-xs space-x-3'>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
					<div>
						<div className='p-3 bg-gray-300 rounded-bl-lg rounded-r-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{" "}
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
				</div>
				<div className='flex justify-end ml-auto mt-2 w-full max-w-xs space-x-3'>
					<div>
						<div className='p-3 text-white bg-atoll rounded-br-lg rounded-l-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{" "}
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
				</div>
				<div className='flex justify-end ml-auto mt-2 w-full max-w-xs space-x-3'>
					<div>
						<div className='p-3 text-white bg-atoll rounded-br-lg rounded-l-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt.
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
				</div>
				<div className='flex justify-end ml-auto mt-2 w-full max-w-xs space-x-3'>
					<div>
						<div className='p-3 text-white bg-atoll rounded-br-lg rounded-l-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet.
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
				</div>
				<div className='flex mt-2 w-full max-w-xs space-x-3'>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
					<div>
						<div className='p-3 bg-gray-300 rounded-bl-lg rounded-r-lg'>
							<p className='text-sm'>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.{" "}
							</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
				</div>
				<div className='flex justify-end ml-auto mt-2 w-full max-w-xs space-x-3'>
					<div>
						<div className='p-3 text-white bg-atoll rounded-br-lg rounded-l-lg'>
							<p className='text-sm'>Lorem ipsum dolor sit.</p>
						</div>
						<span className='text-gray-500 text-xs leading-none'>
							2 min ago
						</span>
					</div>
					<div className='flex-shrink-0 w-10 h-10 bg-gray-300 rounded-full'></div>
				</div>
			</div>

			<div className='p-4 bg-gray-300'>
				<input
					className='flex items-center px-3 w-full h-10 text-sm rounded'
					type='text'
					placeholder='Type your message…'
				/>
			</div>
		</div>
	);
}
