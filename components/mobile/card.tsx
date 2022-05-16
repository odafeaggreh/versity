/** @format */

import Image from "next/image";

interface Props {
	svg: any;
	name: string;
}

export default function Card({ svg, name }: Props) {
	return (
		// <div className='container'>
			<div className='flex flex-col text-center w-24 px-2 h-32 border border-gray-200 rounded-md shadow-md hover:shadow-xl cursor-pointer overflow-hidden'>
				{/* <div className=''> */}
					<div className='my-2'>
						{svg}
					</div>

					<div className='text-xs leading-none'>{name}</div>
				{/* </div> */}
			</div>
		// </div>
	);
}
