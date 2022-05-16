import Chatlist from "./Chatlist";

interface Props {
	selectedMenu?: number;
	setSelectedMenu?: React.Dispatch<React.SetStateAction<number>>;
}

export default function Sidebar({ selectedMenu, setSelectedMenu }: Props) {
	return (
		<div className='w-1/4 border rounded-md shadow-md overflow-scroll h-[700px]'>
			<div className='flex flex-col'>
				{Array(12)
					.fill(0)
					.map((i) => (
						<div className='cursor-pointer hover:bg-gray-300'>
							<div
								onClick={() => setSelectedMenu(1)}
								// className={`${
								// 	selectedMenu === 1 && "text-atoll-500"
								// } mx-auto py-4 w-3/4 text-lg border-b`}
                                className={`mx-auto py-2 w-3/4 text-lg border-b`}
							>
								<Chatlist />
							</div>
						</div>
					))}
			</div>
		</div>
	);
}
