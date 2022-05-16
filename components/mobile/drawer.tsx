import Home from "../../assets/svg/home.svg";
import Like from "../../assets/svg/like.svg";
import Camera from "../../assets/svg/camera.svg";
import Messages from "../../assets/svg/email.svg";
import Bell from "../../assets/svg/bell.svg";
import Profile from "../../assets/svg/user.svg";
import Settings from "../../assets/svg/gear.svg";
import Logout from "../../assets/svg/logout.svg";

import { useRouter } from 'next/router';

interface Props {
	isOpen: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MobileDrawer({ isOpen, setOpen }: Props) {
	const router = useRouter();
    
	return (
        <>
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

				<div className={`flex flex-row my-4 h-12 w-3/4 rounded-r-lg hover:bg-white fill-current ${router.pathname === '/' ? 'text-atoll bg-white' : 'text-white'}`}>
					<div className='my-auto mx-10'><Home className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Home</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Like className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Saved Ads</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Camera className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Post New Ad</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Messages className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Messages</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Bell className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Notifications</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Profile className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Profile</div>
				</div>

                <div className='flex flex-row my-4 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Settings className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Settings</div>
				</div>

                <div className='px-10'>
					<hr />
				</div>

                <div className='flex flex-row my-6 h-12 w-3/4 hover:text-atoll hover:bg-white rounded-r-lg fill-current'>
					<div className='my-auto mx-10'><Logout className="h-6 w-6" /></div>
					<div className='my-auto mx-2'>Logout</div>
				</div>
			</div>
		</aside>

        {isOpen && <div onClick={() => setOpen(false)} className="w-screen h-screen bg-black opacity-40 absolute -mt-6 z-30"></div>}
        </>
	);
}