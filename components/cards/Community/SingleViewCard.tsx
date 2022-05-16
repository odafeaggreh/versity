import Flag from "../../../assets/svg/flag.svg";
import Chat from "../../../assets/svg/chat-outline.svg";
import Share from "../../../assets/svg/share-outline.svg";
import Like from "../../../assets/svg/thumb-up-outline.svg";

const test = [{ text: "" }];

export default function SingleViewCard() {
	return (
		<div className='flex flex-col w-full divide-y'>
			<div className='flex flex-col gap-y-4'>
				<div className='flex flex-row'>
					<div>When is course registration closing for Unilag?</div>
					<div>
						<Flag className='w-4 h-4 text-atoll fill-current' />
					</div>
				</div>

				<div>
					by <span className='text-atoll'>chrisanyanx</span> -{" "}
					<span>Education</span>
				</div>

				<div className='text-gray-400 text-sm font-light'>
					Yesterday, 9:56am
				</div>

				<InfoCard />
			</div>

			<div>
				<InfoCard />
			</div>

			<div>
				<InfoCard />
			</div>
		</div>
	);
}

function InfoCard() {
	return (
		<div className='flex flex-col mb-6 py-4 border-t'>
			<div className='mb-4'>
				I know it's late in the semester but I noticed I haven't
				registered for this semester so I want to know if course
				registration is still open?
			</div>

			<div className='flex flex-row gap-x-8 mt-2'>
				<div className='flex flex-row gap-x-2 text-gray-500 text-sm'>
					<div>
						<Chat className='w-4 h-4 text-atoll-400 hover:text-atoll-500 fill-current cursor-pointer' />
					</div>

					<div className='font-light'>31</div>
				</div>

				<div className='flex flex-row gap-x-2 text-gray-500 text-sm'>
					<div>
						<Share className='w-4 h-4 text-atoll-400 hover:text-atoll-500 fill-current cursor-pointer' />
					</div>

					<div className='font-light'>24</div>
				</div>

				<div className='flex flex-row gap-x-2 text-gray-500 text-sm'>
					<div>
						<Like className='w-4 h-4 text-atoll-400 hover:text-atoll-500 fill-current cursor-pointer' />
					</div>

					<div className='font-light'>421</div>
				</div>
			</div>
		</div>
	);
}
