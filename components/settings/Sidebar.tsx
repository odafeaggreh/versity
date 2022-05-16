export default function Sidebar() {
	return (
		<div className='w-1/4 border rounded-md shadow-md overflow-hidden h-full'>
			<div className='flex flex-col'>
				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Personal Information
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Business Information
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Change Password
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Notification Settings
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Social Networks
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Language
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Blocked Users
					</div>
				</div>

				<div className='hover:text-atoll cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						About App
					</div>
				</div>

				<div className='text-red-400 hover:text-red-500 cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg border-b'>
						Log Out
					</div>
				</div>

				<div className='text-white bg-red-400 hover:bg-red-500 cursor-pointer'>
					<div className='mx-auto py-4 w-3/4 text-lg'>
						Delete Account
					</div>
				</div>
			</div>
		</div>
	);
}
