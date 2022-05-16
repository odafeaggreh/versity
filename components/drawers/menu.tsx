interface Props {
	isOpen: boolean;
	setAreOpen?: Function;
}

export function MenuDrawer({ isOpen, setAreOpen }: Props) {
	// if (isOpen) {
	//     setAreOpen(true)
	// }
	return (
		<aside
			className={`transform top-0 left-0 w-80 bg-atoll text-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
		>
			<div className='flex flex-col mt-6'>
				<div className='mb-6 px-10 mx-auto'>
					<div>Monica Lewinsky</div>
					<div className='text-xs'>@monicalewinsky</div>
				</div>

				<div className='px-10'>
					<hr />
				</div>

				<div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Home</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Saved Ads</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Post New Ad</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Messages</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Notifications</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Profile</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Settings</div>
				</div>

                <div className='px-10'>
					<hr />
				</div>

                <div className='flex flex-row my-6 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg'>
					<div className='my-auto mx-10'>svg</div>
					<div className='my-auto mx-2'>Logout</div>
				</div>
			</div>
		</aside>
	);
}

export function CategoryDrawer({ isOpen, setAreOpen }: Props) {
	return (
		<aside
			className={`transform top-0 right-0 w-80 bg-atoll fixed h-full overflow-auto ease-in-out transition-all duration-300 z-50
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
		></aside>
	);
}
