import Image from "next/image";
import Happy from "../../../assets/svg/happy.svg";

export default function UserFeedback() {
	return (
		<div className='2xl:w-[513px] flex flex-col gap-y-2 p-2 w-full border rounded-md shadow-md'>
			<div className='flex flex-row gap-x-4 w-full'>
				<div>
					<Image
						src='/avatar.png'
						height={200}
						width={200}
						className='rounded-full object-cover'
					/>
				</div>

				<div className='flex flex-col gap-y-4'>
					<div className='text-atoll'>Chris Anyanwu</div>

					<div>
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Ipsa, vitae! Voluptatem vero ab suscipit, fugit et
						commodi itaque obcaecati temporibus quo labore velit,
						in, ad nihil cupiditate sapiente assumenda porro?
					</div>

					<div className='text-gray-400'>16:15</div>
				</div>

				<div>
					<Happy className='w-6 h-6 text-atoll fill-current' />
				</div>
			</div>

			<div>
				<hr />
			</div>

			<div className="flex flex-row w-full justify-around">
                <button className="text-atoll-400 hover:text-atoll">View</button>
                <div className="text-2xl text-gray-300 font-light">|</div>
                <button className="text-red-400 hover:text-red-500">Delete</button>
            </div>
		</div>
	);
}
