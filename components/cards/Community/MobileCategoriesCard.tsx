interface Props {
	category: {
		name: string;
		topics: string[];
	};
}

export default function MobileCategoriesCard({ category }: Props) {
	return (
		<div className='flex flex-col gap-y-4 border-l-8 py-2 pl-4 border-l-atoll border rounded-md shadow-lg h-28 overflow-x-hidden'>
			<div className='font-bold capitalize'>{category.name}</div>

			<div className='text-gray-500 text-sm'>{category.topics + ""}</div>
		</div>
	);
}
