import Calendar from '../../assets/svg/calendar-fill.svg';

interface Props {
	selectedMenu: number;
	setSelectedMenu: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({selectedMenu, setSelectedMenu}:Props) {
	return (
		<div className='w-1/4 border rounded-md shadow-md overflow-hidden h-full py-6'>
			<div className='flex flex-col'>
                <div className="flex flex-col text-center mx-auto gap-y-1 mb-4">
                    <div>Monica Lewinsky</div>

                    <div>@molewinsky</div>

                    <div className="flex flex-row gap-x-4">
                        <div>
                            <Calendar className="h-5 w-5 text-atoll fill-current" />
                        </div>

                        <div>Registered: 2 years 11 months ago</div>
                    </div>

                    <div className="flex flex-row justify-between mt-2 text-atoll">
                        <div>145 Followers</div>

                        <div>10 Following</div>
                    </div>
                </div>


				<div className='hover:text-atoll cursor-pointer'>
					<div onClick={() => setSelectedMenu(0)} className={`${selectedMenu === 0 && 'text-atoll-500'} mx-auto py-4 w-3/4 text-lg border-b border-t`}>
						Adverts (3)
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div onClick={() => setSelectedMenu(1)} className={`${selectedMenu === 1 && 'text-atoll-500'} mx-auto py-4 w-3/4 text-lg border-b`}>
						Feedbacks (3)
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div onClick={() => setSelectedMenu(2)} className={`${selectedMenu === 2 && 'text-atoll-500'} mx-auto py-4 w-3/4 text-lg border-b`}>
						Posts (3)
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div onClick={() => setSelectedMenu(3)} className={`${selectedMenu === 3 && 'text-atoll-500'} mx-auto py-4 w-3/4 text-lg border-b`}>
						Replies (2)
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div onClick={() => setSelectedMenu(4)} className={`${selectedMenu === 4 && 'text-atoll-500'} mx-auto py-4 w-3/4 text-lg border-b`}>
						Liked Posts (4)
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div onClick={() => setSelectedMenu(5)} className={`${selectedMenu === 5 && 'text-atoll-500'} mx-auto py-4 w-3/4 text-lg border-b`}>
						Liked Replies (2)
					</div>
				</div>
			</div>
		</div>
	);
}
