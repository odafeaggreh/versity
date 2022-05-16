/** @format */

import Image from "next/image";

interface Props {
	svg: any;
	name: string;
}

export default function Card({ svg, name }: Props) {
	return (
		<div className=''>
			<div className='mx-auto w-44 h-44 rounded-md shadow hover:shadow-xl cursor-pointer'>
				<div className='flex flex-col my-2 text-center'>
					<div className='-px-4 mt-4'>{svg}</div>

					<div className='mt-6 text-sm text-gray-500 leading-tight'>{name}</div>
				</div>
			</div>
		</div>
	);
}
