import Feedback from "../../../assets/svg/feedback.svg";
import Happy from "../../../assets/svg/happy.svg";

export default function AdFeedback() {
	return (
		<div className='p-4 w-full border border-gray-300 rounded-sm'>
			<div className='-mt-8 px-2 w-28 text-xl bg-white'>Feedback</div>

			<div className='flex flex-col px-36 py-4'>
				<div className='flex flex-row justify-between mb-4 text-atoll-500 text-xl'>
					<div>Chris Anyanwu</div>

					<div>
						<Happy className='h-6 text-atoll-500 fill-current' />
					</div>
				</div>

				<div className='leading-relaxed'>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Ipsam a magnam officiis similique sapiente nesciunt, autem
					quod, eos rerum recusandae, dolor corporis eius dignissimos.
					Rem dolorem ullam similique iure sunt! Lorem ipsum dolor
					sit, amet consectetur adipisicing elit. Saepe atque
					temporibus reprehenderit neque tempore quidem unde quod
					placeat laudantium labore, odit perspiciatis iure optio
					aspernatur numquam voluptatem eligendi impedit laborum?
				</div>

				<div className='flex flex-row justify-between mt-4 text-gray-500 font-light'>
					<div className='hover:text-atoll-500 hover:font-medium cursor-pointer'>
						16:15
					</div>

					<div className='flex flex-row justify-between w-1/6 uppercase'>
						<div className='hover:text-atoll-500 hover:font-normal cursor-pointer'>
							Like
						</div>
						<div className='hover:text-atoll-500 hover:font-normal cursor-pointer'>
							Reply
						</div>
					</div>
				</div>

				<div className='flex flex-row gap-x-4 justify-center mt-4 w-full h-14 text-atoll-500 hover:text-white hover:bg-atoll-500 border border-atoll-500 rounded-md cursor-pointer'>
					<div className='my-auto'>
						<Feedback className='h-5 fill-current' />
					</div>

					<div className='my-auto'>Leave Feedback</div>
				</div>
			</div>
		</div>
	);
}
