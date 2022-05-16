import Image from "next/image";

export default function UserAd() {
	return (
		//h-269 w-484
		<div className='w-full  2xl:w-[513px] flex flex-col gap-y-2 p-2 border rounded-md shadow-md'>
			<div className='flex flex-row gap-x-6 w-full'>
				<Image
					src='/iphoneXr.jpg'
					height={150}
					width={150}
					className='rounded-md object-cover'
				/>

				<div className='flex flex-col justify-between'>
					<div>Apple iPhone XR 64GB White</div>

					<div className="-mt-8 text-gray-500">UNILAG</div>

					<div className="-mt-8 text-gray-400 text-sm">Yesterday</div>

					<div className="text-atoll font-semibold">₦30,000</div>
				</div>
			</div>

			<div>
				<hr className='' />
			</div>

			<div className='flex flex-row justify-between w-full'>
				<div className='flex flex-row gap-x-4'>
					<div className='my-auto hover:text-atoll text-atoll-400 cursor-pointer'>
						Edit
					</div>
					<div className='text-gray-200 text-2xl font-light'>|</div>
					<div className='my-auto hover:text-atoll text-gray-400 cursor-pointer'>
						Hide
					</div>
					<div className='text-gray-200 text-2xl font-light'>|</div>
					<div className='my-auto hover:text-atoll text-gray-400 cursor-pointer'>
						Renew
					</div>
				</div>

				<div className="text-gray-400">Views: 12</div>
			</div>
		</div>
	);
}
