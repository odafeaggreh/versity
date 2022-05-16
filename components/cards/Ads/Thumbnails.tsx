import Image from "next/image";

interface Props {
	images: Array<string>;
}

export default function Thumbnails({ images }: Props) {
	return (
		<div className='flex flex-row gap-x-8 w-full justify-between'>
			{images.map((image) => (
				<Image src={image} width='300' height='300' className="object-cover h-full rounded-lg" />
			))}
		</div>
	);
}