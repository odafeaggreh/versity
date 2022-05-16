import Chat from "../../../assets/svg/chat.svg";
import Share from "../../../assets/svg/share.svg";
import Like from "../../../assets/svg/like.svg";

export default function UserPosts() {
	return (
		<div className='w-[505px] flex flex-col rounded-md shadow-md overflow-hidden p-2 border gap-y-2'>
			<div className='text-atoll'>
				Buy your data at subsidized rates from whatever network. MTN,
				Glo, 9mobile, Airtel
			</div>

			<div className='text-gray-400 font-light text-sm'>Today, 04:21 am</div>

			<div className='flex flex-row gap-x-8 mt-2'>
				<div className='flex flex-row gap-x-2 text-gray-500 text-sm'>
					<div>
						<Chat className='w-4 h-4 text-gray-400 fill-current' />
					</div>

					<div className='font-light'>31</div>
				</div>

				<div className='flex flex-row gap-x-2 text-gray-500 text-sm'>
					<div>
						<Share className='w-4 h-4 text-gray-400 fill-current' />
					</div>

					<div className='font-light'>24</div>
				</div>

				<div className='flex flex-row gap-x-2 text-gray-500 text-sm'>
					<div>
						<Like className='w-4 h-4 text-gray-400 fill-current' />
					</div>

					<div className='font-light'>421</div>
				</div>
			</div>

			<div>
				<hr />
			</div>

			<div className='flex flex-row justify-around w-full'>
				<button className='py-2 hover:text-atoll text-atoll-400'>
					View
				</button>
				<div className='text-gray-300 text-2xl font-light'>|</div>
				<button className='text-red-400 py-2 hover:text-red-500'>
					Delete
				</button>
			</div>
		</div>
	);
}
