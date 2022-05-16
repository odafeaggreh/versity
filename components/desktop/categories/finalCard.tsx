// THIS IS HOW CARD IN THIOS SAME DIRECTORY SHOULD BE 
/** @format */

import Image from "next/image";
import Link from "next/link";
interface Props {
	svg: any;
	category: {
		name: string;
		key: string;
	};
}

export default function Card({ svg, category }: Props) {
	if (category.name === "Community") {
		// HAS DIFFERENT LINK
		return (
			<Link href={`/community`}>
				<div className='mx-auto w-44 h-44 rounded-md shadow hover:shadow-xl cursor-pointer'>
					<div className='flex flex-col my-2 text-center'>
						<div className='-px-4 mt-4'>{svg}</div>

						<div className='mt-6 text-gray-500 text-sm leading-tight capitalize'>
							{category.name}
						</div>
					</div>
				</div>
			</Link>
		);
	} else {
		return (
			// LINK WITH KEY AS COMMENTED BELOW. BUT STILL LIKE THIS CAUSE OF INCONSISTENCY OF THE BACKEND
			<Link href={`/`}>
				<div className='mx-auto w-44 h-44 rounded-md shadow hover:shadow-xl cursor-pointer'>
					<div className='flex flex-col my-2 text-center'>
						<div className='-px-4 mt-4'>{svg}</div>

						<div className='mt-6 text-gray-500 text-sm leading-tight capitalize'>
							{category.name}
						</div>
					</div>
				</div>
			</Link>
		);
	}
}

// THIS IS HOW IT SHOULD BE EVENTUALLY 👇

{
	/* <Link href={`/categories/${category.key}`}>
			<div className='mx-auto w-44 h-44 rounded-md shadow hover:shadow-xl cursor-pointer'>
				<div className='flex flex-col my-2 text-center'>
					<div className='-px-4 mt-4'>{svg}</div>

					<div className='mt-6 text-gray-500 text-sm leading-tight'>
						{category.name}
					</div>
				</div>
			</div>
		</Link> */
}
