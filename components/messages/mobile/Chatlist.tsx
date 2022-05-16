export default function Chatlist() {
	return (
		<div className='max-h-[90px] flex flex-row gap-x-6 overflow-hidden'>
			{/* <div className="h-[90px] w-190px] rounded-full bg-atoll-400"></div> */}
			<div className='flex-shrink-0 w-16 h-16 bg-gray-400 rounded-full'></div>

			<div className='flex flex-col'>
				<div className='text-atoll text-lg font-normal'>
					Monica Lewinsky
				</div>

				<p className='text-base truncate'>
					Samsung Galaxy S7 Edge plus
				</p>

				<div className='text-gray-400 text-sm truncate'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Consectetur magni pariatur aspernatur sapiente officiis,
					beatae quis facere culpa non unde eligendi, voluptate sed,
					quo ducimus eveniet nulla obcaecati impedit ratione.
				</div>
			</div>
		</div>
	);
}
